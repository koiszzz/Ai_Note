---
published: 2026-08-06
title: WorldMark：交互式视频世界模型的统一基准套件
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/WorldMark- A Unified Benchmark Suite for Interactive Video World Models.md
source_note: "[[信息源/arXiv cs.CV RSS/WorldMark- A Unified Benchmark Suite for Interactive Video World Models]]"
source_sha256: 30d7f3bf5e7c912f95218433afb04988730c9e78e119030bfee7367602fa778c
original_url: https://arxiv.org/abs/2604.21686
processed: 2026-08-07
language: zh-CN
---

# WorldMark：交互式视频世界模型的统一基准套件

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.21686)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/WorldMark- A Unified Benchmark Suite for Interactive Video World Models|查看原始文件]]

## 摘要

- WorldMark 用每模型适配器将共享的 WASD 风格词汇翻译为各模型原生控制格式，十个异构模型在 500 个标准化用例中接收语义相同指令。
- 通过控制系统视角按轴刻画动作动力学：方向准确率、方向纯度、响应延迟、运动稳定性，另设世界记忆与视觉质量套件。
- 揭示现有协议看不到的现象：最快响应者往往最不稳定；有些模型几乎完美跟随平移却几乎不响应旋转。
- 将发布全部数据、评估代码和模型输出。

## 正文

与文本或图像驱动的视频生成不同，交互式世界模型由动作驱动：用户行动，世界响应。公平而全面的评估面临两大障碍。首先，模型以不兼容的格式采取动作——字幕、相机轨迹、动作函数——因此没有建立共享协议。其次，虽然现有基准推进了世界记忆和视觉质量，但动作跟随被简化为轨迹或方向误差，这会将整个路径压缩成一个数字：既无法反映世界对命令切换的反应速度，也无法反映它沿命令轴的移动是否干净。

WorldMark 消除了这两个障碍。每个模型的适配器将共享的 WASD 风格词汇翻译成每个模型的原生控制格式，因此十个异构模型在跨越风格、视角和难度等级的 500 个标准化用例中接收到语义相同的指令；新模型只需一个适配器。在此共同基础上，我们通过控制系统的视角刻画动作动力学——方向准确率、方向纯度、响应延迟和运动稳定性，每个都按轴解析——以及世界记忆和视觉质量套件。它们共同揭示了现有协议无法看到的差异：最快的响应者往往最不稳定，这是任何单一动作指标都无法捕捉的权衡；按轴分辨率揭示了有些模型几乎完美地跟随平移却几乎不响应旋转；具有最佳感知和美学质量的模型在平移方向准确率和延迟上排名最后；风格化场景使每个模型都损失全局一致性，而动作动力学基本保持完整。我们将发布所有数据、评估代码和模型输出。

## 关键词

#世界模型 #视频生成 #基准测试 #动作控制
