# PADFormer: Pose-agnostic Anomaly Detection from Sparse View Images

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Ruiqi Wang, Yiming Qian, Fenggen Yu, Yuxuan Lu, Dakuo Wang, Hao Zhang, Jing Huang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04210)

------

arXiv:2608.04210v1 Announce Type: new

Abstract: Pose-agnostic Anomaly Detection (PAD) remains challenging as anomalies can appear under arbitrary viewpoints, requiring methods to handle significant pose variations. Existing approaches rely on complex 3D reconstruction, which are computationally expensive and require extensive multi-view data. We propose PADFormer, a novel image-space approach that leverages Vision Transformer (ViT) to directly reconstruct anomaly-free versions of query images while preserving pose information. Our key insight is to adapt cross-view masked reconstruction for anomaly detection through training exclusively on normal data, combined with dynamic patch selection and spatial alignment mechanisms that enable effective learning from sparse reference views under significant pose variations. During inference, we perform multiple forward passes with different masking patterns to generate an ensemble of anomaly-free reconstructions, ensuring comprehensive coverage of the query image. Anomalies are detected by comparing these reconstructions with the query image. PADFormer achieves state-of-the-art results on the PAD benchmark while maintaining comparable performance on classic few-shot anomaly detection (FSAD) tasks, demonstrating superior efficiency and generalization without requiring 3D reconstruction.
