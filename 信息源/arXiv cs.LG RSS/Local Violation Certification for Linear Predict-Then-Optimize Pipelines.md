# Local Violation Certification for Linear Predict-Then-Optimize Pipelines

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：\c{S}. \.Ilker Birbil, Wenhao Chi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04474)

------

arXiv:2608.04474v1 Announce Type: new

Abstract: Data-driven decision pipelines combining predictive machine learning models with downstream optimization software are increasingly used to make high-stakes operational decisions. Certifying the safety, fairness, and reliability of these decisions is essential, yet traditional scenario generation methods rely on repeated random testing, which becomes computationally prohibitive when failure events are rare and offers little insight into why failures occur. We present a framework for local violation certification designed specifically for linear decision pipelines under input uncertainty. We mathematically demonstrate that standard sampling methods fail efficiently for rare violations, motivating a direct structural approach. By analyzing the fixed decision boundary of a deployed pipeline, we show that the local risk of failure can be calculated directly in closed form using a single optimization solve. Furthermore, we introduce an exact sampling procedure and closed-form risk statistics that provide feature-level attributions (identifying which input characteristics contribute most to potential non-compliance) without requiring repetitive random trials or complex sampling algorithms. We demonstrate our approach on an economic power dispatch system subject to emissions regulations, delivering precise, auditable risk assessments at a fraction of the traditional computational cost.
