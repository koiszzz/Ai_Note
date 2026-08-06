# On the Implicit Flatness Bias of Sharpness-Aware Minimization: A Linear Stability Analysis with Quantitative Hyperparameter Bounds

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jiaxin Deng, Junbiao Pang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03197)

------

arXiv:2608.03197v1 Announce Type: new

Abstract: Sharpness-Aware Minimization (SAM) improves generalization by seeking parameters whose loss is robust to local adversarial perturbations, but the quantitative mechanism underlying its implicit bias toward flat minima remains unclear. In particular, the perturbation radius $\rho$ is typically treated as an isolated tuning parameter, despite defining the neighborhood in which SAM measures sharpness. We analyze mini-batch SAM near an interpolating minimum through linear stability. Under local linearization and gradient-noise alignment assumptions, we prove that every linearly stable minimum satisfies $\lambda_{\max}\leq\sqrt[3]{b\Gamma/(2\rho\eta^2)}$, where $\lambda_{\max}$ is the largest Hessian eigenvalue, $b$ is the batch size, $\eta$ is the learning rate, and $\Gamma$ bounds the gradient norm. The bound quantitatively characterizes SAM's implicit flatness bias: holding the other quantities fixed, a smaller batch size, a larger learning rate, or a larger radius restricts linearly stable SAM to flatter minima. It also exposes a necessary trade-off: $\rho$ should be large enough to promote flatness, yet remain local enough to preserve the approximation and stable training. We validate this prediction in a controlled study of 900 models on CIFAR-100 with ResNet-18 and VGG-19, where increasing $\rho$ is consistently associated with a smaller largest Hessian eigenvalue across batch-size and learning-rate settings. Finally, we instantiate the analysis in Taylor-Locality Controlled SAM (TLC-SAM), which adjusts $\rho$ using the observed Taylor-approximation error and further reduces the top Hessian eigenvalue relative to fixed-radius SAM. Our results provide quantitative hyperparameter bounds and a stability--locality perspective for analyzing and designing SAM variants.
