# HOPE: Hand-Object Pressure Estimation from Monocular Videos

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Subin Jeon, Byungjun Kim, Hanbyul Joo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06192)

------

arXiv:2608.06192v1 Announce Type: new

Abstract: Estimating physical pressure from vision is essential for understanding contact-rich hand-object interaction. However, prior vision-based pressure estimation methods are largely limited to planar surfaces and single image input, making them difficult to apply to dynamic hand-object interaction with diverse objects. We instead formulate pressure estimation as a hand-centric video prediction problem with monocular video as input. This formulation predicts temporally evolving per-vertex normal pressure and contact directly on the hand mesh, yielding a unified output space independent of object shape and sensor layout. Building on this formulation, we propose \textbf{HOPE}, a framework with two key components. First, we lift tactile-glove pressure, planar-sensor pressure, and distance-based hand-object contact annotations into a shared hand vertex space, allowing bare-hand contact data to regularize pressure learning where metric labels are unavailable. Second, we introduce a vertex-anchored video transformer that treats each vertex as a persistent token, aggregates visual features and hand pose over time, and uses a contact-gated pressure head to enforce that pressure vanishes without contact. Experiments on OpenTouch, PressureVisionDB, and hand-object contact benchmarks validate HOPE across object-pressure, surface-pressure, and contact-supervised HOI settings. Despite using metric pressure supervision primarily from gloved-hand videos, HOPE generalizes to bare-hand egocentric and in-the-wild videos, producing joint contact and pressure predictions beyond the scope of contact-only or planar-pressure baselines.
