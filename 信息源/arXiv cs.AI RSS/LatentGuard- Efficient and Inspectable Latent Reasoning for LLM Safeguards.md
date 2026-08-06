# LatentGuard: Efficient and Inspectable Latent Reasoning for LLM Safeguards

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhinan Liu, Jie Li, Mingyu Kang, Jiayi Ji　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03838)

------

arXiv:2608.03838v1 Announce Type: new

Abstract: Reasoning-based guard models improve LLM safeguards, but decoding explicit rationales for every interaction makes them costly to deploy. Although latent-reasoning methods reduce token generation by moving reasoning into continuous states, they remain underexplored for safety moderation and lack an inspection interface for deployment. In this paper, we propose LatentGuard, an efficient and inspectable safeguard framework that brings continuous latent reasoning to guard models. LatentGuard uses a staged curriculum to progressively compress task-aligned textual rationales into compact latent states, enabling safety verdicts to be predicted directly from continuous representations. To preserve inspectability, an isolated auxiliary decoder generates compact audit artifacts on demand, keeping rationale generation off the standard inference path. Experiments show that LatentGuard-8B improves mean weighted F1 from 83.95 to 84.91 over GuardReasoner-8B, while reducing critical-path reasoning cost from 268.56 generated rationale tokens to 1.60 latent reasoning tokens. Its audit decoder achieves an audit utility score of 85.75, demonstrating an efficient and inspectable path toward deployable LLM safeguards.
