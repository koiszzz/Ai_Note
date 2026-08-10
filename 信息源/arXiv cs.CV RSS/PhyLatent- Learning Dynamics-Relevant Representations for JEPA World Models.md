# PhyLatent: Learning Dynamics-Relevant Representations for JEPA World Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xi Zeng, Haojie Ren, Ziying Song　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05720)

------

arXiv:2608.05720v1 Announce Type: new

Abstract: We propose PhyLatent, a dynamics-relevant training objective for JointEmbedding Predictive Architecture (JEPA) world models. Our key observation is that preventing global latent collapse does not ensure that a representation preserves physical states and action consequences. We identify three failure modes in JEPA world models: physical invariance collapse, physical identifiability collapse, and counterfactual dynamics collapse. PhyLatent addresses them through three training pathways: physical invariance, physical identifiability, and counterfactual dynamics, implemented with physical state grounding, future representation alignment, static visual invariance, counterfactual branch separation, and latent denoising. On OGBench-Cube, PhyLatent reduces the three failure rates from 15.60%, 6.71%, and 8.41% to 7.53%, 0.95%, and 4.62%, respectively, and improves model predictive control (MPC) success from 70.0% to 78.1%. With the same architecture and planner, it further improves success from 81.0% to 98.0% on TwoRooms and remains competitive on Reacher and PushT. These results show that global non-collapse alone is insufficient for learning a reliable JEPA worldmodel state space.
