# ForgettingOT: Certified Speculative Batching from Sinkhorn's Projective Forgetting

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xinyang Wen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.DC　|　原文：[打开链接](https://arxiv.org/abs/2607.24741)

------

arXiv:2607.24741v2 Announce Type: replace-cross

Abstract: Positive two-marginal entropic optimal transport is solved by a nonlinear, positive, order-preserving, homogeneous Sinkhorn map. After quotienting the dual scaling gauge, we show that the active eigenmode of the fixed-point Jacobian $J_t^\star=QP=P^\star P$, generically $\lambda_2(QP)$, controls the strict correction tail. The projective-residual ratio converges to this mode, and the additional certified cycles required for tolerance $\theta_\tau$ scale as $\log(\rho/\theta_\tau)/[-\log\lambda_2]+O(1)$.

ForgettingOT turns this nonlinear Perron--Frobenius fact into a certified executor for streams of related Sinkhorn problems. A computable projective variation $\Omega_t$ in the marginals and kernel bounds the carry residual, while a verified contraction $q_t$ gives candidate repair depth. A window theorem converts these depths and the audit grid into bounds on packed work, collective rounds, overshoot, and fallback. Empirical tail estimates allocate work but never authorize release; current-instance certificates or measured marginal residuals do so, with ordinary Sinkhorn as fallback.

On 15 FP64 A100/OTT-JAX cells, the observed quotient slow-mode ratio agrees with $\lambda_2(QP)$ to $9.84\times10^{-6}$. On controlled four-A100 streams, the complete executor is $1.42\times$--$3.55\times$ faster than sequential soft $c$-transform warm starts, with 30/30 paired wins and no violations of the $10^{-3}$ marginal tolerance. Eight-A100 support-4096 streams give $2.584\times$--$2.945\times$ wall-time speedup and $4.285\times$--$4.615\times$ fewer vector-collective rounds. The outer executor composes with target-preserving Sinkhorn accelerators; a changed map or approximate target needs a contraction or error bridge before inheriting the repair-depth bound.
