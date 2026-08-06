# Epistemic-aware Vision-Language Foundation Model for Fetal Ultrasound Interpretation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiao He, Huangxuan Zhao, Guojia Wan, Jiancheng Pan, Yanxing Liu, Yong Luo, Juhua Liu, Yongchao Xu, Wei Zhou, Dacheng Tao, Bo Du　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2510.12953)

------

arXiv:2510.12953v5 Announce Type: replace-cross

Abstract: Recent medical vision-language models have shown promise on tasks such as VQA, report generation, and anomaly detection. However, most are adapted to structured adult imaging and underperform in fetal ultrasound, which poses challenges of multi-view image reasoning, numerous diseases, and image diversity. To bridge this gap, we introduce FetalMind, a medical AI system tailored to fetal ultrasound for both report generation and diagnosis. Guided by clinical workflow, we propose Salient Epistemic Disentanglement (SED), which injects an expert-curated bipartite graph into the model to decouple view-disease associations and to steer preference selection along clinically faithful steps via reinforcement learning. This design mitigates variability across diseases and heterogeneity across views, reducing learning bottlenecks while aligning the model's inference with obstetric practice. To train FetalMind at scale, we curate FetalSigma-1M dataset, the first large-scale fetal ultrasound report corpus, comprising 20K reports from twelve medical centers, addressing the scarcity of domain data. Extensive experiments show that FetalMind outperforms open- and closed-source baselines across all gestational stages, achieving +14% average gains and +61.2% higher accuracy on critical conditions while remaining efficient, stable, and scalable. Project Page: https://hexiao0275.github.io/FetalMind.
