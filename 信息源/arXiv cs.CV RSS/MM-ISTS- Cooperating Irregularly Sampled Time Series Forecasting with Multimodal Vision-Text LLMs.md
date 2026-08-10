# MM-ISTS: Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhi Lei, Chenxi Liu, Hao Miao, Wanghui Qiu, Bin Yang, Chenjuan Guo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2603.05997)

------

arXiv:2603.05997v2 Announce Type: replace

Abstract: Irregularly sampled time series (ISTS) are widespread in real-world scenarios, exhibiting asynchronous observations on uneven time intervals across diverse variables. Existing ISTS forecasting methods often solely utilize historical observations to predict future ones while falling short in learning contextual semantics and fine-grained temporal patterns. To address these problems, we propose MM-ISTS, a multimodal ISTS forecasting framework augmented by vision-text large language models, which bridges temporal, visual, and textual modalities. MM-ISTS encompasses a two-stage encoding mechanism. In particular, a Cross-Modal Vision-Text Encoding module is proposed to automatically generate informative visual images and textual data, enabling the capture of intricate temporal patterns and comprehensive contextual understanding, in collaboration with multimodal LLMs (MLLMs). In parallel, ISTS encoding extracts complementary yet enriched temporal features from historical ISTS observations, including multi-view embedding fusion and a Temporal-Variable Encoder. Further, we propose an Adaptive Query-Based Feature Extractor to compress MLLM token embeddings while preserving useful knowledge, which in turn reduces computational costs. In addition, a Multimodal Alignment module with Modality-Aware Gating is designed to alleviate the modality gaps. Extensive experiments on real data offer insight into the effectiveness of the proposed solutions.
