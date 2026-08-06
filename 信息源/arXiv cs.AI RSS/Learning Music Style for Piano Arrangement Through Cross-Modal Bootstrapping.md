# Learning Music Style for Piano Arrangement Through Cross-Modal Bootstrapping

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jingwei Zhao, Gus Xia, Ziyu Wang, Ye Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.03050)

------

arXiv:2608.03050v1 Announce Type: cross

Abstract: What is music style? Though often described using text labels such as "swing," "classical," or "emotional," the real style remains implicit and hidden in concrete music examples. In this paper, we introduce a cross-modal framework that learns implicit music styles from raw audio and applies them to symbolic music generation. Inspired by BLIP-2, our model leverages a Querying Transformer (Q-Former) to extract style representations from a large, pre-trained audio language model (LM), and further applies them to condition a symbolic LM for generating piano arrangements. We adopt a two-stage training strategy: contrastive learning to align auditory style with symbolic expression, followed by generative modeling for music arrangement. Our model generates piano performances jointly conditioned on a lead sheet (content) and a reference audio example (style), enabling controllable and stylistically faithful arrangement. Experiments demonstrate the effectiveness of our approach in piano cover generation, style transfer, and audio-to-MIDI retrieval, achieving substantial improvements in style-aware alignment and music quality.
