---
title: "AcceptMoE：MoE 投机解码的承诺加权自定规模验证专家集"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AcceptMoE- Commitment-Weighted Self-Sizing Verifier Expert Sets for Efficient MoE Speculative Decodi.md"
source_note: "[[信息源/arXiv cs.LG RSS/AcceptMoE- Commitment-Weighted Self-Sizing Verifier Expert Sets for Efficient MoE Speculative Decodi]]"
source_sha256: ec5c5a32348d19b1d34fc0334c35ef6c906bdb972bbc3811017714a2cec9308c
original_url: "https://arxiv.org/abs/2608.02989"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AcceptMoE：MoE 投机解码的承诺加权自定规模验证专家集

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Shuang Liang (Mark)、Hao (Mark) Chen、Zhiwen Mo 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02989)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AcceptMoE- Commitment-Weighted Self-Sizing Verifier Expert Sets for Efficient MoE Speculative Decodi|查看原始文件]]

## 摘要

- 提出 AcceptMoE，验证器侧专家选择器：结合目标路由器分数与离线估计的承诺概率，自动调整每个验证块的合格专家数，消除用户指定专家预算的需求。
- 投机解码在目标模型一次前向中验证草稿 token 树；对专家混合（MoE）目标，并行验证可激活所有树节点所选专家的并集，即使只有一小部分节点到达被接受输出——token 数、激活专家并集大小与专家权重流量因此是不同成本度量：减少 token 工作负载不必成比例缩小专家并集，卸载下传输流量还依赖缓存驻留。
- 卸载下 AcceptMoE 使专家资格条件化于缓存驻留，而非预测自然路由并预取对应专家权重。
- 尽管约束目标专家资格改变模型分布，跨三个 MoE 目标与四个基准的 12 个模型-任务对，AcceptMoE 平均准确率比自然路由的 EAGLE-3 投机解码低 0.27 个百分点；SGLang 批量 1 服务下达到该基线 1.290 倍吞吐（全专家权重在 GPU 内存），物理专家卸载下 2.06 倍，同时主机到设备流量减少 73.6%–77.1%。

## 正文

论文编号：arXiv:2608.02989v1（更新类型：new）。以下为摘要全文翻译。

投机解码在目标模型的一次前向中验证一个草稿 token 树。对专家混合（MoE）目标，并行验证可以激活所有树节点所选专家的并集，即使只有一小部分节点到达被接受的输出。token 数、激活专家并集大小与专家权重流量因此是截然不同的成本度量：减少 token 工作负载不必成比例缩小专家并集，而在卸载下，传输流量还依赖缓存驻留。我们引入 AcceptMoE，一个验证器侧专家选择器：结合目标路由器分数与离线估计的承诺概率，自动调整每个验证块的合格专家数，消除用户指定专家预算的需求。在卸载下，AcceptMoE 使专家资格条件化于缓存驻留，而不是预测自然路由并预取相应的专家权重。尽管约束目标专家资格改变了模型分布，跨三个 MoE 目标与四个基准的 12 个模型-任务对，AcceptMoE 的平均准确率比自然路由的 EAGLE-3 投机解码低 0.27 个百分点。在 SGLang 批量大小 1 下服务时，它达到该基线 1.290 倍的吞吐（全部专家权重在 GPU 内存中），在物理专家卸载下达到 2.06 倍，同时把主机到设备流量减少 73.6% 到 77.1%。

## 关键词

#投机解码 #MoE #专家选择 #卸载
