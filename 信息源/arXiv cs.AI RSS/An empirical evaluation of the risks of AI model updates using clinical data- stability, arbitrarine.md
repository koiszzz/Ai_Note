# An empirical evaluation of the risks of AI model updates using clinical data: stability, arbitrariness, and fairness

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ioannis Bilionis, Ricardo C. Berrios, Luis Fernandez-Luque, Carlos Castillo　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2604.23954)

------

arXiv:2604.23954v2 Announce Type: replace

Abstract: Artificial Intelligence (AI) and Machine Learning (ML) models used in clinical settings are increasingly deployed to support clinical decision-making. However, when training data become stale due to changes in demographics, environment, or patient behaviors, model performance can degrade substantially. While updating models with new training data is necessary, such updates may also introduce new risks. We evaluated the proposed monitoring framework on four publicly available U.S.-based Type 1 Diabetes datasets containing high-resolution continuous glucose monitoring (CGM) data, comprising approximately 11,300 weekly observations from 496 participants younger than 20 years. All datasets included structured sociodemographic information. Using the prediction of severe hyperglycemia events in children with Type 1 Diabetes as a case study, we examine how different model update strategies can adversely affect model stability by causing predictions to change for a large number of cases after retraining, increase prediction arbitrariness, and worsen subgroup fairness and the balance of error rates across populations. We propose multiple dimensions for continuous monitoring to detect these issues and argue that such monitoring is essential for the development of trustworthy clinical decision support systems.
