# Improving the Realism of Synthetic Clinical Benchmarks Under Utility Constraints

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Omid Bazgir, Md Nasir, Jacob Hoffman, Yang Yang, Manu Agrawal, Anusua Trivedi, Vinay Rao Dandin, Chris Gibbons, Christine Swisher　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06265)

------

arXiv:2608.06265v1 Announce Type: new

Abstract: Synthetic clinical benchmarks for enterprise AI agents can pass existing utility checks and still remain structurally unrealistic, especially in privacy-sensitive healthcare settings where operational data are hard to access. We study how to improve such benchmarks without breaking the downstream utility checks already used in practice.

We formulate benchmark revision as utility-constrained realism improvement: dataset changes should increase realism while staying above an operational utility floor. We instantiate this idea on a care-gap benchmark derived from Synthea-generated patients exercised through demonstration electronic health record workflows and then processed by the same downstream pipeline as operational data. Realism is measured through missingness structure, simplicity, structural plausibility, and population alignment.

The baseline benchmark is extremely thin: sampled-pair missingness is 79.44%, only 12.75% of rows are actionable, 38.94% of patients have zero actionable measures, and top-three token concentration reaches 100.0%. Two deterministic revisions improve these panels while remaining above the current utility floor, whereas a naive densification control preserves unrealistic templating. We further show that internal benchmark realism and source fidelity to an aggregate operational reference are related but distinct objectives. These results suggest that synthetic benchmark quality should be optimized explicitly, with utility treated as one constraint rather than as sufficient evidence of realism.
