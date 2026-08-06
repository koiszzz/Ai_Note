# LAEF: A Lead-Agnostic ECG Foundation Model Towards Point-of-Care Diagnostics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Edoardo Coppola, Stefano Fiorini, Pietro Li\`o, Mattia Savardi, Alberto Signoroni　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03690)

------

arXiv:2608.03690v1 Announce Type: new

Abstract: Point-of-care cardiac devices such as smartwatches and handheld ECG recorders typically capture 1--2 leads, yet existing ECG foundation models are architecturally constrained to fixed 12-lead inputs, degrading or failing under these reduced configurations. We introduce LAEF (Lead-Agnostic ECG Foundation), a 7M-parameter ECG foundation model that can natively process any lead subset without zero-padding or architectural modification. LAEF represents ECGs as variable-size spatiotemporal graphs with physiologically motivated intra- and inter-lead connectivity, processed by a Graph Attention Network that scales naturally with active lead count.Pre-trained on 9.2M 12-lead ECGs via masked node modelling with stochastic lead sampling, LAEF learns representations robust to lead configuration. Across 18 downstream datasets, LAEF is on par with specialized 12-lead baselines over 12$\times$ larger at full lead availability. Under direct point-of-care-oriented diagnostics (1--2 leads), it outperforms all zero-padded alternatives on 17 out of 18 datasets with with a single randomly sampled lead and on 14 out of 18 with 2 leads, with an average AUROC gain of +3.2 points. Representation analysis links this advantage to architectural lead-agnosticism, and a lead-importance study across 164 cardiovascular conditions shows population-level performance is stable across single standard input leads while still recovering established clinically lead-condition associations.
