---
published: 2026-08-07
title: "Tytan：从关系数据交互式神经符号构建分析语义架构"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Tytan- Interactive Neurosymbolic Construction of Analytic Semantic Schemas from Relational Data.md"
source_note: "[[信息源/arXiv cs.AI RSS/Tytan- Interactive Neurosymbolic Construction of Analytic Semantic Schemas from Relational Data]]"
source_sha256: b603d9f22fb8ebbbb6bd0059042c4988f580e694ec7af86bca30d877cd0e2c80
original_url: "https://arxiv.org/abs/2608.06331"
processed: 2026-08-07
language: zh-CN
---

# Tytan：从关系数据交互式神经符号构建分析语义架构

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Donna Hooshmand, Shubham Shahi, Cameron Barrie, Abhratanu Dutta, Marko Sterbentz, Harper Pack, Kristian J. Hammond
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06331)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Tytan- Interactive Neurosymbolic Construction of Analytic Semantic Schemas from Relational Data|查看原始文件]]

## 摘要

- 从自然语言查询界面到自动化报告生成，数据分析工具需要数据描述：所含真实世界实体、哪些列作为度量或标识符、表格如何连接为分析单元；今天该语义层通常手工编写——这是知识获取瓶颈，限制分析系统可扩展性、使非技术用户依赖专家，且本身易错。
- 呈现 TYTAN：从关系数据库与（可用时）简短用户描述自动构建分析语义架构的系统——结合数据库符号分析与基于 LLM 的实体提议、角色分配与命名语义推断；证据使决策模糊时，TYTAN 向用户提出针对性自然语言问题。
- 沿定义架构功能效用的三轴评估 TYTAN：覆盖（是否捕获所有重要实体与特征）、检索正确性（架构指令是否真正到达数据）与刻画准确率（语义类型是否正确）——八个数据库（真实与基准领域）评估。
- 七个参考领域上，TYTAN 到达专家校正参考架构的每个实体、属性与可聚合特征（100% 覆盖）；100% 检索指令正确执行（1,678/1,678 自生成声明），语义角色在 92-100% 匹配属性上一致；检查底层数据显示小分歧在参考而非 TYTAN；留出盲测（无声明键的活十表数据库）中，TYTAN 恢复完整实体结构与验证键，满足五个独立盲注者 100% 可满足期望。

## 正文

从自然语言查询界面到自动化报告生成，数据分析工具需要对其数据的一种描述：所含的真实世界实体、哪些列作为度量或标识符，以及表格如何连接成分析单元。今天，这个语义层通常由手工编写。这是一个知识获取瓶颈，限制了分析系统的可扩展性，使非技术用户依赖专家，并且本身容易出错。我们呈现 TYTAN，一个从关系数据库以及（当可用时）简短的用户提供描述自动构建分析语义架构（analytic semantic schema）的系统。TYTAN 将数据库的符号分析与基于 LLM 的语义推断结合，用于实体提议、角色分配与命名。当证据使决策模糊时，TYTAN 向用户提出一个针对性的自然语言问题。我们在八个数据库（横跨真实世界与基准领域）上，沿定义架构功能效用的三个轴评估 TYTAN：（i）覆盖——所有重要实体与特征是否被捕获？（ii）检索正确性——架构的指令是否真正到达数据？以及（iii）刻画准确率——语义类型是否正确？跨七个参考领域，TYTAN 到达专家校正参考架构的每个实体、属性与可聚合特征（100% 覆盖）。此外，其 100% 的检索指令正确执行（1,678/1,678 自生成声明），且语义角色在 92-100% 的匹配属性上与参考一致。检查底层数据显示小的分歧在参考中而非 TYTAN。在一个留出的盲测（一个无声明键的实时十表数据库）上，TYTAN 恢复了完整的实体结构与验证的键，并满足了五个独立盲注者的 100% 可满足期望。

## 关键词

#语义架构 #关系数据 #神经符号 #数据发现
