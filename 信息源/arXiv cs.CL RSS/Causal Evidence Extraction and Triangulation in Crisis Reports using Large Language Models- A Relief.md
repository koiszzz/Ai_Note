# Causal Evidence Extraction and Triangulation in Crisis Reports using Large Language Models: A ReliefWeb-based Study

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Yuanjun Zhang, Mourad Oussalah　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04576)

------

arXiv:2608.04576v1 Announce Type: new

Abstract: Humanitarian reports are long, noisy, and multi-topic, making it difficult to consolidate decision-relevant causal evidence. We present a ReliefWeb study (2000-2024) and a two-stage Large Language Model (LLM) pipeline that extracts structured intervention-outcome records with direction and strength attributes. Query-conditioned extraction restricts output to a specified intervention class, reducing retrieval-induced over-extraction, while snippet grounding links each relation to supporting text for auditability and classification. In an expert-annotated dataset of 100 reports, the best closed-source LLM achieved a weighted F1 score of 90.73% with strong cost-efficiency, while Llama-3.1-8B with supervised fine-tuning reached 94.15% weighted F1 score. We further propose context-preserving triangulation that aggregates strength-weighted evidence within disaster$\times$source cells, applies Laplace smoothing and equally weights cells to quantify cross-context convergence via a Level-of-Evidence score. Applied to cash assistance, food-related outcomes show strong positive convergence (LoE=0.865) and stable long-horizon trajectories.
