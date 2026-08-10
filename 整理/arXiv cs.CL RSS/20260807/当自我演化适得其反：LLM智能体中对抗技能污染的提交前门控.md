---
published: 2026-08-07
title: "当自我演化适得其反：LLM 智能体中对抗技能污染的提交前门控"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/When Self-Evolution Backfires- Pre-Commit Gating against Skill Contamination in LLM Agents.md"
source_note: "[[信息源/arXiv cs.CL RSS/When Self-Evolution Backfires- Pre-Commit Gating against Skill Contamination in LLM Agents]]"
source_sha256: 58a966bcb2bb6e061e5c875b8c4a71d72349396e6bf03e5068ddd5100474c838
original_url: "https://arxiv.org/abs/2608.05810"
processed: 2026-08-07
language: zh-CN
---

# 当自我演化适得其反：LLM 智能体中对抗技能污染的提交前门控

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Linfang Shang, Ming Xu, Yiding Sun, Tianle Xia, Lingxiang Hu, Lan Xu, Ning Zheng
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05810)

## 摘要

- 自我演化智能体通过从其执行轨迹蒸馏可复用技能累积能力，但该过程并非单调：超过临界池大小后，新添技能降低而非改进性能；形式化该能力污染相变并追溯其结构原因：一旦缺陷技能进入决策上下文，就成为蒸馏后续技能的参考材料，形成跨轮污染链。
- 进一步展示污染结构上不可逆：事后移除源头技能无法抹除其后代已继承的错误推理，因此事后回滚仅恢复损失性能的一小部分；使技能准入成为提交前必要而非事后修复。
- 提出验证者即守门员（VaG）：渐进信任层级，三个异构批评者——结构有效性、行为无害性与语义一致性——逐一过滤每个技能，耦合边际增益子集选择在技能到达运行时上下文前于顶层移除组合污染。
- Terminal-Bench 2 上无条件累积先升至峰值随后退化，池不断增长时放弃大部分增益；事后移除罪魁技能仅恢复下降的一小部分——不可逆的实证标志；VaG 则每轮改进，以约小 5 倍池达 72% pass@1，其冻结技能池无需再演化正向迁移到四个其他骨干与第二基准；消融确认三个批评者互补且互相不可替代，各自拦截大致不相交的有害技能类别。

## 正文

自我演化的智能体通过从其执行轨迹中蒸馏可复用的技能来累积能力，但研究发现这一过程并非单调的：超过临界池大小后，新添加的技能会降低而非改进性能。研究将这种能力污染相变形式化，并追溯其结构性原因：一旦一个缺陷技能进入决策上下文，它就成为蒸馏后续技能的参考材料，形成跨轮污染链（cross-round contamination chains）。研究进一步表明，这种污染在结构上是不可逆的：事后移除一个源头技能无法抹去其后代已经继承的错误推理，因此事后回滚只能恢复损失性能的一小部分。这使得技能准入成为一个提交前（pre-commit）的必要条件，而非事后修复，并催生了验证者即守门员（Verifier-as-Gatekeeper, VaG）：一个渐进信任层级，其三个异构批评者——结构有效性、行为无害性与语义一致性——逐一过滤每个技能，并与一个边际增益子集选择（marginal-gain subset selection）耦合，在技能到达运行时上下文之前于顶层移除组合污染。在 Terminal-Bench 2 上，无条件累积先升至峰值随后退化，随着池的不断增长放弃其大部分增益；事后移除罪魁技能仅恢复下降的一小部分——这是不可逆性的实证标志。相比之下，VaG 每轮都改进，以大约小 5 倍的池达到 72% 的 pass@1，且其冻结技能池无需重新演化即可正向迁移到四个其他骨干与第二个基准。消融实验确认三个批评者互补且互相不可替代，各自拦截大致不相交的有害技能类别。

## 关键词

自我演化、技能污染、门控、智能体、验证者
