# DeepThinkVLA: Enhancing Reasoning Capability of Vision-Language-Action Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Cheng Yin, Yankai Lin, Wang Xu, Sikyuen Tam, Xiangrui Zeng, Zhiyuan Liu, Zhouping Yin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.15669)

------

arXiv:2511.15669v3 Announce Type: replace-cross

Abstract: Does Chain-of-Thought (CoT) reasoning genuinely improve Vision Language Action (VLA) models, or does it merely add overhead? Existing CoT-VLA systems report limited and inconsistent gains, yet no prior work has rigorously diagnosed when and why CoT helps robots act. Through systematic experiments, we identify two necessary conditions that must be jointly satisfied for CoT to be effective in VLA: (1) Decoding Alignment: CoT and actions must be generated with modality-appropriate mechanisms; forcing both through a single autoregressive decoder is not merely suboptimal but actively harmful, degrading performance by 4.2 percentage points; (2) Causal Alignment: CoT must be causally linked to task success via outcome-based optimization; without it, supervised CoT is indistinguishable from no reasoning at all under action-execution-sensitive dynamics shift, exhibiting a 32.0 pp performance drop nearly identical to the 31.6 pp drop of a reasoning-free baseline. Guided by these findings, we build DeepThinkVLA: a hybrid-attention decoder satisfies Condition 1 by pairing causal attention for language with bidirectional attention for parallel action decoding, while a two-stage SFT-then-RL pipeline satisfies Condition 2 by aligning the full reasoning: action chain with sparse task-success rewards. DeepThinkVLA achieves 97.0\% success on LIBERO, 79.0\% robustness on LIBERO-Plus (vs. 61.6\% for $\pi_0$-FAST), and 59.3\% success on RoboTwin 2.0, exceeding the strongest baseline by 21.7 points. Furthermore, real-robot experiments provide preliminary evidence for the physical applicability of our CoT data construction and hybrid architecture. Our codes are available at https://github.com/OpenBMB/DeepThinkVLA.
