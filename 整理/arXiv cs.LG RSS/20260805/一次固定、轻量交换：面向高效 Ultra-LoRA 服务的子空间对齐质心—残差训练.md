---
published: 2026-08-05
title: "一次固定、轻量交换：面向高效 Ultra-LoRA 服务的子空间对齐质心—残差训练"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Pin Once, Swap Light- Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving.md"
source_note: "[[信息源/arXiv cs.LG RSS/Pin Once, Swap Light- Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving.]]"
source_sha256: d88d37f6199d1578e443c3705df8aedcab97170010563fd056ce1b0f7a5f93ef
original_url: "https://arxiv.org/abs/2608.03579"
processed: 2026-08-05
language: zh-CN
---

# 一次固定、轻量交换：面向高效 Ultra-LoRA 服务的子空间对齐质心—残差训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Xiang Li、Pengcheng Wang、Huazheng Wang、Saurabh Bagchi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03579)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Pin Once, Swap Light- Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving.|查看原始文件]]

## 摘要

- 现代多租户低秩适配器（LoRA）服务系统并发托管数十到数百个 LoRA 适配器；这带来服务效率与任务性能之间的关键系统两难：更高秩适配器通常取得更好下游任务性能，但其 GPU VRAM 占用与 Host-to-Device PCIe 交换开销严重限制可扩展性；而超低秩适配器（r≤2）最小化 VRAM 占用与 PCIe 传输开销，却遭受下游任务性能退化。
- 提出子空间对齐 LoRA 训练（SALT），一个服务效率感知的分层微调框架，分三阶段运作：
- 第一，提供商用新颖对齐正则化器在域内公共数据上联合训练高容量域质心，把域内任务子空间凝聚为统一基；
- 第二，用户在这些冻结质心之上于私有数据上微调超低秩任务残差适配器；
- 第三，推理时提供商把质心固定在 GPU VRAM，按需动态换入每个用户的任务残差。
- 跨不同规模 LLM，SALT 用 r≤2 残差恢复高秩准确率：相对最先进压缩基线取得最多 18.5% 绝对准确率提升，每适配器内存最多减少 16 倍。
- 集成进 vLLM 后，对 Llama-3.2-3B，SALT 在 PCIe 带宽压力下把服务吞吐提升最多 51%，在 GPU VRAM 约束下提升 28%。

## 正文

论文编号：arXiv:2608.03579v1（更新类型：new）。以下为摘要全文翻译。

现代多租户低秩适配器（LoRA）服务系统并发托管数十到数百个 LoRA 适配器。尽管强大，这引入了服务效率与任务性能之间的关键系统两难：更高秩的适配器通常取得更好的下游任务性能，但它们的 GPU VRAM 占用与 Host-to-Device PCIe 交换开销严重限制可扩展性。相反，超低秩适配器（r ≤ 2）最小化 VRAM 占用与 PCIe 传输开销，却遭受下游任务性能退化。为解决这个问题，我们提出子空间对齐 LoRA 训练（SALT），一个服务效率感知的分层微调框架。我们的方案分三个阶段运作。首先，提供商用一种新颖的对齐正则化器在域内公共数据上联合训练高容量域质心，把域内任务子空间凝聚为统一基。接下来，用户在这些冻结质心之上于私有数据上微调超低秩的任务残差适配器。最后，推理期间，提供商把质心固定在 GPU VRAM 中，并按需动态换入每个用户的任务残差。跨不同规模的 LLM，SALT 用 r ≤ 2 的残差恢复高秩准确率，相对最先进的压缩基线取得最多 18.5% 的绝对准确率提升，并把每适配器内存减少最多 16 倍。集成进 vLLM 后，对 Llama-3.2-3B，SALT 在 PCIe 带宽压力下把服务吞吐提升最多 51%，在 GPU VRAM 约束下提升 28%。

## 关键词

#LoRA #LLM服务 #子空间对齐 #微调 #vLLM
