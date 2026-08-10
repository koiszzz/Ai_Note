---
published: 2026-08-07
title: "当自进化适得其反：LLM 智能体中防技能污染的预承诺门控"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Self-Evolution Backfires- Pre-Commit Gating against Skill Contamination in LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/When Self-Evolution Backfires- Pre-Commit Gating against Skill Contamination in LLM Agents]]"
source_sha256: 53149175d478c6b97146200818e749dcc5cf5b9b14735d8c5e046cfac49b8a44
original_url: "https://arxiv.org/abs/2608.05810"
processed: 2026-08-07
language: zh-CN
---

# 当自进化适得其反：LLM 智能体中防技能污染的预承诺门控

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Linfang Shang, Ming Xu, Yiding Sun, Tianle Xia, Lingxiang Hu, Lan Xu, Ning Zheng
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05810)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Self-Evolution Backfires- Pre-Commit Gating against Skill Contamination in LLM Agents|查看原始文件]]

## 摘要

- 自进化智能体通过从执行轨迹蒸馏可复用技能积累能力，但发现该过程不单调：越过临界池大小后，新添技能使性能退化而非改进。
- 形式化该能力污染相变，并追踪到结构性原因：缺陷技能一旦进入决策上下文，就成为蒸馏后续技能的参考材料，形成跨轮污染链；进一步证明污染结构不可逆：事后移除源技能无法抹除其后代已继承的缺陷推理，事后回滚仅恢复损失性能的一小部分——使技能准入成为预承诺必要而非事后修复。
- 启发验证者即守门人（VaG）：渐进信任层级，其三个异构批评者——结构有效性、行为无害性与语义一致性——逐个过滤每技能，配边际增益子集选择在技能到达运行时上下文前于顶层移除组合污染。
- Terminal-Bench 2 上无条件积累升至峰值后退化，随池持续增长返还大部分增益，事后移除罪魁技能仅恢复下降一小部分——不可逆的经验签名；相反 VaG 每轮改进，池约小 5 倍达 72% pass@1，其冻结技能池正向迁移到四个其他骨干与第二个基准而无需重新进化；消融确认三个批评者互补且互不可替代，各拦截 largely 不相交的有害技能类别。

## 正文

自进化智能体通过从其执行轨迹蒸馏可复用技能来积累能力，但我们发现这一过程不是单调的：越过一个临界池大小后，新添加的技能使性能退化而不是改进它。我们将这一能力污染相变（capability-contamination phase transition）形式化，并将其追溯到结构性原因：一旦一个缺陷技能进入决策上下文，它就变成蒸馏后续技能的参考材料，形成跨轮污染链。我们进一步表明，这种污染在结构上是不可逆的：事后移除一个源技能无法抹除其后代已经继承的缺陷推理，因此事后回滚只恢复损失性能的一小部分。这使技能准入（skill admission）成为预承诺必要（pre-commit necessity）而非事后修复，并激发验证者即守门人（Verifier-as-Gatekeeper，VaG）：一个渐进信任层级，其三个异构批评者——结构有效性、行为无害性与语义一致性——逐个过滤每个技能，配合边际增益子集选择，在技能到达运行时上下文之前在顶层移除组合污染。在 Terminal-Bench 2 上，无条件积累升至峰值然后退化，随着池持续增长返还大部分增益，而事后移除罪魁技能只恢复下降的一小部分——不可逆性的经验签名。相比之下，VaG 每一轮都改进，以一个约小 5 倍的池达到 72% pass@1，且其冻结技能池正向迁移到四个其他骨干与第二个基准，无需重新进化。消融确认三个批评者是互补且互不可替代的，各自拦截 largely 不相交的有害技能类别。

## 关键词

#自进化 #技能污染 #验证者 #预承诺门控
