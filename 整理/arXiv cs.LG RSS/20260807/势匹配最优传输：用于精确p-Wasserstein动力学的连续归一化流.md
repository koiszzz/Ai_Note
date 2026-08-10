---
published: 2026-08-07
title: "势匹配最优传输：用于精确 p-Wasserstein 动力学的连续归一化流"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Potential Matching Optimal Transport- Continuous Normalizing Flows for Exact $p$-Wasserstein Dynamic.md"
source_note: "[[信息源/arXiv cs.LG RSS/Potential Matching Optimal Transport- Continuous Normalizing Flows for Exact $p$-Wasserstein Dynamic]]"
source_sha256: c95fe47f9685995b07a77103b43ae3d2eb8bb4a0046301c6e07ff03cf10ca50a
original_url: "https://arxiv.org/abs/2608.05666"
processed: 2026-08-07
language: zh-CN
---

# 势匹配最优传输：用于精确 p-Wasserstein 动力学的连续归一化流

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Lishuo Zhang, Ruizhi Huang, Yang Yu, Lei Li (School of Mathematical Sciences, Shanghai Jiao Tong University; MOE-LSC, Institute of Natural Sciences)
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05666)

## 摘要

- 引入势匹配最优传输（PMOT）：一般 p 成本最优传输（c_p(x,y)=‖x−y‖^p）的势流框架。
- PMOT 用所选指数 p 的广义 Benamou-Brenier 形式中的标量势参数化 CNF 速度场；用自诱导匹配损失沿由模型自身端点确定的直线桥训练势梯度，同时允许灵活终端分布匹配。
- 主要结果确立零损失精确性：在所述正则性、精确终端匹配与唯一性假设下，任何零损失解满足广义 Benamou-Brenier 最优性系统并恢复相应 p 最优传输映射与动力学。
- 合成基准上 PMOT 学习与相应 p 匹配 OT 参考一致的 p 特定映射；作为高维表格数据上基于似然的密度模型保持竞争力；MMD 基颜色变换实验演示灵活基于样本的终端匹配。

## 正文

研究引入势匹配最优传输（Potential Matching Optimal Transport, PMOT），一个用于一般 p 成本最优传输（c_p(x,y)=‖x−y‖^p）的势流框架。PMOT 用所选指数 p 的广义 Benamou-Brenier 形式中的标量势参数化 CNF 速度场。它用自诱导匹配损失沿由模型自身端点确定的直线桥训练势梯度，同时允许灵活的终端分布匹配。主要结果确立零损失精确性：在所述正则性、精确终端匹配与唯一性假设下，任何零损失解都满足广义 Benamou-Brenier 最优性系统，并恢复相应的 p 最优传输映射与动力学。在合成基准上，PMOT 学习与相应 p 匹配 OT 参考一致的 p 特定映射。它作为高维表格数据上基于似然的密度模型也保持竞争力，而 MMD 基颜色变换实验演示了灵活的基于样本的终端匹配。

## 关键词

最优传输、连续归一化流、Benamou-Brenier、Wasserstein、密度模型
