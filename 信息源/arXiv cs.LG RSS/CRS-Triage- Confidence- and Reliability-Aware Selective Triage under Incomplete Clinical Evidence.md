# CRS-Triage: Confidence- and Reliability-Aware Selective Triage under Incomplete Clinical Evidence

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Guan Qiang, Yushen Chen, Tianlong Liu, David Rotenberg, Ethan H. Kim, Fang Fang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03862)

------

arXiv:2608.03862v1 Announce Type: new

Abstract: Emergency triage requires reliable decisions within a short time period. However, the available electronic health record (EHR) data, including structured data and clinical text, are often incomplete, unreliable, and inconsistent. This makes machine learning (ML)-based triage prediction more challenging, as existing ML models typically rely on complete and reliable EHR data to accurately predict patients' acuity levels. To address this, we propose confidence- and reliability-aware selective triage (CRS-Triage) to predict patients' acuity levels with a confidence score. By comparing the confidence score with a predefined threshold, CRS-Triage can selectively determine whether the model should make the decision or defer the case. Specifically, CRS-Triage separately evaluates the reliability of structured data and clinical text and then jointly considers the consistency between the two modalities to estimate the confidence of each prediction. Moreover, to reduce the risk of missing high-acuity patients, namely under-triage, CRS-Triage prefers to assign patients slightly higher acuity levels, namely over-triage, by penalizing under-triage errors. Experiments on the MIMIC-IV-ED dataset show that CRS-Triage achieves strong predictive performance. It also provides a better risk-coverage trade-off and remains reliable when the available EHR data are incomplete, degraded, or inconsistent across modalities.
