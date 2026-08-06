# Test, then Route: How Language Models Execute In-Context Conditional Rules Across Models and Languages

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Luxshan Thavarasa, Sivasuthan Sukumar　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04183)

------

arXiv:2608.04183v1 Announce Type: new

Abstract: When a language model follows an in-context conditional rule such as "if P(x) then A else B," does it assemble a runtime circuit with one module that tests the predicate and another that routes the answer? We probe this with activation patching under a four-donor design whose two swapped-rule donors make the condition and the answer word disagree, so each layer reveals which of the two it carries. Across three open models from two families and six languages sharing one fixed item bank, a mid-stack residual band carries the predicate's truth value: patching it reroutes the answer with predicate-outcome flip near 1.0 and mapping flip near 0.0, meeting a strict pre-specified isolation criterion in 17 of 18 cells, and the same localization holds across five predicate families. The router shows the opposite profile. A learned subspace flips A and B near-perfectly within the trained pair yet transfers to a new pair at approximately 0 in every model, while in Gemma-3-4B (the only model probed cross-lingually) it transfers at approximately 0.98 to the same pair in other languages. Under every probe we ran, the router direction is token-bound and non-transferable (largely answer-readout in Gemma, pair-specific in Qwen) rather than an abstract routing module. Test is modular; under these probes, route is not.
