# Guarantees by Construction for Learned Finite Volume Schemes on Steady Supersonic Flow

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Denis Gueyffier (ONERA -- Institut Polytechnique de Paris)　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：physics.flu-dyn　|　原文：[打开链接](https://arxiv.org/abs/2607.20171)

------

arXiv:2607.20171v3 Announce Type: replace-cross

Abstract: A second order finite volume scheme rests on two local quantities: a gradient reconstructed in each cell, and a limiter which scales it down where the reconstruction would overshoot. Both are set by fixed formulas, and on coarse unstructured meshes a small network can supply better values. But a network is free to output anything, and the usual safeguard is a penalty in the training loss, which discourages inadmissible states without preventing them.

We replace the penalty by a hard constraint. The network still sets both quantities, and every value it can produce lies inside safe bounds: its stencil weights cannot cancel a neighbour, and its limiter is capped by the local flow. The flux, the wall treatment and the time step are not learned and carry their own guarantees. Admissibility therefore holds for every value of the weights rather than as an outcome of training, and no negative density or pressure occurred in any computation reported here.

Because the scheme is safe whatever the network does, we could ask what the network contributes. We test it on supersonic channel flow over an obstacle, including the forward facing step of Woodward and Colella. Learning lowers the error by 38% on an unseen geometry and 29% on an unseen obstacle topology, measured against the same scheme with the network switched off. The method aims at the accuracy of a fine mesh for the cost of a coarse one, and refining once improves the error fourfold while multiplying the run time by eight. Learning secures half of this improvement for a sixth of this time.

All of this comes from one of the two quantities the network sets. The gradient reconstruction reproduces the full effect on its own, and the limiter accounts for about a tenth as much. This also explains why the gain fades beyond the Mach numbers the weights were trained on.
