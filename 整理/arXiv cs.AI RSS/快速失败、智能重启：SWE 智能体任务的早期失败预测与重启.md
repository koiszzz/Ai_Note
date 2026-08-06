---
title: "快速失败、智能重启：SWE 智能体任务的早期失败预测与重启"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Fail-Fast, Restart-Smart- Early Failure Prediction and Restart for SWE Agentic Tasks.md"
source_note: "[[信息源/arXiv cs.AI RSS/Fail-Fast, Restart-Smart- Early Failure Prediction and Restart for SWE Agentic Tasks]]"
source_sha256: 4ca4c389a2f01b8047805bc90a964c546aca7747a8fec77e2150165ae549a7a8
original_url: "https://arxiv.org/abs/2608.03222"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 快速失败、智能重启：SWE 智能体任务的早期失败预测与重启

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chenyu Wang、Yunbo Lyu、Junda He 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03222)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Fail-Fast, Restart-Smart- Early Failure Prediction and Restart for SWE Agentic Tasks|查看原始文件]]

## 摘要

- 提出 FailFast-RestartSmart，面向单一活动轨迹的两阶段控制器：FailFast 是用终端与密集 fail-to-pass 监督训练的轻量 0.6B 监控器，从可观测前缀预测失败，无需策略 logits 或隐藏状态；报警时 RestartSmart 启动无先前提示历史的新同策略 rollout，并把被打断的仓库差异作为可选的覆盖层供智能体检查、应用或丢弃。
- 在 SWE-bench Verified 上，仅用 Qwen3.6-27B 轨迹训练的监控器迁移到另外三个策略（包括闭源 API 模型），在 5% 假阳性率目标下节省 14.6%–20.4% 的执行 token。
- 在 25% 假阳性率目标下，RestartSmart 把 Qwen3.6-27B 的解决率从 66.6% 提升到 71.8%，而冷重启仅达 66.8%。
- 结果支持早期终止加顺序同策略恢复。

## 正文

论文编号：arXiv:2608.03222v1（更新类型：cross）。以下为摘要全文翻译。

软件工程（SWE）智能体通过长轨迹解决仓库级问题，随着上下文累积，轨迹越来越昂贵。失败的运行往往更长，并表现出冗余探索或循环，表明一些失败可能在完成前就可检测。然而，提前终止有中断本来会成功的轨迹的风险；反之，失败的轨迹仍可能包含有用的仓库编辑。我们提出 FailFast-RestartSmart，面向单一活动轨迹的两阶段控制器。FailFast 是一个轻量 0.6B 监控器，用终端与密集的 fail-to-pass 监督训练，从可观测前缀预测失败，无需策略 logits 或隐藏状态。报警时，RestartSmart 启动没有先前提示历史的新同策略 rollout，并把被打断的仓库差异作为可选覆盖层，供智能体检查、应用或丢弃。在 SWE-bench Verified 上，仅用 Qwen3.6-27B 轨迹训练的监控器迁移到另外三个策略（包括一个闭源 API 模型），在 5% 假阳性率目标下节省 14.6%–20.4% 的执行 token；在 Qwen3.6-27B 上，其 20.4% 的节省超过我们逐步骤 AgentStop 适配实现的 12.5%。在 25% 假阳性率目标下，RestartSmart 把 Qwen3.6-27B 的解决率从 66.6% 提升到 71.8%，而冷重启仅达到 66.8%。综合来看，这些结果支持带顺序同策略恢复的早期终止。

## 关键词

#SWE智能体 #失败预测 #早期终止 #软件工程
