# Robust Scene Transfer for PointGoal Navigation via Privileged Sensor Guided Contrastive Learning

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Amirhossein Zhalehmehrabi, Tiziano Tezze, Alberto Castelini, Alessandro Farinelli　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.05506)

------

arXiv:2606.05506v2 Announce Type: replace

Abstract: We propose a sensor-guided adaptive contrastive learning framework for visual representation learning in PointGoal navigation. During training, privileged LiDAR sensing guides the contrastive objective through a geometry-aware similarity metric and adaptive temperature scaling, encouraging visual embeddings to capture navigation-relevant structure rather than scene-specific appearance. The resulting encoder is pretrained independently, frozen, and used as the perceptual backbone for reinforcement learning, decoupling representation learning from policy optimization. We further introduce a cross-stage domain mismatch between representation pretraining and policy learning to suppress environment-specific shortcuts and promote reliance on task-relevant features.

Extensive experiments in high-fidelity simulation demonstrate that our approach significantly improves policy-level scene transfer across diverse indoor and outdoor environments. At deployment, the agent relies only on monocular RGB observations together with standard task-related inputs such as goal position and proprioceptive signals, without access to LiDAR or other privileged sensors. Our method outperforms large pretrained vision models and standard contrastive baselines under severe appearance and semantic shifts. We also release a multimodal dataset to support future research on privileged-guided visual representation learning for navigation. The code is available at:
