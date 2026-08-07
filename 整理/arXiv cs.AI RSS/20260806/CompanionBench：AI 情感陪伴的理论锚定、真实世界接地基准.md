---
published: 20260806
title: "CompanionBench：AI 情感陪伴的理论锚定、真实世界接地基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CompanionBench- A Theory-Anchored, Real-World-Grounded Benchmark for AI Emotional Companionship.md"
source_note: "[[信息源/arXiv cs.AI RSS/CompanionBench- A Theory-Anchored, Real-World-Grounded Benchmark for AI Emotional Companionship]]"
source_sha256: 283b4cafcd599c60367afebac8366372e4427d1e05b2922f44912009bb1a3ada
original_url: "https://arxiv.org/abs/2608.02046"
processed: 2026-08-06
language: zh-CN

---

# CompanionBench：AI 情感陪伴的理论锚定、真实世界接地基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yao Liu, Guangjia Chai, Yuming Huang, Jihao Huang, Lei Wang, Junchen Wan
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02046)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CompanionBench- A Theory-Anchored, Real-World-Grounded Benchmark for AI Emotional Companionship|查看原始文件]]

## 摘要

- LLM 伴侣在个人重要场景中大规模部署，却缺乏良好评估；现有基准使用手写场景和提示模拟器，将共情聚合为一个分数，忽视同家族偏好和尺度漂移等评判者偏见。
- 本文引入 CompanionBench，一个交互式双语基准，首个将场景和训练用户模拟器都锚定在去标识真实世界数据的伴侣基准；隐藏披露门根据智能体自身行为分支每个人设轨迹，无需脚本化对话即可控制交互状态空间。
- 操作化源自心理学和咨询学 25 种理论的十种能力，其中四种（持有模糊性、自体客体回应、积极共振和校准挑战）未被先前工作显式评分；跨家族评审小组稀释同家族偏好，IRT 模型分离智能体质量与评判者严格度。

## 正文

LLM 伴侣在个人重要场景中大规模部署，却缺乏良好评估。现有基准使用手写场景和提示模拟器，将共情聚合为一个分数，并忽视同家族偏好和尺度漂移等评判者偏见。我们引入 CompanionBench，一个交互式双语基准。据我们所知，它是首个将场景和训练用户模拟器都锚定在去标识真实世界数据的伴侣基准。隐藏披露门根据智能体自身行为分支每个人设轨迹，无需脚本化对话即可控制交互状态空间。我们操作化源自心理学和咨询学 25 种理论的十种能力，其中四种（持有模糊性、自体客体回应、积极共振和校准挑战）未被先前工作显式评分。智能体在两个互补轴上评估：主观十能力评分标准和确定性测量（是否赢得更深披露）。跨家族评审小组稀释同家族偏好；项目反应理论（IRT）模型分离智能体质量与评判者严格度。理论确定衡量什么以及人设如何构建；真实数据提供事件、历史和档案——理论提供覆盖，数据提供真实性。排名在两种语言中可复现（rho = 0.996 中文 / 0.953 英文）。评估 28 个智能体揭示聚合分数掩盖的能力级差异。情绪调节和校准挑战仍是常见弱点；持有模糊性区分度最高。角色扮演智能体排名接近底部：沉浸不意味着关系能力。跨智能体，主导失败模式是用表面温暖替代实质关系支持。我们将发布 500 对中英平行对和评估代码。

## 关键词

#情感陪伴 #基准 #LLM #评估 #arXiv