# CLIP-CC-Bench: Evaluating Paragraph-Level Video Descriptions in Video-Language Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mukhtiar Ali, Harsh Dubey, Sugam Mishra, Chulwoo Pack　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04302)

------

arXiv:2608.04302v1 Announce Type: new

Abstract: Benchmarking video-language models has largely focused on short clips and single-sentence metrics, leaving open whether current systems can generate accurate long-form, paragraph-level descriptions. We introduce CLIP-CC-Bench, an evaluation suite for long-form video description built from 5 hours of movie content segmented into 90-second clips, each paired with an expert-written paragraph-style reference. The evaluation suite employs an ensemble of five state-of-the-art LLM-based embedding models to increase reliability and mitigate single-model bias, and applies two complementary methodologies: (i) coarse-grained semantic matching and (ii) fine-grained semantic matching to compare model-generated descriptions against CLIP-CC-Bench references. Using this framework, we evaluate 17 state-of-the-art video-language models and report both their Borda-aggregated rankings and their average scores on CLIP-CC-Bench. We further quantify the protocol's internal reliability through inter-judge agreement and bootstrap ranking stability. We release standardized evaluation scripts, model outputs, and aggregation tools at https://github.com/Multimodal-Intelligence-Lab/CLIP-CC-Bench to support reproducibility. CLIP-CC-Bench provides a practical evaluation framework for long-form video description, filling a gap left by existing short-clip and QA-only benchmarks.
