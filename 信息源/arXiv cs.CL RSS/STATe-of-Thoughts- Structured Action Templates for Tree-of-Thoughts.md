# STATe-of-Thoughts: Structured Action Templates for Tree-of-Thoughts

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Zachary Bamberger, Till R. Saenger, Gilad Morad, Ofra Amir, Brandon M. Stewart, Amir Feder　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2602.14265)

------

arXiv:2602.14265v3 Announce Type: replace

Abstract: Inference-Time-Compute (ITC) methods like Best-of-$n$ and Tree-of-Thoughts are meant to produce output candidates that are both high-quality and diverse, but their use of high-temperature sampling often fails to achieve meaningful output diversity. Moreover, existing ITC methods offer limited control over $\textit{how}$ to perform reasoning, which in turn limits their interpretability. We present $\textbf{STATe-of-Thoughts}$ (STATe), an interpretable ITC method that $\textit{searches}$ over high-level reasoning patterns. STATe branches over discrete and interpretable textual interventions rather than over token-level samples: a $\textit{controller}$ selects actions encoding high-level reasoning choices; a $\textit{generator}$ produces reasoning steps conditioned on those choices; and an $\textit{evaluator}$ scores candidates to guide search. This structured approach yields three main advantages. First, action-guided textual interventions reliably influence LLM generations and produce greater response diversity than temperature-based sampling. Second, in a case study on argument generation, STATe's explicit action sequences capture interpretable features that are highly predictive of output quality. Third, estimating the association between performance and action choices allows us to identify promising yet unexplored regions of the action space and steer generation toward them. STATe is most useful when a task admits multiple solutions and when understanding $\textit{why}$ an output succeeds matters beyond $\textit{whether}$ the output succeeds. Together, these results establish STATe as both a practical framework for diverse and controllable text generation, and as a tool for understanding the reasoning patterns that drive performance.
