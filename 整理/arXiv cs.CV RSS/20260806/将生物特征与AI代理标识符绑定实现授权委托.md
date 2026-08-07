---
published: 2026-08-06
title: 将生物特征与AI代理标识符绑定实现授权委托
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Binding Biometrics with AI Agent Identifiers for Delegation of Authority.md
source_note: "[[信息源/arXiv cs.CV RSS/Binding Biometrics with AI Agent Identifiers for Delegation of Authority|查看原始文件]]"
source_sha256: 99a47e1ea3d6433fb48bb49f0278def795d87d3bb4614569cdd7cf5f7d072c69
original_url: https://arxiv.org/abs/2608.04292
processed: 2026-08-07
language: zh-CN
---

# 将生物特征与AI代理标识符绑定实现授权委托

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04292)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Binding Biometrics with AI Agent Identifiers for Delegation of Authority|查看原始文件]]

## 摘要

- 智能体 AI 系统的普及引发了对 AI 代理执行任务问责制的严重质疑；理想情况下，未经人类操作员明确授权，AI 代理不得执行关键任务，生物特征识别是最可靠的个人认证方法之一，有望实现对 AI 代理的认证式授权委托。
- 提出名为 BIND 的框架，借鉴生物特征密码系统思想，在代理授权时将人类用户的生物特征数据与 AI 代理身份（ID）和权限范围（任务特定约束）安全绑定；代理可将该令牌/标识符提交给身份审计方，后者同时执行生物特征认证并恢复代理 ID 与范围，从而提供人类控制与授权委托的不可否认证明。
- 提供基于标准深度神经网络提取人脸特征的实用实现：特征适配模块将实值嵌入转换为适合基于 Turbo 纠错码模糊承诺结构的定长二值表示；实验在零误匹配率下达到 96% 的真匹配率，支持 1024 位代理令牌。

## 正文

智能体人工智能（AI）系统的普及，引发了对 AI 代理执行任务问责制的严重质疑。理想情况下，未经人类操作员明确授权，AI 代理不得被允许执行关键任务。由于生物特征识别是认证个人最可靠的方法之一，它有望实现对 AI 代理的认证式授权委托。在这项工作中，本文提出了一个名为 BIND 的框架，借鉴生物特征密码系统领域的思想，在代理授权时，将人类用户的生物特征数据与 AI 代理身份（ID）和权限范围（任务特定约束）安全绑定。该令牌/标识符可由 AI 代理提交给身份审计方（Identity Auditor），审计方同时执行生物特征认证并恢复代理 ID 和范围，从而实现实时用户认证，并建立人类控制与授权委托的不可否认证明。本文还提供了所提出的 BIND 框架的实用实现，基于使用标准深度神经网络模型提取的人脸特征。为促进该实现，提出了一种特征适配模块，将实值特征嵌入转换为适合基于 Turbo 纠错码的模糊承诺（fuzzy commitment）结构的定长二值表示。实验证明了所提出的面部密码系统的实际可行性：在零误匹配率下实现 96% 的真匹配率，并支持 1024 位的代理令牌。

## 关键词

#AI代理 #生物特征认证 #授权委托 #生物特征密码系统 #人脸识别 #模糊承诺
