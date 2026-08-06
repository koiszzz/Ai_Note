---
published: 2026-08-05
title: "UniGD：工业检索的统一生成-判别框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UniGD- A Unified Generative-Discriminative Framework for Industrial Retrieval.md"
source_note: "[[信息源/arXiv cs.AI RSS/UniGD- A Unified Generative-Discriminative Framework for Industrial Retrieval]]"
source_sha256: 3a4967336f8b76c710091b28a24d612043c7f9d783beaa44733fc1518821f211
original_url: "https://arxiv.org/abs/2608.03150"
processed: 2026-08-05
language: zh-CN
---

# UniGD：工业检索的统一生成-判别框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shujie Ji、Yawei Kong、Yilin Zhao 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03150)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UniGD- A Unified Generative-Discriminative Framework for Industrial Retrieval|查看原始文件]]

## 摘要

- 提出统一生成-判别框架（UniGD），在单一模型内集成检索与相关性评分：为缓解联合优化中的梯度干扰，引入冲突感知梯度增强（CAGE）自适应协调两个目标；设计码本锚定表示模块（CAM）把条目表示锚定到从多模态预训练模型蒸馏的冻结层级码本，赋予丰富可泛化语义先验；针对异构短视频、商品与直播广告提出异构广告物料建模（HAM），在共享骨干上捕获跨类型语义共性同时保留类型特定建模能力。
- 生成式检索（GR）是工业搜索广告的有前景范式，但其部署受严格相关性与延迟要求约束；现有系统把 GR 与独立相关性模型级联，把生成似然目标与查询-广告相关性判别解耦，损害有效性并增加服务成本。
- 快手搜索广告平台在线 AB 测试显示 UniGD 提升广告收入 5.78%、推理延迟降低 33%、改善判别相关性估计；NQ320K 与 MS300K 上相对最强复现 GR 基线 Recall@10 分别提升 8.44% 与 3.19%。

## 正文

论文编号：arXiv:2608.03150v1（更新类型：new）。以下为摘要全文翻译。

生成式检索（GR）是工业搜索广告的有前景范式，然而其部署受严格相关性与延迟要求约束。现有系统把 GR 与独立相关性模型级联，把生成似然目标与查询-广告相关性判别解耦，损害有效性并增加服务成本。我们提出统一生成-判别框架（UniGD），在单一模型内集成检索与相关性评分。为缓解联合优化中的梯度干扰，UniGD 引入冲突感知梯度增强（Conflict-Aware Gradient Enhancement，CAGE）自适应协调两个目标。UniGD 进一步设计码本锚定表示模块（Codebook-Anchored Representation Module，CAM）：把条目表示锚定到从多模态预训练模型蒸馏的冻结层级码本，从而赋予它们丰富且可泛化的语义先验。针对异构短视频、商品与直播广告，UniGD 提出异构广告物料建模（Heterogeneous Ad-material Modeling，HAM）：在共享骨干上捕获跨类型语义共性，同时保留类型特定的建模能力。快手搜索广告平台上的在线 AB 测试显示，UniGD 把广告收入提升 5.78%、推理延迟降低 33%，并改善判别相关性估计。在 NQ320K 与 MS300K 上，UniGD 相对最强复现的 GR 基线把 Recall@10 分别提升 8.44% 与 3.19%。

## 关键词

#生成式检索 #搜索广告 #统一框架 #工业部署
