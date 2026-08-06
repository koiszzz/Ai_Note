# Trace, Verify, and Correct: A Training-Free Framework for Spatial Reasoning in Multimodal LLMs

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Yang Yang, Jiawei Chen, Tairan Chen, Zhaoxia Yin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04759)

------

arXiv:2608.04759v1 Announce Type: cross

Abstract: Although Multimodal Large Language Models (MLLMs) have made substantial progress, their spatial reasoning may still produce intermediate judgments inconsistent with the input image, allowing errors to propagate through the reasoning chain and affect the final answer. Existing methods mainly improve spatial reasoning through training or additional spatial information, without considering whether the reasoning process itself is faithful to the model input. Our study shows that unfaithful reasoning chains significantly reduce final-answer accuracy. To address this issue, we propose a modular and training-free framework for spatial reasoning verification and correction. The framework constructs a Spatial Evidence Graph (SEG), which associates atomic spatial evidence extracted from Chain-of-Thought reasoning with visual entities, spatial relations, source steps, and visual evidence. Spatial Evidence Reliability Assessment (SERA) evaluates the reliability of visual evidence based on object existence, localization, and geometric measurements. The framework then identifies the earliest spatial evidence unit contradicted by reliable visual evidence and guides the original MLLM to revise the subsequent reasoning and final answer. Across 15 model-dataset settings, our method achieves an average accuracy of 68.94%, outperforming the compared baselines by 8.55 percentage points on average. Our code will be open-sourced.
