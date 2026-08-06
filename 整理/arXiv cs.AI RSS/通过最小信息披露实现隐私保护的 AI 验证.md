---
title: "通过最小信息披露实现隐私保护的 AI 验证"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Privacy-Preserving AI Verification via Minimal Information Disclosure.md"
source_note: "[[信息源/arXiv cs.AI RSS/Privacy-Preserving AI Verification via Minimal Information Disclosure]]"
source_sha256: 447c9032b0bad101127596b98ca9c0d0c2dba9a72b3926220074dba3051a90cd
original_url: "https://arxiv.org/abs/2608.02774"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 通过最小信息披露实现隐私保护的 AI 验证

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sleem Abdelghafar、Gabriel Kulp
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02774)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Privacy-Preserving AI Verification via Minimal Information Disclosure|查看原始文件]]

## 摘要

- 引入最小信息披露（MID）：设计与量化验证者面对证据本身的信息内容——用条件互信息测量附带泄露：在授权结果已知后，披露揭示了受保护属性的多少。
- AI 验证跨越信任边界：验证者必须学习足够多信息以确立授权主张，但同一证据可能揭示模型、工作负载或硬件的敏感细节；MID 按设计通用，可容纳不同验证目标、受保护属性、证据来源与部署约束。
- 在四个物理测量与六个验证任务（执行类型、硬件身份、计算规模与模型身份）上评估：使用三个机制设计变量（证据通道、收集策略与发布变换），三个任务产生具有完美留出验证与零测得附带泄露的发布，其余任务产生显式隐私-效用前沿。
- MID 还支持 ZKP 认证发布：用 Groth16 zk-SNARK 演示所提线性投影机制。

## 正文

论文编号：arXiv:2608.02774v1（更新类型：cross）。以下为摘要全文翻译。

AI 验证跨越信任边界：验证者必须学习足够信息以确立授权主张，然而同样的证据可能揭示模型、工作负载或硬件的敏感细节。我们引入最小信息披露（minimal information disclosure，MID），它设计与量化验证者面对证据本身的信息内容。MID 用条件互信息测量附带泄露：在授权结果已知后，披露揭示受保护属性的多少。MID 按设计是通用的：它可以容纳不同的验证目标、受保护属性、证据来源与部署约束。为演示 MID 的实用性，我们在四个物理测量与六个验证任务（涵盖执行类型、硬件身份、计算规模与模型身份）上评估它。这些实验使用三个机制设计变量——证据通道、收集策略与发布变换——但 MID 不限于这些选择，可以容纳其他可部署机制。在这些任务中，MID 产生三个具有完美留出验证与零测得附带泄露的发布，而其余任务产生显式的隐私-效用前沿。MID 还支持 ZKP 认证的发布：我们用 Groth16 zk-SNARK 演示所提出的线性投影机制。

## 关键词

#AI验证 #隐私保护 #信息泄露 #零知识证明
