# PolyAlign: Conditional Human-Distribution Alignment

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：L. D. M. S. Sai Teja, Ufaq Khan, Sathira Silva, Xiao Wu, Muhammad Haris Khan　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2606.13227)

------

arXiv:2606.13227v2 Announce Type: replace

Abstract: Post-training methods such as supervised fine-tuning (SFT) and preference optimization typically align language models toward a single global assistant behavior. While effective for improving average helpfulness, this can suppress the natural variation of human responses across languages, tasks, and dialogue settings. We study this problem as conditional human-distribution alignment: models should match the human response distribution appropriate to the current interaction context, rather than a universal response style. We introduce PolyAlign, a distribution-aware alignment framework that organizes bilingual interaction data into bucket-specific human reference distributions defined by language, interaction track, response family, and length. PolyAlign combines Bucket-Aware SFT, which balances optimization across heterogeneous buckets, with Human-Distribution Preference Optimization (HDPO), which regularizes preference learning using critic-estimated distance to bucket-specific human support. Across a bilingual evaluation suite covering English and Chinese single- and multi-turn settings, PolyAlign improves conditional naturalness and distributional faithfulness while preserving competitive task utility. The results suggest that post-training should move beyond global alignment objectives toward interaction-aware alignment with human response distributions.
