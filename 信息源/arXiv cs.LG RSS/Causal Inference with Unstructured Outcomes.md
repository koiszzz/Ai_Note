# Causal Inference with Unstructured Outcomes

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kevin Christian Wibisono, Yixin Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.03085)

------

arXiv:2608.03085v1 Announce Type: cross

Abstract: Causal inference has traditionally centered on scalar outcomes: whether a patient recovers, how much a worker earns, or how many visits a website receives. Modern studies increasingly ask causal questions about outcomes with richer form, such as clinical notes, open-ended survey responses, and images. A hospital may want to know how an AI documentation tool changes the notes physicians write, or how a nurse training program alters what patients say in survey responses. For such outcomes, the usual average treatment effect is ill-defined: one cannot meaningfully subtract one text or image from another. To this end, we propose a causal query for unstructured outcomes. The key idea is to learn what features of the outcome are most causally affected by the treatment, which we call the maximally contrasting feature (MCF). To estimate the MCF, we learn a feature-scoring function that maps each outcome to a scalar and exposes the sharpest contrast between treated and control potential outcomes. We develop identification conditions and estimation algorithms for this query, and extend it to heterogeneous effects by allowing the feature-scoring function to depend on observed covariates. We also handle settings where both the treatment and the outcome are unstructured. Empirical studies on text and images show that the algorithm recovers salient aspects of an outcome changed by a treatment.
