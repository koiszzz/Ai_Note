# Design-Time Optimization of Deep Neural Networks for Intermittent Learning on Microcontrollers

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jakob Schubert, Maximilian Kasper, Maximilian Linke, Benedict Herzog, Mark Deutel, Axel Plinge, Dominik Seuss, Christopher Mutschler　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03589)

------

arXiv:2608.03589v1 Announce Type: new

Abstract: We present a method for designing deep neural networks (DNNs) for intermittent, energy-autonomous, on-device learning on microcontroller units (MCUs). In mobile applications where the energy can run out, e.g., when solar-powered, executing artificial intelligence (AI) faces a technical issue as learning can be interrupted at any time. Our approach combines a hardware-aware energy prediction model with multi-objective optimization (MOO), enabling offline DNN optimization at the design stage without repeated deployment and online testing on the target MCU. Our proposed energy predictor estimates per-layer energy consumption for both DNN inference and training, including the intermittent checkpointing overhead, based on implementation-specific compute and memory features extracted from the DNN model. We validate our approach using autoencoders for anomaly detection on a Cortex-M4 MCU, where our predictor achieves a weighted absolute percentage error of 16.6%, which is sufficient for reliable architecture selection under intermittency constraints. As a result, this work bridges the gap between MOO, automated DNN design, deployment on energy-harvesting systems, and intermittent learning, truly enabling autonomous AI at the edge.
