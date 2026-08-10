# EmoWorld: A Decoupled Affective Field for Controllable Emotional Video Generation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Bingyuan Wang, Baistan Zhyldyzbekov, Kunyu Feng, Zeyu Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06231)

------

arXiv:2608.06231v1 Announce Type: new

Abstract: Emotion shapes how viewers interpret a scene, yet existing video generators entangle global atmosphere, affect-bearing semantic cues, and temporal progression within a single text condition. We present EmoWorld, a framework that decouples these factors within a frozen flow-matching video diffusion transformer (Video DiT). A one-time preparation stage extracts layer-specific affect directions and a reusable cue library from geometry-preserving neutral and emotion-edited panoramas. At inference, Visual Atmosphere Steering (VAS) injects atmosphere directions into hidden states, Semantic Affective Steering (SAS) isolates a separately scalable prompt residual for semantic cues, and Temporal Affective Steering (TAS) interpolates endpoint residual fields across denoising and video time. On Wan2.2, VAS improves target-emotion alignment by 19% while reducing a temporal-fluctuation proxy by 48%; SAS improves target-emotion alignment by 37% and increases detected affect-bearing cues by 36%; and TAS improves transition monotonicity by 15% over the strongest baseline. EmoWorld is evaluated across 27 emotion categories in text-to-video and image-to-video settings, demonstrates portability across multiple Video-DiT backbones, and supports camera-conditioned composition without updating generator parameters.
