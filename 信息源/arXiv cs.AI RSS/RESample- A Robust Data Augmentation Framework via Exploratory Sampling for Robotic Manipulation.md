# RESample: A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuquan Xue, Guanxing Lu, Zhenyu Wu, Chuanrui Zhang, Bofang Jia, Zhengyi Gu, Ziwei Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2510.17640)

------

arXiv:2510.17640v4 Announce Type: replace-cross

Abstract: Vision-Language-Action (VLA) models have shown strong manipulation capability when trained with large-scale imitation learning datasets. However, these datasets that predominantly consist of successful trajectories rarely provide the corrective supervision required when execution deviates from standard demonstrations. During deployment, these physical deviations lead to the distributional shift that drives policy to failure scenarios, yet missing failure recovery data prevents policy from correcting these execution deviations. To address this failure recovery problem, we propose a coverage-guided data augmentation framework RESample to actively supplement demonstration datasets for failure recovery. Specifically, to guide the augmentation and generate failure modes that possibly appear in the real world, RESample trains a conservative coverage function to identify failure cases that reside within the actual data distribution but are missing in the standard successful demonstrations. Guided by the evaluated coverage discrepancy, we perform exploratory sampling to actively sample exploration behaviors followed by recovery actions, extending the coverage of training data with failure recovery trajectories. With the augmented trajectory, the refined policy, which deviated in real settings, can recover from failure. Experiments on the LIBERO benchmark and real-world manipulation tasks show that RESample consistently improves policy success rates, achieving up to 12% absolute gain with no more than 20% additional samples.
