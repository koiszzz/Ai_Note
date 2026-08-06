# SMOPD: Multi-Reward Reinforcement Learning via Specialize-and-Merge Online Policy Distillation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Wen Wang, Jiahua Bao, Tu Yongsiqi, Yihao Liu, Haotian Zhou, Haoxuan Ma, Mengyu Zhou, Wenkui Fan, Junwei He, Xiaoxi Jiang, Guanjun Jiang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03092)

------

arXiv:2608.03092v1 Announce Type: cross

Abstract: We aim to improve model performance in multi-reward reinforcement learning training process. Existing Group reward-Decoupled Normalization Policy Optimization (GDPO) has mitigated the issue of reward signals masking one another during direct scalarization by normalizing each reward dimension separately before aggregation. However, our experiments show that GDPO still struggles to balance reward signals with different granularities. Specifically, in some particular training tasks, the model may receive a dense reward that assigns fine-grained scores ranging from 0.1 to 1.0, together with a sparse reward that provides only binary feedback of either 0 or 1. In such cases, we find that the sparse reward may provide an insufficient optimization signal, preventing its corresponding capability from being effectively reinforced. Therefore, how can we strengthen the optimization signal from the sparse reward without sacrificing the capability already learned from the fine-grained reward? To overcome this limitation, we propose Specialize-and-Merge Online Policy Distillation (SMOPD), a two-stage training method for multi-reward optimization. Stage1-Specialize: SMOPD first employs reward-priority configurations to train multiple reward-specialized teachers, allowing each reward to be learned under conditions where its signal can effectively drive optimization. Stage2-Merge: SMOPD then utilizes online policy distillation to combine the reward-specialized capabilities of these teachers into a single student policy, while maintaining balanced task-level optimization. To validate our method, we conduct experiments on two multi-reward settings: complementary rewards(tool-calling accuracy and format) and conflicting rewards (helpful and harmless rewards). Based on above settings, SMOPD outperforms GDPO across 1.5B, 3B and 7B backbones.
