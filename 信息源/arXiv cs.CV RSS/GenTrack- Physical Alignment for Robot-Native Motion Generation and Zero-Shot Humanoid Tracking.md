# GenTrack: Physical Alignment for Robot-Native Motion Generation and Zero-Shot Humanoid Tracking

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zeyu Ling, Xinyao Yu, Renye Yan, Jikang Cheng, Zhanke Wang, Qing Shuai, Changqing Zou　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.01410)

------

arXiv:2608.01410v2 Announce Type: replace-cross

Abstract: General-purpose humanoid trackers can execute diverse references, but their zero-shot coverage depends on large embodied corpora that are costly to extend. Text-to-motion generators offer scalable supervision, yet models trained on human motion or retargeted data inherit a gap between kinematic plausibility and robot executability. Existing one-way pipelines fix either the generated corpus or the reward tracker. We introduce GenTrack, an online generator--tracker framework that alternates execution-grounded, group-relative generator alignment with tracker training on newly generated references; anchoring and rehearsal constrain drift. On Unitree G1, we evaluate GenTrack with ProtoMotions and SONIC backbones across three zero-shot tracking splits including public AMASS and LAFAN benchmarks, and a private out-of-distribution test set of 1,024 prompt-motion pairs in the wild. The online co-training strategy consistently produces generators that output more robot-executable motions with strong semantic alignment, and trackers with markedly broader zero-shot coverage and improved tracking accuracy, especially on out-of-distribution references. These results demonstrate that joint online post-training effectively narrows the executability gap between retargeted references and robot-native motion, advancing zero-shot humanoid control without additional data collection and beyond the limitations of a static reference pool.
