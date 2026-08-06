---
title: "通过对比激活加法在 Qwen3 中引导跨期偏好"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Intertemporal Preference Steering in Qwen3 via Contrastive Activation Addition.md"
source_note: "[[信息源/arXiv cs.AI RSS/Intertemporal Preference Steering in Qwen3 via Contrastive Activation Addition]]"
source_sha256: 6cc714e69def46d4c16fbca43075c3dd2702f4be910328254de57fe818fa9787
original_url: "https://arxiv.org/abs/2608.03892"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 通过对比激活加法在 Qwen3 中引导跨期偏好

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Michal Mráz、Justin Shenk
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03892)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Intertemporal Preference Steering in Qwen3 via Contrastive Activation Addition|查看原始文件]]

## 摘要

- 研究大语言模型 Qwen3-32B 中时间视界的线性表示，并用其改变模型与时间相关的偏好、建议与能力：在教师强制的时序选择答案上训练对比线性探针，寻找模型残差流中的短期对长期方向。
- 评估对比激活加法引导：留出二元时序选择任务、分布外的货币跨期选择任务与 TravelPlanner 能力基准。
- 核心结果：时间视界方向可用简单对比线性探针识别，并用于引导以诱导大的双向偏好变化；在改变奖励大小与延迟的分布外货币选择任务上，引导在双向都强烈移动模型在小额即得与大额延后奖励之间的无差异阈值。
- 适度时间引导下规划相关能力指标也有改善：模型跨期偏好可测量、可引导，对涉及延迟成本与收益建议的 AI 系统及长视界规划的安全问题具有相关性。

## 正文

论文编号：arXiv:2608.03892v1（更新类型：new）。以下为摘要全文翻译。

我们研究大语言模型 Qwen3-32B 中时间视界的线性表示，并用它们改变模型与时间相关的偏好、建议与能力。我们在教师强制的时序选择答案上训练对比线性探针，以寻找模型残差流中的短期对长期方向，并在一个留出的二元时序选择任务、一个分布外的货币跨期选择任务与一个 TravelPlanner 能力基准上评估对比激活加法引导。核心结果是：时间视界方向可以用简单的对比线性探针识别，然后用于引导，以诱导大的、双向的偏好变化。在一个改变奖励大小与延迟的分布外货币选择任务上，引导强烈地双向移动模型在小额即得（smaller-sooner）与大额延后（larger-later）奖励之间的无差异阈值。我们进一步表明，在适度时间引导下，规划相关的能力指标有改善。这些结果表明，模型的跨期偏好是可测量、可引导的，这对给出涉及延迟成本与收益建议的 AI 系统，以及对长视界规划的安全问题，都具有相关性。

## 关键词

#跨期选择 #激活引导 #Qwen3 #可解释性
