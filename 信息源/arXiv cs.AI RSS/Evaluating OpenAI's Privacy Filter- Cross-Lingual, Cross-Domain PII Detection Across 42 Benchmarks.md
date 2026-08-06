# Evaluating OpenAI's Privacy Filter: Cross-Lingual, Cross-Domain PII Detection Across 42 Benchmarks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Rohith Uppala　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02616)

------

arXiv:2608.02616v1 Announce Type: cross

Abstract: We present the first independent, systematic evaluation of OpenAI's Privacy Filter (OPF), a 1.5B-parameter bidirectional PII detector, across 42 synthetic benchmarks spanning 22 languages and 5 domains. Zero-shot, OPF achieves F1=0.855 on AI4Privacy and 0.464 on SPY medical, outperforming Presidio (0.431, 0.273) and XLM-RoBERTa (0.269, 0.111) on PII-annotated benchmarks; on multilingual NER, XLM-RoBERTa leads OPF on all 13 Indic and non-Latin languages. GPT-4o leads on medical, legal, and financial PII (SPY: 0.643 avg, Gretel: 0.527), while OPF leads on structured synthetic PII (0.71 avg) and customer support (0.60). OPF degrades sharply when PII is embedded in narrative prose: F1=0.04--0.57 on NER benchmarks and collapse for non-Latin scripts (Arabic: 0.04, Cyrillic: 0.03). Error analysis shows OPF is strongest on structurally regular PII types (email: 0.78, phone: 0.76) and weakest on culturally variable ones (person: 0.40, address: 0.49), and is recall-biased on customer-support and medical/legal PII (P=0.31--0.54, R=0.70--0.85); global precision spans 0.31--0.86 across all domains.
