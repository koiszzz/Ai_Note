# Oh Deer, How Should I Handle This? Seasonal Priors for Selective Wildlife Annotation and Classification

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Hugo Markoff, Christoph Praschl, Anton Hjalte J{\o}rgensen, Christian Emil Mogensen, Mathias Bech Skadhauge, Sara Beery, Michael {\O}rsted, David C. Schedl　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02762)

------

arXiv:2608.02762v2 Announce Type: replace

Abstract: Fine-grained wildlife classification in aerial imagery is limited not only by model performance, but also by unreliable labels: animals occupy few pixels, key visual cues vary seasonally, and modality-specific evidence can be ambiguous. We study adult-male identification in red deer, where the antler cycle defines predictable windows of reliable evidence for both annotation and prediction. Using 7,295 RGB-only, thermal-only, and matched RGB+thermal crop sets labeled by three annotators, we show that seasonal structure links (I) annotation quality, (II) downstream classification, and (III) selective prediction. Matched RGB+thermal review resolves more samples than either single modality, recovering majority-male labels otherwise missed by RGB or thermal alone, in human based as well as model based classification. Months with high annotator abstention also show lower classifier confidence, and soft seasonal priors mainly benefit the season-limited thermal view. Uncertainty-band abstention further improves covered accuracy up to 98.9%, though at reduced coverage and with deferral that falls disproportionately on males. Overall, a biologically grounded seasonal calendar predicts where annotation and prediction are unreliable, and can guide both annotation protocol design and modality weighting.
