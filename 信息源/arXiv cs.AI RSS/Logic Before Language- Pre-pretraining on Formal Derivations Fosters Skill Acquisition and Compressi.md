# Logic Before Language: Pre-pretraining on Formal Derivations Fosters Skill Acquisition and Compressibility

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jo-Ku Cheng, Nikolaos Aletras, Marco Valentino　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03930)

------

arXiv:2608.03930v1 Announce Type: cross

Abstract: Pre-pretraining language models (LMs) on symbolic data can accelerate and improve natural language acquisition. However, existing pre-pretraining tasks, such as Dyck and procedural algorithms, rely on narrow primitives that fail to capture the expressive capacity of natural language. Moreover, prior studies remain restricted to relatively small token budgets, offering limited insight into skill emergence and representational dynamics. To address these limitations, we propose logic pre-pretraining (Logic-PPT) as a principled initialization strategy, leveraging formal derivations to impart richer structural and linguistic biases. Formal derivations require abstract mechanisms that are central to natural language, simultaneously binding variables, connecting quantifiers and relational dependencies, and composing predicate-argument structures over long contexts. Scaling our evaluation to a 100B-token regime, logic pre-pretraining substantially accelerates skill acquisition in LMs, achieving 80\% accuracy on linguistic tasks with 36B fewer tokens than standard initialization, and outperforming alternative pre-pretraining baselines. Mechanistically, formal derivations induce persistent structural reorganization, distinctively characterized by a lower-rank, spectrally concentrated representation space. Crucially, we show that this internal geometry enables improved model compressibility via pruning, matching the dense baseline performance even at $\approx$33\% sparsity.
