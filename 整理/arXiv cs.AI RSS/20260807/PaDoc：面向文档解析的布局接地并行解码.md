---
published: 2026-08-07
title: "PaDoc：面向文档解析的布局接地并行解码"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PaDoc- Layout-Grounded Parallel Decoding for Document Parsing.md"
source_note: "[[信息源/arXiv cs.AI RSS/PaDoc- Layout-Grounded Parallel Decoding for Document Parsing]]"
source_sha256: 1508eea7c84e11e2968d8019299b2a25e585e37bb02462211e261bfd5e86d50d
original_url: "https://arxiv.org/abs/2608.06146"
processed: 2026-08-07
language: zh-CN
---

# PaDoc：面向文档解析的布局接地并行解码

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hao Yu, Jiabo Zhan, Kang Liu, Linnan Zhao, Dongxu Yue, Rui Chen, Jinglin Wang, Chong Sun, Chen Li, Jing Lyu, Chun Yuan
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06146)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PaDoc- Layout-Grounded Parallel Decoding for Document Parsing|查看原始文件]]

## 摘要

- 端到端文档解析器提供统一接口，但将页面布局与区域内容序列化为一个自回归序列；该表述迫使独立区域进入解码路径，其长度随总内容增长，而基于裁剪的两阶段解析器以重复视觉预填充与碎片化页面上下文为代价暴露区域级并行。
- 提出 PaDoc：布局接地解析器，将预测布局视为共享页面表示上的分支结构——在区域充分性假设下推导前缀条件分解，其中布局流与区域内容分支并发推进，将解码深度降至最长布局-内容路径。
- 在单个 MLLM 中实现该分解：打包可变长度祖先注意力在标准下一 token 训练下保持可见性，掩码并行解码创建分支，评估的 vLLM 后端作为带缓存驻留共享前缀复用的并发请求服务。
- OmniDocBench Full 上 PaDoc 实现 Overall 布局 F1 91.1，端到端解析器中 Overall 94.24（顶级）与最佳 Text Edit（0.038）与 Formula CDM（95.59）；384 页子集与单张 A800 GPU 上，五个并发级别中最快端到端解析器，有效页吞吐提升 67.4-118%，P95 延迟相对同骨干顺序 SFT 基线降低 39.2-54.9%；代码公开。

## 正文

端到端文档解析器提供统一接口，但将页面布局与区域内容序列化为一个自回归序列。这种表述迫使独立区域进入一个长度随总内容增长的解码路径，而基于裁剪的两阶段解析器以重复视觉预填充与碎片化页面上下文为代价暴露区域级并行。为在保留整页上下文的同时移除依赖，我们提出 PaDoc，一个布局接地解析器，将预测布局视为共享页面表示上的分支结构。在区域充分性假设下，我们推导一个前缀条件分解，其中布局流与区域内容分支并发推进，将解码深度降低到最长布局-内容路径。我们在单个 MLLM 中实现该分解：打包可变长度祖先注意力在标准下一 token 训练下保持可见性，而掩码并行解码创建分支，被评估的 vLLM 后端作为带缓存驻留共享前缀复用的并发请求服务。在 OmniDocBench Full 上，PaDoc 实现 91.1 的 Overall 布局 F1，并在端到端解析器中取得顶级 Overall 94.24 以及最佳 Text Edit（0.038）与 Formula CDM（95.59）。在 384 页子集与一张 A800 GPU 上，它是五个并发级别中最快的端到端解析器，相对同骨干顺序 SFT 基线将有效页吞吐提升 67.4-118%，并将 P95 延迟降低 39.2-54.9%。代码见 https://github.com/Longin-Yu/Padoc。

## 关键词

#文档解析 #并行解码 #布局接地 #MLLM
