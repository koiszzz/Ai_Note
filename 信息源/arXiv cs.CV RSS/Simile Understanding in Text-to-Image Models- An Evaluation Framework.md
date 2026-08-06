# Simile Understanding in Text-to-Image Models: An Evaluation Framework

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Luecheng Wang, Shintaro Ozaki, Hidetaka Kamigaito, Katsuhiko Hayashi, Jingun Kwon, Manabu Okumura, Taro Watanabe　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04750)

------

arXiv:2608.04750v1 Announce Type: new

Abstract: Similes provide a compact and expressive way to describe visual characteristics in text prompts. Recent text-to-image models (t2i models) can produce visually compelling outputs from simile prompts, yet even frontier models frequently misinterpret the metaphorical vehicle and confuse it with the object. These systematic failures reveal a gap between figurative language and object-level visual grounding in t2i models. To investigate this issue, we propose a scalable evaluation framework for simile understanding. Our framework includes (1) a controlled simile dataset in which metaphorical vehicles are drawn from a predefined set of object-detectable categories and combined with diverse templates, (2) automatic grounding metrics based on YOLO (You Only Look Once) detection, and (3) text encoder layer analysis using Diffusion Lens to track how metaphorical vehicles emerge during generation. Experiments across architecturally diverse t2i models reveal consistent literalization failure patterns. We further discuss potential mitigation strategies for improving simile grounding in t2i models.
