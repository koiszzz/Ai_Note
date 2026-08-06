---
title: "推理 LLM 的测试时扩展：推理情境、评估与可复现性"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Test-Time Scaling in Reasoning LLMs- Inference Regimes, Evaluation, and Reproducibility.md"
source_note: "[[信息源/arXiv cs.LG RSS/Test-Time Scaling in Reasoning LLMs- Inference Regimes, Evaluation, and Reproducibility.]]"
source_sha256: 8982eba3f68f2dc3d02dbc1c024c5405b5d9758ffdfba3a187f4e986b5bdc40d
original_url: "https://arxiv.org/abs/2608.04001"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 推理 LLM 的测试时扩展：推理情境、评估与可复现性

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Mohsen Hariri、Weicong Chen、Nahal Shahini、Vikash Singh、Kai Ye、Amirhossein Samandar、Debargha Ganguly、Sreehari Sankar、Yanyan Zhang、Shouren Wang、Jerry Peng、Biyao Zhang、Michael Hinczewski、Vipin Chaudhary
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04001)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Test-Time Scaling in Reasoning LLMs- Inference Regimes, Evaluation, and Reproducibility.|查看原始文件]]

## 摘要

- 大语言模型可以用更多推理时计算解决显著更难的推理问题；但"测试时扩展"一词现在涵盖多种推理算法：沿单条轨迹扩展审议、采样完成的候选并经投票或验证聚合、或在未完成部分状态上搜索。
- 这些算法在统计结构、计算核算与失败模式上不同；在单一标量"预算"下把这些过程视为可互换，或不带产生结果的推理协议而只报告准确率，使跨研究结果难以比较。
- 沿三个轴系统化测试时扩展：
- 第一，把测试时扩展形式化为自回归模型隐式前缀树上的预算化推理，区分三种结构情境：单轨迹顺序扩展、带终端归约的叶子级扩展、前缀级扩展。
- 第二，把被评估对象视为整个推理系统，制定区分端到端系统性能与候选库诊断的评估原则；引入评估画像，其坐标与简单泛函恢复或界定常见重复采样指标，并规定计算与不确定性的协议匹配报告。
- 第三，规定推理协议的可复现性要求，区分精确重放与分布性可复现，识别支撑两者的所需工件。
- 还按模型侧与接口机制组织开放权重推理生态，把这些原则应用于广博知识、符号推理与竞赛数学基准，并组装超过 20 亿条完整推理轨迹，随含渐进更丰富验证器与 token 级信号的版本发布。

## 正文

论文编号：arXiv:2608.04001v1（更新类型：new）。以下为摘要全文翻译。

大语言模型可以用更多的推理时计算解决显著更难的推理问题。然而，"测试时扩展"一词现在涵盖多样的推理算法：沿单条轨迹扩展审议、采样完成的候选并经由投票或验证聚合、或者在未完成的局部状态上搜索。这些算法在统计结构、计算核算与失败模式上各不相同。把这些过程在单一标量"预算"下视为可互换，或者不报告产生准确率的推理协议就报告准确率，会使跨研究的结果难以比较。我们沿三个轴开发测试时扩展的系统性描述。首先，我们把测试时扩展形式化为自回归模型隐式前缀树上的预算化推理，并区分三种结构情境：单轨迹顺序扩展、带终端归约的叶子级扩展、以及前缀级扩展。其次，我们把被评估对象视为整个推理系统，并制定分离端到端系统性能与候选库诊断的评估原则。我们引入一个评估画像，其坐标与简单泛函恢复或界定常见的重复采样指标，并规定计算与不确定性的协议匹配报告。第三，我们规定推理协议的可复现性要求，区分精确重放与分布性可复现，并识别支撑每种所需的工件。我们还按模型侧与接口机制组织开放权重推理生态系统，把这些原则应用于广博知识、符号推理与竞赛数学基准，并组装超过 20 亿条完整推理轨迹以供发布，随带渐进更丰富的验证器与 token 级信号。

## 关键词

#测试时扩展 #推理LLM #评估 #可复现性 #推理算法
