# ConformalShift: Targeted Event Reordering Against Adaptive ECG Monitoring

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Arash Vashagh, Yasmin Vashagh　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03628)

------

arXiv:2608.03628v1 Announce Type: new

Abstract: Adaptive conformal prediction can recover clinically important heartbeat classes missed by a point classifier, but delayed feedback makes its decisions sensitive to event order. We introduce ConformalShift, a bounded event-reordering attack that suppresses the ventricular class for rescued events without modifying ECG waveforms, labels, classifier scores, or the event multiset. ConformalShift searches for feasible permutations of authentic preceding events that lower the ventricular threshold before a selected target is evaluated. On disjoint MIT--BIH confirmation records, the attack suppressed 66.7% of eligible targets for Extra Trees and 60.0% for HistGradientBoosting, compared with random-schedule rates of 4.4% and 12.0%, respectively. Transferred configurations also outperformed random scheduling on INCART, while reducing the displacement budget weakened the attack on both datasets. These results show that adaptive monitors in healthcare can be compromised through the timing of authentic information, even when waveforms, labels, classifier outputs, and event contents remain unchanged.
