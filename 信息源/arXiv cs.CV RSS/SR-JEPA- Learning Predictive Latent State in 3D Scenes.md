# SR-JEPA: Learning Predictive Latent State in 3D Scenes

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zihan Zhou, Qifu Wen, Xi Zeng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05774)

------

arXiv:2608.05774v1 Announce Type: new

Abstract: Joint-embedding predictive architectures learn by predicting latent representations of missing observations, yet many masked JEPAs are evaluated primarily through the encoders they produce. We ask what a trained predictive pathway itself infers when an entire entity is absent from a native 3D scene. We introduce SR-JEPA, a point-native JEPA for scene-scale point clouds whose original frozen predictive pathway can be queried at a supplied location. At evaluation, every point of one object is removed before encoding and replaced by the same shape-free 32-point query at its centroid. Training uses only self-contained 3D EMA targets: no reconstruction, semantic labels, language, or lifted 2D features. On 5,953 held-out ARKitScenes objects, the imputed latent reaches 43.13% semantic-identity macro accuracy, 22.18 points above the strongest floor. Randomizing the prediction path removes 9.78 points, while substituting matched donor context removes 21.98 points. On 8,570 Sr3D support pairs, the full latent reaches 41.15 AP; identity decoded from the missing-object latent, combined with anchor identity and geometry, reaches 39.37 AP, leaving an unresolved 1.78-point residual. These results reveal a queryable, compositional 3D predictive state: the model completes context-dependent entity content, which downstream computation combines with metric geometry.
