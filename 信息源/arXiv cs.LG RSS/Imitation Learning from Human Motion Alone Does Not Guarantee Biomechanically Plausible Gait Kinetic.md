# Imitation Learning from Human Motion Alone Does Not Guarantee Biomechanically Plausible Gait Kinetics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xinyi Liu, Jangwhan Ahn, Edgar Lobaton, Jennie Si, He Huang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2603.12408)

------

arXiv:2603.12408v3 Announce Type: replace-cross

Abstract: Motion imitation learning (IL) is increasingly used in robotics and human gait modeling, yet its ability to recover biomechanically consistent joint moments without explicit kinetic information remains unclear. In this study, we examined whether motion imitation alone can estimate reasonable biological joint moments. We compare motion-only IL (MOIL) against a kinetics-aware IL (KAIL) framework that incorporates ground reaction forces (GRF) and center of pressure (CoP) in imitation rewards, with an ablation study to examine the contribution of each kinetic term. Experiments were conducted using walking data from a non-disabled participant at three speeds (0.9, 1.2, and 1.5 m/s). While both MOIL and KAIL achieved comparable kinematic tracking accuracy, MOIL exhibited substantially larger errors in GRF, CoP, and joint moment estimates relative to inverse dynamics references. In contrast, KAIL produced kinetics more consistent with biomechanical values. These findings highlight a fundamental limitation of MOIL approaches, which may lead to erroneous interpretations of gait biomechanics and downstream applications by failing to estimate consistent human-like gait kinetics.
