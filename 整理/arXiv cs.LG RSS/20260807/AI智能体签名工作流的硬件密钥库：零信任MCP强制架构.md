---
published: 2026-08-07
title: "AI 智能体签名工作流的硬件密钥库：零信任 MCP 强制架构"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Hardware Keystores for AI Agent Signing Workflows- A Zero-Trust MCP Enforcement Architecture.md"
source_note: "[[信息源/arXiv cs.LG RSS/Hardware Keystores for AI Agent Signing Workflows- A Zero-Trust MCP Enforcement Architecture]]"
source_sha256: 80e4e7d4bb4bef191461adbcd2bbe3f20629c35d294c56986b9b02af18ffbaf6
original_url: "https://arxiv.org/abs/2608.06130"
processed: 2026-08-07
language: zh-CN
---

# AI 智能体签名工作流的硬件密钥库：零信任 MCP 强制架构

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Leo Sambrook, Sampo Sovio
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06130)

## 摘要

- 执行加密操作（签名 Git 提交、认证 API 调用、签发证书）的 AI 智能体目前将私钥存储在软件可访问位置：明文文件、环境变量或容器内存；近期生产事故演示实际严重性：私钥经邮件注入在 5 分钟内从广泛部署框架外泄。
- 目标强制密钥机密性与密钥使用的内容感知授权：用经厂商中立 PKCS#11 接口访问的硬件受限密钥替换软件驻留密钥；硬件密钥库（HSM、TPM、智能卡）在设备上执行加密操作，主机仅通过不透明句柄接收结果。
- 硬件受限是主要贡献，由五层零信任强制栈（会话身份 SAGA、范围边界 Smax、语义验证 RAV、污点追踪与硬件执行边界）使能。
- 用源自 AgentDojo ImportantInstructionsAttack 模板的 12 个注入场景评估：四个 LLM 中三个基线模式跟随注入（gpt-oss-120b、Qwen2.5-72B、DeepSeek-V4-Flash，n=192 合并）；基线攻击成功率 19.3% [14.3%, 25.4%]，保护后 0%（Wilson 95% CI 上界 2.0%）；四个良性任务场景零误报。

## 正文

执行加密操作（签名 Git 提交、认证 API 调用、签发证书）的 AI 智能体目前将私钥存储在软件可访问的位置：明文文件、环境变量或容器内存。任何具备足够读取权限的进程都能提取原始密钥材料。近期一次生产事故演示了实际严重性：私钥经邮件注入在不到五分钟内从广泛部署的框架中外泄。研究目标是同时强制密钥机密性与密钥使用的内容感知授权。为此，研究用经厂商中立 PKCS#11 接口访问的硬件受限密钥替换软件驻留密钥。硬件密钥库（HSM、TPM、智能卡）在设备上执行加密操作；主机仅通过不透明句柄接收结果。硬件受限是主要贡献，由围绕它的五层零信任强制栈使能，包括会话身份（SAGA）、范围边界（Smax）、语义验证（RAV）、污点追踪与硬件执行边界。研究对照源自 AgentDojo 的 ImportantInstructionsAttack 模板（Debenedetti 等，arXiv:2406.13352）的 12 个注入场景评估。研究运行四个 LLM 模型；其中三个在基线模式下跟随注入（gpt-oss-120b、Qwen2.5-72B、DeepSeek-V4-Flash，合并 n=192）。基线攻击成功率（ASR）为 19.3% [14.3%, 25.4%]；保护后 ASR 为 0%（Wilson 95% CI 上界 2.0%）。四个良性任务场景零误报。

## 关键词

硬件密钥库、AI 智能体、零信任、PKCS#11、提示注入
