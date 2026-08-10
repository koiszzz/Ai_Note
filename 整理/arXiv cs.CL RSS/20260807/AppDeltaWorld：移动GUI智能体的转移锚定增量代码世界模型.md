---
published: 2026-08-07
title: "AppDeltaWorld：移动 GUI 智能体的转移锚定增量代码世界模型"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/AppDeltaWorld- Transition-Grounded Delta Code World Model for Mobile GUI Agents.md"
source_note: "[[信息源/arXiv cs.CL RSS/AppDeltaWorld- Transition-Grounded Delta Code World Model for Mobile GUI Agents]]"
source_sha256: b673a22d22346a23d65eab605112b6975387cf00effb22df21030d85461a4085
original_url: "https://arxiv.org/abs/2608.05891"
processed: 2026-08-07
language: zh-CN
---

# AppDeltaWorld：移动 GUI 智能体的转移锚定增量代码世界模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Weikai Xu, Yunren Feng, Haoxiang Lei, Kun Huang, Yuxuan Liu, Kang Zhao, Xiaolin Hu, Shuo Shang, Bo An
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05891)

## 摘要

- 移动 GUI 智能体可经像素感知与触摸动作操作应用，是收集与改进长时程移动交互策略的有前景接口；敏感应用与隐私关键操作的真实轨迹难获取。
- 现有模拟环境扩展成本高，GUI 世界模型仍受不稳定生成、模态覆盖有限与动作转移逻辑不一致困扰。
- 提出 AppDeltaWorld：转移锚定增量代码世界模型，将下一 GUI 预测为可达代码更新而非无约束图像或文本描述；在动作转移约束下检索应用特定 Level-1 HTML 参考，生成条件化于当前屏幕、动作、预测下一屏幕文本与检索结构的 Level-2 可执行 HTML，浏览器渲染前将生成视觉资产插入图像槽。
- 作为世界模型，CMGUIBench-500 Code2World 评估下最高保真度，结构布局与 UI 元素重建相对仅图像与仅代码基线清晰增益；作为训练环境支持过滤闭环 SFT 数据构建，结合公开监督使 AppDeltaAgent 在 AndroidLens 达 SOTA、MobileGym 与 MobileWorld 一致增益；世界模型基测试时强化学习使能策略适配，无需与真实应用额外交互即进一步改进。

## 正文

移动 GUI 智能体可以通过像素感知与触摸动作操作应用，使它们成为收集与改进长时程移动交互策略的有前景接口。然而，对敏感应用与隐私关键操作，真实轨迹难以获得。与此同时，现有模拟环境扩展成本高，GUI 世界模型仍遭受不稳定生成、有限模态覆盖与不一致动作转移逻辑的困扰。为克服这些局限，研究提出 AppDeltaWorld，一个转移锚定增量代码世界模型：将下一 GUI 预测为可达的代码更新，而非无约束的图像或文本描述。AppDeltaWorld 在动作转移约束下检索应用特定的 Level-1 HTML 参考，生成条件化于当前屏幕、动作、预测的下一屏幕文本与检索结构的 Level-2 可执行 HTML，并在浏览器渲染前将生成的视觉资产插入图像槽。作为世界模型，AppDeltaWorld 在 CMGUIBench-500 的 Code2World 评估下取得最高保真度，在结构布局与 UI 元素重建方面相对仅图像与仅代码基线有清晰增益。作为训练环境，AppDeltaWorld 支持过滤的闭环 SFT 数据构建，与公开监督结合使 AppDeltaAgent 在 AndroidLens 上取得最先进性能，并在 MobileGym 与 MobileWorld 上实现一致增益。此外，基于世界模型的测试时强化学习实现了策略适配，无需与真实应用额外交互即可进一步改进。

## 关键词

GUI 智能体、世界模型、HTML、移动应用、动作转移
