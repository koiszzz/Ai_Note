---
published: 2026-08-07
title: "判断-后果差距：医疗决策中的 LLM 道德推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/The Judgment-Consequence Gap- LLM Moral Reasoning in Healthcare Decisions.md"
source_note: "[[信息源/arXiv cs.AI RSS/The Judgment-Consequence Gap- LLM Moral Reasoning in Healthcare Decisions]]"
source_sha256: 7bf3ce48330ac21346a7f01aaed4a3e0598e972e56825a7f1765cd826afd221a
original_url: "https://arxiv.org/abs/2608.05583"
processed: 2026-08-07
language: zh-CN
---

# 判断-后果差距：医疗决策中的 LLM 道德推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hadi Hosseini, Samarth Khanna, Leona Pierce
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05583)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Judgment-Consequence Gap- LLM Moral Reasoning in Healthcare Decisions|查看原始文件]]

## 摘要

- 随着大语言模型（LLM）进入医疗等高利害领域，理解其道德推理变得至关重要；稀缺医疗资源的决策常取决于责任判断，尤其当患者自身行为促成疾病时。
- 研究 LLM 如何推理责任及其后果，追踪其跨连续层级的判断：从行为、到由此导致的疾病、到拒绝照护——评估跨模型家族与能力水平、改编自先前研究的各种临床小插曲的广泛 LLM。
- 结果识别判断-后果差距：LLM largely 同意人类（患者对损害健康行为负有责任），却压倒性拒绝让该判断影响其稀缺资源分配——LLM 默认随机分配，而人类一致偏好较不负责任的减少。
- 相对人类，LLM 更强调信息可及性，健康风险知识不可用时减少责任判断；发现揭示 LLM 在责任与资源稀缺交汇处应用系统不同道德框架，且随推理能力提升，令人惊讶地常放大与人类规范分歧。

## 正文

随着大语言模型（LLMs）进入医疗等高利害领域，理解它们的道德推理变得至关重要。关于稀缺医疗资源的决策往往取决于责任判断，特别是当患者自身行为促成疾病时。我们研究 LLM 如何推理责任及其后果，追踪它们的判断跨连续层级：从行为，到由此导致的疾病，到拒绝照护。我们评估跨不同模型家族与能力水平、改编自先前研究的各种临床小插曲的广泛 LLM。我们的结果识别出一个判断-后果差距（judgment-consequence gap）：LLM largely 同意人类——患者对损害健康的行为负有责任——却压倒性地拒绝让该判断影响他们如何分配稀缺资源。具体而言，LLM 默认随机分配，而人类一致偏好不那么有责任的（less-culpable）患者。与人类相比，LLM 还更强调信息可及性，在健康风险知识不可用时减少责任判断。这些发现揭示，当责任与资源稀缺交汇时，LLM 应用与人类系统不同的道德框架，且随推理能力提高，令人惊讶地常常放大与人类的规范分歧。

## 关键词

#道德推理 #医疗决策 #责任判断 #资源分配
