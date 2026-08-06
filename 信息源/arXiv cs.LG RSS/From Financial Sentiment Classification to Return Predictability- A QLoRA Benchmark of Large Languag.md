# From Financial Sentiment Classification to Return Predictability: A QLoRA Benchmark of Large Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Fusheng Luo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：q-fin.MF　|　原文：[打开链接](https://arxiv.org/abs/2608.04200)

------

arXiv:2608.04200v1 Announce Type: cross

Abstract: Financial sentiment classifiers are commonly evaluated against human labels, but strong linguistic performance does not necessarily imply economically useful return predictability. This study separates these questions through two experiments. First, we construct a unified three-class benchmark from five financial text datasets and compare TF--IDF Naive Bayes, off-the-shelf FinBERT and Financial-RoBERTa encoders, zero-shot Qwen2.5-7B, and QLoRA-adapted Qwen2.5-7B, LLaMA3-8B, and Mistral-7B models. Mistral-7B achieves the best test accuracy (0.8840) and macro-F1 (0.8771), while QLoRA raises Qwen2.5's macro-F1 from 0.7274 to 0.8615. An inverse-frequency class-weighted loss does not improve Qwen2.5. Second, we evaluate economic validity on a temporally separate 2019 Benzinga sample containing 10,637 unique headlines and 13,115 headline--stock observations for a fixed S\&P~100 universe. Model probabilities are converted into continuous sentiment scores, aggregated by stock and signal date, and aligned with next-session returns over one-, two-, three-, and five-day horizons. All seven downstream models produce positive but small mean rank information coefficients at the one-day horizon; the largest is 0.0143 for FinBERT. None of the 28 model--horizon tests remains significant after Newey--West inference and false-discovery-rate correction. Portfolio results likewise fail to establish a robust advantage for the best-performing classifiers. The findings show that QLoRA is effective for financial sentiment adaptation, while also documenting a clear gap between classification accuracy and tradable cross-sectional signals.
