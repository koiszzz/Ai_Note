---
published: 20260806
title: "Scrouting：先侦察仓库的编码智能体成本感知路由"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Scrouting- Cost-Aware Routing of Coding Agents by Scouting the Repository First.md"
source_note: "[[信息源/arXiv cs.AI RSS/Scrouting- Cost-Aware Routing of Coding Agents by Scouting the Repository First]]"
source_sha256: 09538530be875dd43bf8e5fb1f2e01846f306db22ca1d7fb1f1484b49cc8b082
original_url: "https://arxiv.org/abs/2608.04804"
processed: 2026-08-06
language: zh-CN

---

# Scrouting：先侦察仓库的编码智能体成本感知路由

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ishaan Bhola, Adithyan Krishnan, Mukunda NS
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04804)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Scrouting- Cost-Aware Routing of Coding Agents by Scouting the Repository First|查看原始文件]]

## 摘要

- 前沿语言模型可解决仓库级软件问题，但每次尝试昂贵，现有路由器仅从问题文本选择模型；本文呈现 SuperScout，侦察仓库后路由：7B 搜索器 SuperScout-7B 先探索仓库并产生结构化交接，其复现声明经沙箱验证，交付前剥离虚假声明。
- 搜索器隐藏状态连同任务文本馈入基于简历的路由器，将任务分派给四个前沿修复器之一；添加新修复器无需重训练。
- SWE-bench Pro 完整 Python 切片（266 个任务）官方上限预算层级下，SuperScout 匹配最佳单模型解决率（159/266 对比最佳模型 158），每次解决总成本约五分之一；无路由器消融（始终最便宜修复器加交接）在此基准与路由系统持平，因此交接而非路由决策承载结果。

## 正文

前沿语言模型可解决仓库级软件问题，但每次尝试昂贵，现有路由器仅从问题文本选择模型。我们呈现 SuperScout，侦察仓库后路由：7B 搜索器 SuperScout-7B 先探索仓库并产生结构化交接（structured handoff），其复现声明经沙箱验证，交付前剥离虚假声明。搜索器的隐藏状态连同任务文本随后馈入基于简历的路由器，将任务分派给四个前沿修复器之一。添加新修复器无需重训练。在 SWE-bench Pro 完整 Python 切片（266 个任务）官方上限预算层级下，SuperScout 匹配最佳单模型的解决率（159/266 对比最佳模型 158），每次解决总成本约五分之一，报告配置位于随机流量分割基线之上。无路由器消融（始终最便宜修复器加交接）在此基准与路由系统持平，因此交接而非路由决策承载结果。配对校准研究指向机制：交接似乎重新分配而非添加解决能力，提升三个更便宜修复器同时略微损害最强修复器，虽然 N=99 时每修复器效应仅为方向性；搜索器隐藏状态在校准标签上改进成本路由，而交接自身文本不改进。搜索器计算每任务增加不到半美分 GPU 时间。

## 关键词

#编码智能体 #路由 #仓库侦察 #成本感知 #arXiv