# Minimax Optimal Early-Stopped Gradient Descent for Gaussian Mixture Classification

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Alex Buna, Shirley Xiaoqi Liu, Patrick Rebeschini　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.06250)

------

arXiv:2608.06250v1 Announce Type: cross

Abstract: In overparameterised classification, training data can be linearly separable even when the underlying distribution is not. In this setting, gradient descent (GD) on the logistic loss diverges in norm while converging in direction to a max-margin interpolating classifier, whose implicit bias can be statistically suboptimal. In this work, we show that early stopping can overcome this suboptimality: in a Gaussian mixture model with label-flipping noise, GD stopped at an appropriate oracle time achieves minimax-optimal excess zero-one risk for covariance spectra with fast and continuous decay, including polynomial and exponential spectral decays. Our analysis combines a sharp upper bound for the early-stopped iterate with a matching statistical lower bound over arbitrary classifiers, yielding optimal rates that are validated by experiments. A central technical contribution is a new calibration result that converts excess logistic risk into excess zero-one risk; it handles the model misspecification induced by the label-flipping noise, and removes the square-root rate in standard bounds. We also establish a lower bound for linear interpolators, showing that interpolation can require exponentially more samples than early stopping to achieve the same excess risk.
