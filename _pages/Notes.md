---
layout: archive
title: "Notes"
permalink: /Notes/
author_profile: true
---

{% include base_path %}

## My Growth Path

<style>
    /* 时间线容器 */
    .timeline-container {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
    }

    /* 时间线竖线 */
    .timeline-container::after {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #3498db;
        top: 0;
        bottom: 0;
        left: 20px;
    }

    /* 单个时间线项目 */
    .timeline-item {
        position: relative;
        margin-bottom: 40px;
        padding-left: 60px;
    }

    /* 时间节点圆点 */
    .timeline-node {
        position: absolute;
        left: 10px;
        top: 5px;
        width: 20px;
        height: 20px;
        background: #fff;
        border: 3px solid #3498db;
        border-radius: 50%;
        z-index: 1;
    }

    /* 内容区域 */
    .content {
        position: relative;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* 时间标题 */
    .content h3 {
        color: #3498db;
        margin-bottom: 8px;
    }

    /* 时间日期 */
    .time {
        display: block;
        color: #666;
        font-size: 0.9em;
        margin-bottom: 10px;
    }

    /* 时间线内容布局 */
    .content {
        position: relative;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    /* 文字内容区域 */
    .content-text {
        flex: 1;
    }
    
    /* 时间线图片样式 */
    .timeline-image {
        flex-shrink: 0;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .timeline-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .timeline-image img:hover {
        transform: scale(1.05);
    }

    /* 响应式设计 */
    @media (max-width: 600px) {
        .timeline-container::after {
            left: 10px;
        }
        
        .timeline-item {
            padding-left: 40px;
        }
        
        .timeline-node {
            left: 0;
        }
        
        .content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        
        .content-text {
            order: 2;
            margin-top: 15px;
        }
        
        .timeline-image {
            order: 1;
            width: 80%;
            max-width: 200px;
            height: auto;
            margin-bottom: 10px;
        }
        
        .timeline-image img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
</style>

<div class="timeline-container">
    <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="content">
            <div class="content-text">
                <h3>YWHS, so lucky to be with you for four years</h3>
                <span class="time">2020 Fall</span>
                <p>Attended Yiwu High School</p>
            </div>
            <div class="timeline-image">
                <img src="/images/YWHS.png" alt="YWHS Campus">
            </div>
        </div>
    </div>
    <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="content">
            <div class="content-text">
                <h3>PKU, nice to meet you</h3>
                <span class="time">2024 Fall</span>
                <p>Attended Peking university</p>
            </div>
            <div class="timeline-image">
                <img src="/images/PKU.png" alt="PKU Campus">
            </div>
        </div>
    </div>
</div>

---

## My Year-End-Summaries

{% for post in site.Notes reversed %}
  {% if post.path contains "year-end-summary" %}
    <div class="archive__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="{{ base_path }}{{ post.url }}" rel="permalink">{{ post.title }}</a>
        </h2>
        {% if post.date %}
         <p class="page__date"><strong><i class="fa fa-fw fa-calendar" aria-hidden="true"></i> Published:</strong> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></p>
        {% endif %}
      </article>
    </div>
  {% endif %}
{% endfor %}