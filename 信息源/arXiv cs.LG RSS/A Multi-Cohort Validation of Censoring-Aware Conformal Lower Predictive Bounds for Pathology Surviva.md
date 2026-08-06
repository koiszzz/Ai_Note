# A Multi-Cohort Validation of Censoring-Aware Conformal Lower Predictive Bounds for Pathology Survival Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mingi Hong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.ME　|　原文：[打开链接](https://arxiv.org/abs/2608.04025)

------

arXiv:2608.04025v1 Announce Type: cross

Abstract: Whole-slide survival models commonly provide risk rankings without calibrated statements about individual event times. We evaluate fixed-cutoff drcosarc, a post-hoc conformal wrapper for discrete-time multiple-instance learning survival heads using frozen UNI2-h representations, in an internal 18-configuration sweep across five TCGA cohorts and an external five-configuration evaluation across three CPTAC cohorts. We distinguish configuration--fold--split summaries of the inverse-probability-of-censoring-weighted (IPCW) estimate and median lower predictive bound (LPB) from a hierarchy-aware patient-ensemble estimand of the mean drcosarc--naive LPB difference. At $\alpha=0.1$, the drcosarc IPCW estimate was nearest 0.90 in KIRC, LUAD, and STAD. Patient-ensemble drcosarc--naive intervals excluded zero in KIRC, KIRP, STAD, UCEC, and CPTAC-CCRCC, but included zero in internal LUAD, CPTAC-LUAD, CPTAC-UCEC, and the internal LUSC extension. In a 20-replicate low-censoring semi-synthetic setting with known event times, drcosarc empirical coverage was 0.9129 [0.9053, 0.9207]. An exploratory analysis supported a head-error-by-censoring interaction within that data-generating process. In a two-cohort ABMIL sensitivity analysis, increasing the hazard grid to $K=16$ raised localized marginal IPCW estimates above the prespecified 0.87 threshold and yielded positive paired LPB differences, although worst-group estimates remained below 0.87. Overall, performance was cohort dependent, and its interpretation changed with the patient-level unit, estimand, and censoring assumptions.
