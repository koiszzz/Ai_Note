# SEAM: Global consistency beyond local accuracy in scientific machine learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Gnankan Landry Regis N'guessan, Bum Jun Kim　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05702)

------

arXiv:2608.05702v1 Announce Type: new

Abstract: Scientific machine learning commonly validates models at the level of a subdomain, a benchmark split, or an explanation for one prediction. Yet such local checks cannot establish whether the resulting explanations can be assembled into one globally admissible explanation. We introduce Scientific Explanation-Admissibility Machines (SEAM), a generator-agnostic framework that makes this local-to-global consistency question computable across regions, sensors, regimes, and model components. The finite explanation-sheaf instantiation SEAM-$\Omega$ represents each region by a structured explanation with state, closure, and observation channels together with optional contract metadata; compares neighboring explanations on their overlaps; and converts disagreement into a channel-resolved obstruction. This obstruction locates inconsistency and tests competing declared accounts by restricting each repair to the revisions that one account permits. Exact feasibility refutes or retains an account; when exact repair is unavailable, residual-aware regularized records provide a separately labeled empirical attribution. The framework also separates inconsistency from non-identifiability and monitors learned generators under distribution shift. We establish theorems for minimum-cost intervention and conservation-contract detectability, together with companion results for identifiability and closure recoverability. Across nineteen experiments involving synthetic partial differential equation systems and out-of-distribution Fourier neural operator (FNO) monitoring, SEAM detects incompatible explanations even when local predictions are accurate, and attributes failures to specific channels and overlaps. SEAM adds a global explanation-consistency audit to existing solvers and learning models, testing whether their local explanations form a coherent scientific account.
