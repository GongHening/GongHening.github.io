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

{% include base_path %}

# Blogs

*Here lie the words I choose to set free.*

From 2020, at the end of each year, I always write an annual review. They encourage me to do better and make progress.

{% for post in site.Blogs reversed %}
  {% if post.path contains "20" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
