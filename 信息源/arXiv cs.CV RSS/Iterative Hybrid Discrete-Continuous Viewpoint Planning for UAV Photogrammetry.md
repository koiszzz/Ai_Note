# Iterative Hybrid Discrete-Continuous Viewpoint Planning for UAV Photogrammetry

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Alan Grech, Daniel Pisani, Andre Grima, Carl James Debono, Saviour Formosa, Dylan Seychell　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05718)

------

arXiv:2608.05718v1 Announce Type: new

Abstract: Unmanned aerial vehicle (UAV) photogrammetry requires camera networks that provide sufficient surface coverage, image overlap, parallax, and resolution, yet conventional flight patterns are often poorly adapted to scene geometry resulting in local reconstruction errors. This paper proposes an iterative hybrid discrete-continuous viewpoint planning method for targeted UAV photogrammetry from a proxy reconstruction. The method scores sampled surface points using photogrammetric heuristics based on frontality, imaging distance, parallax, and multi-view observation count, while also evaluating the full viewpoint set in terms of visibility, pairwise overlap, and graph connectivity. Candidate viewpoints are generated around weakly observed regions, refined using clustered Covariance matrix adaptation evolution strategy (CMA-ES) optimisation, and removed when redundant. The final flight path combines close-range detail viewpoints with wider model-coverage viewpoints, balancing local reconstruction quality with global image-network robustness. Evaluation on three synthetic scenes shows that the proposed method improves both reconstruction accuracy and completeness compared with prior UAV path-planning methods.
