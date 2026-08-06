# Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Yuxuan Huang, Xingyu Zeng, Tianhang Zheng, Chaochao Lu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.05045)

------

arXiv:2608.05045v1 Announce Type: cross

Abstract: Released aligned large language models remain vulnerable to malicious downstream finetuning. Existing defenses are largely designed for the fine-tuning-as-a-service (FTaaS) paradigm or rely on downstream users to follow additional safety procedures, and therefore do not directly address the setting we study: a provider controlled partially protected open-weight (PPOW) release setting in which most weights remain trainable while a small safety-critical component is preserved at release. We propose a Unidirectional Safety Gate (USG), instantiated as a Null Space Cubic Layer together with an Inverse Adapter inserted after the final Transformer layer. During downstream fine-tuning, the cubic layer suppresses or blocks gradients from harmful samples whose hidden states fall in a calibrated protected region, while the Inverse Adapter restores the base model's forward behavior. In practice, we calibrate a threshold using defender-held harmful data, allowing protection to generalize to nearby in-distribution harmful samples. Across six evaluated model-dataset settings, USG keeps post-finetuning attack success rate close to the pre-release level under a fixed release threshold, while maintaining high safe-pass rates on easier settings and exhibiting a clearer safety-utility trade-off on unsafe samples from BeaverTails. These results suggest that release-time representation-space blocking can raise the cost of malicious downstream adaptation without requiring downstream cooperation. The code is available at https://github.com/OpenCausaLab/Gradient-Immunity.
