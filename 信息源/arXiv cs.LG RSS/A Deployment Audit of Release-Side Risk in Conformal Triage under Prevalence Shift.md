# A Deployment Audit of Release-Side Risk in Conformal Triage under Prevalence Shift

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chengze Li, Xiao Liu, Hanrong Zhang, Haiyang Peng, Yanghao Ruan, Huanhuan Ma, Chunyu Miao, Qichao Zhou, Xiangrong Qi, Philip Yu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.20956)

------

arXiv:2605.20956v2 Announce Type: replace

Abstract: Conformal triage converts predictive scores into deployment actions that either release a case, flag it for urgent attention, or defer it to human review. Under an observed change in target-event prevalence, however, marginal coverage and human-review rate can miss whether patients who experience the target event are released without review. To address this gap, we introduce a leakage-aware deployment audit for release-side conformal triage. It first assigns target subjects to three non-overlapping roles: prevalence correction, conformal calibration, and held-out release-side evaluation. This separation then lets the audit evaluate release directly: how many event-positive patients are cleared without review, whether the pilot has enough event labels for calibration, and how the release-review trade-off shifts. Applying this audit to a retrospective non-small-cell lung cancer (NSCLC) target cohort shows why lower review can be misleading: after prevalence correction, the pooled conformal branch lowers review by releasing more patients, some of whom are event-positive. Within the audit, the classwise branch acts as a scarcity diagnostic: the pilot has too few event labels to support a low-review release rule.
