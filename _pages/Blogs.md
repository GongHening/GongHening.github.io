---
layout: archive
title: "Blogs"
permalink: /Blogs/
author_profile: true
---
*Here lie the words I choose to set free.*

{% include base_path %}

## My Annual Reviews

From 2020, at the end of each year, I always write an annual review. They encourage me to do better and make progress.

{% for post in site.Blogs reversed %}
  {% if post.path contains "20" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
