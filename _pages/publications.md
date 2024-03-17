---
layout: page
permalink: /publications/
title: Publications
description: 

years: [2023]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->

#### Pre-prints and Working Papers

- Human vs. LMMs: Exploring the Discrepancy in Emoji Interpretation and Usage in Digital Communication. Hanjia Lyu, Weihong Qi, Zhongyu Wei, Jiebo Luo. [[arxiv](https://arxiv.org/pdf/2401.08212)]

- Excitements and Concerns in the Post-ChatGpt Era: Deciphering Public Perception of AI through Social Media Analysis. Weihong Qi, Jinsheng Pan, Hanjia Lyu, Jiebo Luo. [[arxiv](https://arxiv.org/pdf/2307.05809.pdf?trk=public_post_comment-text)]

- Beyond Sentiment: Leveraging Topic Metrics for Political Stance Classification. Weihong Qi. [[arxiv](https://arxiv.org/pdf/2310.15429)]

- State Mobilization and Political Attitudes: The Legacy of Maoist Rural Resettlement in Contemporary China. Alexander Lee, Weihong Qi, Dehua Sun. (Revise & Resubmit in Political Science Research and Methods) [[Paper](https://www.rochester.edu/college/faculty/alexander_lee/wp-content/uploads/2021/11/draft_0520-public.pdf)]


<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
