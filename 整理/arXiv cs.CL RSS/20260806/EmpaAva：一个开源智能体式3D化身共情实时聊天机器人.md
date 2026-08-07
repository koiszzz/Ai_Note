---
published: 2026-08-06
title: "EmpaAva：一个开源智能体式 3D 化身共情实时聊天机器人"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/EmpaAva- An Open-source Agentic 3D-Avatar Empathetic Live Chatbot.md
source_note: "[[信息源/arXiv cs.CL RSS/EmpaAva- An Open-source Agentic 3D-Avatar Empathetic Live Chatbot]]"
source_sha256: fba1b98cf9946475f598e5199f4f5eafd963ce039766b32d09fe885f2f6821ba
original_url: https://arxiv.org/abs/2608.04709
processed: 2026-08-07
language: zh-CN
---

# EmpaAva：一个开源智能体式 3D 化身共情实时聊天机器人

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04709)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/EmpaAva- An Open-source Agentic 3D-Avatar Empathetic Live Chatbot|查看原始文件]]

## 摘要

- 提出 EmpaAva：据我们所知首个开源的、智能体式 3D 化身共情聊天机器人，将共情响应生成（ERG）从纯文本交流拓展到实时的面对面交互
- 通过类似视频通话的界面，用户与 3D 数字人交谈，后者从语音与可选视觉中读取其情感，并以情感语音、唇形同步面部动作与照片级写实 3D 高斯渲染回应
- 核心是 LLM 协调的三智能体架构：感知、共情响应规划与具身渲染形成闭环，配合响应规划层将每条回复编译为可执行的多模态计划，使语音、表情与渲染保持一致共情意图
- 基于强开源模块构建，EmpaAva 提供把它们绑定为可控、可检视体验的智能；自动与人工评估中，在情绪理解、响应质量与视听一致性上超越纯文本、2D 说话人脸与多模态化身基线；已开源并提供在线实时演示

## 正文

本文介绍 EmpaAva，据我们所知，这是第一个开源的、智能体式的 3D 化身共情聊天机器人，它将共情响应生成（ERG）从纯文本交流扩展到了实时的面对面交互。通过类似视频通话的界面，用户与一个 3D 数字人交谈，后者从语音以及可选的视觉输入中读取用户的情感，并以情感语音、唇形同步的面部动作和照片级写实的 3D 高斯渲染做出回应。其核心是一个 LLM 协调的三智能体架构（Tri-Agent Architecture），其中感知、共情响应规划和具身渲染形成闭环，并配有一个响应规划层，将每条回复编译为可执行的多模态计划，使语音、表情和渲染保持在同一个共情意图上。EmpaAva 构建在强大的开源模块之上，提供了将这些模块绑定为一个可控、可检视体验的智能。在自动和人工评估中，EmpaAva 在情绪理解、响应质量和视听一致性方面均超越了纯文本、2D 说话人脸和多模态化身基线。我们开源了 EmpaAva，并提供在线实时演示。

## 关键词

#共情聊天机器人 #3D化身 #多模态交互 #情感计算 #智能体架构
