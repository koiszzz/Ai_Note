---
published: 2026-08-05
title: "MissClick：利用数字序列化坐标攻击 GUI 接地模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MissClick- Exploiting Digit-Serialized Coordinates to Attack GUI Grounding Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/MissClick- Exploiting Digit-Serialized Coordinates to Attack GUI Grounding Models]]"
source_sha256: dfbd9303aea18db8f6faab9d64ff3e3184ab8a6ae600495587c56ffe9ee91710
original_url: "https://arxiv.org/abs/2608.03740"
processed: 2026-08-05
language: zh-CN
---

# MissClick：利用数字序列化坐标攻击 GUI 接地模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yu Ran、Wentao Zhao、Xin Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03740)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MissClick- Exploiting Digit-Serialized Coordinates to Attack GUI Grounding Models|查看原始文件]]

## 摘要

- 观察：坐标数字作为类别 token 被预测，但解析后改变百位数字一位会把相应坐标分量改变 100 单位，可诱导执行点击的大位移——攻击目标应考虑坐标输出的数值与位值结构。
- 提出 MissClick，简单有效的白盒对抗攻击，两个目标特定目标：MissClick-U 最大化软坐标位移（非定向破坏）；MissClick-T 最小化位加权目标数字损失（定向劫持）。
- 在 OS-Atlas 与 UGround 上跨桌面、网页与移动平台：MissClick-U 非定向成功率 75.07% 与 72.93%（+16.62 与 +30.72 pp）；MissClick-T 定向成功率 44.86% 与 62.67%（+31.73 与 +47.06 pp）。
- 目标比较显示软坐标位移给出最高非定向成功率，位加权目标数字优化给出最高定向成功率，揭示两个攻击目标的不同目标偏好。

## 正文

论文编号：arXiv:2608.03740v1（更新类型：new）。以下为摘要全文翻译。

近期的 GUI 视觉接地模型把屏幕坐标生成为数字 token 序列，解析为数值并映射到可执行点击。这一坐标生成过程的安全影响在很大程度上被忽视。我们观察到，每个坐标数字作为类别 token 被预测，但解析后，把百位数字改变一位会把相应数值坐标分量改变 100 单位，这可能诱导执行点击的大位移。这一观察启发了考虑坐标输出的数值与位值结构（而非把它们当作普通文本）的攻击目标。此外，非定向与定向攻击施加不同的成功条件——把点击移出正确区域对移入攻击者指定区域——因此受益于不同的目标。我们提出 MissClick，一个简单有效的白盒对抗攻击，含两个目标特定目标：MissClick-U 为非定向破坏最大化软坐标位移，而 MissClick-T 为定向劫持最小化位加权目标数字损失。与现有针对 OS-Atlas 与 UGround 的 GUI 接地模型攻击相比（跨桌面、网页与移动平台），MissClick-U 实现 75.07% 与 72.93% 的非定向成功率（+16.62 与 +30.72 pp），MissClick-T 实现 44.86% 与 62.67% 的定向成功率（+31.73 与 +47.06 pp）。攻击目标比较进一步表明，软坐标位移产生最高的非定向攻击成功率，而位加权目标数字优化产生最高的定向攻击成功率，揭示两个攻击目标的截然不同的目标偏好。

## 关键词

#GUI接地 #对抗攻击 #白盒攻击 #坐标生成
