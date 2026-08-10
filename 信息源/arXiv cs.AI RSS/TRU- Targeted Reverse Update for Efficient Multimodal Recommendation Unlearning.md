# TRU: Targeted Reverse Update for Efficient Multimodal Recommendation Unlearning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhanting Zhou, KaHou Tam, Ziqiang Zheng, Zeyu Ma, Yang Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2604.02183)

------

arXiv:2604.02183v3 Announce Type: replace

Abstract: Multimodal recommendation systems (MRS) jointly model user-item interaction graphs and rich item content, but this tight coupling makes user data difficult to remove once learned. Approximate machine unlearning offers an efficient alternative to full retraining, yet current MRS unlearning applies reverse updates largely uniformly across model components. We show that this uniform treatment is misaligned with modern MRS: deleted-data influence is distributed unevenly across \textit{ranking behavior}, \textit{modality branches}, and \textit{model modules}. This non-uniformity gives rise to three bottlenecks in MRS unlearning: target-item persistence in the collaborative graph, modality imbalance across feature branches, and concentrated module-level sensitivity in the parameter space. To address this mismatch, we propose \textbf{targeted reverse update} (TRU), a plug-and-play unlearning framework for MRS. Instead of applying a uniform global reversal, TRU performs three coordinated interventions across the model hierarchy: a ranking fusion gate to suppress residual target-item influence in ranking, branch-wise modality scaling to preserve retained multimodal representations, and capacity-aware parameter-group selection to localize reverse updates to deletion-sensitive modules. Across two backbones, three datasets, and three unlearning regimes, TRU achieves a stronger retain--forget trade-off than MMRecUn in most settings. In two challenging user-level cases, TRU also attains favorable operating points among all evaluated baselines. Security audits report the lowest MIA BalAcc and a tie for the lowest ASR among approximate methods in both audited settings, while wall-clock trajectories show earlier convergence to favorable retain--forget regions.
