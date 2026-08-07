---
published: 2026-08-06
title: TwinIR：针对在线高清地图构建的协调隐形双点攻击
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/TwinIR- Coordinated Invisible Dual-Point Attacks on Online HD Map Construction.md
source_note: "[[信息源/arXiv cs.AI RSS/TwinIR- Coordinated Invisible Dual-Point Attacks on Online HD Map Construction]]"
source_sha256: 56286cff9fb3ab70b0efd40c6a0dbb7c648c82eccfc1e70ed1ef9ccaa91a15ea
original_url: https://arxiv.org/abs/2608.04453
processed: 2026-08-07
language: zh-CN
---

# TwinIR：针对在线高清地图构建的协调隐形双点攻击

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04453)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TwinIR- Coordinated Invisible Dual-Point Attacks on Online HD Map Construction|查看原始文件]]

## 摘要

- 在线高清（HD）地图构建对自动驾驶的预测与规划至关重要，而现有针对在线地图构建的物理攻击受"跨边界补偿效应"限制：目标边界被扰动后，其他可见边界仍可能保留足够的几何线索让模型恢复原始道路几何
- 提出 TwinIR，一种机制引导的针对在线地图构建的新型物理攻击方法，联合优化攻击有效性与攻击点稀疏性，寻求抑制周围边界补偿几何线索所需的最少攻击点数量
- 为降低多点攻击的可感知性，TwinIR 对近红外光照下的相机响应建模，将优化后的攻击点映射为可行的物理位置，产生相机可见的干扰同时最小化可见光谱变化
- 在 nuScenes 上对最先进的在线地图构建模型，TwinIR 在 RSA 下将 mAP 降低 8.18-8.96 个百分点、ETA 下降低 2.84-5.62 个百分点，并提升不可达目标率 25-28 个百分点、不安全规划轨迹率 19-20 个百分点；在真实测试车辆上也得到验证

## 正文

在线高清（HD）地图构建对自动驾驶中的预测和规划至关重要。我们发现，现有针对在线地图构建的物理攻击受限于一种跨边界补偿效应（cross-boundary compensation effect）：当目标边界被扰动之后，另一条可见边界可能仍保留足够的几何线索，使模型能够恢复原始的道路几何。

基于这一观察，我们提出 TwinIR，一种面向在线地图构建的、机制引导的新型物理攻击方法。TwinIR 联合优化攻击有效性和攻击点稀疏性，寻找抑制来自周围边界的补偿几何线索所需的最少攻击点数量。为了降低多点攻击的可感知性，TwinIR 对近红外光照下相机的响应进行建模，并将优化后的攻击点映射为可行的物理位置，从而在最小化可见光谱变化的同时产生相机可见的干扰。

在 nuScenes 上针对最先进的在线地图构建模型进行的实验表明，TwinIR 在 RSA 下将 mAP 降低 8.18-8.96 个百分点，在 ETA 下降低 2.84-5.62 个百分点，同时相对干净输入将不可达目标率提升 25-28 个百分点、不安全规划轨迹率提升 19-20 个百分点。这些攻击还在真实测试平台上得到验证：TwinIR 成功诱导了道路拉直（road straightening）和提前转弯（early-turn）两种形变，同时在全彩视角下保持难以察觉。

## 关键词

#自动驾驶 #高清地图 #物理攻击 #安全
