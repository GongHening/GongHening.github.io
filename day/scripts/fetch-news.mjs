#!/usr/bin/env node

/**
 * Daily AI/Tech News Fetcher
 *
 * Fetches RSS feeds from multiple sources, parses XML,
 * selects the top 5 AI/tech articles, and writes to news.json.
 *
 * Designed to run in GitHub Actions daily.
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const NEWS_FILE = join(DATA_DIR, 'news.json');
const HISTORY_FILE = join(DATA_DIR, 'news-history.json');

// RSS Feed Sources
const RSS_FEEDS = [
  {
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    name: 'TechCrunch',
    category: 'industry'
  },
  {
    url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
    name: 'The Verge',
    category: 'industry'
  },
  {
    url: 'https://hnrss.org/best?q=AI+OR+LLM+OR+GPT+OR+machine+learning+OR+deep+learning&count=20',
    name: 'Hacker News',
    category: 'general'
  },
  {
    url: 'https://www.technologyreview.com/feed/',
    name: 'MIT Tech Review',
    category: 'research'
  },
  {
    url: 'https://blog.google/technology/ai/rss/',
    name: 'Google AI Blog',
    category: 'industry'
  },
  {
    url: 'https://openai.com/blog/rss.xml',
    name: 'OpenAI Blog',
    category: 'llm'
  }
];

// AI/Tech keywords for relevance filtering
const AI_KEYWORDS = [
  'ai', 'artificial intelligence', 'machine learning', 'deep learning',
  'neural network', 'llm', 'large language model', 'gpt', 'chatgpt',
  'openai', 'google ai', 'deepmind', 'anthropic', 'claude',
  'computer vision', 'nlp', 'natural language', 'robotics',
  'autonomous', 'self-driving', 'transformer', 'diffusion',
  'generative', 'foundation model', 'multimodal', 'agi',
  'reinforcement learning', 'speech', 'voice', 'language model',
  'gemini', 'llama', 'mistral', 'stable diffusion', 'midjourney'
];

// Category detection keywords
const CATEGORY_KEYWORDS = {
  llm: ['llm', 'large language model', 'gpt', 'chatgpt', 'claude', 'gemini', 'llama', 'mistral', 'language model'],
  cv: ['computer vision', 'image', 'video', 'visual', 'object detection', 'segmentation'],
  nlp: ['nlp', 'natural language', 'text', 'translation', 'sentiment'],
  robotics: ['robot', 'robotics', 'autonomous', 'self-driving', 'humanoid'],
  multimodal: ['multimodal', 'vision-language', 'text-to-image', 'image-to-text'],
  research: ['research', 'paper', 'arxiv', 'study', 'breakthrough', 'discovery'],
  policy: ['regulation', 'policy', 'law', 'ethics', 'safety', 'bias', 'eu ai act'],
  safety: ['safety', 'alignment', 'bias', 'fairness', 'responsible ai'],
  infra: ['gpu', 'tpu', 'training', 'inference', 'mlops', 'deployment', 'cloud']
};

/**
 * Fetch with timeout
 */
async function fetchWithTimeout(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Day-AI-News-Bot/1.0 (https://gonghening.github.io/day/)'
      }
    });
    clearTimeout(timeout);
    return response;
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}

/**
 * Parse XML to extract RSS items
 */
function parseRSSItems(xml, sourceName, defaultCategory) {
  const items = [];

  // Match <item> or <entry> blocks
  const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    // Extract fields with CDATA support
    const title = extractField(block, 'title');
    const link = extractLink(block);
    const description = extractField(block, 'description') || extractField(block, 'summary') || extractField(block, 'content');
    const pubDate = extractField(block, 'pubDate') || extractField(block, 'published') || extractField(block, 'updated');

    if (title && link) {
      items.push({
        title: cleanHTML(title).trim(),
        link: link.trim(),
        description: cleanHTML(description || '').trim(),
        pubDate: pubDate ? new Date(pubDate) : new Date(),
        source: sourceName,
        defaultCategory
      });
    }
  }

  return items;
}

/**
 * Extract field value from XML block (handles CDATA)
 */
function extractField(block, fieldName) {
  // Try CDATA first
  const cdataRegex = new RegExp(`<${fieldName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${fieldName}>`, 'i');
  const cdataMatch = block.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1];

  // Try regular content
  const regex = new RegExp(`<${fieldName}[^>]*>([\\s\\S]*?)<\\/${fieldName}>`, 'i');
  const match = block.match(regex);
  return match ? match[1] : '';
}

/**
 * Extract link from item (handles different RSS formats)
 */
function extractLink(block) {
  // Try <link> tag
  const linkMatch = block.match(/<link[^>]*>([^<]+)<\/link>/i);
  if (linkMatch) return linkMatch[1];

  // Try <link href="..."/>
  const hrefMatch = block.match(/<link[^>]*href="([^"]+)"/i);
  if (hrefMatch) return hrefMatch[1];

  // Try <guid>
  const guidMatch = block.match(/<guid[^>]*>([^<]+)<\/guid>/i);
  if (guidMatch) return guidMatch[1];

  return '';
}

/**
 * Remove HTML tags and decode entities
 */
function cleanHTML(str) {
  return str
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Check if article is relevant to AI/tech
 */
function isAIRelated(item) {
  const text = `${item.title} ${item.description}`.toLowerCase();
  return AI_KEYWORDS.some(keyword => text.includes(keyword));
}

/**
 * Detect category from content
 */
function detectCategory(item) {
  const text = `${item.title} ${item.description}`.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return item.defaultCategory || 'general';
}

/**
 * Truncate summary to reasonable length
 */
function truncateSummary(text, maxLength = 150) {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  // Try to break at sentence boundary
  const truncated = text.slice(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('。');
  const lastDot = truncated.lastIndexOf('.');

  const breakPoint = Math.max(lastPeriod, lastDot);
  if (breakPoint > maxLength * 0.6) {
    return truncated.slice(0, breakPoint + 1);
  }

  return truncated.slice(0, maxLength - 3) + '...';
}

/**
 * Estimate reading time in minutes
 */
function estimateReadTime(text) {
  if (!text) return 3;
  const wordsPerMinute = 200; // English
  const charsPerMinute = 400; // Chinese
  const hasChinese = /[一-鿿]/.test(text);
  const length = text.length;
  const minutes = hasChinese ? length / charsPerMinute : length / wordsPerMinute;
  return Math.max(1, Math.round(minutes));
}

/**
 * Generate unique ID for news item
 */
function generateId(date, index) {
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
  return `${dateStr}-${String(index + 1).padStart(3, '0')}`;
}

/**
 * Fetch all RSS feeds in parallel
 */
async function fetchAllFeeds() {
  const results = await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        console.log(`  Fetching: ${feed.name}...`);
        const response = await fetchWithTimeout(feed.url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const xml = await response.text();
        const items = parseRSSItems(xml, feed.name, feed.category);
        console.log(`  ✓ ${feed.name}: ${items.length} items`);
        return items;
      } catch (error) {
        console.warn(`  ✗ ${feed.name}: ${error.message}`);
        return [];
      }
    })
  );

  return results
    .filter(r => r.status === 'fulfilled')
    .flatMap(r => r.value);
}

/**
 * Main function
 */
async function main() {
  console.log('📰 Daily AI News Fetcher');
  console.log('========================\n');

  // Fetch all feeds
  console.log('Fetching RSS feeds...');
  const allItems = await fetchAllFeeds();
  console.log(`\nTotal items fetched: ${allItems.length}\n`);

  // Filter for AI relevance
  const aiItems = allItems.filter(isAIRelated);
  console.log(`AI-relevant items: ${aiItems.length}\n`);

  // Deduplicate by URL
  const seen = new Set();
  const uniqueItems = aiItems.filter(item => {
    if (seen.has(item.link)) return false;
    seen.add(item.link);
    return true;
  });

  // Sort by date (newest first)
  uniqueItems.sort((a, b) => b.pubDate - a.pubDate);

  // Take top 5
  const top5 = uniqueItems.slice(0, 5);

  if (top5.length === 0) {
    console.warn('⚠️  No AI news items found! Using fallback...');
    // Write a fallback file
    const fallback = {
      date: new Date().toISOString().slice(0, 10),
      updated_at: new Date().toISOString(),
      items: []
    };
    writeFileSync(NEWS_FILE, JSON.stringify(fallback, null, 2));
    return;
  }

  // Build output
  const now = new Date();
  const output = {
    date: now.toISOString().slice(0, 10),
    updated_at: now.toISOString(),
    items: top5.map((item, index) => ({
      id: generateId(now, index),
      title: item.title,
      summary: truncateSummary(item.description),
      source: item.source,
      url: item.link,
      published: item.pubDate.toISOString(),
      category: detectCategory(item),
      read_time: estimateReadTime(item.description)
    }))
  };

  // Write news.json
  writeFileSync(NEWS_FILE, JSON.stringify(output, null, 2));
  console.log(`✅ Wrote ${output.items.length} items to news.json`);

  // Update history file (keep last 7 days)
  updateHistory(output);
}

/**
 * Update news history file
 */
function updateHistory(todayData) {
  let history = { days: [] };

  if (existsSync(HISTORY_FILE)) {
    try {
      history = JSON.parse(readFileSync(HISTORY_FILE, 'utf8'));
    } catch {
      // Start fresh if file is corrupted
    }
  }

  // Add today's data
  history.days.unshift({
    date: todayData.date,
    items: todayData.items
  });

  // Keep only last 7 days
  history.days = history.days.slice(0, 7);

  writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
  console.log(`✅ Updated news-history.json (${history.days.length} days)`);
}

// Run
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
