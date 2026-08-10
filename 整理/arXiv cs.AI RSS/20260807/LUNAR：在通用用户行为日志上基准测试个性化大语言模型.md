---
published: 2026-08-07
title: "LUNAR：在通用用户行为日志上基准测试个性化大语言模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LUNAR- Benchmarking Personalized Large Language Models on UNiversal User BehAvioR Logs.md"
source_note: "[[信息源/arXiv cs.AI RSS/LUNAR- Benchmarking Personalized Large Language Models on UNiversal User BehAvioR Logs]]"
source_sha256: 0dc79b050afc565d1c04498b1b52f5fdec3d8e3d7acc3931452133a8435008eb
original_url: "https://arxiv.org/abs/2608.05246"
processed: 2026-08-07
language: zh-CN
---

# LUNAR：在通用用户行为日志上基准测试个性化大语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiahao Zhang, Yongzhi Tong, Zelin Fu, Pengde Zhao, Yanmei Jiang, Jiang Feng, Min Yang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05246)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LUNAR- Benchmarking Personalized Large Language Models on UNiversal User BehAvioR Logs|查看原始文件]]

## 摘要

- 现有个性化 LLM 基准主要依赖文本人设或孤立的行为信号，对跨域行为个性化的评估有限——该场景要求响应接地于异构日常生活活动。
- 引入 LUNAR：首个评估 LLM 如何从跨通用日常生活领域（服装、饮食、住房与出行）的纵向应用交互历史个性化响应的基准；为支持可扩展基准构建同时缓解数据稀疏与隐私担忧，LUNAR 使用接地于真实行为模式的多阶段粗到细合成流水线；保真度分析显示比其他合成基准更接近真实行为分布。
- 对 19 个主流 LLM 的实验表明，访问行为日志对深度个性化是必要但不充分的：更多上下文与更大模型都不保证更好性能；有效个性化取决于跨领域选择与整合相关证据。
- 直接检索细粒度行为记录一致优于压缩记忆，而更强个性化可能以隐私保护为代价；发现确定证据选择、跨域整合与隐私控制为个性化 LLM 的关键挑战。

## 正文

现有个性化 LLM 基准主要依赖文本人设或孤立的行为信号，对跨域行为个性化（响应必须接地于异构日常生活活动）的评估有限。为填补这一空白，我们引入 LUNAR，首个评估 LLM 如何从跨通用日常生活领域（包括服装、饮食、住房与出行）的纵向应用交互历史个性化响应的基准。为支持可扩展的基准构建，同时缓解数据稀疏与隐私担忧，LUNAR 使用一个多阶段粗到细的合成流水线，接地于真实世界行为模式。保真度分析显示其比其他合成基准更接近真实行为分布。对 19 个主流 LLM 的实验表明，访问行为日志对深度个性化是必要但不充分的：更多上下文与更大模型都不保证更好性能；有效个性化取决于跨领域选择与整合相关证据。直接检索细粒度行为记录一致优于压缩记忆，而更强个性化可能以隐私保护为代价。这些发现确定证据选择、跨域整合与隐私控制为个性化 LLM 的关键挑战。

## 关键词

#个性化LLM #行为日志 #基准测试 #跨域个性化
