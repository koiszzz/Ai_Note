---
published: 2026-08-07
title: "HERALD：检索证明奖励的反事实审计与最小修复"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HERALD- Counterfactual Audits and Minimal Repairs for Proof-of-Retrieval Rewards.md"
source_note: "[[信息源/arXiv cs.AI RSS/HERALD- Counterfactual Audits and Minimal Repairs for Proof-of-Retrieval Rewards]]"
source_sha256: af330a244b3a17262a4917b0d9a52c1c1cb9007e4b07c7c91d6bb224a1d7b5fe
original_url: "https://arxiv.org/abs/2608.06012"
processed: 2026-08-07
language: zh-CN
---

# HERALD：检索证明奖励的反事实审计与最小修复

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhuowen Liu, Bohan Cui, YinShang Guo, Yuting Wang, Hao Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06012)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HERALD- Counterfactual Audits and Minimal Repairs for Proof-of-Retrieval Rewards|查看原始文件]]

## 摘要

- 搜索智能体奖励混合答案质量、引用接地、工具成本与反黑客条款；因此高分不必意味着引用的证据被检索过，且增加的惩罚可能相互抵消。
- 引入 HERALD：离线审计，应用精确的相同问题干预，分离候选可见与 oracle 信息，并在策略优化前枚举检测器契约。
- 在来自 HotpotQA、2WikiMultiHopQA 与 MuSiQue 的四个 Qwen3-8B 池上，R₀ 拒绝搜索删除与假 ID，但无标签的引用洗钱攻击成功；完整 2³ 消融确定对 L 的针对性强化——引用检索证据中不存在的语料段落——作为观察到的包含最小修复：R[L] 经验 ASR 为零，单侧聚类上限 0.50%。
- 差距跨池规则、可见 BM25 攻击者与四个模型持续存在；当攻击移除 oracle 支持 ID 惩罚时，更广泛的加固仍脆弱；在严格 5M token 匹配训练、每基准 256 对配对问题上评估，R[L] 在 HotpotQA 与 2Wiki 上通过 EM 非劣性门槛但 MuSiQue 未通过；等套件引用精度与支持召回分别提升 2.02 与 1.46 点，无支撑引用下降 1.69，洗钱攻击性在 2Wiki 与 MuSiQue 上下降；自然 L 未减少，检测器仅出现在 58,368 条训练轨迹中的 18 条。
- HERALD 由此分离稳健评分、稀疏学习信号与策略迁移。

## 正文

搜索智能体奖励混合答案质量、引用接地、工具成本与反黑客条款；因此高分不必意味着引用的证据被检索过，且增加的惩罚可能相互抵消。我们引入 HERALD，一个离线审计：应用精确的相同问题干预，分离候选可见与 oracle 信息，并在策略优化前枚举检测器契约。在来自 HotpotQA、2WikiMultiHopQA 与 MuSiQue 的四个 Qwen3-8B 池上，R₀ 拒绝搜索删除与假 ID，但一个无标签的引用洗钱攻击成功。完整 2³ 消融确定对 L 的针对性强化——引用检索证据中不存在的语料段落——作为观察到的包含最小修复：R[L] 具有零经验 ASR，单侧聚类上限 0.50%。该差距跨池规则、可见 BM25 攻击者与四个模型持续存在；当攻击移除 oracle 支持 ID 惩罚时，更广泛的加固仍然脆弱。在严格 5M token 匹配训练、每基准 256 对配对问题上评估，R[L] 在 HotpotQA 与 2Wiki 上满足 EM 非劣性门槛，但 MuSiQue 未满足。等套件引用精度与支持召回分别提升 2.02 与 1.46 点，无支撑引用下降 1.69，洗钱攻击性在 2Wiki 与 MuSiQue 上下降。自然 L 未减少，检测器仅出现在 58,368 条训练轨迹中的 18 条。HERALD 由此分离稳健评分、稀疏学习信号与策略迁移。

## 关键词

#检索奖励 #反事实审计 #引用接地 #搜索智能体
