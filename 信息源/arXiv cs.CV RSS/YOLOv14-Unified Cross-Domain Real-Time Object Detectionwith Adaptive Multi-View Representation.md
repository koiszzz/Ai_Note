# YOLOv14:Unified Cross-Domain Real-Time Object Detectionwith Adaptive Multi-View Representation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jinling Jia, Jian Lu, Jone Yawl, Chenbin Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04720)

------

arXiv:2608.04720v1 Announce Type: new

Abstract: Real-time object detectors achieve remarkable accuracy under controlled conditions, yet degrade sharply on non-ideal inputs: fisheye distortion, game-rendered characters, aerial viewpoints, and 360{\deg} panoramas. We present YOLOv14, aunified detection framework addressing these challenges through four synergisticinnovations. (1) Deformable Area-Attention (D-AAttn) replaces rigid attentiongrids with learned 2D deformation fields, enabling adaptive sampling under geometric distortion. (2) Game2Real Domain Adaptation aligns rendered-game and photographic feature distributions via Adaptive Instance Normalization (AdaIN)and adversarial domain confusion, allowing game characters are detected as realhumans. (3) Multi-View Conditioning injects learned viewpoint embeddings intothe backbone with a cross-view contrastive loss that pulls same-class features fromdifferent perspectives closer. (4) An Adaptive Augmentation Policy automaticallyclassifies each input' scene type and routes to optimal augmentations, while a DynamicScaleRouter learns per-input feature pyramid weights. Together, YOLOv14achieves 49.1 mAP on COCO val2017 at 2.91 ms (T4 GPU), and delivers substantial gains on fisheye (+4.1 mAP), panorama (+6.6 mAP), drone (+6.4 mAP), andgame-character (+26.1 mAP) benchmarks
