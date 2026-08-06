# Relational Response Fields: A General Theory of Black-Box LLM Response Consistency and Recovery

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Song Zichen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04552)

------

arXiv:2608.04552v1 Announce Type: cross

Abstract: Black-box language-model reliability is commonly pursued by sampling, prompting, voting, verifying, or iteratively revising individual answers. We ask a prior question: \emph{what determines whether a collection of black-box responses is recoverable at all?} We represent responses to typed transformations of a query as a \emph{relational response field} (RRF). Edge transports encode how valid responses must change under paraphrase, scaling, decomposition, refactoring, or other task symmetries; anchors encode independently trusted evidence such as execution or a verifier. For relation operator $D$, anchor operator $A$, and at most $k$ corrupted response nodes, we identify $\gamma_k(D,A)$ as the intrinsic difficulty of black-box response recovery. It is positive exactly when every $k$-node corruption is identifiable; it gives a deterministic stability bound proportional to $1/\gamma_k$; and a matching two-point minimax lower bound shows that no estimator can improve this dependence. Thus consistency is not truth: relation-only methods are blind to null directions, including shared hallucinations. We derive sparse field-repair algorithms while separating information-theoretic identifiability from the stronger null-space conditions required by convex optimization. Controlled theorem tests and black-box mathematics/code experiments evaluate four theory-fixed consequences: consistency--truth separation, anchor phase transitions, redundancy saturation, and cross-model, cross-task prediction of repair difficulty. The results support $\gamma_k(D,A)$ as a measurable property of a response-recovery instance, rather than a score attached to one repair heuristic.
