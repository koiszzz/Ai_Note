# CausalForge: A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal Inference

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jiyuan Tan, Vasilis Syrgkanis　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2607.22511)

------

arXiv:2607.22511v2 Announce Type: replace-cross

Abstract: Automating theoretical research is constrained not only by the generation of candidate results, but also by their reliable evaluation. A common approach is to close the research loop with a large language model (LLM) reviewer. However, such reviewers remain empirically unreliable: they may accept fabricated papers and detect them at rates close to chance (Bad Scientist, 2025). We present CausalForge, a framework for automated theoretical research in causal inference grounded in the Lean proof assistant. CausalForge combines Causalean, a foundational Lean library for causal inference containing 7,035 machine-checked declarations developed with language-model assistance under human design and review, with CausalSmith, a self-improving agentic pipeline that selects research topics, proposes results, formalizes statements, constructs proofs, and presents the resulting artifacts for human inspection. Because a machine-checked proof establishes only that a formal statement follows from its assumptions, not that the statement faithfully captures the intended scientific claim, the pipeline augments kernel verification with a statement audit that compares each formal theorem against the informal claim it is intended to express. We evaluate the system using artifacts produced by completed autonomous research runs. The source code, formal library, and run records are available at https://github.com/Jiyuan-Tan/CausalForge.
