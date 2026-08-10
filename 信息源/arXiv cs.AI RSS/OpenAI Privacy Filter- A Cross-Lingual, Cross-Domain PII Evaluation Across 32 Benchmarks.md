# OpenAI Privacy Filter: A Cross-Lingual, Cross-Domain PII Evaluation Across 32 Benchmarks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Rohith Uppala　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02616)

------

arXiv:2608.02616v2 Announce Type: replace-cross

Abstract: We present what is, to our knowledge, the first systematic evaluation of OpenAI's Privacy Filter (OPF), a 1.5B-parameter model that converts an autoregressive language model into a bidirectional PII detector, across 32 benchmarks spanning 14 languages and 5 domains. Our most practically actionable finding is a domain-dependent labeled-data crossover: fine-tuned XLM-RoBERTa surpasses OPF's zero-shot performance with only ~500 labeled examples on English synthetic PII (~100 on non-English Kiji), and ~1000 on synthetic medical PII. Crucially, per-class fine-tuning (17 PII entity types, a subset of OPF's 33) is less data-efficient than binary labels at small n -- at n=100, binary F1=0.634 vs. per-class 0.360. Zero-shot, OPF achieves F1=0.464 on the SPY medical benchmark and F1=0.855 on AI4Privacy, substantially outperforming Presidio and XLM-RoBERTa-large-NER. However, OPF degrades sharply outside its PII training distribution: F1=0.04--0.40 on general NER benchmarks and collapses for non-Latin scripts (Arabic: 0.04, Cyrillic: 0.03). Error analysis reveals OPF excels on structurally regular PII (email: 0.78, phone: 0.76) but struggles with culturally variable entities (person names: 0.40, addresses: 0.49), and is recall-biased across most PII domains (precision 0.31--0.54, recall 0.70--0.85). We provide a decision heuristic for when to use OPF zero-shot, when to fine-tune XLM-RoBERTa, and which language families to avoid.
