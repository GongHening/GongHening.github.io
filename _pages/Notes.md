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

    /* 时间线图片样式 */
    .timeline-image {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
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
    
    /* 确保内容区域有足够的右侧空间 */
    .content {
        position: relative;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding-right: 160px; /* 为图片留出空间 */
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
            padding-right: 20px; /* 恢复正常的右侧内边距 */
        }
        
        .timeline-image {
            position: static;
            transform: none;
            width: 100%;
            height: auto;
            margin-top: 15px;
            text-align: center;
        }
        
        .timeline-image img {
            width: 80%;
            max-width: 200px;
            height: auto;
            object-fit: contain;
        }
    }
</style>

<div class="timeline-container">
    <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="content">
            <h3>YWHS, so lucky to be with you for four years</h3>
            <span class="time">2020 Fall</span>
            <p>Attended Yiwu High School</p>
            <div class="timeline-image">
                <img src="/images/YWHS.png" alt="YWHS Campus" style="width: 100%; max-width: 300px; height: auto; border-radius: 8px; margin-top: 10px;">
            </div>
        </div>
    </div>
    <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="content">
            <h3>PKU, nice to meet you</h3>
            <span class="time">2024 Fall</span>
            <p>Attended Peking university</p>
            <div class="timeline-image">
                <img src="/images/PKU.png" alt="PKU Campus" style="width: 100%; max-width: 300px; height: auto; border-radius: 8px; margin-top: 10px;">
            </div>
        </div>
    </div>
</div>

---

## My Year-End-Summaries

{% for post in site.Notes reversed %}
  {% if post.path contains "year-end-summary" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}