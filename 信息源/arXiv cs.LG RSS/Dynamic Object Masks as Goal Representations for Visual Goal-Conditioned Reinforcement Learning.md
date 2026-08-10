# Dynamic Object Masks as Goal Representations for Visual Goal-Conditioned Reinforcement Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Fahim Shahriar, Cheryl Wang, Alireza Azimi, Gautham Vasan, Hany Hamed, Abhishek Naik, A. Rupam Mahmood, Colin Bellinger　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2510.06277)

------

arXiv:2510.06277v2 Announce Type: replace-cross

Abstract: Goal-conditioned reinforcement learning (GCRL) offers a unified way to pursue diverse tasks, yet most existing methods rely on state- or position-based goal representations that are unavailable in real-world robotics. Robots operating in warehouses, agriculture, or laboratory environments rarely have access to privileged goal states, object positions, or future observations, limiting the practicality of current GCRL approaches. We propose a dynamic mask-based goal representation that provides simple, object-agnostic visual cues for vision-based navigation and manipulation. At each timestep, an image-based goal detector produces a goal mask using standard image processing, task-specific object recognizers, or pretrained detectors such as Detic or Grounding DINO. These masks specify the spatial target without requiring privileged goal states, enabling broad applicability and strong generalization to unseen objects. Our method improves stability and sample efficiency in GCRL, achieving a 99% success rate in reaching both training and novel objects with Franka and UR10e robotic arms and faster learning in simulated navigation. We further demonstrate learning from scratch and sim-to-real transfer on both robotic arms, highlighting the effectiveness of our approach for real-world RL tasks. Our code is available at https://github.com/fahimfss/GCRL.
