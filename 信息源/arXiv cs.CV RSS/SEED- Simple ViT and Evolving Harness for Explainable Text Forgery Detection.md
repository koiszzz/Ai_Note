# SEED: Simple ViT and Evolving Harness for Explainable Text Forgery Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Kahim Wong, Kemou Li, Yiming Chen, Haiwei Wu, Jiantao Zhou　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.21138)

------

arXiv:2606.21138v2 Announce Type: replace

Abstract: AI-assisted image editing threatens trust in financial, legal, and identity records. The GenText-Forensics Challenge at ACM MM 2026 addresses this by requiring structured forensic reports, in which integrating detection, pixel-level localization, and natural language explanation for multilingual text-centric forgery images. We present SEED, a modular system with three components. First, a similarity-guided pipeline augments training with diverse synthetic forgeries. Second, a single ViT, built on DINOv3 with LoRA adaptation, jointly performs detection and pixel-level localization while preserving pre-trained priors with minimal trainable parameters. Third, an evolving harness takes the detector's predictions and generates a complete forensic report via an MLLM, iteratively improved through a proposer-evaluator loop optimizing report quality. SEED ranked 3rd in the GenText-Forensics Challenge. Code and data are available at https://github.com/KahimWong/GenText-Forensics-3rd-Place.
