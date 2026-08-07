---
published: 2026-08-06
title: FM4WiFi：超Wi-Fi 8网络密集部署中多AP协调的流匹配
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/FM4WiFi- Flow Matching for Multi-AP Coordination in Dense Deployments of Beyond Wi-Fi 8 Networks.md
source_note: "[[信息源/arXiv cs.LG RSS/FM4WiFi- Flow Matching for Multi-AP Coordination in Dense Deployments of Beyond Wi-Fi 8 Networks]]"
source_sha256: 8c37285554d9e00638812f43d40fe21239fa11f52fed746758e64fd6fe98dc91
original_url: https://arxiv.org/abs/2608.04050
processed: 2026-08-07
language: zh-CN
---

# FM4WiFi：超Wi-Fi 8网络密集部署中多AP协调的流匹配

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04050)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/FM4WiFi- Flow Matching for Multi-AP Coordination in Dense Deployments of Beyond Wi-Fi 8 Networks|查看原始文件]]

## 摘要

- 提出 FM4WiFi 生成式 ML 流水线：单次推理即可生成高质量协调式空间复用（Co-SR）配置
- 整合自编码器、流匹配生成模型与代理速率预测器，无需依赖实时系统或数字孪生
- 中大规模下匹配或超越 SOTA 基线，可扩展到 30+ AP 且推理时间低于一秒

## 正文

Wi-Fi 网络正从随机信道接入转向跨接入点（AP）的紧密协调运行，这一转变反映在 Wi-Fi 8 的多 AP 协调（multi-AP coordination, MAPC）中。然而，当前的 MAPC 规范将协作限制在 AP 对之间，从根本上限制了密集部署中可获得的收益，因此需要超 Wi-Fi 8（beyond Wi-Fi 8）系统中可扩展的全网协调。

我们针对协调式空间复用（coordinated spatial reuse, Co-SR）进行研究，其中 AP 以降低的功率并发传输。有效的 Co-SR 需要对 AP-站点传输进行联合选择与配置，然而现有方法根本无法扩展：它们依赖繁重的信令、缓慢的收敛、不切实际的假设，并且往往需要随网络规模爆炸式增长的计算时间。

我们引入 FM4WiFi，一个生成式 ML 流水线，通过单次推理步骤生成高质量的 Co-SR 配置来解决这些局限。FM4WiFi 集成了：（i）学习网络状态紧凑潜在表示的自编码器；（ii）合成可行 Co-SR 配置（包括先前工作中缺失的速率控制）的流匹配（flow-matching）生成模型；以及（iii）一个代理速率预测器，无需依赖实时系统或数字孪生即可进行快速的大规模 Co-SR 候选评估。在广泛的评估（包括实验验证）中，FM4WiFi 在中大规模下匹配或超过最先进的基线，并可扩展到 30 多个 AP，推理时间低于一秒。广泛的消融研究验证了每一个建模与优化选择。

## 关键词

#Wi-Fi #多AP协调 #流匹配 #生成模型 #空间复用
