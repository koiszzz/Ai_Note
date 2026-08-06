# Towards Physics of Multimodal Pretraining: Knowledge Flow, Modality Synergy, Early Unification, and Recipes

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Junlin Han, Shengbang Tong, David Fan, Minghao Chen, Philip Torr, Filippos Kokkinos, Mike Lewis　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05000)

------

arXiv:2608.05000v1 Announce Type: new

Abstract: Vision offers a critical axis for advancing foundation models, driving a shift towards natively unified multimodal pretraining. Despite this momentum, the design space and the fundamental mechanisms of how modalities interact during unified training remain underexplored. We provide empirical clarity through a systematic exploration of multimodal pretraining. Our controlled experiments on both synthetic and large-scale real-world datasets yield four key insights into the physics of multimodal pretraining: (i) Knowledge Flow: We disentangle how language, visual understanding, and visual generation transfer knowledge across modalities, revealing distinct patterns of influence and asymmetry; (ii) Synergy vs. Competition: We show that data "complexity" largely determines whether modalities are synergistic, identify architectural choices that promote synergy: such as shared attention and normalization with modality-specific feed-forward layers, and find that these behaviors generalize across different visual tokenizer designs; (iii) Early Unification: Unifying modalities from the very early stages and training them jointly is shown to be more effective than late alignment or sequential training. This process uncovers a vision laziness phenomenon, where delayed integration leads models to rely on language priors; (iv) Recipes: We derive efficient pretraining recipes that achieve strong generative performance using only 5% of the compute budget. These core findings are subsequently validated at scale by training multiple 13.5B MoE models on 2T tokens. We hope this study provides a principled foundation for understanding and scaling multimodal pretraining.
