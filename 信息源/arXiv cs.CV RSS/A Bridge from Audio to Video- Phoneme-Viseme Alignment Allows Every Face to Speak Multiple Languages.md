# A Bridge from Audio to Video: Phoneme-Viseme Alignment Allows Every Face to Speak Multiple Languages

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zibo Su, Kun Wei, Jiahua Li, Jing Kong, Xu Yang, Cheng Deng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2510.06612)

------

arXiv:2510.06612v2 Announce Type: replace

Abstract: Speech-driven talking face synthesis (TFS) focuses on generating lifelike facial animations from speech input. Current TFS models perform well in English but struggle with non-English languages, producing inaccurate mouth shapes and rigid facial expressions. These limitations are mainly caused by English-dominated training datasets and the lack of cross-language generalization ability.To address these challenges, we propose Multilingual Experts (MuEx), a novel framework featuring a Phoneme-Guided Mixture-of-Experts (PG-MoE) architecture that employs phonemes and visemes as universal intermediaries to bridge the gap between audio and visual modalities, enabling lifelike multilingual TFS. We extract speech and visual features as phonemes and visemes, respectively, which represent the basic units of speech sounds and mouth movements, to alleviate linguistic differences and dataset bias.Furthermore, we introduce the Phoneme-Viseme Alignment Mechanism (PV-Align), which establishes robust cross-modal correspondences between phonemes and visemes to improve audiovisual synchronization. In addition, we construct a Multilingual Talking Face Dataset (MTFD) comprising 12 diverse languages with 95.04 hours of high-quality videos for training and evaluating multilingual TFS performance.Extensive experiments demonstrate that MuEx achieves superior performance across all languages in MTFD and exhibits effective zero-shot generalization to unseen languages without additional training.
