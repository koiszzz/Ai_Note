# Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Minseo Seong, Youngwook Kim　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04379)

------

arXiv:2608.04379v1 Announce Type: new

Abstract: We propose a method to optimize the correlation among convolutional neural network (CNN) features that are used as inputs to quantum neural network (QNN) to enhance image classification accuracy. Unlike prior approaches that employ orthogonal decomposition as preprocessing, we intentionally introduce correlated features that are more physically compatible with QNN. This design leverages the QNN's inherent ability to exploit quantum entanglement for representing correlated states-an advantage unavailable to classical neural networks. We hypothesize that aligning feature correlations with the entanglement structure of QNN improves binary classification performance. Based on a mathematical derivation of QNN outputs, Monte Carlo simulations indicate that an average correlation between features of 0.5 yields optimal classification accuracy. To validate this finding, we evaluate a quantum-classical hybrid model on three tasks: CIFAR-10 (automobile vs. truck), Fashion-MNIST (shirt vs. coat), and radar micro-Doppler signatures (robotic dogs vs. non-robots). To regulate feature correlations, we introduce a correlation-regularization term on the outputs of the CNN, driving the off-diagonal entries of the feature correlation matrix toward a target constant. Across all datasets, inducing intermediate correlation consistently improved accuracy compared to low, high, or unregulated correlations, while also reducing classification accuracy variance. These results demonstrate that imposing moderate feature correlations-without modifying the quantum circuit-enhances classification accuracy and stability by aligning feature statistics with the QNN's entanglement structure. This study highlights the potential of QNN to surpass the performance of classical classifiers as more qubits become available.
