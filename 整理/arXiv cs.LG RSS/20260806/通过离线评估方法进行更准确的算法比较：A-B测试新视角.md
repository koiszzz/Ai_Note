---
published: 2026-08-06
title: 通过离线评估方法进行更准确的算法比较：A/B测试新视角
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/A More Accurate Algorithm Comparison through A-B Testing using Offline Evaluation Methods.md
source_note: "[[信息源/arXiv cs.LG RSS/A More Accurate Algorithm Comparison through A-B Testing using Offline Evaluation Methods]]"
source_sha256: a596962360a64090bdd59ea05750e81e19ef89c2fa770839c58b28aae5e8f3c1
original_url: https://arxiv.org/abs/2607.01958
processed: 2026-08-07
language: zh-CN
---

# 通过离线评估方法进行更准确的算法比较：A/B测试新视角

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.01958)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A More Accurate Algorithm Comparison through A-B Testing using Offline Evaluation Methods|查看原始文件]]

## 摘要

- 揭示反直觉现象：A/B 测试可能产生比离线评估更高的算法选择错误率。
- 原因在于 A/B 测试的样本均值估计不诱导正相关，而离线评估因共享离线数据意外产生这种有益相关。
- 提出引入"假设中间算法"、分步共享数据比较 A、M、B 的估计器，仅用一半 A/B 测试数据即达到相同选择错误率。

## 正文

A/B 测试是在线服务中挑选更优算法的黄金标准。由于 A/B 测试的实验成本高，且存在损害用户体验和收入的风险，离线评估作为更安全的替代方案受到关注；但众所周知，离线评估的估计精度显著更低，因此最终选择决策通常仍通过 A/B 测试作出。

与这一传统观点相反，我们揭示了一个反直觉现象：A/B 测试可能产生比离线评估更高的算法选择错误率。原因在于，A/B 测试中使用的样本均值估计器不诱导正相关（positive correlation），而这种正相关对于减少关键选择错误——即低估真正更优算法和高估真正更劣算法——至关重要。相比之下，离线评估方法由于在估计和比较多个算法性能时依赖共享的离线数据，无意中产生了这种有益的相关性。

基于这一洞见，我们提出一种有意诱导正相关以改进 A/B 测试中算法选择的估计器。核心思路是引入一个假设的中间算法 M，并利用每步的共享数据分步估计算法 A、M、B 之间的性能差异。该方法使离线评估技术能够在每一步应用，从而诱导正相关并减少关键选择错误。此外，我们推导了关于结果方差的最优中间算法，并通过偏差-方差分析考察其相对现有方法的优势。真实数据实验表明，我们的估计器仅使用 A/B 测试数据的一半即可达到与现有方法相同的选择错误率。

## 关键词

#A/B测试 #离线评估 #算法选择 #正相关 #反事实估计
