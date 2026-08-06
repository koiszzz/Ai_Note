# Dynamic Jailbreaking Attack

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Kedong Xiu, Yunhan Yang, Churui Zeng, Tianhang Zheng, Xinzhe Huang, Di Wang, Puning Zhao, Zhan Qin, Kui Ren　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2510.02422)

------

arXiv:2510.02422v4 Announce Type: replace-cross

Abstract: Existing gradient-based jailbreak attacks typically optimize a fixed-length adversarial suffix toward a predefined target response with a static optimization strategy. However, this fully static formulation undermines the effectiveness, efficiency and flexibility of gradient-based jailbreaking because (i) A predefined target usually lies in the low-probability region of a safety-aligned LLM's conditional output distribution, forcing the optimization to pursue an unlikely response pattern; (ii) Simple affirmative targets may even mislead LLMs to generate affirmative responses that are not highly relevant to the prompts; (iii) Fixed optimization strategy and suffix length treat all prompts equally, leading to limited attack capability for hard prompts and redundant capacity for easy ones. To address these limitations, we propose Dynamic Jailbreaking Attack (DJA), a parameter-free gradient-based jailbreak framework using dynamic candidate exploration, dynamic relevant targets and dynamic optimization strategy to craft adversarial prompts. In each optimization round, DJA samples multiple candidate target responses directly from the LLM's distribution conditioned on the current adversarial prompt. Among these candidates, DJA employs a multi-objective scorer to select an optimal target that satisfies multi-dimensional criteria such as harmfulness, relevance, and usefulness. Moreover, DJA introduces a parameter-free dynamic optimization strategy that allocates adversarial effort based on real-time feedback, adapting suffix length, candidate sampling capacity, and optimization iterations according to the difficulty of each harmful prompt. In an extensive evaluation of 40 safety-aligned LLMs (12 model families, scaling from 0.5B to 32B), DJA achieves a 100% ASR across all LLMs, requiring only 13.68 optimization rounds on average (10 iterations per round).
