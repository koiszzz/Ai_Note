---
title: "FLARE：混合语言模型的扩散"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FLARE- Diffusion for Hybrid Language Model.md"
source_note: "[[信息源/arXiv cs.AI RSS/FLARE- Diffusion for Hybrid Language Model]]"
source_sha256: fa600d2e32677c2823e9daf5ad1e9e3afccfbc6f22b2c233fa70a52a4023e853
original_url: "https://arxiv.org/abs/2606.01774"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FLARE：混合语言模型的扩散

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuchen Zhu、Jing Shi、Chongjian Ge 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.01774)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FLARE- Diffusion for Hybrid Language Model|查看原始文件]]

## 摘要

- 提出 FLARE，混合注意力 LLM 的系统转换框架：分析识别迁移数据质量是能力保持的主要决定因素，胜过损失公式与注意力掩码设计。
- 框架结合 token 等价的 AR 与扩散目标、硬件感知内核与统一推理，使一个检查点同时支持 AR 式验证解码与扩散式并行去噪。
- 从强 AR 检查点出发、仅用有限训练后数据，FLARE 在各模型规模上与领先开源 dLLM 竞争，并在单 GPU 并发服务中相对开源 dLLM 基线取得一致吞吐提升。
- 结果提示实际 dLLM 不仅受解码算法限制，还受迁移数据质量与当前块扩散目标训练低效限制，需要数据、目标、架构与推理系统的联合设计。

## 正文

论文编号：arXiv:2606.01774v2（更新类型：replace-cross）。以下为摘要全文翻译。

自回归（AR）大语言模型（LLM）取得了广泛的实用成功，但顺序解码仍是低延迟部署的关键瓶颈。近期高效推理工作沿两个方向推进：通过高效架构降低每次模型调用的成本，通过并行生成减少串行解码步骤。混合注意力骨干解决前者，扩散语言模型（dLLM）通过迭代并行去噪追求后者。结合这些优势仍然困难：AR 到 dLLM 的转换往往无法保持种子检查点能力，而混合注意力的循环状态与掩码约束使扩散训练与服务变得复杂。我们提出 FLARE，一个面向混合注意力 LLM 的系统转换框架。我们的分析把迁移数据质量确定为能力保持的首要决定因素，其重要性超过损失公式与注意力掩码设计。由此产生的框架结合 token 等价的 AR 与扩散目标、硬件感知内核与统一推理，使一个检查点既能支持 AR 式验证解码，也能支持扩散式并行去噪。从强 AR 检查点出发、仅用有限的训练后数据，FLARE 在各模型规模上与领先开源 dLLM 竞争，并在单 GPU 并发服务中相对开源 dLLM 基线取得一致吞吐提升。我们的结果进一步表明，实际 dLLM 不仅受解码算法限制，还受迁移数据质量与当前块扩散目标的训练低效限制，促使数据、目标、架构与推理系统的联合设计。

## 关键词

#扩散语言模型 #混合注意力 #推理加速 #模型转换
