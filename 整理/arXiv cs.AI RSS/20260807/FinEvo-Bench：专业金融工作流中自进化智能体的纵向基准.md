---
published: 2026-08-07
title: "FinEvo-Bench：专业金融工作流中自进化智能体的纵向基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FinEvo-Bench- A Longitudinal Benchmark for Self-Evolving Agents in Professional Financial Workflows.md"
source_note: "[[信息源/arXiv cs.AI RSS/FinEvo-Bench- A Longitudinal Benchmark for Self-Evolving Agents in Professional Financial Workflows]]"
source_sha256: 2c7c47d0df58c2f78188dc1a57e6b0f23083736d054da4e22f2afd0eebff24b2
original_url: "https://arxiv.org/abs/2608.06144"
processed: 2026-08-07
language: zh-CN
---

# FinEvo-Bench：专业金融工作流中自进化智能体的纵向基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bo Deng (Beihang University, Qwen DianJin Team, Alibaba Cloud Computing), Kang Zhou (Qwen DianJin Team), Lifan Guo (Qwen DianJin Team), Chongyang Tao (Beihang University), Xuanren Chen (Beihang University), Chenggang Xie (Beihang University), Renzhao Liang (Beihang University), Feng Chen (Qwen DianJin Team), Chi Zhang (Qwen DianJin Team)
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06144)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FinEvo-Bench- A Longitudinal Benchmark for Self-Evolving Agents in Professional Financial Workflows|查看原始文件]]

## 摘要

- 大多数智能体基准独立评估任务，无法衡量一个任务的经验是否帮助后续任务；现有自进化基准未联合覆盖专业工作流、开放式交付物与多面评估。
- 引入 FinEvo-Bench：120 个真实案例接地任务、六个金融领域 20 个业务场景的纵向基准；机构提供的专业程序定义所需操作与约束，合格机构提供与公开记录的案例提供任务事实；每个场景含六个相关但实质上不同、共享专业程序与人工审核任务质量与金融合规评分标准的案例。
- 用相同 Qwen3.7-Max 骨干比较四个自进化智能体脚手架与三个独立洗牌、全局交织的任务流；配对非进化控制估计各脚手架的保留经验自进化增益，独立的 Claude Code 评分智能体（由 Claude Opus 4.6 支持）评估所有输出。
- Letta 取得最高进化分数（91.65）与最少合规问题（每任务 0.09）；Codex 取得最大自进化增益（+19.37）；跨脚手架，进化条件提升分数 9.33-19.37 点并将每任务合规问题减少 0.12-0.44；场景内排名 4-6 的配对分数增益超过排名 1-3 的 6.10-8.70 点；在 Claude Code 中，仅技能进化比仅记忆与记忆-技能组合进化产生更高任务质量与更少合规问题；跨全部四个脚手架，评分标准反馈也比参考答案反馈产生更高分数与更少合规问题。
- FinEvo-Bench 同时衡量专业性能与自进化能力：智能体将先前经验转化为后续改进的有效程度。

## 正文

大多数智能体基准独立评估任务，无法衡量一个任务的经验是否有助于后续任务。现有自进化基准没有联合覆盖专业工作流、开放式交付物与多面评估。我们引入 FinEvo-Bench，一个具有 120 个真实案例接地任务、六个金融领域 20 个业务场景的纵向基准。机构提供的专业程序定义所需操作与约束。合格机构提供与公开记录的案例提供任务事实。每个场景包含六个相关但实质上不同的案例，共享一个专业程序与一份人工审核的任务质量与金融合规评分标准。我们使用相同 Qwen3.7-Max 骨干与三个独立洗牌、全局交织的任务流比较四个自进化智能体脚手架。配对的非进化控制估计每个脚手架从保留经验获得的自进化增益，而一个独立的 Claude Code 评分智能体（由 Claude Opus 4.6 支持）评估所有输出。Letta 取得最高进化分数（91.65）与最少的合规问题（每任务 0.09）；Codex 取得最大的自进化增益（+19.37）。跨脚手架，进化条件将分数提升 9.33-19.37 点，并将每任务合规问题减少 0.12-0.44。场景内排名 4-6 的配对分数增益超过排名 1-3 的 6.10-8.70 点。在 Claude Code 中，仅技能进化产生比仅记忆与记忆-技能组合进化更高的任务质量与更少的合规问题。跨全部四个脚手架，评分标准反馈也比参考答案反馈产生更高的分数与更少的合规问题。FinEvo-Bench 同时衡量专业性能与自进化能力：智能体将先前经验有效转化为后续改进的程度。

## 关键词

#自进化智能体 #金融工作流 #纵向基准 #智能体评估
