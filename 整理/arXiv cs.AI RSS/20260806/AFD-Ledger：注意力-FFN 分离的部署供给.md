---
published: 20260806
title: "AFD-Ledger：注意力-FFN 分离的部署供给"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AFD-Ledger- Deployment Provisioning for Attention--FFN Disaggregation.md"
source_note: "[[信息源/arXiv cs.AI RSS/AFD-Ledger- Deployment Provisioning for Attention--FFN Disaggregation]]"
source_sha256: 5cc0a169564ce6e2e9944ec07abf2d28e15db1313255e6a14b86cac2651031ab
original_url: "https://arxiv.org/abs/2608.04502"
processed: 2026-08-06
language: zh-CN

---

# AFD-Ledger：注意力-FFN 分离的部署供给

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chengyu Qiu, Xiao Fu, Fengcun Li, Yulei Qian, Yuchen Xie, Xunliang Cai, Yingdi Shan, Yongwei Wu, Mingxing Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04502)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AFD-Ledger- Deployment Provisioning for Attention--FFN Disaggregation|查看原始文件]]

## 摘要

- 注意力-前馈网络（FFN）分离（AFD）正成为服务混合专家（MoE）语言模型的有前景架构，但现有 AFD 系统留下一个部署问题：在相同模型、工作负载、TPOT SLO、硬件预算等条件下，AFD 是否比最佳共置部署提供更高吞吐量。
- 本文提出 AFD-Ledger，一个离线分析式供给系统，使用分析执行模型和评估有界硬件搜索独立供给 AFD 和共置部署；在可行穷举部署空间中，AFD-Ledger 将完整部署评估减少 68.8%-83.5%，同时仍恢复全局最优部署。
- 在三个物理 LongCat 2.0 部署上保持正确架构决策，AFD 对共置吞吐量预测与测量偏差在 6.6%-9.6% 内；同质 AFD 仅在一小部分设置中改进固定预算吞吐量，异构 AFD 需要部署级硬件互补性。

## 正文

注意力-前馈网络（FFN）分离（AFD）正成为服务混合专家（MoE）语言模型的有前景架构。虽然现有 AFD 系统改进了分离执行的效率，它们留下一个部署问题未回答：在相同模型、工作负载、每输出 token 时间（TPOT）服务级目标（SLO）、硬件预算、硬件目录和运行时能力下，AFD 是否提供比最佳共置部署更高的吞吐量？回答此问题需要联合优化两种架构的硬件分配和部署组织，使穷举供给代价过高。我们提出 AFD-Ledger，一个离线分析供给系统，使用分析执行模型和评估有界硬件搜索独立供给 AFD 和共置部署。在穷举供给可行的部署空间中，AFD-Ledger 将完整部署评估减少 68.8%-83.5%，同时仍恢复全局最优部署。在三个物理 LongCat 2.0 部署上，它保持正确的架构决策，同时将 AFD 对共置吞吐量预测到测量的 6.6%-9.6% 以内。使用此验证框架，我们表明同质 AFD 仅在所研究设置的少数中改进固定预算吞吐量，异构 AFD 需要部署级硬件互补性而非启发式设备选择，且角色特定硬件改进主要在其通过跨越部署能力-价格边界实现更好部署组织时才有意义。

## 关键词

#MoE #模型部署 #注意力FFN分离 #供给系统 #arXiv