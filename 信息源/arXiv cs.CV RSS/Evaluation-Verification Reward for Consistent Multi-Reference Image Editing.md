# Evaluation-Verification Reward for Consistent Multi-Reference Image Editing

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yingmao Miao, Pengfei Zhang, Xiaochen Lv, Meng Yu, Lei Sun, Xiangxiang Chu, Chao Shen, Chenhao Lin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.29025)

------

arXiv:2607.29025v2 Announce Type: replace

Abstract: While recent image editing models have made rapid progress, multi-reference editing remains challenging, particularly in maintaining visual consistency across references and ensuring overall visual harmony. Reinforcement learning has proven highly effective for text-to-image generation and single-image editing, but its extension to multi-reference editing is hindered by the absence of suitable reward models that capture multi-image relational constraints. Moreover, naively using multimodal large language models(MLLMs) as zero-shot evaluators faces a key tension between hallucination-prone long-form reasoning and the limited deductive power of short-form judgments. We address these issues with a Multi-dimensional Evaluation-Verification Reward(EVR). EVR decomposes evaluation into distinct visual criteria; for each criterion, an MLLM Evaluator generates multiple candidate hypotheses, and a Verifier grounds each claim in concrete visual evidence to accept or reject it, producing reliable and fine-grained reward signals. Together with a scalable data pipeline, our method enables RL fine-tuning of off-the-shelf editors without architectural changes. Extensive experiments show substantial gains over the base Qwen-Image-Edit, improving consistency and harmony to match or surpass NanoBanana.
