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

{% include education-card.html school="Elite Class, School of EECS, Peking University" major="Information and Computational Science" time="2024.09 - Present" logo="/images/PKU.png" %}

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

---

# Awards

- **Second Prize, Peking University Collegiate Programming Contest (PKU-CPC)** — *2026.05*
- **Tailong Star Scholarship** — *2025.12*
- **Merit Student of Peking University** — *2025.12*

---