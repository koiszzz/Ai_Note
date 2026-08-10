# Distill What the Student Can See: Fisher-Projected On-Policy Distillation for Vision-Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Leyan Xue, Feng Xiong, Mingjun Ma, Changqing Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.01263)

------

arXiv:2608.01263v2 Announce Type: replace

Abstract: On-policy distillation (OPD) samples trajectories from the current student policy and minimizes token-level divergence between student and teacher next-token distributions at prefixes along those trajectories. This aligns the distillation states with the student's own generation distribution. However, it still assumes that the complete teacher distribution is an appropriate target across student capacities. In vision--language reasoning, teacher corrections can depend on visual distinctions that a compact student cannot represent. Our target-scaling study shows that, as the target approaches the complete teacher distribution, the student realizes less of the prescribed shift and obtains worse downstream performance. We therefore propose \emph{Fisher-Projected On-Policy Distillation} (FP-OPD), which distills only locally realizable teacher corrections. FP-OPD uses continuous visual perturbations to estimate the student's local visual tangent space and projects the centered teacher--student log-probability gap onto this space under the student's Fisher metric. The resulting capacity-aware target is optimized with full-vocabulary reverse KL on student trajectories, retaining the standard OPD framework. In 8B-to-2B distillation, FP-OPD improves all seven evaluated multimodal benchmarks. It raises the average score by 2.77 points over the pretrained student and by 1.60 points over standard OPD. These results demonstrate that locally realizable teacher corrections provide a more effective target for distilling compact vision--language models.
