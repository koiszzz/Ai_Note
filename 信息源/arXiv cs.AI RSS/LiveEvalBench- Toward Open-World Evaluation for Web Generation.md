# LiveEvalBench: Toward Open-World Evaluation for Web Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yiyao Wang, Zhen Wen, Yinghao Tang, Yixiao Fu, Lin Yuan, Xiaolau Zhang, Jun Zhou, Wei Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03689)

------

arXiv:2608.03689v1 Announce Type: new

Abstract: Large language models are increasingly capable of synthesizing executable frontend projects, yet existing benchmarks still treat web generation as a static evaluation problem. We argue that frontend artifacts demand a different paradigm: they are interactive rather than static, admit diverse yet equally valid implementations, and evolve faster than rigid pipelines can accommodate. To address these gaps, we present LiveEvalBench, an automated framework that reformulates web-generation evaluation as an agentic, adaptive, and extensible process. LiveEvalBench instantiates evaluation as a collaborative review workflow, in which a Build Engineer, a Code Engineer, and a UI Tester collectively gather evidence across the full lifecycle of a frontend project, from deployment and code inspection to browser-based interaction. To handle implementation diversity, an adaptive protocol couples shared rubrics for cross-model comparability with implementation-grounded criteria tailored to each artifact. The framework further supports incremental integration of new evaluator roles and assessment dimensions without pipeline redesign. Experiments across diverse real-world web-generation scenarios show that LiveEvalBench aligns closely with human expert judgment and provides fine-grained insights into frontier models' web generation capabilities. Code is available at https://github.com/wyysteelhead/LiveEvalBench
