# Beyond the QBER Threshold: A Temporal QBER Based Machine Learning Framework for Multi Attack Detection in BB84 QKD

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Isha, Deepak Singh, Devesh Kumar, S. K Pal, Praful Hambarde, Amit Shukla　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04047)

------

arXiv:2608.04047v1 Announce Type: cross

Abstract: Conventional BB84 Quantum Key Distribution (QKD) systems rely on a fixed 11% Quantum Bit Error Rate (QBER) threshold to detect eavesdropping. However, stealthy attacks can remain below this threshold while still compromising channel security. This paper proposes a temporal QBER based machine learning framework for detecting and classifying eavesdropping attacks in BB84 QKD systems. Rather than relying on average session level QBER, the framework extracts 63 physics-informed temporal features capturing burst behavior, temporal instability, basis dependent asymmetry, and QBER loss interactions. Random Forest, XGBoost, and Support Vector Machine with a Radial Basis Function kernel (SVM-RBF) classifiers are evaluated on seven eavesdropping attacks and a normal channel scenario under noisy and lossy conditions. Averaged over ten independent runs, XGBoost achieves the best performance with 88.01% (0.47%) accuracy and a macro F1 score of 0.8803, while SVM-RBF performs comparably, confirming the robustness of the proposed features. Evaluated as a binary attack-versus-normal detector for comparison with conventional monitoring, a fixed 11% QBER threshold achieves only 25.82% accuracy with a False Negative Rate (FNR) of 0.8477, whereas the proposed framework reduces the FNR to 0.0198, substantially improving detection of stealthy attacks that evade threshold-based monitoring. SHapley Additive exPlanations based (SHAP) explainability shows that physics-informed temporal and channel derived features are highly discriminative for identifying eavesdropping strategies. These results demonstrate that temporal QBER driven machine learning provides an accurate, explainable, and practical framework for multi attack security monitoring in BB84 QKD systems.
