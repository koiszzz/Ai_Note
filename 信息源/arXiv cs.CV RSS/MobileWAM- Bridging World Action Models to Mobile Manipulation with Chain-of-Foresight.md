# MobileWAM: Bridging World Action Models to Mobile Manipulation with Chain-of-Foresight

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zehua Fan, Junjie He, Wenxuan Song, Xi Wang, Wenqi Lyu, Linge Zhao, Fuhao Li, Zihan You, Yifei Yang, Kaiming Xu, Qi Jiang, Yue Jiang, Haoang Li, Cheng Chi, Bailin Li, Yan Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04657)

------

arXiv:2608.04657v1 Announce Type: new

Abstract: World action models (WAMs) built on video generation backbones are a rising recipe for robot learning, yet remain confined to tabletop manipulation. Mobile manipulation demands simultaneous locomotion and whole-body manipulation amid scene-scale dynamics, yet is still dominated by dynamics-blind visual encoders with hand-crafted coordination. We bridge this gap with MobileWAM, a mixture-of-transformers architecture that fuses a pretrained video diffusion transformer with a lightweight action expert through layerwise joint attention, translating internet-scale motion priors into whole-body control. To reconcile the heterogeneous dynamics of moving and manipulating, each feed-forward layer of the action expert becomes a three-expert mixture of shared, locomotion, and manipulation experts, softly routed by the motion intent in the action tokens. To densify supervision, we further propose Chain-of-Foresight (CoF): intermediate representations sequentially predict a chain of future latent chunks, each step conditioned on its predecessor. CoF pairs naturally with our decoupled video--action denoising scheme. At deployment, the WAM serves as a pure current-frame encoder; foresight acts only through gradients, so at inference the foresight chain and video generation are discarded, leaving only policy-level cost. MobileWAM surpasses state-of-the-art mobile manipulation policies on ManiSkill-HAB and fine-tunes to a real ARX Lift2 mobile manipulator across diverse tasks with strong generalization. Code will be released soon.
