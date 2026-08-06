# Learning to Resolve Neutron Resonances with Fully Convolutional Neural Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nataly R. Panczyk, Athanasios Stamatopoulos, Josef Svoboda, Majdi I. Radaideh　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04027)

------

arXiv:2608.04027v1 Announce Type: new

Abstract: This work investigates the feasibility of augmenting traditional R-Matrix codes with a robust machine learning framework for automatically detecting neutron resonances in transmission spectra. Neutron transmission data are often complex and noisy, making them difficult to analyze using traditional peak-identification methods. The state-of-the-art R-Matrix codes currently used by physicists to fit these data often depend on prior evaluations and require substantial manual effort. This preliminary study demonstrates a method for accelerating the post-experimental processing of neutron transmission data and reducing bias associated with dependence on prior evaluations. We employ a fully convolutional neural network to classify individual points as belonging to resonance or non-resonance regions in seven transmission spectra---two evaluated and five experimental. Although the model achieves classification accuracies in the range of 93\%, further analysis shows that this metric overstates its ability to generalize. Building on our prior analysis in PHYSOR 2026, we find that, despite the inclusion of additional training data, the method does not generalize reliably to previously unseen isotopes. To address these limitations, future work should evaluate whether a larger and more diverse training dataset can produce a generalizable model and should incorporate known physical characteristics of neutron resonances to improve model performance.
