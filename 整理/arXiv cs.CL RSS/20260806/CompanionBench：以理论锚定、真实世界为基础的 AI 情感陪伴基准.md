---
published: 2026-08-06
title: CompanionBench：以理论锚定、真实世界为基础的 AI 情感陪伴基准
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/CompanionBench- A Theory-Anchored, Real-World-Grounded Benchmark for AI Emotional Companionship.md
source_note: "[[信息源/arXiv cs.CL RSS/CompanionBench- A Theory-Anchored, Real-World-Grounded Benchmark for AI Emotional Companionship]]"
source_sha256: 5f11dd92a4a80327a430d17671c20c2da88a6aacceeb81f3e395650a7ca7b7bd
original_url: https://arxiv.org/abs/2608.02046
processed: 2026-08-07
language: zh-CN
---

# CompanionBench：以理论锚定、真实世界为基础的 AI 情感陪伴基准

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02046)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/CompanionBench- A Theory-Anchored, Real-World-Grounded Benchmark for AI Emotional Companionship|查看原始文件]]

## 摘要

- CompanionBench 是首个将场景与训练过的用户模拟器都锚定在去标识化真实世界数据上的交互式双语陪伴基准
- 隐藏的披露门控根据代理自身行为分叉人物轨迹，在不编写对话脚本的情况下控制交互状态空间
- 从心理学与咨询的 25 种理论中操作化十项能力，其中四项此前未被明确评分：保持模糊性、自我客体回应、积极共鸣、校准性挑战
- 跨家族评审小组与项目反应理论（IRT）模型分离代理质量与评判者严厉程度；评估 28 个代理显示主导失败模式是用表面温暖替代实质性关系支持

## 正文

LLM 陪伴产品正在对个人具有重要意义的环境中大规模部署，却鲜有良好评估。现有基准使用手工编写的场景和提示模拟器，将共情聚合为单一分数，并忽视评判者偏差，如同家族偏好和尺度漂移。

我们引入 CompanionBench，一个交互式双语基准。据我们所知，它是首个将场景和训练过的用户模拟器都锚定在去标识化真实世界数据上的陪伴基准。一个隐藏的披露门控根据代理自身行为分叉每个人物的轨迹，在不编写对话脚本的情况下控制交互状态空间。我们操作化了从心理学和咨询领域的 25 种理论中得出的十项能力，其中四项此前工作未明确评分：保持模糊性、自我客体回应、积极共鸣和校准性挑战。

代理在两个互补轴上被评估：一个主观的十能力评分标准，以及披露是否被挣得的确定性度量。跨家族评审小组稀释同家族偏好；项目反应理论（IRT）模型将代理质量与评判者严厉程度分离。理论决定测量什么以及人物结构如何构建；真实数据提供事件、历史和档案——覆盖来自理论，真实性来自数据。排名在两种语言下可复现（中文 rho = 0.996 / 英文 0.953）。

评估 28 个代理揭示了被聚合分数掩盖的能力层面差异。情绪调节和校准性挑战仍是常见弱点；保持模糊性最具区分度。角色扮演代理排名接近底部：沉浸并不意味关系能力。跨代理而言，主导失败模式是用表面温暖替代实质性关系支持。我们将发布 500 对中英平行对话对和评估代码。

## 关键词

#AI陪伴 #情感支持 #基准 #项目反应理论 #LLM #arXiv
