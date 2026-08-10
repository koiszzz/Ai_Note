# Hyper-ES: Effective Evolution Strategies for LLM Reasoning via Descent Direction Merging

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yu Gu, Zhi Zheng, Yunpeng Ba, Xialiang Tong, Mingxuan Yuan, Zhenkun Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05541)

------

arXiv:2608.05541v1 Announce Type: new

Abstract: Evolution Strategy (ES) is a promising alternative to gradient-based fine-tuning for resource-constrained Large Language Model (LLM) reasoning. However, directly applying ES to billion-parameter LLMs is highly ineffective. In such high-dimensional parameter spaces, most random perturbations are nearly orthogonal to useful update directions, leading to unstable optimization. We propose Hyper-ES, a subspace-based ES framework that avoids the weakness of ES in full-parameter search while exploiting its strength in low-dimensional optimization. Instead of asking ES to discover useful directions from random perturbations in the LLM parameter space, Hyper-ES first performs a small number of inexpensive gradient-based fine-tuning runs to obtain descent directions. Although each direction may provide only a limited improvement on its own, their span forms a compact adaptation subspace that captures useful reasoning updates. Hyper-ES then applies CMA-ES to optimize layer-wise DARE-TIES merging coefficients within this subspace, allowing ES to search over combinations of meaningful descent directions rather than over arbitrary full-model perturbations. We evaluate Hyper-ES on three Qwen2.5-Instruct and DeepSeek-R1-Distill backbones across six mathematical reasoning datasets. Results show that Hyper-ES consistently outperforms GRPO-LoRA by 1% while requiring 10% fewer space-consuming gradient updates. Code at https://github.com/kuangrepi/Hyper-ES.
