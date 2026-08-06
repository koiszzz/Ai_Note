# Signed Evidence Flow: Conflict-Aware and Stability-Calibrated Data Analysis

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jeffery Opoku, David Banahene　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2606.21875)

------

arXiv:2606.21875v3 Announce Type: replace-cross

Abstract: Modern data analysis usually gives a prediction without showing whether the evidence behind it is clear, conflicting, or stable. Two cases can have the same fitted confidence even when one has mostly agreeing evidence and the other has strong support and strong opposition. We propose Signed Evidence Flow (SEF), which combines a fitted prediction rule with signed feature attributions to measure support, opposition, conflict, and perturbation stability. We prove that confidence determines conflict exactly when it also determines total evidence mass, derive the remaining conditional variance, and state when conflict can improve loss prediction beyond confidence and other audit variables. We also connect conflict to geometric decision fragility. Across healthcare, Covertype, black-box, finance, and ten external data sets, conflict sometimes separates risk among predictions that already appear confident. Cross-fitted tests show added error-ranking information beyond confidence and attribution entropy on several data sets, including two large finance tasks. The direction is not universal: in some tasks, lowconflict cases are riskier. We therefore introduce ScopeGate, a held-out permutation diagnostic

that checks the direction before SEF is used for review triage. SEF is consequently an audit tool

rather than a universal risk score: it describes evidence structure, while an independent calibration sample determines whether that structure is useful in the target population.
