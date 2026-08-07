---
published: 20260806
title: "递归残差量化：LLM 的渐进多精度表示"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Recurrent Residual Quantization- A Progressive Multi-Precision Representation for LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/Recurrent Residual Quantization- A Progressive Multi-Precision Representation for LLMs]]"
source_sha256: 187d0c48ee9d1bf3c92a2ed52deeacff82edc6ff8fcfb921f4ac7c381aef40ad
original_url: "https://arxiv.org/abs/2608.04048"
processed: 2026-08-06
language: zh-CN

---

# 递归残差量化：LLM 的渐进多精度表示

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yu Luo, Bo Dong, Wenhua Cheng, Haihao Shen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04048)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Recurrent Residual Quantization- A Progressive Multi-Precision Representation for LLMs|查看原始文件]]

## 摘要

- 在多样部署约束下服务大语言模型（LLM）需要准确率、内存占用和吞吐量之间的灵活权衡；但传统量化方法通常需要每个目标位宽单独检查点。
- 本文引入递归残差量化（RRQ），一个训练后量化（PTQ）框架，将权重表示为低位量化基座配量化残差校正序列，使单个检查点实现多种有效精度：从训练后量化（PTQ）或最近舍入（RTN）获得的 2 位模型开始，RRQ 渐进添加经 RTN 生成的轻量 2 位残差构建 4、6 和 8 位表示。
- 方法免校准且避免联合多位优化；Qwen3-8B 设置中完整全 RTN 2/4/6/8 位包在 1,293 秒构建，比测量 MatGPTQ 构建快 3.3 倍；六个近期 LLM 实验显示 6 和 8 位竞争准确率，4 位模型依赖行为。

## 正文

在多样部署约束下服务大语言模型（LLM）需要准确率、内存占用和吞吐量之间的灵活权衡。然而，传统量化方法通常需要每个目标位宽单独检查点。我们引入递归残差量化（Recurrent Residual Quantization，RRQ），一个训练后量化（PTQ）框架，将权重表示为低位量化基座配量化残差校正序列，使多种有效精度从单个检查点实现。从经训练后量化（PTQ）或最近舍入（RTN）获得的 2 位模型开始，RRQ 渐进添加经 RTN 生成的轻量 2 位残差，构建 4、6 和 8 位表示。方法免校准且避免联合多位优化。我们的 Qwen3-8B 设置中，完整全 RTN 2/4/6/8 位包在 1,293 秒构建，比测量 MatGPTQ 构建快 3.3 倍。六个近期 LLM 实验显示 6 和 8 位竞争准确率，4 位模型依赖行为。代码将在发表时公开。

## 关键词

#量化 #多精度 #LLM推理 #训练后量化 #arXiv