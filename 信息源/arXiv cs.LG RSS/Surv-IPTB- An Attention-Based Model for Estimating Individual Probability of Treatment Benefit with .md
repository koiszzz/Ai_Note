# Surv-IPTB: An Attention-Based Model for Estimating Individual Probability of Treatment Benefit with Survival Data

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Lev V. Utkin, Stanislav K. Kogan, Andrei V. Konstantinov　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06288)

------

arXiv:2608.06288v1 Announce Type: new

Abstract: This work presents a novel attention-based framework for estimating the Individual Probability of Treatment Benefit (IPTB) in survival analysis contexts. The proposed model, called Surv-IPTB, directly quantifies the probability that a specific patient will experience extended survival time under treatment versus control. We reformulate IPTB estimation as a binary classification problem, leveraging pairwise patient comparisons across treatment and control cohorts. The framework incorporates a principled handling of right-censored observations through imprecise probability representations, where uncertain treatment effects are characterized by interval-valued probabilities. An attention mechanism with learnable query-key transformations enables flexible, data-driven aggregation of pairwise comparisons, while simultaneously learning soft class probabilities for censored cases. Through extensive experiments on synthetic datasets with complex nonlinear structures, including spiral, bell-shaped, and circular feature spaces, we demonstrate that our approach maintains robust performance across varying censoring rates and treatment effect strengths. The model consistently outperforms meta-learner baselines (T-learner and S-learner) equipped with random survival forests, Cox proportional hazards, and Beran estimators, particularly in challenging nonlinear scenarios where conventional methods exhibit significant degradation. The results establish the proposed attention-based framework as a scalable and statistically principled solution for personalized treatment benefit assessment in survival settings. The code implementing the model is publicly available.
