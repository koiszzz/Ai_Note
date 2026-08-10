---
published: 2026-08-07
title: "RASP-QAOA：精确 QAOA 仿真的资源感知逐实例选择"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/RASP-QAOA- Resource-Aware Per-Instance Selection for Exact QAOA Simulation.md"
source_note: "[[信息源/arXiv cs.LG RSS/RASP-QAOA- Resource-Aware Per-Instance Selection for Exact QAOA Simulation]]"
source_sha256: ba1e24c891deb8b534c0a063673e3a9db1a894971f409ad4b7d8aad2bc3e467b
original_url: "https://arxiv.org/abs/2608.05646"
processed: 2026-08-07
language: zh-CN
---

# RASP-QAOA：精确 QAOA 仿真的资源感知逐实例选择

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Chih-Chung Hsu
> - **发布时间**：2026-08-07
> - **分类**：cs.ET
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05646)

## 摘要

- 精确 QAOA 仿真横跨若干计算表征，其有用区域随图结构、电路深度、精度与可用内存显著不同；只选后端名隐藏差异：可执行选择还固定表征、适配器、精度模式与内存策略。
- 引入 RASP-QAOA：对十个此类动作的逐实例选择器；先移除无法实现请求 QAOA 语义或执行要求的动作，再用实例特征排序剩余动作；学习支持外的动作由解析工作估计处理。
- 内容不相交 60 请求 H200 评估中，RASP-QAOA 在至少一个可采纳动作完成并验证的 31 个请求上全部成功；其中达到 27/31 top-1、31/31 top-2 选择，几何平均遗憾 1.051；失败惩罚 PAR10 分数为开发选定的 CUAOA 的 0.0396 倍（95% 区间 0.0085–0.1644）。
- 单独 30 请求交叉显示图结构改变 16 个决策并改进配对惩罚分数；depth-1 桩匹配梯度提升；证据支持 n≤35、p≤5 下资源感知表征选择，增益由表征特征驱动而非分类器复杂度。

## 正文

精确 QAOA 仿真横跨若干计算表征，其有用区域随图结构、电路深度、精度与可用内存显著不同。仅选择后端名会隐藏这些差异：可执行选择还固定表征、适配器、精度模式与内存策略。研究引入 RASP-QAOA，一个对十个此类动作的逐实例选择器。它首先移除无法实现请求 QAOA 语义或执行要求的动作，然后用实例特征排序剩余动作；学习支持外的动作由解析工作估计处理。在内容不相交的 60 请求 H200 评估中，RASP-QAOA 在至少一个可采纳动作完成并验证的 31 个请求上全部成功。在该集合内达到 27/31 的 top-1 与 31/31 的 top-2 选择，几何平均遗憾 1.051。其失败惩罚 PAR10 分数是开发选定 CUAOA 的 0.0396 倍（95% 区间 0.0085–0.1644）。单独 30 请求交叉显示，图结构改变 16 个决策并改进配对惩罚分数，而 depth-1 桩匹配梯度提升。证据支持 n≤35、p≤5 下资源感知表征选择，增益由表征特征而非分类器复杂度驱动。

## 关键词

QAOA、仿真、资源感知、选择、量子电路
