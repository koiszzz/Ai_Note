# Just Repair: A Minimal Denoising Network for Time Series Anomaly Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kadir-Kaan \"Ozer, Ren\'e Ebeling, Markus Enzweiler　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2604.17388)

------

arXiv:2604.17388v3 Announce Type: replace

Abstract: Time series anomaly detectors have grown steadily more complex, incorporating attention mechanisms, adversarial training, and stochastic latent variables. Yet, it is unclear how much of this machinery detection actually requires. We test this question with JuRe (Just Repair), a deliberately minimal detector: a single depthwise-separable convolutional residual block trained to repair Gaussian-corrupted, channel-masked windows, scored at inference by a fixed structural discrepancy function with no learned parameters. JuRe ranks second on the TSB-AD multivariate benchmark (AUC-PR 0.404 over 180 series) and second on the UCR univariate archive (AUC-PR 0.201 over 250 series), where it leads all neural baselines. On TSB-AD, JuRe runs roughly $20\times$ faster than AxonAD, one of the top-ranked methods on that benchmark. Full-benchmark ablations show that removing Gaussian corruption reduces AUC-PR by 0.046, whereas AUC-PR across the evaluated architecture variants spans at most 0.017. A synthetic linear-manifold experiment provides partial evidence for this geometric interpretation: anomaly scores correlate with true off-manifold distance (Pearson $r=0.725$), and repair directions align increasingly with the true projection as anomaly magnitude grows. Wilcoxon signed-rank tests with Holm correction find significant differences against 20 of 25 baselines, although dependence among series limits dataset-level interpretation. Code is available at https://github.com/iis-esslingen/JuRe.
