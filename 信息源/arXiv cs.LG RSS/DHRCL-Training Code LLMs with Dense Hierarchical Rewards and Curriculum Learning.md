# DHRCL:Training Code LLMs with Dense Hierarchical Rewards and Curriculum Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shuhang Wang, Ziming Li, Hui Cheng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.26457)

------

arXiv:2607.26457v2 Announce Type: replace

Abstract: Reinforcement learning is a natural post-training paradigm for code-oriented large language models because generated programs can be evaluated through parsing, execution, unit tests, and structural analysis. However, existing methods often rely on sparse outcome rewards or statically combine heterogeneous dense signals, even though syntax validity, executability, functional correctness, and structural organization describe different and progressively dependent programming capabilities. We propose DHRCL, a reinforcement learning framework with Dense Hierarchical Rewards and Curriculum Learning. DHRCL decomposes feedback into syntax validation, execution success, unit-test pass rate, and AST-based structural similarity, and organizes these signals through a three-stage Syntax, Execution, Pass & Structural curriculum. Stage duration is determined automatically from recent validation trends rather than manually specified capability thresholds. We further introduce stage-aware probability-based token credit redistribution. The mechanism follows a consolidation-to-refinement principle: it emphasizes established token patterns during syntax-oriented optimization, applies uniform propagation for non-local execution feedback, and allocates more credit or blame to less-established token decisions during final functional optimization. Under a unified Qwen3-8B and KodCode protocol, the experiments compare DHRCL with binary, pass-rate, reward-model-based, and verifiable dense-reward baselines. We further evaluate DHRCL across Qwen3-4B, Qwen3-8B, and Qwen3-14B backbones, showing that its advantage remains consistent as model capacity increases.
