---
published: 2026-08-06
title: HelloWorld：在视频世界模型中实现社交互动角色
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/HelloWorld- Enabling Socially Interactive Characters in Video World Models.md
source_note: "[[信息源/arXiv cs.CV RSS/HelloWorld- Enabling Socially Interactive Characters in Video World Models]]"
source_sha256: dfc97b0b57997667e2c27c36b2252ba243157b0bc24e4f7764319e04ce516b8d
original_url: https://arxiv.org/abs/2608.05070
processed: 2026-08-07
language: zh-CN
---

# HelloWorld：在视频世界模型中实现社交互动角色

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05070)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/HelloWorld- Enabling Socially Interactive Characters in Video World Models|查看原始文件]]

## 摘要

- 提出 HelloWorld 视频世界模型：按一下按钮即可让屏幕角色面向摄像头回应观看者，如转身、挥手、点头或说一句简短问候
- 提出自蒸馏流水线，在模型自身合成的数据上微调视频生成模型；每个合成片段同时包含社交互动与相机运动，使模型在互动质量不下降的情况下学习相机姿态条件化
- 推理时引入免训练模块调制 DiT 的交叉注意力掩码，将互动文本提示限定在按键窗口内帧，实现互动的时间定位；构建 400 样本的 HelloWorldBench（三个社交互动指标 + 三个常规指标）

## 正文

尽管视频世界模型最近取得了显著进展，用户与世界内角色之间的社交互动仍未得到支持。为填补这一空白，我们提出 HelloWorld，一个支持与世界内角色进行社交互动的视频世界模型。只需按一下按钮，用户即可提示屏幕上的角色面向摄像头做出回应，例如转向观看者、挥手、点头或说一句简短的问候。为使这些互动自然流畅，我们提出一个自蒸馏流水线，在模型自身合成的数据上微调视频生成模型。每个合成片段同时包含社交互动与相机运动，使模型在互动质量不下降的情况下学习相机姿态条件化（camera-pose conditioning）。在推理时，我们进一步引入一个免训练模块来确定互动发生的时间。按下按钮后，它调制 DiT 的交叉注意力掩码，使与互动相关的文本提示只关注按钮按压窗口内的帧，从而在时间上定位角色的回应。我们进一步构建 HelloWorldBench，一个包含三个社交互动指标与三个常规指标、共 400 个样本的基准用于评估。实验表明，HelloWorld 在互动质量上超越多种基线，同时保持最先进的画面美学和相机姿态跟随。项目页面：https://github.com/AlayaLab/HelloWorld

## 关键词

#视频世界模型 #社交互动 #扩散模型 #人机交互
