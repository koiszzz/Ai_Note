---
title: "LLM 家族的跨模型 KV 缓存迁移：预填充复用的闭式线性映射"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Cross-Model KV Cache Transfer in LLM Families- A Closed-Form Linear Mapping for Prefill Reuse.md"
source_note: "[[信息源/arXiv cs.LG RSS/Cross-Model KV Cache Transfer in LLM Families- A Closed-Form Linear Mapping for Prefill Reuse]]"
source_sha256: 986740ab0d2f91f102cfac81e48e0280b77c0c7a479baa47242cf0e8dcb32ccc
original_url: "https://arxiv.org/abs/2608.03893"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LLM 家族的跨模型 KV 缓存迁移：预填充复用的闭式线性映射

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Taekyung Heo、Rasoul Shafipour、Ritchie Zhao 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03893)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Cross-Model KV Cache Transfer in LLM Families- A Closed-Form Linear Mapping for Prefill Reuse|查看原始文件]]

## 摘要

- 提出跨模型 KV 缓存迁移：接收者复用来源 KV 缓存、跳过预填充——发现跨模型 KV 在匹配 KV 对（源与目标共享 KV 头数与每头维度）上有显著线性结构：Qwen3 14B→32B 单个源层解释目标键 56% 方差、值 32%，多源层升至 79% 与 65%。
- 生产部署常因成本-质量级联、对话中途切换与路由在不同大小同族模型间交换，每次交换迫使接收者从头偿还预填充。
- 设计闭式岭映射器：逐头运作、三步骤——先为每目标层选 top-k 最具预测性源层并拼接其 KV 作为输入；再在映射前剥离键的 RoPE（拟合位置无关、跨上下文长度可复用）；最后在 500 条 FineWeb-Edu 序列（各 1,024 token）小校准集上拟合岭回归。
- 六个对（三个家族）中该线性映射在四个对保留接收者独立预填充准确率的 73–98%，两个对急剧退化；非线性 MLP 在失败上恢复最高 +37 pp HellaSwag 保留；映射器比重新预填充快 2.7–25 倍，跨多轮交接稳定——使跨模型 KV 缓存迁移实用。

## 正文

论文编号：arXiv:2608.03893v1（更新类型：new）。以下为摘要全文翻译。

生产部署经常因成本-质量级联、对话中途切换与路由而在一个家族内不同大小的模型间交换，而每次交换迫使接收者从头支付预填充。我们提出跨模型 KV 缓存迁移：接收者复用来源的 KV 缓存，跳过预填充。我们发现，跨匹配 KV 对（源与目标共享 KV 头数与每头维度）的 KV 具有可观的线性结构。在 Qwen3 14B→32B 上，一个源层解释目标键 56% 的方差、值 32%，多个源层时升至 79% 与 65%。基于此，我们设计一个闭式岭映射器：逐头运作，分三步进行。第一，对每个目标层，选择 top-k 最具预测性的源层，并拼接它们的 KV 作为输入。第二，在映射前从键剥离 RoPE，使拟合位置无关、可跨上下文长度复用。第三，在一个 500 条 FineWeb-Edu 序列（每条 1,024 token）的小校准集上拟合岭回归。令人惊讶的是，在三个家族的六个对上，这个线性映射器在四个对上保留接收者独立预填充准确率的 73–98%，而两个对急剧退化。一个非线性 MLP 在这些失败上恢复最高 +37 pp 的 HellaSwag 保留。该映射器比重新预填充快 2.7–25 倍，并跨多轮交接保持稳定，使跨模型 KV 缓存迁移切实可行。

## 关键词

#KV缓存 #跨模型迁移 #预填充复用 #LLM服务
