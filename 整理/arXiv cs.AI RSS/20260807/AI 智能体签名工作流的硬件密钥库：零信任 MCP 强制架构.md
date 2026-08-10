---
published: 2026-08-07
title: "AI 智能体签名工作流的硬件密钥库：零信任 MCP 强制架构"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hardware Keystores for AI Agent Signing Workflows- A Zero-Trust MCP Enforcement Architecture.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hardware Keystores for AI Agent Signing Workflows- A Zero-Trust MCP Enforcement Architecture]]"
source_sha256: 49f17c4bd7f123afc4709a704ac5597c3abc323adab514c36099f9dfba6dab80
original_url: "https://arxiv.org/abs/2608.06130"
processed: 2026-08-07
language: zh-CN
---

# AI 智能体签名工作流的硬件密钥库：零信任 MCP 强制架构

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Leo Sambrook, Sampo Sovio
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06130)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hardware Keystores for AI Agent Signing Workflows- A Zero-Trust MCP Enforcement Architecture|查看原始文件]]

## 摘要

- 执行密码操作的 AI 智能体（签名 Git 提交、认证 API 调用、签发证书）目前将私钥存储在软件可访问位置：明文文件、环境变量或容器内存；任何有足够读权限的进程都能提取原始密钥材料。
- 近期生产事件展示实际严重性：私钥通过邮件注入在五分钟内从广泛部署的框架中被外泄。
- 目标同时强制密钥机密性与密钥使用的内容感知授权：用硬件限制密钥替换软件驻留密钥，通过厂商中立的 PKCS#11 接口访问；硬件密钥库（HSM、TPM、智能卡）在设备上执行密码操作，主机仅通过不透明句柄接收结果。
- 硬件限制是主要贡献，由五层零信任强制栈支持：会话身份（SAGA）、范围界限（Smax）、语义验证（RAV）、污点追踪与硬件执行边界；基于 AgentDojo ImportantInstructionsAttack 模板的 12 个注入场景评估，运行四个 LLM 模型（gpt-oss-120b、Qwen2.5-72B、DeepSeek-V4-Flash，n=192 合并）：基线模式攻击成功率（ASR）19.3% [14.3%, 25.4%]；保护后 ASR 0%（Wilson 95% CI 上限 2.0%）；四个良性任务场景零误报。

## 正文

执行密码操作的 AI 智能体（签名 Git 提交、认证 API 调用、签发证书）目前将私钥存储在软件可访问的位置：明文文件、环境变量或容器内存。任何具有足够读权限的进程都能提取原始密钥材料。近期生产事件展示了实际严重性：私钥通过邮件注入在五分钟内从广泛部署的框架中被外泄。我们旨在同时强制密钥机密性与密钥使用的内容感知授权。为此，我们用硬件限制密钥替换软件驻留密钥，通过厂商中立的 PKCS#11 接口访问。硬件密钥库（HSM、TPM、智能卡）在设备上执行密码操作；主机仅通过不透明句柄接收结果。硬件限制是主要贡献；它由一个五层零信任强制栈支持，包括会话身份（SAGA）、范围界限（Smax）、语义验证（RAV）、污点追踪与硬件执行边界。我们针对从 AgentDojo ImportantInstructionsAttack 模板派生的 12 个注入场景评估（Debenedetti 等，arXiv:2406.13352）。我们运行四个 LLM 模型；三个在基线模式下遵循注入（gpt-oss-120b、Qwen2.5-72B、DeepSeek-V4-Flash，n=192 合并）。基线攻击成功率（ASR）：19.3% [14.3%, 25.4%]；保护后 ASR：0%（Wilson 95% CI 上限 2.0%）。四个良性任务场景零误报。

## 关键词

#硬件安全模块 #零信任 #MCP #密钥管理
