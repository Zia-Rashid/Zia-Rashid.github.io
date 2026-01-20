---
layout: archive
permalink: /blog/
title: "Blog Posts"
author_profile: true
redirect_from:
  - /year-archive/
  - /posts/
---

{% include base_path %}

Welcome to my blog! Here you'll find posts about my research, projects, and experiences in cybersecurity.

---

{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %} 
<!-- did that get updated or not? -->