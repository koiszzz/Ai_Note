---
published: 2026-08-06
title: TwinIR：对在线高清地图构建的协同隐形双点攻击
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/TwinIR- Coordinated Invisible Dual-Point Attacks on Online HD Map Construction.md
source_note: "[[信息源/arXiv cs.CV RSS/TwinIR- Coordinated Invisible Dual-Point Attacks on Online HD Map Construction]]"
source_sha256: 46698c340ed860f744ecf68e209bb27241e32484a860f3e8f94c153f5029dbf1
original_url: https://arxiv.org/abs/2608.04453
processed: 2026-08-07
language: zh-CN
---

# TwinIR：对在线高清地图构建的协同隐形双点攻击

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04453)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/TwinIR- Coordinated Invisible Dual-Point Attacks on Online HD Map Construction|查看原始文件]]

## 摘要

- 提出 TwinIR，一种机制引导的物理攻击方法：联合优化攻击效果与攻击点稀疏性，寻求抑制周围边界补偿几何线索所需的最少攻击点数。
- 对近红外光照建模相机响应，将优化的攻击点映射为可行的物理布点，产生最小可见光谱变化的相机可见干扰。
- nuScenes 实验表明 TwinIR 在 RSA 下使 mAP 降低 8.18-8.96 个百分点、ETA 下降低 2.84-5.62 个百分点，并提升不可达目标率 25-28 点、不安全规划轨迹率 19-20 点；真实车辆测试台验证有效且全彩视图下不易察觉。

## 正文

在线高清地图构建对自动驾驶中的预测与规划至关重要。我们发现，针对在线地图构建的现有物理攻击受制于一种跨边界补偿效应：目标边界被扰动后，另一可见边界可能保留足够的几何线索，使模型得以恢复原始道路几何。基于这一观察，我们提出 TwinIR，一种面向在线地图构建的机制引导物理攻击方法。TwinIR 联合优化攻击效果与攻击点稀疏性，寻求抑制来自周围边界的补偿几何线索所需的最少攻击点数。为降低多点攻击的感知度，TwinIR 对近红外光照下的相机响应进行建模，并将优化的攻击点映射到可行的物理布点，从而在可见光谱变化最小的情况下产生相机可见的干扰。在 nuScenes 上对多种最先进的在线地图构建模型的实验表明，TwinIR 在 RSA 下使 mAP 降低 8.18-8.96 个百分点，在 ETA 下降低 2.84-5.62 个百分点，同时相较干净输入使不可达目标率提高 25-28 个百分点、不安全规划轨迹率提高 19-20 个百分点。这些攻击还在真实测试台自动驾驶车辆上得到验证，TwinIR 成功诱导道路拉直与提前转弯形变，同时在全彩视图下保持不显眼。

## 关键词

#自动驾驶 #高清地图 #物理攻击 #近红外 #安全性
