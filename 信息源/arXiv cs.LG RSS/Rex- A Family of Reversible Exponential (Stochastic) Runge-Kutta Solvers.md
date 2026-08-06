# Rex: A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zander W. Blasingame, Chen Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2502.08834)

------

arXiv:2502.08834v5 Announce Type: replace

Abstract: Deep generative models based on neural differential equations have become state-of-the-art for many generation tasks. These models rely on ODE/SDE solvers that integrate from a prior distribution to the data distribution; in many applications it is also highly desirable to integrate in the inverse direction. Standard solvers, however, accumulate discretization errors that prohibit exact inversion, an inaccuracy that is unacceptable in precision-critical applications. Existing inversion methods suffer from poor stability and low order of convergence, and are strictly limited to the ODE setting. In this work, we propose Rex, a family of reversible exponential (stochastic) Runge-Kutta solvers obtained by applying Lawson methods to convert any explicit (stochastic) Runge-Kutta scheme into an algebraically reversible one for both diffusion ODEs and SDEs. Beyond a rigorous theoretical analysis -- establishing arbitrary-order convergence and a non-zero region of linear stability -- we empirically demonstrate that Rex achieves near-machine-precision reconstruction and improves Boltzmann sampling with flow models as well as image generation and editing with diffusion models.
