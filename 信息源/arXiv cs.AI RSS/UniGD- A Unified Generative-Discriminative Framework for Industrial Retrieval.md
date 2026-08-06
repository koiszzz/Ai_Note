# UniGD: A Unified Generative-Discriminative Framework for Industrial Retrieval

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shujie Ji, Yawei Kong, Yilin Zhao, Li Wang, Xialong Liu, Peng Jiang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03150)

------

arXiv:2608.03150v1 Announce Type: new

Abstract: Generative retrieval (GR) is a promising paradigm for industrial search advertising, yet its deployment is constrained by strict relevance and latency requirements. Existing systems cascade GR with an independent relevance model, decoupling the generative likelihood objective from query-ad relevance discrimination, which compromises effectiveness and increases serving costs. We propose a Unified Generative-Discriminative framework (UniGD) that integrates retrieval and relevance scoring within a single model. To mitigate gradient interference in joint optimization, UniGD introduces Conflict-Aware Gradient Enhancement (CAGE) to adaptively coordinate the two objectives. UniGD further designs a Codebook-Anchored Representation Module (CAM) that anchors item representations to frozen hierarchical codebooks distilled from a multimodal pretrained model, thereby endowing them with rich and generalizable semantic priors. For heterogeneous short-video, product, and live-stream ads, UniGD proposes Heterogeneous Ad-material Modeling (HAM), which captures cross-type semantic commonality over a shared backbone while preserving type-specific modeling capacity. Online AB tests on Kuaishou search advertising platform show that UniGD raises ad revenue by 5.78%, reduces inference latency by 33%, and improves discriminative relevance estimation. On NQ320K and MS300K, UniGD improves Recall@10 over the strongest reproduced GR baseline by 8.44% and 3.19%, respectively.
