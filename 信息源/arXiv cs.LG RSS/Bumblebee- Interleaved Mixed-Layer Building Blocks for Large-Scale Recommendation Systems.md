# Bumblebee: Interleaved Mixed-Layer Building Blocks for Large-Scale Recommendation Systems

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：David Bauer, Cancan Zhang, Wenshun Liu, Xiaoyi Zhang, Weijia Liu, Wanli Ma, Yue Weng, Wei Li, Rui Li, Jing Qian, Huayu Li, Xiaoyi Liu, Linhong Zhu, Jerry Fu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2607.24804)

------

arXiv:2607.24804v2 Announce Type: replace-cross

Abstract: Recommendation systems have undergone significant transformations in the past years. The transition from traditional feature interaction modules to generative next-action prediction has pushed the boundaries of personalized content. Developments have largely evolved along two separate tracks. Sequence modeling approaches on the one hand and feature interaction methods on the other. In this paper, we introduce Bumblebee, a recommendation architecture that addresses the lack of interaction between the two directions through an interleaved, stackable block design. Each block implements a micro-pipeline of layers combining sequence personalization, attention-based encoding, and feature crossing into a self-contained unit. Every block produces a joint representation of both feature modalities which is consumed by the next block in the sequence. This mechanism encourages early and repeated mixture of modalities and enriches downstream features with additional contextual information. Residual connections between blocks create cross-modal information pathways and yield additional predictive performance without adding additional parameters. Blocks can be specialized by selectively dropping components, enabling flexible trade-offs between quality and throughput. We evaluate our approach on large-scale industrial data and show consistent improvements over comparable baseline models across several classification and regression tasks. Furthermore, we conduct ablation studies to confirm that the interleaved composition itself is the primary driver of these improvements. Our results suggest that interleaving heterogeneous functional units, rather than composing deep stacks, is a promising paradigm for future-generation recommendation architectures.
