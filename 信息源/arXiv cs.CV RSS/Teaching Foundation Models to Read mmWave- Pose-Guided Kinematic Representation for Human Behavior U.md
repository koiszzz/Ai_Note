# Teaching Foundation Models to Read mmWave: Pose-Guided Kinematic Representation for Human Behavior Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Duo Zhang, Zhehui Yin, Zhiyun Yao, Haotong Qin, Xusheng Zhang, Hongliu Yang, Jianyu Sun, Junzhe Wang, Zizhou Fan, Michele Magno, Daqing Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04127)

------

arXiv:2608.04127v1 Announce Type: new

Abstract: Large language model agents need to perceive human behavior in physical environments. Millimeter-wave (mmWave) radar provides a privacy-friendly and contactless sensing modality, but radar observations are difficult to align with language. Existing radar-language methods often rely on synthetic data or lack explicit supervision for human body structure and motion. We present mmMind, a radar-language model that uses synchronized 3D pose as training-only supervision. A spatio-temporal radar encoder is pretrained to capture body configuration and motion dynamics, after which the pose head is removed so that inference requires radar alone. The learned radar representations are then aligned with an LLM for behavior captioning and spatio-temporal question answering. We also introduce mmMind-Bench, a real-world mmWave-language benchmark containing 17.9 hours of recordings from 23 participants across seven indoor environments. Experiments on captioning, question answering, and unseen-action generalization show that mmMind consistently outperforms existing radar-language baselines, while ablations confirm the importance of pose-guided pretraining.
