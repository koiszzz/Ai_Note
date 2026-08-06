# Stylometric Defenses Against Author Impersonation in Software Repositories

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Leonid Ravich, Michael Fire　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02695)

------

arXiv:2608.02695v1 Announce Type: cross

Abstract: Software supply-chain attacks increasingly exploit an identity gap where compromised maintainer accounts authorize malicious changes. This work evaluates patch-level authorship verification as a behavioral defense layer, showing that stylometric analysis can operate not only on full source files but also on patch-level commits. We fine-tune a cross-modal transformer on more than 20 years of Linux kernel commit history to embed code diffs and commit messages into a unified stylometric space, achieving ROC AUC of 0.93 for open-world authorship verification. We then use these representations in a streaming anomaly detector suited to continuous integration and deployment (CI/CD) settings. We validate the pipeline on two retrospective supply-chain incidents involving different patch characteristics: the 2021 PHP backdoor and the 2026 ForceMemo/GlassWorm campaign. Without retraining, the proposed detector surfaces both PHP forged commits within approximately 1% of the maintainer audit queue and ranks the 28 scoreable ForceMemo spoofs with a median per-repository review burden of 0.8%. These results indicate that cross-modal patch-level embeddings can support behavioral triage against author impersonation in real-world repositories.
