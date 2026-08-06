# PhyCheck: Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhongjie Ba, Shengwang Xu, Peng Cheng, Jinyang Zou, Ting Yu, Zhibo Wang, Zhan Qin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02150)

------

arXiv:2608.02150v3 Announce Type: replace

Abstract: Embodied intelligence and world models require video understanding systems to go beyond recognizing objects and actions and develop an understanding of physical regularities. However, despite their strong performance on general video understanding tasks, current video-language models still struggle to reliably determine whether an observed event conforms to specific physical laws. Existing benchmarks primarily assess the physical quality of generated videos, providing limited support for systematically evaluating and improving the physical-law understanding of Video Large Language Models (VideoLLMs). To address this gap, we introduce PhyCheck, a video question answering dataset organized at two complementary levels of granularity. The coarse-grained subset asks models to determine whether the phenomenon shown in a video conforms to or violates physical laws, while the fine-grained subset further examines whether models can capture physical details responsible for the violation or compliance. We use these subsets as structured supervision to improve physical understanding. In addition, the dataset contains a diagnostic subset with external causal context that reveal hidden factors affecting physical plausibility, assessing whether models can recalibrate their judgments accordingly. Experiments with Fine-tune Qwen2.5-VL show that training with the proposed data substantially improves the understanding of physical-consistency, while evaluations in the diagnostic subset reveal that current models still have difficulty incorporating additional causal conditions into their decisions. These findings highlight the gap between recognizing surface-level inconsistencies and understanding underlying physical mechanisms, and provide a foundation for evaluating and improving physical understanding in Video-LLMs.
