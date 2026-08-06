# TSM-Pose: Topology-Aware Learning with Semantic Mamba for Category-Level Object Pose Estimation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jinshuo Liu, Bingtao Ma, Junlin Su, Guanyuan Pan, Beining Wu, Cheng Yang, Jiaxuan Lu, Chenggang Yan, Shuai Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.16954)

------

arXiv:2604.16954v2 Announce Type: replace

Abstract: Category-level object pose estimation is fundamental for embodied intelligence, yet achieving robust generalization to unseen instances remains challenging. However, existing methods mainly rely on simple feature extraction and aggregation, which struggle to capture category-shared topological structures and conduct semantic keypoint modeling, limiting their generalization. To address these, we propose a \textbf{T}opology-Aware Learning with \textbf{S}emantic \textbf{M}amba for Category-Level \textbf{P}ose Estimation framework (TSM-Pose). Specifically, we introduce a Topology Extractor to capture the global topological representation of the point cloud, which is integrated into local geometry features and enables robust category-level structural representation. Simultaneously, we propose a Mamba-based Global Semantic Aggregator that injects semantics priors into keypoints to enhance their expressiveness and leverages multiple TwinMamba blocks to model long-range dependencies for more effective global feature aggregation. Extensive experiments on three benchmark datasets (REAL275, CAMERA25, and HouseCat6D) demonstrate that TSM-Pose outperforms existing state-of-the-art methods.
