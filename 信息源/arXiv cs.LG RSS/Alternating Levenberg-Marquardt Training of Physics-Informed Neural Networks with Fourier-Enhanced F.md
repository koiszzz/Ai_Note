# Alternating Levenberg-Marquardt Training of Physics-Informed Neural Networks with Fourier-Enhanced Features

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yulun Wu, Matthieu Barreau, Miguel Aguiar, Karl H. Johansson　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05892)

------

arXiv:2608.05892v1 Announce Type: new

Abstract: Physics-informed neural networks (PINNs) often fail to accurately resolve partial differential equations (PDEs) with high-frequency or multi-scale solutions, as well as strongly nonlinear problems. Two factors underlie this difficulty: spectral bias, the tendency of neural networks to underfit high-frequency features; and representation-coefficient coupling, the entanglement of representation learning and coefficient fitting within a single nonconvex optimization objective. In this work, we propose the Fourier-enhanced alternating Levenberg--Marquardt PINN (FALM-PINN), an optimization framework that decouples representation learning from coefficient fitting. The upper-level problem learns a Fourier-enhanced basis that enriches the latent space with high-frequency components, while the lower-level problem resolves the coupling by fitting the projection coefficients on this basis, solving a nonlinear least-squares problem with the Levenberg--Marquardt algorithm. The framework applies to general nonlinear and coupled PDE systems, and reduces to a single-step convex optimization problem for linear PDEs. We prove global convergence of the alternating training scheme in both cases. Numerical examples on multiple challenging high-frequency and nonlinear PDEs show that FALM-PINN achieves relative $L^2$ errors up to two orders of magnitude lower than state-of-the-art baselines.
