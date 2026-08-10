# Mind the Gaps: Mixture-of-Minds for Human Simulation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Pranav Dahiya　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06115)

------

arXiv:2608.06115v1 Announce Type: new

Abstract: Predicting how a population will answer a new question is a long-standing goal. Statistical methods succeed at the level of the mass but falter at the level of the individual. Large language model simulators inherit this gap. They recover a population's central tendencies while flattening its heterogeneity, and they carry social biases and prompt brittleness that distort individual predictions. This paper introduces Anacreon, an audience simulation model that targets the individual level within a narrow, well-specified domain. Anacreon learns an authorship embedding that separates individuals, clusters a real qualitative corpus around seed people, and trains a dedicated adapter for each cluster, a mixture of minds, on a Gemma~4 12B base. It harvests demographics, psychological traits, and survey responses from public text, and augments each record with a chain-of-emotion. It reduces prompt brittleness by shuffling response options and reduces positive bias by balancing the training distribution. On a large, externally sourced survey, Anacreon reaches a state-of-the-art ordinal alignment of 0.775, the individual-level accuracy measure on which the field has converged, with a small residual bias. The work is a step toward drawing aggregate insight from faithfully simulated individuals.
