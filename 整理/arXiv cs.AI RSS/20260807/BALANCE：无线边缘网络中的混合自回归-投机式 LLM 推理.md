---
published: 2026-08-07
title: "BALANCE：无线边缘网络中的混合自回归-投机式 LLM 推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BALANCE- Hybrid Autoregressive-Speculative LLM Inference in Wireless Edge Networks.md"
source_note: "[[信息源/arXiv cs.AI RSS/BALANCE- Hybrid Autoregressive-Speculative LLM Inference in Wireless Edge Networks]]"
source_sha256: 6d6757f7799410aa2e02e1422c50a0d0953f767bf9959906b6328917362311fb
original_url: "https://arxiv.org/abs/2608.05926"
processed: 2026-08-07
language: zh-CN
---

# BALANCE：无线边缘网络中的混合自回归-投机式 LLM 推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Guanqiao Qu, Shuo Chen, Qian Chen, Kin K. Leung, Xianhao Chen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05926)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BALANCE- Hybrid Autoregressive-Speculative LLM Inference in Wireless Edge Networks|查看原始文件]]

## 摘要

- 边缘推理是下一代移动网络中提供大语言模型（LLM）推理服务的有前景范式；自回归解码（AD）逐 token 生成导致长延迟，投机解码（SD）用小语言模型（SLM）生成草稿 token 供 LLM 验证以加速推理，但带来额外内存成本。
- 由于这种延迟-内存权衡，在有限的边缘计算资源下，单一方法无法高效服务需求异构的用户。
- 提出 BALANCE：边缘 LLM 推理的混合自回归-投机推理框架。边缘服务器同时托管 SLM 与 LLM，将每个用户分配到 AD 或 SD，并同时执行两种模式。
- 为最大化服务用户数，形式化任务吞吐最大化问题，在用户延迟要求与服务器内存约束下联合确定用户调度与 AD/SD 间的计算资源分配；由于问题 NP 难，开发多项式时间算法将原问题转化为两个子问题，得到带常数近似保证的次优解。实验表明 BALANCE 一致优于传统 AD 与 SD，显著提升任务吞吐。

## 正文

边缘推理是为下一代移动网络提供大语言模型（LLM）推理服务的有前景范式。LLM 推理主要依赖两种方法：自回归解码（Autoregressive decoding，AD）逐 token 顺序生成输出，导致较长延迟；投机解码（Speculative decoding，SD）通过使用小语言模型（SLM）生成多个草稿 token 供 LLM 验证来加速推理，但带来额外内存成本。由于这种延迟-内存权衡，在有限的边缘计算资源下，单一方法无法高效服务需求异构的用户。为应对这一挑战，我们提出边缘 LLM 推理的混合自回归-投机推理（BALANCE）框架。在 BALANCE 中，边缘服务器同时托管 SLM 与 LLM，将每个用户分配到 AD 或 SD，并同时执行两种模式。为最大化服务的用户数，我们形式化一个任务吞吐最大化问题，在用户延迟要求与服务器内存约束下，联合确定用户调度与 AD/SD 之间的计算资源分配。由于该问题 NP 难，我们开发了一个多项式时间算法，将原问题转化为两个子问题，并获得带常数近似保证的次优解。实验表明，BALANCE 一致优于传统 AD 与 SD，并显著提升任务吞吐。

## 关键词

#边缘推理 #LLM推理 #投机解码 #资源分配
