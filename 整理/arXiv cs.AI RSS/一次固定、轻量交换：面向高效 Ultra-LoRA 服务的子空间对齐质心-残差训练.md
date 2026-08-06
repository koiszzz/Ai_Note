---
title: "一次固定、轻量交换：面向高效 Ultra-LoRA 服务的子空间对齐质心-残差训练"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Pin Once, Swap Light- Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving.md"
source_note: "[[信息源/arXiv cs.AI RSS/Pin Once, Swap Light- Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving]]"
source_sha256: b4a6e370d2c2ebe4f1f83af4f22cfed8402481fbe9d84243b797c7f304590b08
original_url: "https://arxiv.org/abs/2608.03579"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 一次固定、轻量交换：面向高效 Ultra-LoRA 服务的子空间对齐质心-残差训练

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiang Li、Pengcheng Wang、Huazheng Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03579)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Pin Once, Swap Light- Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving|查看原始文件]]

## 摘要

- 提出子空间对齐 LoRA 训练（SALT），服务效率感知的分层微调框架，三阶段运作：提供商用新对齐正则化器（把域内任务子空间聚合成统一基）在域内公共数据上联合训练高容量域质心；用户在冻结质心之上用私有数据微调超低秩任务残差适配器；推理时提供商把质心固定在 GPU VRAM 中，按需动态交换每个用户的任务残差。
- 现代多租户 LoRA 服务系统并发托管数十到数百个 LoRA 适配器，但带来服务效率与任务性能的关键系统困境：高秩适配器下游性能更好，但 GPU VRAM 占用与 H2D PCIe 交换开销严重限制可扩展性；超低秩适配器（r≤2）最小化两者，却遭受下游性能退化。
- 跨不同规模 LLM，SALT 用 r≤2 残差恢复高秩准确率，相对最先进压缩基线取得最高 18.5% 绝对准确率增益，每适配器内存最高降低 16 倍。
- 集成进 vLLM 时，SALT 在 PCIe 带宽压力下把 Llama-3.2-3B 的服务吞吐提升最高 51%，GPU VRAM 约束下提升 28%。

## 正文

论文编号：arXiv:2608.03579v1（更新类型：cross）。以下为摘要全文翻译。

现代多租户低秩适配器（LoRA）服务系统并发托管数十到数百个 LoRA 适配器。虽然强大，这引入服务效率与任务性能之间的关键系统困境：较高秩的适配器通常取得更好的下游任务性能，但其 GPU VRAM 占用与主机到设备（Host-to-Device）PCIe 交换开销严重限制可扩展性。相反，超低秩适配器（r≤2）把 VRAM 占用与 PCIe 传输开销都最小化，却遭受下游任务性能退化。为解决这一问题，我们提出子空间对齐 LoRA 训练（SALT），一个服务效率感知的分层微调框架。我们的解决方案分三阶段运作。第一，提供商使用一种新颖的对齐正则化器（把域内任务子空间聚合成统一基）在域内公共数据上联合训练高容量域质心。接下来，用户在这些冻结质心之上用私有数据微调超低秩任务残差适配器。最后，推理期间，提供商把质心固定在 GPU VRAM 中，并按需动态交换每个用户的任务残差。跨不同规模的 LLM，SALT 用 r≤2 残差恢复高秩准确率，相对最先进的压缩基线取得最高 18.5% 的绝对准确率增益，并把每适配器内存降低最高 16 倍。集成进 vLLM 时，SALT 在 PCIe 带宽压力下把 Llama-3.2-3B 的服务吞吐提升最高 51%，在 GPU VRAM 约束下提升 28%。

## 关键词

#LoRA服务 #多租户 #子空间对齐 #高效推理
