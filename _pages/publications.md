---
layout: page
permalink: /publications/
title: Publications
description: 

years: [2024, 2023]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->

#### Preprints

- Human vs. LMMs: Exploring the Discrepancy in Emoji Interpretation and Usage in Digital Communication. Hanjia Lyu, Weihong Qi, Zhongyu Wei, Jiebo Luo. [[arxiv](https://arxiv.org/pdf/2401.08212)]

- State Mobilization and Political Attitudes: The Legacy of Maoist Rural Resettlement in Contemporary China. Alexander Lee, Weihong Qi, Dehua Sun. [[Paper](https://www.rochester.edu/college/faculty/alexander_lee/wp-content/uploads/2021/11/draft_0520-public.pdf)]


<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
