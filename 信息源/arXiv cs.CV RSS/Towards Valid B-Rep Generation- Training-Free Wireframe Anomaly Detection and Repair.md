# Towards Valid B-Rep Generation: Training-Free Wireframe Anomaly Detection and Repair

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jingyu Wu, Youcheng Cai, Tengyu Luo, Ligang Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04955)

------

arXiv:2608.04955v1 Announce Type: new

Abstract: Multi-stage boundary representation (B-Rep) generation leverages intermediate wireframes to synthesize CAD models. However, geometric and topological risks in these wireframes -- such as self-intersections, edge collapses, and disconnected vertices -- can propagate to invalid final B-Reps. Mitigating such failures by retraining large generative models is computationally prohibitive. We propose Wireframe Detection and Repair (WDR), a training-free framework that intervenes at the intermediate wireframe stage to improve downstream B-Rep validity. WDR features a Geometric-Topology Anomaly Detector (GTAD) that combines parallel VLM-based coarse screening with geometric and topological detectors to predict downstream invalidity risk and route generation to dedicated branches. An Energy-Guided Geometric-Topology Repair (EGGTR) module then performs detector-triggered guided regeneration through geometry and topology branches. By scaling test-time computation via Energy-Guided Resampling and training-free guidance for diffusion models, WDR can be integrated into autoregressive and diffusion pipelines without retraining. Extensive experiments demonstrate consistent improvements in kernel-checked validity while largely retaining the measured diversity and distributional quality of synthesized CAD models. The code will be made publicly available upon acceptance.
