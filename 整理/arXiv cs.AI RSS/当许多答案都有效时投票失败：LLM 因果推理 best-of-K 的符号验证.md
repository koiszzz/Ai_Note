---
title: "当许多答案都有效时投票失败：LLM 因果推理 best-of-K 的符号验证"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Many Answers Are Valid, Voting Fails- Symbolic Verification for Best-of-K Causal Reasoning in L.md"
source_note: "[[信息源/arXiv cs.AI RSS/When Many Answers Are Valid, Voting Fails- Symbolic Verification for Best-of-K Causal Reasoning in L]]"
source_sha256: 852409ae4073ad73c80c9bdf4de448971045b1757b37915a42f125f9eb5511ae
original_url: "https://arxiv.org/abs/2608.03506"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 当许多答案都有效时投票失败：LLM 因果推理 best-of-K 的符号验证

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Omatharv Bharat Vaidya、Connor Thomas Jerzak、Zayne Rea Sprague 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03506)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Many Answers Are Valid, Voting Fails- Symbolic Verification for Best-of-K Causal Reasoning in L|查看原始文件]]

## 摘要

- 引入 CALVER（因果公理级验证），免训练符号验证器：按 Pearl 因果准则（包括 d-分离、后门调整与干预）给结构化轨迹评分，无参考答案选择最高分候选。
- 自一致性假设采样推理轨迹中最频繁答案最可靠，但因果推理中会失败：样本常重复相同混杂错误，投票在多个有效答案间碎片化，使无效答案在有效少数轨迹存在时胜出。
- CLEAR find-one-valid 查询（允许多个图有效答案）上，CALVER 达 42.1%，而多数投票、奖励模型、LLM 评判者与模型置信度在相同冻结池上保持约 30%；把评判者缩放到 72B 无法弥合差距；审计干净核心子集中 21 个图有效 CALVER 选择中的 11 个与基准所列答案不同但仍满足所请求谓词。
- 优势随采样预算扩大，并在十个已发表贝叶斯网络、第二个模型家族与模型必须从文本构建图的设置中复现；CALVER 还改善带阈值平均处理效应决策（对照精确真值）、在真值表检查器下泛化到逻辑，并在 CPU 上毫秒级给每个候选评分——只需因果结构（直接提供或从文本构建），凡此成立处选择即可经因果有效性聚合。

## 正文

论文编号：arXiv:2608.03506v1（更新类型：new）。以下为摘要全文翻译。

自一致性假设采样的推理轨迹中最频繁的答案最可靠，但这在因果推理中可能失败：样本往往重复相同的混杂错误，而投票在多个有效答案之间碎片化，让无效答案在有效少数轨迹存在的情况下获胜。我们引入 CALVER（Causal Axiom-Level VERification，因果公理级验证），一个免训练的符号验证器：按 Pearl 因果准则（包括 d-分离、后门调整与干预）给结构化轨迹评分，并在不咨询参考答案的情况下选择最高分候选。在允许多个图有效答案的 CLEAR find-one-valid 查询上，CALVER 达到 42.1%，而多数投票、奖励模型、LLM 评判者与模型置信度在相同的冻结池上保持在 30% 附近。把评判者缩放到 72B 无法弥合差距。在一个审计的干净核心子集中，21 个图有效的 CALVER 选择中有 11 个与基准所列答案不同，却仍满足所请求的谓词。该优势随采样预算扩大，并在十个已发表的贝叶斯网络、第二个模型家族，以及模型必须从文本构建图的设置中复现。CALVER 还改善了带阈值平均处理效应决策（对照精确真值），在真值表检查器下泛化到逻辑，并在 CPU 上毫秒级给每个候选评分。CALVER 只需要一个因果结构（直接提供或从文本构建）；凡此成立之处，选择就可以经因果有效性聚合。

## 关键词

#因果推理 #符号验证 #自一致性 #best-of-K
