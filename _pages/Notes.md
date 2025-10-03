---
layout: archive
title: "Notes"
permalink: /Notes/
author_profile: true
---

{% include base_path %}

## My Path

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
    }
</style>

<div class="timeline-container">
    <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="content">
            <h3>Hello, PKU</h3>
            <span class="time">2024 Fall</span>
            <p>Attended Peking university</p>
        </div>
    </div>
</div>

## 111

{% assign paths = "nameofthemd.md" | split: "," %}

{% for post in site.Notes reversed %}
  {% for path in paths %}
    {% if post.path contains path %}
      {% include archive-single.html %}
      {% break %}
    {% endif %}
  {% endfor %}
{% endfor %}