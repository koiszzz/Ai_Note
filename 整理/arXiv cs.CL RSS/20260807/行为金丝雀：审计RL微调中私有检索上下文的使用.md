---
published: 2026-08-07
title: "行为金丝雀：审计 RL 微调中私有检索上下文的使用"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Behavioral Canaries- Auditing Private Retrieved Context Usage in RL Fine-Tuning.md"
source_note: "[[信息源/arXiv cs.CL RSS/Behavioral Canaries- Auditing Private Retrieved Context Usage in RL Fine-Tuning]]"
source_sha256: e372bb8860529c7287b5770cc80ce4f3670a3c5c14f13b38427e0a1f3e1c5acd
original_url: "https://arxiv.org/abs/2604.22191"
processed: 2026-08-07
language: zh-CN
---

# 行为金丝雀：审计 RL 微调中私有检索上下文的使用

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Chaoran Chen, Dayu Yuan, Peter Kairouz
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2604.22191)

## 摘要

- 智能体工作流中 LLM 常处理受法律保护、禁止进一步训练的检索上下文；审计者目前缺乏可靠方式验证提供商是否违反服务条款经强化学习（RL）等将其纳入训练后。
- 标准审计依赖逐字记忆与成员推断，但对 RL 训练模型无效：RL 主要影响模型行为风格而非特定事实保留。
- 引入行为金丝雀（Behavioral Canaries）：RLFT 流水线的新审计机制；框架通过配对文档触发器与奖励独特风格响应的反馈来仪器化偏好数据，若此类数据用于训练则诱导潜在触发条件化偏好。
- 实证显示行为信号使未经授权文档条件化训练的检测率达 67%（10% 误报率下，AUROC=0.756），1% 金丝雀注入率；确立行为金丝雀为 RLFT 流水线新审计机制，使审计者能在影响以分布行为变化（而非记忆）显现时测试训练时影响；代码公开。

## 正文

在智能体工作流中，LLM 经常处理受法律保护、禁止用于进一步训练的检索上下文。然而，审计者目前缺乏可靠的方式验证提供商是否违反了服务条款，通过强化学习（RL）等方式将这些数据纳入训练后处理。虽然标准审计依赖逐字记忆与成员推断，这些方法对 RL 训练的模型无效，因为 RL 主要影响模型的行为风格，而非特定事实的保留。为弥合该差距，研究引入行为金丝雀（Behavioral Canaries），一种用于 RLFT 流水线的新审计机制。该框架通过将文档触发器与奖励一种独特风格化响应的反馈配对来仪器化偏好数据，如果此类数据在训练中被使用，就会诱导一个潜在触发条件化的偏好。实证结果表明，这些行为信号使未经授权的文档条件化训练检测率达到 67%（在 10% 误报率下，AUROC = 0.756），金丝雀注入率为 1%。更广泛地，研究结果确立行为金丝雀作为 RLFT 流水线的新审计机制，使审计者即使在该影响显现为分布性行为变化而非记忆时，也能测试训练时的影响。代码见 https://github.com/CRChenCode/behavioral_canary。

## 关键词

审计、RL 微调、金丝雀、隐私、数据使用
