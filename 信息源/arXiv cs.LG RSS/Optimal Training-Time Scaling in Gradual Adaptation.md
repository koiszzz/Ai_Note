# Optimal Training-Time Scaling in Gradual Adaptation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zonghuan Xu, Krishna Harish　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04927)

------

arXiv:2608.04927v1 Announce Type: new

Abstract: In gradual adaptation, how should the training time on each task change as the number of intermediate tasks increases? We study this question for overparameterized linear regression tasks that change smoothly and share a zero-loss solution. With $N$ tasks and training time $s_N$ on each, the final learning progress converges to a continuum curve when $Ns_N\to\tau$. The limiting progress is $\Theta(\tau)$ for small $\tau$ and $\Theta(\tau^{-1})$ for large $\tau$, so both very short and very long training produce little progress. It follows that optimal per-task training times scale as $s_N^\star=\Theta(N^{-1})$, equivalently $Ns_N^\star=\Theta(1)$. Experiments on gradually rotated MNIST and a natural Yearbook time shift are consistent with less per-task training as the path is divided more finely.
