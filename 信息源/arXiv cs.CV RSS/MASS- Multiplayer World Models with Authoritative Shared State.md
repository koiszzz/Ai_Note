# MASS: Multiplayer World Models with Authoritative Shared State

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Ziqi Cai, Siqi Yang, Yimu Wang, Zixian Gao, Yunheng Liu, Shuchen Weng, Erwin Wu, Kaipeng Zhang, Boxin Shi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06257)

------

arXiv:2608.06257v1 Announce Type: new

Abstract: Current video world models struggle in multiplayer environments because they entangle world state with view-dependent visual latents, leading to redundant compute, view inconsistencies, and poor scalability. We propose MAS (Multiplayer world models with Authoritative Shared State) to resolve this limitation. Inspired by multiplayer game architectures, MAS disentangles world dynamics and view rendering. A learned Logic Engine advances a global, authoritative typed state from joint actions without any hand-written transition function, acting as the sole recurrent memory and synchronization reference. From this shared state, a learned Rendering Engine generates independent and consistent views for any requested camera on demand. This explicit disentangling allows MAS to achieve superior state accuracy and lower cross-view inconsistency compared to state-of-the-art multi-view baselines on a matched multiplayer Snake benchmark. It advances predicted worlds with 1,024 concurrent players for 10,000 recurrent steps. Our results show that explicit, authoritative state modeling provides a practical foundation for scalable and consistent multi-agent world simulation.
