# ASAT: Adaptive Scoring and Thresholding with Human Feedback for Robust Out-of-Distribution Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Daisuke Yamada, Harit Vishwakarma, Ramya Korlakai Vinayak　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2505.02299)

------

arXiv:2505.02299v2 Announce Type: replace

Abstract: Machine Learning (ML) models are trained on in-distribution (ID) data but often encounter out-of-distribution (OOD) inputs during deployment---posing serious risks in safety-critical domains. Recent works have focused on designing scoring functions to quantify OOD uncertainty, with score thresholds typically set based solely on ID data to achieve a target true positive rate (TPR), since OOD data is limited before deployment. However, these TPR-based thresholds leave false positive rates (FPR) uncontrolled, often resulting in high FPRs where OOD points are misclassified as ID. Moreover, fixed scoring functions and thresholds lack the adaptivity needed to handle newly observed, evolving OOD inputs, leading to sub-optimal performance. To address these challenges, we propose \emph{ASAT}, a human-in-the-loop framework that \textit{safely updates both scoring functions and thresholds on the fly} based on real-world OOD inputs. ASAT maximizes TPR while controlling FPR at all times under stationary conditions, even as the system adapts over time. Under nonstationary conditions, the method adapts to distribution shifts with only transient FPR violations during the adaptation period. We provide theoretical guarantees for FPR control under stationary conditions and present extensive empirical evaluations on OpenOOD benchmarks to demonstrate that our approach outperforms existing methods by achieving higher TPRs while maintaining FPR control.
