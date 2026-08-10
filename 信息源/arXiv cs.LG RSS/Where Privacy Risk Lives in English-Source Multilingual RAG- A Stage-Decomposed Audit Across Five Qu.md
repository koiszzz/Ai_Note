# Where Privacy Risk Lives in English-Source Multilingual RAG: A Stage-Decomposed Audit Across Five Query Languages

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yanhang Li, Zhichao Fan, Zexin Zhuang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05163)

------

arXiv:2608.05163v1 Announce Type: cross

Abstract: A common assumption holds that switching to a non-English language makes a multilingual RAG system easier to attack for personal information. We test this on an English-source synthetic-PII corpus with five query languages and a two-stage defence (LLM input judge + regex output filter), in a pipeline whose translator, judge, back-translator, and generator are all Qwen2.5-7B -- so every finding below is pipeline-conditional, not a causal ranking of language-inherent risk. Under output-only filtering, English has the highest observed unstructured-PII leak rate; only English-vs-Swahili separates cleanly under document-level bootstrap intervals. Once the input judge is added, residual leaks remain on Arabic and Swahili, and back-translating the query does not close the gap (an ablation we report but cannot use as a causal diagnostic, since the back-translator is also Qwen). On a separate n=17 multilingual-prompted-judge residual corner, attaching the gold corpus document to the input judge blocks 15/17 residual cells. We frame this last result as a mechanism diagnostic, not a deployable defence: it uses oracle retrieval, BLOCK/ALLOW rates are measured on adversarial queries only, and we measure no benign-query false-positive rate and no answer-utility cost. The supplementary material contains code, corpora, queries, and per-trial JSONLs; the priority follow-up is an independent-MT plus non-Qwen-judge replication with a native-speaker query set, scoped in the Limitations section.
