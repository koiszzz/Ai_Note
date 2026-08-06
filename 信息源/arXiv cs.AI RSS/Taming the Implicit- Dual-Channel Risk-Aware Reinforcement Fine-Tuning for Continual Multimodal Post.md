# Taming the Implicit: Dual-Channel Risk-Aware Reinforcement Fine-Tuning for Continual Multimodal Post-Training

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yibei Liu, Jiajun Chen, Qianle Zhang, Tangyue Jin, Mengying Zhu, Meng Xi, Yangyang Wu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03660)

------

arXiv:2608.03660v1 Announce Type: new

Abstract: Reinforcement fine-tuning (RFT) is widely believed to inherently resist catastrophic forgetting in continual post-training of multimodal large language models. Under pronounced task distributional shifts, however, forgetting across representative RFT algorithms escalates sharply. This stems from the implicit reward-variance regularization inherent to RFT, which proves incapable of suppressing uncontrolled optimization risk. We propose Risk-Aware Policy Optimization (RAPO), the first dual-channel framework for explicit risk governance in continual RFT. On the policy channel, Risk-Aware Policy Scaling adaptively calibrates per-sample update magnitude via rollout reliability and Fisher-inspired local predictive sensitivity; on the data channel, Risk-Aware Dynamic Bucket Sampling reorganizes training batches through dynamic risk stratification, steering optimization toward informative yet stable samples. As a plug-and-play strategy requiring no cross-task memory, RAPO generalizes to any RFT algorithm without modification. On the public MLLM-CL benchmark, RAPO reduces final forgetting by 79.8% relative to its RLOO backbone while retaining new-task competitiveness.
