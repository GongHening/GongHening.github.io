---
permalink: /
title: ""
excerpt: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

# About

I love computer systems.

---

# Education

{% include education-card.html school="[Elite Class](https://news.pku.edu.cn/xwzh/129-292138.htm), [School of EECS](https://eecs.pku.edu.cn/), [Peking University](https://www.pku.edu.cn/)" major="Information and Computational Science" time="2024.09 - Present" logo="/images/PKU.png" %}

---

# Awards

{% include award-card.html title="Second Prize, Peking University Collegiate Programming Contest (PKU-CPC)" issuer="Peking University" time="2026.05" %}

{% include award-card.html title="Tailong Star Scholarship" issuer="Peking University" time="2025.12" %}

{% include award-card.html title="Merit Student of Peking University" issuer="Peking University" time="2025.12" %}

---

{% include base_path %}

# Blogs

*Here lie the words I choose to set free.*

## Annual Reviews

From 2020, at the end of each year, I always write an annual review. They encourage me to do better and make progress.

{% for post in site.Blogs reversed %}
  {% if post.path contains "20" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}