# Neural Diversity Regularizes Hallucinations in Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kushal Chakrabarti, Nirmal Balachundhar　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2510.20690)

------

arXiv:2510.20690v3 Announce Type: replace-cross

Abstract: Language models continue to hallucinate despite increases in parameters, compute, and data. We propose neural diversity -- decorrelated parallel representations -- as a principled mechanism that reduces hallucination rates at fixed parameter and data budgets. While existing mitigation strategies largely target accuracy, we provide the first formal tail bounds for hallucination probability in ensembled language models, reframing it as a second-moment reliability problem and explaining 94.3% of empirical reliability variation seen across parallel configurations. We introduce ND-LoRA (Neural Diversity Low-Rank Adaptation), combining parallel LoRA adapters with Barlow Twins regularization, and reduce hallucinations by up to 25.6% (and 14.6% on average) while preserving general accuracy. Ablations show LoRA adapters and regularization act synergistically, causal interventions prove neurodiversity as the mediating factor and correlational studies indicate scale: a 0.1% neural correlation increase is associated with a 3.8% hallucination increase. Finally, task-dependent optimality emerges: different tasks require different optimal amounts of neurodiversity. Together, our results highlight neural diversity as a third axis of scaling -- orthogonal to parameters and data -- to improve the reliability of language models at fixed budgets.
