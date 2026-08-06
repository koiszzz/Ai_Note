---
published: 2026-08-05
title: "凸包邻域光滑对偶泛化：控制离线 RL 中的局部校正传播"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Convex-Hull-Neighborhood Smooth Dual Generalization- Controlling Local Correction Propagation in Off.md"
source_note: "[[信息源/arXiv cs.LG RSS/Convex-Hull-Neighborhood Smooth Dual Generalization- Controlling Local Correction Propagation in Off]]"
source_sha256: ae53213190c262448d1e4f6191825e265f3a016397f441f250165704cc0d0d9f
original_url: "https://arxiv.org/abs/2608.03108"
processed: 2026-08-05
language: zh-CN
---

# 凸包邻域光滑对偶泛化：控制离线 RL 中的局部校正传播

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yi Yang、Zhennan Chen、Mingfeng Lv 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03108)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Convex-Hull-Neighborhood Smooth Dual Generalization- Controlling Local Correction Propagation in Off]]|查看原始文件]]

## 摘要

- 提出凸包邻域光滑对偶泛化（CSDG）：把 Bellman 备份表达为样本内值目标加 CHN 局部校正——该表述使泛化贡献显式，并把它与样本内参考路径分离；校正通过对不同扰动半径采样的样本内导向与样本外导向候选做光滑获得；混合系数 λ 缩放其对每次备份的贡献，递归折扣保持 γ。
- 离线强化学习（offline RL）可受益于附近分布外（OOD）动作，但这些动作处的估计误差可能被自举放大；现有正则化与局部泛化方法通过通常分离的机制控制许可 OOD 区域或泛化目标的影响。
- 有界性与固定扰动核下推导精确单步校正恒等式、时变迭代界与仅依赖不动点处分支差异的不动点界；刻画理想化算子诱导的隐式策略并给出条件非退化准则。
- 实际算法用非对称有界噪声与 expectile 回归近似这些量，无需精确支撑分类或额外悲观 OOD 惩罚；Gym-MuJoCo 与 AntMaze 实验显示强聚合性能与稳定值估计；代码：https://github.com/YOUNG-fnxm/CSDG

## 正文

论文编号：arXiv:2608.03108v1（更新类型：new）。以下为摘要全文翻译。

离线强化学习（offline RL）可以受益于附近的分布外（OOD）动作，但这些动作处的估计误差可能被自举放大。现有的正则化与局部泛化方法通过通常分离的机制控制许可的 OOD 区域或泛化目标的影响。我们提出凸包邻域光滑对偶泛化（Convex Hull Neighborhood Smooth Dual Generalization，CSDG）：把 Bellman 备份表达为一个样本内值目标加一个 CHN 局部校正。这种表述使泛化贡献显式，并把它与样本内参考路径分离。该校正通过对在不同扰动半径采样的、样本内导向与 OOD 导向的候选做光滑获得。一个混合系数 λ 缩放其对每个备份的贡献，而递归折扣保持 γ。在有界性与固定扰动核下，我们推导一个精确的单步校正恒等式、一个时变迭代界，以及一个仅依赖不动点处分支差异的不动点界。我们进一步刻画理想化算子诱导的隐式策略，并给出一个条件非退化准则。实际算法用非对称有界噪声与 expectile 回归近似这些量，无需精确的支撑分类或额外的悲观 OOD 惩罚。在 Gym-MuJoCo 与 AntMaze 上的实验显示强聚合性能与稳定的值估计。代码可在 https://github.com/YOUNG-fnxm/CSDG 获取。

## 关键词

#离线强化学习 #局部泛化 #Bellman备份 #分布外动作
