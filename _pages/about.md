---
permalink: /
title: ""
excerpt: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

# About Me

I'm a second-year undergraduate student from [School of EECS](https://eecs.pku.edu.cn/), [Peking University](https://www.pku.edu.cn/).

---

## Explore

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1em; margin-top: 1.5em;">
  <a href="/day/" style="display: block; padding: 1.25em 1.5em; background: #fff; border-radius: 14px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 1px 3px rgba(0,0,0,0.04); text-decoration: none; transition: all 0.3s ease;">
    <div style="font-size: 1.5em; margin-bottom: 0.5em;">📰</div>
    <div style="font-weight: 600; color: #1a1a2e; margin-bottom: 0.25em;">Day</div>
    <div style="font-size: 0.85em; color: #6b7280;">Daily AI news digest</div>
  </a>
</div>

---

{% include base_path %}

# Blogs

*Here lie the words I choose to set free.*

From 2020, at the end of each year, I always write an annual review. They encourage me to do better and make progress.

{% for post in site.Blogs reversed %}
  {% if post.path contains "20" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
