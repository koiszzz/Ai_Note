# Provable Limits and Certified Deferral for Verbalized Uncertainty in Small Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jianru Shen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05064)

------

arXiv:2608.05064v1 Announce Type: cross

Abstract: Small open-weight language models increasingly run in private, offline, and cost-sensitive settings, where the key deployment question is not only what a model answers but when it should defer to a human. We study whether verbalized confidence can support risk-controlled deferral, evaluating eleven instruction-tuned models from three families, 0.5B to 14B parameters, on ARC-Challenge and TruthfulQA with 25,168 local predictions. Three theoretical results delimit what calibration can provide: strictly monotone calibration preserves the risk-coverage frontier and error-detection AUROC; temperature scaling cannot calibrate models whose confidence stays above one half while accuracy falls below it; and a Clopper-Pearson procedure converts a 200-question calibration set into a finite-sample risk certificate under an i.i.d. deployment assumption. Empirically, eight of 22 model-task pairs hit the temperature-scaling infeasibility floor within one percentage point of the predicted bound. Platt scaling reduces ECE to as low as 0.02, yet certified autonomy at a 20% risk budget is granted to only three model-task pairs and to none at 10%. We also identify and repair an answer-ordering artifact in the multiple-choice form of TruthfulQA. Calibration gives confidence semantics; certified deferral determines when small models are safe to use.
