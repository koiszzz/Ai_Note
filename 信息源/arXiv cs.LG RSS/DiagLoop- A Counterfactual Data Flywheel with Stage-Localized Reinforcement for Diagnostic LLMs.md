# DiagLoop: A Counterfactual Data Flywheel with Stage-Localized Reinforcement for Diagnostic LLMs

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jian Zhang, Bingyi Wang, Yizhi Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03674)

------

arXiv:2608.03674v1 Announce Type: new

Abstract: Causal diagnostic models must explain how conclusions follow from evidence because diagnoses guide repairs and treatments. Yet serious cases are scarce, records rarely contain reasoning paths, and data transfer poorly across configurations, complicating local deployment. We present DiagLoop, a counterfactual data flywheel that converts codified physical relations or clinical guidelines, authored once per mechanism family, into training supervision beyond recorded cases. A training-only teacher proposes counterfactual worlds by varying causes, contexts, and observations, while an independent hybrid checker admits only valid worlds. The student reasons through symptom abstraction, causal-chain construction, and root-cause attribution. Stage-specific criteria identify its earliest failure. For nonterminal failures, a bounded repair probes downstream competence, and the resulting weakness profile guides subsequent data generation. Stage-localized reinforcement learning updates only the model-generated continuation, while replay and preservation reduce forgetting. The same criteria govern admission, attribution, reward, and regeneration through checks separate from the proposer. Using only synthesized scenarios and no case-level expert reasoning annotations, the resulting 8B model improves strict path correctness over the strongest conventional baseline. Gains are 11.6 points across eight industrial systems and 5.5 points across ten disease categories. Gains over a deranged-routing control are 3.9 and 2.3 points, respectively. The model also exceeds the evaluated proprietary references in both domains, even when they receive few-shot examples or the specification in context.
