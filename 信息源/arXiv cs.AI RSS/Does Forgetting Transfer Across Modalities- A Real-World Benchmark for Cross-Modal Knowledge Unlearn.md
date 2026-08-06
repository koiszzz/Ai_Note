# Does Forgetting Transfer Across Modalities? A Real-World Benchmark for Cross-Modal Knowledge Unlearning Evaluation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chunlin Liu, Junnian Chen, Haitong Jiang, Jianyu Zhao, Yingsen Pang, Jingchen Li, Jiabiao He, Youming Lu, Jinhe Bi, Yuntao Du　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03791)

------

arXiv:2608.03791v1 Announce Type: new

Abstract: Vision-Language Models (VLMs), like Large Language Models (LLMs), may memorize sensitive, copyrighted, or harmful knowledge from their pretraining corpora. Removing such knowledge is essential for building trustworthy AI systems. However, existing studies primarily focus on forgetting within individual modalities. Although recent work has begun to explore cross-modal consistency in unlearning, the cross-modal transfer of real-world knowledge unlearning remains insufficiently studied. To address this gap, we introduce UNLINK-VL, a real-world benchmark for cross-modal knowledge unlearning in VLMs. Under a post-hoc unlearning setting in which the original forget and retain corpora are unavailable, UNLINK-VL selects visually identifiable real-world entities as unlearning targets and associates them with corresponding images and one-hop and multi-hop facts derived from Wikidata. The benchmark comprises four complementary subsets that evaluate direct forgetting of target knowledge, the propagation of forgetting through relational knowledge, the preservation of related non-target knowledge, and robustness to semantically equivalent queries. We train models under text-only and multimodal unlearning settings and evaluate forgetting effectiveness and retained utility across textual, visual, and cross-modal scenarios. Extensive experiments reveal a pronounced asymmetry in cross-modal transfer: multimodal unlearning remains effective under textual evaluation, whereas text-only unlearning transfers poorly to visual and cross-modal scenarios. Meanwhile, the evaluated methods largely preserve the models' general capabilities. These findings demonstrate that relying solely on intra-modal evaluation, particularly text-only evaluation, may substantially overestimate the effectiveness of knowledge unlearning in VLMs, underscoring the need for cross-modal unlearning and evaluation.
