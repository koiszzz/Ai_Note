# Patients-like-me: A Variational LM--GNN Framework for Explainable Clinical Prediction

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xinyu Wang, Yixuan Li, Hanwei Wu, Qincheng Lu, Chi-Kuang Yeh, Xiao-Wen Chang, Ziyang Song　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04193)

------

arXiv:2608.04193v1 Announce Type: cross

Abstract: Language models (LMs) offer strong textual representations for electronic health records (EHRs), but they encode patient sequences in isolation and provide limited explainability. Graph neural networks (GNNs) complement LMs by incorporating inter-patient relationships and enabling reference-patient attribution, yet they rely on high-quality patient representations. We propose Patients-like-me (PLM), a unified LM--GNN framework that integrates local patient semantics with global cohort structure. To train PLM efficiently, we introduce a Variational Expectation-Maximization algorithm that alternates LM and GNN updates under a supervised variational objective. Extensive experiments on MIMIC-III and MIMIC-IV show that PLM consistently outperforms state-of-the-art methods, with improvements generalizing across encoder-only and decoder-only LM backbones. These gains are achieved with only modest additional computational overhead. PLM also provides reference-patient explanations by retrieving influential similar patients, while edge-masking experiments confirm that the highest-ranked references have the greatest impact on model predictions.
