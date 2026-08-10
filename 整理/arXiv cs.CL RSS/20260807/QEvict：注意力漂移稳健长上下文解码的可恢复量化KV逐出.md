---
published: 2026-08-07
title: "QEvict：注意力漂移稳健长上下文解码的可恢复量化 KV 逐出"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/QEvict- Recoverable Quantized KV Eviction for Attention-Drift-Robust Long-Context Decoding.md"
source_note: "[[信息源/arXiv cs.CL RSS/QEvict- Recoverable Quantized KV Eviction for Attention-Drift-Robust Long-Context Decoding]]"
source_sha256: 4b5af78c7b81d0a6f5fe48fb57817be43400dbe73487e0b3af2496cf87e5afd3
original_url: "https://arxiv.org/abs/2608.05326"
processed: 2026-08-07
language: zh-CN
---

# QEvict：注意力漂移稳健长上下文解码的可恢复量化 KV 逐出

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Ayushman Garg, Akshita Gupta, Shaswata Bhattacharya, Abhishek Gupta, Sandeep Kumar, Manoj Kumar
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05326)

## 摘要

- 自回归 LLM 推理日益受 KV 缓存内存占用限制；主导研究线通过逐出在注意力派生分数下看似不重要的 token 减少占用，但此类策略做隐式不可逆决定：token 一经逐出不能重新有用。
- 证明解码期间该假设脆弱：token 与窗口重要性随生成查询演化漂移，标准逐出策略永久丢弃在完整缓存模型下后来获得大量注意力的状态；引入未来遗漏质量（Future Missed Mass）与全局 LIR 两个诊断，测量分配给被丢弃状态的未来注意力与历史非活跃区域的再激活。
- 提出 QEvict：三层 KV 缓存管理方案，用可恢复逐出替换二元保留或删除：全精度维护高置信窗口，量化可恢复层存中间窗口，仅删除最低置信窗口；解码中累积注意力分数更新窗口重要性，量化窗口重新重要时反量化并提升至全精度。
- 固定内存预算下该设计保留更广历史上下文，同时为最重要区域保持精确全精度；长上下文理解、检索与推理基准上一致优于代表性逐出与量化基线，减少遗漏注意力并改善信息保留。

## 正文

自回归大语言模型推理日益受键值（KV）缓存内存占用限制。主导研究线通过逐出在注意力派生分数下看似不重要的 token 减少该占用。然而，此类策略做出隐含的不可逆决定：token 一经逐出，就不能重新变得有用。研究证明该假设在解码期间是脆弱的：token 与窗口重要性随生成查询演化而漂移，导致标准逐出策略永久丢弃在完整缓存模型下后来获得大量注意力的状态。为刻画该行为，研究引入未来遗漏质量（Future Missed Mass）与全局 LIR（Global LIR）两个诊断：分别测量分配给被丢弃状态的未来注意力，以及历史非活跃区域的再激活。研究提出 QEvict，一个三层 KV 缓存管理方案：用可恢复逐出（recoverable eviction）替换二元保留或删除。QEvict 以全精度维护高置信窗口，在量化可恢复层存储中间窗口，仅删除最低置信窗口。解码期间，累积注意力分数更新窗口重要性；当量化窗口重新变得重要时，它被反量化并提升到全精度。在固定内存预算下，该设计保留更广的历史上下文，同时为最重要区域保持精确的全精度。跨长上下文理解、检索与推理基准，QEvict 一致优于代表性逐出与量化基线，减少遗漏注意力并改善信息保留。

## 关键词

KV 缓存、长上下文、逐出、量化、注意力漂移
