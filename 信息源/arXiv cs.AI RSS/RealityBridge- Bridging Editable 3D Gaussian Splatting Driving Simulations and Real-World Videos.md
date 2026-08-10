# RealityBridge: Bridging Editable 3D Gaussian Splatting Driving Simulations and Real-World Videos

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhenhua Wu, Yun Pang, Mingkun Chang, Yuwei Ning, Liangzhi Wang, Yi Xiao, Guanbin Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.16278)

------

arXiv:2606.16278v3 Announce Type: replace-cross

Abstract: Long-tail hazardous scenarios are essential for safety-oriented autonomous driving, yet they are difficult to collect at scale. Editable 3D Gaussian Splatting (3DGS) simulation offers a scalable alternative through real-scene reconstruction and controllable editing. However, edited 3DGS-rendered videos often exhibit a significant Sim-to-Real gap, manifested as rendering artifacts, degraded foreground assets, illumination mismatch, and temporal flickering. Addressing these coupled defects requires jointly restoring local appearance, harmonizing edited content, and maintaining temporal consistency, whereas existing methods typically address only a subset of these requirements. To fill this gap, we propose RealityBridge, a video restoration and harmonization framework that converts edited 3DGS renderings into realistic driving footage while preserving simulator-defined structure, edits, and dynamics. RealityBridge conditions a video foundation model on complementary modality signals, with a lightweight GateNet adaptively controlling their injection across backbone blocks. We further develop a task-oriented curation pipeline to construct training data, and design a four-stage supervised training strategy followed by reward-guided post-training. Extensive experiments demonstrate that RealityBridge outperforms existing methods in restoration and harmonization while preserving strong temporal consistency.
