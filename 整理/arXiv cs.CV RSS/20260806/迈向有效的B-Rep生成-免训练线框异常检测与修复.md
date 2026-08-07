---
published: 2026-08-06
title: 迈向有效的 B-Rep 生成：免训练线框异常检测与修复
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Towards Valid B-Rep Generation- Training-Free Wireframe Anomaly Detection and Repair.md
source_note: "[[信息源/arXiv cs.CV RSS/Towards Valid B-Rep Generation- Training-Free Wireframe Anomaly Detection and Repair]]"
source_sha256: a0f5d3933ed9df13d85e03799a65f8101420d73b20d0f6ecda8abdfc9362ff52
original_url: https://arxiv.org/abs/2608.04955
processed: 2026-08-07
language: zh-CN
---

# 迈向有效的 B-Rep 生成：免训练线框异常检测与修复

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04955)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Towards Valid B-Rep Generation- Training-Free Wireframe Anomaly Detection and Repair|查看原始文件]]

## 摘要

- 提出 WDR（线框检测与修复），一种免训练框架，在中间线框阶段介入以提升下游 B-Rep 的有效性，无需重新训练大型生成模型。
- GTAD 检测器融合基于 VLM 的并行粗筛与几何、拓扑检测器，预测下游无效风险并将生成路由到专门分支；EGGTR 模块按检测器触发进行引导式再生成。
- 通过能量引导重采样与扩散模型免训练引导扩展测试时计算，WDR 可无缝集成进自回归与扩散流程，显著提升核校验有效性且基本保持多样性。

## 正文

多阶段边界表示（B-Rep）生成利用中间线框来合成 CAD 模型。然而，这些线框中的几何与拓扑风险——例如自相交、边塌缩和顶点断开——可能传播为无效的最终 B-Rep。通过重新训练大型生成模型来缓解此类失败在计算上不可行。我们提出 WDR（Wireframe Detection and Repair），一种免训练框架，在中间线框阶段进行干预以提升下游 B-Rep 的有效性。WDR 采用几何—拓扑异常检测器（GTAD），将并行的基于 VLM 的粗筛选与几何和拓扑检测器相结合，以预测下游无效风险并将生成路由到专门分支。随后，能量引导的几何—拓扑修复（EGGTR）模块通过几何与拓扑分支执行检测器触发的引导再生成。通过能量引导重采样和扩散模型免训练引导来扩展测试时计算，WDR 无需重新训练即可集成到自回归和扩散流程中。大量实验表明，它在以核校验的有效性上取得一致提升，同时大体保留所合成 CAD 模型的多样性与分布质量。代码将在论文录用后公开。

## 关键词

#B-Rep生成 #CAD #线框修复 #异常检测 #扩散模型
