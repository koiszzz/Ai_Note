# Cross-Anesthetic ECoG State Decoding Fails at the Decision Threshold, Not the Representation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Kunkun Zhang, Qianwei Zhou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：q-bio.QM　|　原文：[打开链接](https://arxiv.org/abs/2608.02646)

------

arXiv:2608.02646v1 Announce Type: cross

Abstract: Decoders of anesthetic state from cortical activity fail across drug classes, most notoriously ketamine, but reported accuracy cannot say whether the neural representation or only the decision threshold has failed; we separate the two in a controlled preparation with ground-truth labels. We decoded awake versus anesthetized from mouse electrocorticography (the 250-Hz-bandlimited local field potential, sampled at 1875 Hz) under leave-one-anesthetic-out evaluation across five mechanistically distinct anesthetics (isoflurane, dexmedetomidine, ketamine, propofol, and midazolam), comparing a spatially blind band-power decoder, covariance/Riemannian representations, and Riemannian domain adaptation, with all statistics at the session level and mouse-level cluster bootstrapping for the ketamine fold. The representation transfers: band-power ranks awake versus anesthetized at a session AUROC of at least 0.96 on every held-out drug, ketamine included (0.980, cluster confidence interval 0.821 to 1.000). The failure is confined to the threshold: across three representations the ketamine ranking is near-invariant while its balanced accuracy swings from chance to high, and a permutation test is significant for ranking (p = 0.0025) but not for fixed-threshold accuracy (p = 0.3795). Riemannian domain adaptation is net-negative. A causal, label-free threshold anchored to the subject's own pre-induction baseline fixes ketamine (balanced accuracy 0.50 to 0.85) and dominates domain adaptation. Because the ketamine test sessions come from three mice that also contribute training drugs, this is within-subject cross-drug transfer; we do not claim population-level transfer across subjects. In cross-drug state decoding the actionable failure is calibration, not representation.
