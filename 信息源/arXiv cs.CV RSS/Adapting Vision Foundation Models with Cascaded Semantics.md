# Adapting Vision Foundation Models with Cascaded Semantics

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xi Xiao, Xingjian Li, Cheng Han, Tianyang Wang, Lin Zhao, Yunbei Zhang, Guosheng Hu, Runmin Jiang, Xi Li, Xiao Wang, Min Xu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05393)

------

arXiv:2608.05393v1 Announce Type: new

Abstract: Prompt tuning, a leading parameter-efficient adaptation paradigm in NLP, has recently been extended to computer vision. Visual prompt tuning (VPT) adapts pre-trained vision transformers (ViTs) by updating a small set of additional prompt parameters. However, existing visual prompts are randomly initialized and do not exploit prior knowledge, such as instructions in NLP. We address this gap by injecting two complementary semantic priors into VPT. Fundamental image priors, including color, texture, and shape, are extracted with classical hand-crafted operators and injected into the input space, while self-attention maps provide instance-aware semantics in the feature space. We further propose a cascaded scheme that integrates both priors throughout ViT adaptation. Experiments on 34 challenging image classification datasets demonstrate superior downstream adaptation while tuning only 0.74% of ViT parameters. Project page: https://xixiaouab.github.io/Cascaded-Semantics/.
