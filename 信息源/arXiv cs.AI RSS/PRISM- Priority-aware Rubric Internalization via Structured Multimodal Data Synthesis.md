# PRISM: Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiaomin He, Dongling Xiao, Jiahao Xie, Ruiqi Lu, Qianle Wang, Zhongbin Guo, Wanxuan Sun　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05249)

------

arXiv:2608.05249v1 Announce Type: cross

Abstract: Real-world multimodal instructions often bundle multiple requirements with unequal importance, yet most multimodal training data still reduce instruction following to answering one self-contained question. We study this gap through \textbf{rubric comprehension}, which casts the model not as a generator measured against rubrics but as an \textbf{executor} that follows them: given an image and a typed, prioritized rubric, the model must verify each rule before producing an overall judgment. To support this setting, we propose \textbf{PRISM}, a four-stage data synthesis framework that produces persona--task pairs, prefix-guided rule sets, quality-filtered rubrics, and structured verification traces. We further introduce \textbf{PRISM-Eval}, whose Loose and Strict metrics use deterministic matching against fixed labels and therefore require no inference-time judge model. With only 10K synthesized samples, PRISM lifts Qwen3-VL-4B from 9.5\% to 30.1\% Strict accuracy on PRISM-Eval while preserving average performance on general benchmarks, and the gains transfer to four additional open-source MLLMs across dense and MoE architectures, suggesting that structured rubric supervision is a scalable path toward multi-rule, priority-aware multimodal instruction following.
