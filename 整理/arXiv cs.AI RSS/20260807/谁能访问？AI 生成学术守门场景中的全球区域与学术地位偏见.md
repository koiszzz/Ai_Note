---
published: 2026-08-07
title: "谁能访问？AI 生成学术守门场景中的全球区域与学术地位偏见"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Who Gets Access- Global Region and Academic Status Bias in AI-Generated Academic Gatekeeping Scenari.md"
source_note: "[[信息源/arXiv cs.AI RSS/Who Gets Access- Global Region and Academic Status Bias in AI-Generated Academic Gatekeeping Scenari]]"
source_sha256: be58bddc18466f85576f5e4f4209db7760c72619f29ddf357e196228af7b771b
original_url: "https://arxiv.org/abs/2608.05178"
processed: 2026-08-07
language: zh-CN
---

# 谁能访问？AI 生成学术守门场景中的全球区域与学术地位偏见

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Nouar AlDahoul, Hezerul Abdul Karim, Myles Joshua Toledo Tan
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05178)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Who Gets Access- Global Region and Academic Status Bias in AI-Generated Academic Gatekeeping Scenarios|查看原始文件]]

## 摘要

- 科学知识的公平获取常取决于非正式守门决策，尤其付费文章、数据集或简历（CV）等专业材料必须选择性分享时。
- 引入受控模拟框架：基于大语言模型（LLM）的教授必须只授予一个请求者访问权——跨提示，请求者按全球区域（全球北方 vs 全球南方）与学术资历（本科生、博士生、博士后、终身教授）系统变化，其他因素保持不变。
- 跨不同评估场景，LLM 展示对比性学术地位偏见，一些优先博士生、其他青睐终身教授；但当全球区域不同时，基于模型架构出现明显分歧：许多前沿 LLM 因追求公平的安全对齐（pro-equity bias）系统偏好全球南方请求者，而开源权重与小模型常反转该偏好支持全球北方，反映其基线预训练数据的全球区域偏见与未对齐地理分布。
- 发现凸显嵌入模型行为的规范假设如何塑造守门决策，强调审计 AI 系统公平性与价值对齐的重要性。

## 正文

对科学知识的公平获取常常取决于非正式的守门（gatekeeping）决策，特别是在付费文章、数据集或简历（CV）等专业材料必须选择性分享时。我们引入一个受控的模拟框架，其中基于大语言模型（LLM）的教授必须只授予一个请求者访问权。跨提示，请求者按全球区域（全球北方 vs 全球南方）与学术资历（本科生、博士生、博士后研究员与终身教授）系统变化，而所有其他因素保持不变。跨不同的评估场景，LLM 表现出对比性的学术地位偏见，一些优先博士生，而另一些青睐终身教授。然而，当全球区域不同时，基于模型架构出现明显的分歧：许多前沿 LLM 因追求公平的（pro-equity）安全对齐导致的公平偏见，系统性地偏好来自全球南方的请求者，而开源权重与小模型经常反转这一偏好，支持全球北方，反映其基线预训练数据的全球区域偏见与未对齐的地理分布。我们的发现凸显嵌入模型行为的规范假设如何塑造守门决策，强调审计 AI 系统公平性与价值对齐的重要性。

## 关键词

#公平性 #全球偏见 #学术守门 #LLM审计
