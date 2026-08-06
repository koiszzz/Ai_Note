# HUKUKBERT: Domain-Specific Language Model for Turkish Law

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mehmet Utku \"Ozt\"urk, Tansu T\"urko\u{g}lu, Buse Buz-Yalug　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2604.04790)

------

arXiv:2604.04790v2 Announce Type: replace-cross

Abstract: Natural language processing (NLP) advances have powered a generation of LegalTech systems, but Turkish law remains under-served by domain-specific data and models. English has legal encoders such as LEGAL-BERT; no comparable high-volume Turkish counterpart exists. We introduce HukukBERT, a Turkish legal language model trained on a 19 GB cleaned corpus using a hybrid domain-adaptive pre-training (DAPT) recipe that mixes Whole-Word Masking, Token Span Masking, Word Span Masking, and targeted Keyword Masking. We compared our 48K WordPiece tokenizer and DAPT pipeline against general-purpose and existing domain-specific Turkish models. On the Legal Cloze Test - a masked legal term prediction benchmark over Turkish court decisions - HukukBERT reaches 84.40% Top-1 accuracy and beats every baseline we tested. The Legal Cloze Test is synthetically constructed, so its passages are absent from the pre-training corpus by construction, eliminating train-test contamination. On the downstream task of structural segmentation of official Turkish court decisions, it reaches a 92.8% document pass rate. We release HukukBERT to support Turkish legal NLP work in named entity recognition, judgment prediction, and document classification.
