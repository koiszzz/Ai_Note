# Breaking the Curse of Multilinguality in Many-to-Many Speech-to-Text Translation via a Resource-Aware Mixture of Speech Encoders

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yexing Du, Kaiyuan Liu, Youcheng Pan, Bo Yang, Chengpeng Fu, Yu Wang, Ming Liu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04586)

------

arXiv:2608.04586v2 Announce Type: replace-cross

Abstract: Multimodal large language models (MLLMs) have achieved significant success in speech-to-text translation (S2TT). However, when processing multilingual speech inputs, a single speech encoder shared across all languages suffers from the curse of multilinguality: languages at different resource levels compete for limited representation capacity, leading to strong high-resource performance but substantial degradation on low-resource speech. To address this problem and improve multilingual consistency, we propose MSRT, a novel framework built around a resource-aware Mixture of Speech Encoders (MoSE). MoSE uses an explicit language router to assign each utterance to an appropriate expert encoder. A frozen expert preserves high-resource language capabilities, while a trainable expert adapts to and specializes in medium- and low-resource languages. We further introduce a five-stage curriculum learning strategy that substantially reduces data dependence, requiring only 10 hours of paired S2TT data per language for effective alignment. We conduct extensive experiments on 45 languages, systematically evaluating all $45 \times 44$ translation directions. Our 4B-parameter model achieves state-of-the-art performance, outperforming substantially larger baselines. Empirical analyses show that MoSE improves high-, medium-, and low-resource languages simultaneously, with the largest gains on low-resource speech, thereby breaking the curse of multilinguality without compromising high-resource performance. To support future multilingual S2TT research, we release our code and models.
