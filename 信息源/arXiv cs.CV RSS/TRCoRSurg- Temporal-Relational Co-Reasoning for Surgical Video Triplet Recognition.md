# TRCoRSurg: Temporal-Relational Co-Reasoning for Surgical Video Triplet Recognition

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Fang Li, Shihao Zou, Weixin Si, Yang Gao, Shuai Li, Aimin Hao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04606)

------

arXiv:2608.04606v1 Announce Type: new

Abstract: Understanding complex surgical scenes requires recognizing multiple interdependent entities, such as instruments, actions, and targets, while maintaining their relational consistency across time. Existing surgical triplet recognition methods struggle to jointly model intra-frame label dependencies and inter-frame temporal semantics in a unified manner. To address these limitations, we propose a unified framework that integrates spatial, relational, and temporal cues for robust surgical triplet recognition. Specifically, class-specific spatial priors are first extracted through a multi-scale encoder. These priors are then refined by a Label Correlation Modeling module with multi-scale class activation map-guided relational extraction (MS-CAMRE), enabling the model to capture both static co-occurrence patterns and dynamic contextual dependencies among triplet components. Furthermore, a Bidirectional Temporal-Relational Fusion Attention (BTRFA) module harmonizes temporal and relational representations to achieve coherent temporal reasoning. We also introduce a new evaluation metric, the Triplet Consistency Error Rate (TCER), which quantitatively measures the model's ability to preserve causal and semantic consistency across triplets. Extensive experiments on the CholecT45 and ProstaTD datasets show that our method achieves state-of-the-art performance, improving AP_IVT by 5.1 percent and 7.8 percent, respectively. Moreover, according to TCER, our approach achieves relative reductions of more than 36 percent and 25 percent on the two datasets, respectively, demonstrating the effectiveness of our framework in temporal-relational co-reasoning.
