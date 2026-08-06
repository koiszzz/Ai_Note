---
title: "利用新兴 CMOS 忆阻器件研究流水线处理器分支预测的储层计算"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Investigating reservoir computing for branch prediction in pipelined processors using emerging CMOS .md"
source_note: "[[信息源/arXiv cs.LG RSS/Investigating reservoir computing for branch prediction in pipelined processors using emerging CMOS .]]"
source_sha256: 542589c32ffaafb5289e40df0f7b3f84ddeb86cf10af67e957d4bbefc40848e3
original_url: "https://arxiv.org/abs/2607.27140"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 利用新兴 CMOS 忆阻器件研究流水线处理器分支预测的储层计算

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Harvey Samuel George Johnson、Sendy Phang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27140)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Investigating reservoir computing for branch prediction in pipelined processors using emerging CMOS .|查看原始文件]]

## 摘要

- 目标是开发面向高速运行并与 CMOS 数字逻辑集成的新型储层计算（RC）实现框架，目标负载是多级流水线 CPU 核的分支预测（BP）。
- 在工作负载要求语境下开发了新型基于忆阻器的 RC 设计框架，并用行业标准建模语言 System Verilog（SV）与 Verilog-AMS（VAMS）在仿真中实现。
- 先用基本序列检测任务验证 RC 设计框架，再进行 BP 有效性基准测试；使用 Dhrystone 性能基准测试 RC 框架，面向 RISC-V RV64GC 指令集架构。
- 测试表明：RC 在 BP 应用上大有前景，能达到令人印象深刻的总体预测准确率；但测试也表明需要进一步精炼 RC 设计框架以解决所提 RC 系统适应性不足的短板。
- 与最先进的 TAGE 预测器对比显示，所提 RC 设计框架对分支行为变化的适应速度慢 15 倍。

## 正文

论文编号：arXiv:2607.27140v2（更新类型：replace-cross）。以下为摘要全文翻译。

本项目旨在开发一个面向高速运行并与 CMOS 数字逻辑集成的新型储层计算（RC）实现框架，目标负载是多级流水线中央处理器（CPU）核的分支预测（BP）。为此，在工作负载要求的语境下开发了一个新型基于忆阻器的 RC 设计框架。随后使用行业标准建模语言 System Verilog（SV）和 Verilog-AMS（VAMS）在仿真中实现。开发的 RC 设计框架先通过一个基本序列检测任务验证，然后进一步基准测试其在 BP 上的有效性。RC 框架使用 Dhrystone 性能基准测试，面向 RISC-V RV64GC 指令集架构（ISA）。测试表明，RC 在 BP 应用上展现出巨大前景，能够取得令人印象深刻的总体预测准确率。然而，测试也表明，需要对所开发的 RC 设计框架做进一步精炼，以解决所提 RC 系统适应性不足的短板。与最先进的 TAGE 预测器对比显示，所提 RC 设计框架对分支行为变化的适应速度慢 15 倍。

## 关键词

#储层计算 #分支预测 #忆阻器 #CPU #RISC-V
