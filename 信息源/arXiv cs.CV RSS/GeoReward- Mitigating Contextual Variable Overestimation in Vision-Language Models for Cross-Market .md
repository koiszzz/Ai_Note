# GeoReward: Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market Preference Prediction

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Shuo Liu, Huixiang Cai, Weiru Zhang, Xiaoyi Zeng　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04504)

------

arXiv:2608.04504v1 Announce Type: new

Abstract: Vision-language models excel in many multimodal tasks but remain prone to a subtle yet impactful failure mode: they tend to overestimate dominant visual-textual cues while underestimating sparse but decision-critical contextual variables. This issue, which we term Contextual Variable Overestimation (CVE), becomes particularly evident in real-world applications such as predicting advertisement image preferences across diverse geographic markets. For instance, when a VLM is asked to choose between two product images tailored for different countries, it often defaults to a consistent output, ignoring ground-truth regional variations. This collapse occurs because pervasive high-volume signals, such as product attributes and dense image patches, overwhelm the few but critical tokens that encode market-specific context. To address CVE, we first collect a new multimodal dataset of real advertising creatives and their click-through performance across multiple countries. We then introduce GeoReward, a reward model designed to predict ad image preferences across diverse geographic markets. GeoReward integrates three purpose-built mechanisms: (1) Market-Aware Retrieval Augmentation, (2) Context-Guided Visual Modulation, (3) Selective Sensitivity Loss. Furthermore, we demonstrate how GeoReward can guide the fine-tuning of RL for a VLM to generate background designs for text-to-image models, producing market-aware advertising creatives. Experiments validate that our framework mitigates CVE and outperforms existing baselines. This work not only diagnoses a systematic bias in VLMs toward dominant perceptual features but also delivers a targeted solution for applications where sparse contextual variables govern decision-making.
