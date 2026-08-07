---
published: 20260806
title: "ORCA-bench：语言模型智能体为值班就绪了吗？"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ORCA-bench- How Ready Are Language Model Agents for Oncall-.md"
source_note: "[[信息源/arXiv cs.AI RSS/ORCA-bench- How Ready Are Language Model Agents for Oncall-]]"
source_sha256: ff7c3496b2b0c4efbbd3041490fd350c24dba90e082c54867771f3f6bbeb15bb
original_url: "https://arxiv.org/abs/2607.28545"
processed: 2026-08-06
language: zh-CN

---

# ORCA-bench：语言模型智能体为值班就绪了吗？

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Albert Gong, Kyuseong Choi, Abhineet Agarwal, Jason Schechner, Ryan Huang, Raj Agrawal, Anish Agarwal, Raaz Dwivedi
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28545)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ORCA-bench- How Ready Are Language Model Agents for Oncall-|查看原始文件]]

## 摘要

- 大语言模型可编写、修补和搜索代码，但值班根因分析（RCA）要求不同：从模糊用户面向报告开始，对噪声指标、日志、跟踪和源代码推理，常在事件开始数小时后。
- 本文引入 ORCA-bench，一个将通用编码智能体置于生产保真值班设置的基准：配对实时 OpenTelemetry 仪器微服务系统（通过真实遥测接口暴露六天指标、日志和跟踪，全源代码访问）与 1,079 个 RCA 任务，系统变化报告特异性、检测时间和共现故障场景。
- 五个前沿智能体中，最佳 RCA 准确率在中等难度任务（现实输入设置）仅 25.3%，困难任务 10.0%；最弱模型在 40% 事件报告中幻觉不合理的根因；报告差距是前沿编码智能体可安全托付生产可靠性前所需工程投入的下限。

## 正文

大语言模型可编写、修补和搜索代码，但值班根因分析（RCA）要求不同：从模糊用户面向报告开始，对噪声指标、日志、跟踪和源代码推理，常在事件开始数小时后。我们引入 ORCA-bench，一个将通用编码智能体置于生产保真值班设置的基准。ORCA-bench 配对实时 OpenTelemetry 仪器微服务系统——通过真实遥测接口（Prometheus、Jaeger 和经 Grafana 的 OpenSearch）暴露六天指标、日志和跟踪，全源代码访问——与 1,079 个 RCA 任务，系统变化报告特异性、检测时间和共现故障场景。地面真值症状由专家 SRE 策展和签署，我们的 LLM 作为评判者由人类独立重新评分（Cohen's κw=0.90）。五个前沿智能体中，最佳 RCA 准确率在中等难度任务（现实输入设置）为 25.3%，困难任务 10.0%——即使 Claude Fable 5 也保持此差距。最弱模型在 40% 的事件报告中幻觉不合理的根因，移除源代码访问使每个指标退化。关键的是，这些是在策展 50 GB/六天测试台上的性能，任务在代码和仪器公开的系统上隔离调查。由于真实生产系统大数量级、更动态、更独特，我们报告的差距是前沿编码智能体可安全托付生产可靠性前所需工程投入的下限。我们发布公开集：https://hub.harborframework.com/datasets/orca-bench/orca-bench。

## 关键词

#值班 #根因分析 #编码智能体 #基准 #arXiv