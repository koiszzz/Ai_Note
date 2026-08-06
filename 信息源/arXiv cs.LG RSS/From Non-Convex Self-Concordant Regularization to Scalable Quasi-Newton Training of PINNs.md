# From Non-Convex Self-Concordant Regularization to Scalable Quasi-Newton Training of PINNs

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chenhao Si, Kang An, Shiqian Ma, Ming Yan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04206)

------

arXiv:2608.04206v1 Announce Type: new

Abstract: Physics-informed neural networks (PINNs) often require high-accuracy quasi-Newton refinement to obtain reliable partial differential equation solutions, but their residual objectives can exhibit indefinite, nearly singular, and poorly scaled local curvature. Regularized quasi-Newton methods provide established mechanisms for stabilizing secant models, while self-concordant methods provide local-metric rules for curvature-dependent step selection. Building on these two lines of work, we propose SCORE, a self-concordance-inspired quasi-Newton method with decrement-coupled shifted secant geometry for PINN training. Its distinguishing mechanism is that a single quasi-Newton decrement computed from the learned inverse metric jointly determines a strong-Wolfe-tested candidate step and an adaptive shift used to define the next secant geometry. The shifted displacement represents the action of an averaged shifted metric along the accepted step, while requiring neither Hessian construction nor Hessian-vector products. Under a local spectral-equivalence condition, we show that the quasi-Newton decrement and candidate step remain comparable to their counterparts in a positive shifted metric, and recover the normalized self-concordant rule in the matched-metric case. Strong Wolfe acceptance, fallback line search, and standard curvature safeguards provide globalization without modifying the underlying PINN objective. Experiments on the viscous Burgers, Kuramoto--Sivashinsky, Korteweg--de Vries, and complex Ginzburg--Landau equations show that SCORE attains lower final errors than the tested BFGS and self-scaled Broyden baselines. The Burgers ablation further indicates that shifted curvature stabilization and decrement-based step selection make complementary contributions to high-accuracy refinement.
