# The Evaluator Is Part of the Experiment: Measuring Open-Ended LLM Conformity

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Alicia Guerra, Yibo Hu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04463)

------

arXiv:2608.04463v1 Announce Type: new

Abstract: Prior work on LLM conformity largely measures discrete answer flips under verifiable labels. Open-ended revisions require a different measurement strategy because answer quality is graded, latent, and judged imperfectly. We introduce an experimental protocol implemented across a pooled main peer-condition corpus and separately constructed decomposition corpora, allowing us to separate ordinary re-answering, candidate-content exposure, a bundled peer-presentation residual, and directional judge sensitivity to visible peer context. Across four open-weight generators and three benchmarks, all-wrong peer input produces the lowest-quality revisions in every generator-dataset cell. Blind and informed ratings of identical answers also differ by evaluator: one judge shifts toward the peer-endorsed position, two shift away, one is approximately neutral, and GPT-4o and GPT-5.4-mini audits are likewise non-neutral. Finally, an anchor audit shows that terse correct anchors can be misread often enough to destabilize the latent scale unless calibration is checked explicitly. These results support four conclusions: flip rates are insufficient as a complete measure of open-ended conformity, wrong peers harm open-ended revision, evaluators are not neutral, and anchor calibration is necessary.
