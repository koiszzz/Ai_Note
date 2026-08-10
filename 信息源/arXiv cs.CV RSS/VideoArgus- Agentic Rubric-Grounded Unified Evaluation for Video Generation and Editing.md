# VideoArgus: Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Ziyun Zeng, Zixuan Wang, Yongsheng Yu, Hang Hua, Jiebo Luo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05485)

------

arXiv:2608.05485v1 Announce Type: new

Abstract: Evaluating generated videos remains challenging because existing benchmarks rely on fixed evaluation content, cover only a subset of generation and editing settings, and provide limited evidence for their scores. We introduce VideoArgus, a unified rubric-grounded framework covering five video generation and editing settings. For each input instance, VideoArgus generates an output-blind, sample-specific rubric once and reuses it to evaluate all corresponding candidate videos. The rubric defines concrete criteria, scoring rules, failure modes, and evidence plans, which guide criterion-specific VLM QA and visual tools to produce evidence-grounded criterion scores, rationales, and a diagnostic report. We further construct VideoArgus-Bench, containing 1,026 curated input instances built from 653 high-quality images and 416 high-quality videos, with all benchmark rubrics pre-generated, frozen, and released. On a separate 1,260-video human-alignment set, VideoArgus achieves higher within-input Spearman and Kendall correlations with human judgments than the corresponding benchmark-specific evaluators across all five tasks. Model rankings also remain largely consistent across different rubric-generation and evaluation-VLM backbones. All code and data are released. Visit our project page: https://zzzmyyzeng.github.io/VideoArgus
