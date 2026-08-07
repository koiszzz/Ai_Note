---
published: 2026-08-06
title: ORCA-bench：语言模型智能体为值班做好准备了吗
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/ORCA-bench- How Ready Are Language Model Agents for Oncall-.md
source_note: "[[信息源/arXiv cs.CL RSS/ORCA-bench- How Ready Are Language Model Agents for Oncall-]]"
source_sha256: aa7d365780341e6de164ab7d94fde144b9231c86b3ec9aa1f01845eed50dbb4f
original_url: https://arxiv.org/abs/2607.28545
processed: 2026-08-07
language: zh-CN
---

# ORCA-bench：语言模型智能体为值班做好准备了吗

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28545)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/ORCA-bench- How Ready Are Language Model Agents for Oncall-|查看原始文件]]

## 摘要

- ORCA-bench 将通用编码智能体置于生产保真度的值班（oncall）环境，提供六天遥测数据与 1,079 个 RCA 任务
- 五个前沿智能体在 Medium 任务上最佳 RCA 准确率仅 25.3%，Hard 任务 10.0%；最弱模型在 40% 报告中幻觉出不可信根因
- 报告的差距是前沿编码智能体被安全托付生产可靠性前所需工程投入的下限

## 正文

大语言模型可以编写、修补和搜索代码，但值班根因分析（RCA）要求的是另一回事：从模糊的用户报告出发，在事件发生数小时后，对嘈杂的指标、日志、追踪和源代码进行推理。我们提出了 ORCA-bench，一个将通用编码智能体置于生产保真度值班环境中的基准。

ORCA-bench 将一个实时 OpenTelemetry 插桩的微服务系统——通过真实遥测接口（Prometheus、Jaeger 和通过 Grafana 的 OpenSearch）暴露六天的指标、日志和追踪，并提供完整源代码访问——与 1,079 个系统性地改变报告特异性、检测时间和并发故障场景的 RCA 任务配对。真实答案的症状由专家 SRE 策展并签字确认，我们的 LLM 评判员由人类独立重新评分（Cohen's κw=0.90）。

在五个前沿智能体中，Medium 难度任务（现实输入设置）的最佳 RCA 准确率为 25.3%，Hard 难度为 10.0%——即使使用 Claude Fable 5 也仍有差距。最弱的模型在 40% 的事件报告中幻觉出不可信的根因，而移除源代码访问会降低所有指标。

至关重要的是，这些成绩是在一个经过策展的 50 GB、六天测试平台上取得的，任务在代码和插桩都公开的系统上孤立调查。由于真实生产系统要大若干个数量级、更加动态且更独特，我们报告的差距是前沿编码智能体可以被安全地托付生产可靠性之前所需工程投入的下限。我们在 https://hub.harborframework.com/datasets/orca-bench/orca-bench 发布了公开数据集。

## 关键词

#ORCA-bench #根因分析 #值班 #编码智能体 #可靠性工程
