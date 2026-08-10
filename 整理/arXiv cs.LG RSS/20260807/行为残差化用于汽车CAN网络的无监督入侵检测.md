---
published: 2026-08-07
title: "行为残差化用于汽车 CAN 网络的无监督入侵检测"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Behavioral Residualization for Unsupervised Intrusion Detection in Automotive CAN Networks.md"
source_note: "[[信息源/arXiv cs.LG RSS/Behavioral Residualization for Unsupervised Intrusion Detection in Automotive CAN Networks]]"
source_sha256: 759f9b3f995aea7f1284d659688a0e9b3e1afcd61822f3d10dc5111bb2024bc5
original_url: "https://arxiv.org/abs/2608.05548"
processed: 2026-08-07
language: zh-CN
---

# 行为残差化用于汽车 CAN 网络的无监督入侵检测

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Chandan Hegde, Mukundh R Reddy
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05548)

## 摘要

- 提出逐 ID 行为残差化：从滑动窗口提取 14 个时间、协议与载荷特征，并相对各仲裁 ID 的正常基线残差化。
- 核心主张：推动性能提升的是该表示本身而非任何单个检测器。
- 在六个无监督检测器与两个数据集上，残差化在多数评估中提升平均 F1（HCRL 21/24，ROAD 30/36，五种子）。
- 对复用合法 ID 的 ROAD 数据集，针对性信号操纵攻击上召回率 ≥0.99 且 ROC-AUC 高；明确量化两个局限：新 ID 泛洪（HCRL DoS，F1=0.02）与跨 ID 模糊（ROAD，F1=0.27）。

## 正文

现代车辆依赖控制器局域网（CAN）总线，其设计优先考虑低成本与实时性能，但不提供消息认证或加密。拥有物理或远程访问权限的攻击者因此可注入任意帧，使入侵检测成为重要的纵深防御机制。多数已发表的 CAN 入侵检测系统依赖存在性特征，如新出现的仲裁 ID、冻结的载荷字节或异常的 DLC 值。这些特征在含易分离攻击的公开数据集上表现良好，但当攻击者复用合法仲裁 ID 时失效。本文提出逐 ID 行为残差化，一种 CAN 特定表示：从滑动窗口提取 14 个时间、协议与载荷特征，并相对每个仲裁 ID 的正常基线进行残差化。核心主张是：推动性能提升的是该表示本身，而非任何单个检测器。在六个无监督检测器与两个数据集上，残差化在多数评估中提升平均 F1（HCRL 21/24，ROAD 30/36，跨五种子）。在攻击复用合法 ID 的更真实 ROAD 数据集上，该表示在针对性信号操纵攻击上实现召回率 ≥0.99 与高 ROC-AUC。两个局限被明确量化：新 ID 泛洪（HCRL DoS，F1=0.02）与跨 ID 模糊（ROAD，F1=0.27），划定了所提表示的实测覆盖边界。

## 关键词

CAN 总线、入侵检测、无监督学习、汽车安全、行为建模
