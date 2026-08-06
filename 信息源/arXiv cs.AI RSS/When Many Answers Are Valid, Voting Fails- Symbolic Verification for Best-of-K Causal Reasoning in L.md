# When Many Answers Are Valid, Voting Fails: Symbolic Verification for Best-of-K Causal Reasoning in LLMs

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Omatharv Bharat Vaidya, Connor Thomas Jerzak, Zayne Rea Sprague, Fangcong Yin, Nhat Ho　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03506)

------

arXiv:2608.03506v1 Announce Type: new

Abstract: Self-consistency assumes the most frequent answer among sampled reasoning traces is the most reliable, but this can fail in causal reasoning: samples often repeat the same confounding error, and votes fragment across multiple valid answers, letting an invalid answer win despite a valid minority trace. We introduce CALVER (Causal Axiom-Level VERification), a training-free symbolic verifier that scores structured traces against Pearl's causal criteria, including -separation, backdoor adjustment, and intervention, and selects the highest-scoring candidate without consulting a reference answer. On CLEAR find-one-valid queries that admit multiple graph-valid answers, CALVER reaches 42.1% where plurality, a reward model, an LLM judge, and model confidence remain near 30% on identical frozen pools. Scaling the judge to 72B does not close the gap. In an audited clean-core subset, 11 of 21 graph-valid CALVER selections differ from the benchmark's listed answer while still satisfying the requested predicate. The advantage widens with the sampling budget and reproduces across ten published Bayesian networks, a second model family, and settings where the model must build the graph from text. CALVER also improves thresholded average-treatment-effect decisions against exact ground truth, generalizes to logic under a truth-table checker, and scores each candidate in milliseconds on CPU. CALVER needs only a causal structure, supplied outright or built from the text; wherever that holds, selection can aggregate via causal validity.
