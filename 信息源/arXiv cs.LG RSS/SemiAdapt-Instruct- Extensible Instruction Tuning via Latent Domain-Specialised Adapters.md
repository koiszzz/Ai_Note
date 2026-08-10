# SemiAdapt-Instruct: Extensible Instruction Tuning via Latent Domain-Specialised Adapters

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Josh McGiff, Salma Mekaoui, Robert Shanahan, Nikola S. Nikolov　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05161)

------

arXiv:2608.05161v1 Announce Type: cross

Abstract: Instruction-tuned LLMs are deployed into environments where domains evolve, yet extending a fine-tuned model's capabilities without full retraining remains an unsolved practical challenge. We present SemiAdapt-Instruct, a modular framework that discovers latent instruction domains, trains per-domain LoRA adapters in parallel, and performs parameter-free routing, incorporating new domains via single-adapter training without modifying existing components. SemiAdapt-Instruct outperforms full model fine-tuning across all configurations on both ROUGE-L and LLM-as-a-judge evaluation, while matching single LoRA fine-tuning and delivering extensibility that monolithic approaches cannot provide. We empirically demonstrate this extensibility by showing that updating a single adapter with new domain data outperforms all monolithic baselines. Our study also finds that independent discovery methods converge on the same specialisation-friendly domains. These findings demonstrate that decomposing heterogeneous instruction data into latent domains enables extensible NLP systems where evolving domains require only targeted single-adapter updates, eliminating the need for full model retraining.
