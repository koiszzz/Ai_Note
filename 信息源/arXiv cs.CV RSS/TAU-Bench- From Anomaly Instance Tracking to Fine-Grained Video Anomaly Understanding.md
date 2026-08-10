# TAU-Bench: From Anomaly Instance Tracking to Fine-Grained Video Anomaly Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Kepeng Yang, Dongxuan Liu, Rongxin Gao, Zixin Su, Rui Wu, Shuzhao Xie, Chenxin Li, Panwang Pan, Yuzhi Huang, Yue Huang, Jingyan Jiang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05699)

------

arXiv:2608.05699v1 Announce Type: new

Abstract: Humans understand anomalous events through a coherent perceptual process in which they identify the focal instance, follow its behavior as the event unfolds, and interpret why it violates the expectations of the surrounding scene. Video anomaly understanding (VAU) seeks to endow models with a similar capability, moving beyond deciding whether a video is anomalous toward explaining how the event develops and why it matters. Although recent vision--language models (VLMs) can generate detailed and plausible anomaly descriptions, their semantic fluency does not ensure that these interpretations remain grounded in the correct anomaly instance over time. Existing benchmarks typically evaluate tracking and semantic understanding through separate protocols, leaving such instance--semantic inconsistency largely unmeasured. We therefore introduce TAU-Bench, a track-centric benchmark for jointly evaluating anomaly instance tracking and fine-grained anomaly understanding. TAU-Bench contains 1,118 videos, 1,454 tracks, and 202,438 pixel-level masks spanning 49 event and 45 scene categories, together with track-centric annotations that connect instance-level identification, event-level understanding, and scene-level reasoning. To build TAU-Bench at scale, we developed an automated data engine integrating anomaly suitability filtering, anomaly instance track construction, hierarchical caption annotation, and human quality control. Evaluations across representative VLM families show that models producing plausible anomaly interpretations may still fail to localize and track the correct instance reliably, revealing a persistent gap between semantic reasoning and visual grounding. These findings therefore highlight instance-grounded evaluation as an important step toward more faithful and reliable VAU systems.
