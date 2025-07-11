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

{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %} 