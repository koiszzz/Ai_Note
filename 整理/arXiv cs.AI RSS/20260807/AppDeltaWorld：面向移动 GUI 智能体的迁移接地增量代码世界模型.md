---
published: 2026-08-07
title: "AppDeltaWorld：面向移动 GUI 智能体的迁移接地增量代码世界模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AppDeltaWorld- Transition-Grounded Delta Code World Model for Mobile GUI Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/AppDeltaWorld- Transition-Grounded Delta Code World Model for Mobile GUI Agents]]"
source_sha256: 98b714a40f0e2944e9015c29a1d9dda55482d1bf06b1201a479721396293e24b
original_url: "https://arxiv.org/abs/2608.05891"
processed: 2026-08-07
language: zh-CN
---

# AppDeltaWorld：面向移动 GUI 智能体的迁移接地增量代码世界模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Weikai Xu, Yunren Feng, Haoxiang Lei, Kun Huang, Yuxuan Liu, Kang Zhao, Xiaolin Hu, Shuo Shang, Bo An
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05891)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AppDeltaWorld- Transition-Grounded Delta Code World Model for Mobile GUI Agents|查看原始文件]]

## 摘要

- 移动 GUI 智能体可通过像素感知与触摸操作操作应用，是收集与改进长时程移动交互策略的有前景接口；但敏感应用与隐私关键操作的真实轨迹难以获得，现有模拟环境扩展成本高，GUI 世界模型仍受生成不稳定、模态覆盖有限与动作-迁移逻辑不一致困扰。
- 提出 AppDeltaWorld：一个迁移接地的增量代码世界模型，将下一个 GUI 预测为可达的代码更新而非无约束的图像或文本描述。
- 在动作-迁移约束下检索应用特定的一级 HTML 参考，基于当前屏幕、动作、预测的下一屏文本与检索结构生成二级可执行 HTML，并在浏览器渲染前将生成的视觉资源插入图像槽。
- 作为世界模型，AppDeltaWorld 在 CMGUIBench-500 的 Code2World 评估中达到最高保真度，在结构布局与 UI 元素重建上显著优于纯图像与纯代码基线；作为训练环境，支持过滤的闭环 SFT 数据构建，使 AppDeltaAgent 在 AndroidLens 上达到最优性能并在 MobileGym、MobileWorld 上持续提升；基于世界模型的测试时强化学习还能在不与真实应用交互的情况下进一步改进策略。

## 正文

移动 GUI 智能体可以通过像素感知与触摸操作来操作应用，使其成为收集与改进长时程移动交互策略的有前景接口。然而，对于敏感应用与隐私关键操作，真实轨迹难以获得。同时，现有模拟环境扩展成本高昂，GUI 世界模型仍受生成不稳定、模态覆盖有限与动作-迁移逻辑不一致的困扰。为解决这些局限，我们提出 AppDeltaWorld，一个迁移接地的增量代码世界模型：将下一个 GUI 预测为可达的代码更新，而非无约束的图像或文本描述。AppDeltaWorld 在动作-迁移约束下检索应用特定的一级 HTML 参考，基于当前屏幕、动作、预测的下一屏文本与检索结构生成二级可执行 HTML，并在浏览器渲染前将生成的视觉资源插入图像槽。作为世界模型，AppDeltaWorld 在 CMGUIBench-500 的 Code2World 评估下达到最高保真度，在结构布局与 UI 元素重建上比纯图像与纯代码基线有明确增益。作为训练环境，AppDeltaWorld 支持过滤的闭环 SFT 数据构建，与公共监督结合后使 AppDeltaAgent 在 AndroidLens 上达到最优性能，并在 MobileGym 与 MobileWorld 上持续改进。此外，基于世界模型的测试时强化学习实现策略自适应，并在不额外与真实应用交互的情况下带来进一步提升。

## 关键词

#移动GUI智能体 #世界模型 #HTML生成 #强化学习
