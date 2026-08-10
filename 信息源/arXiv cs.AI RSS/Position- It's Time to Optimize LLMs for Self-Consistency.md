# Position: It's Time to Optimize LLMs for Self-Consistency

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Itamar Pres, Belinda Z. Li, Laura Ruis, Zifan Carl Guo, Keya Hu, Mehul Damani, Isha Puri, Ekdeep Singh Lubana, Jacob Andreas　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05188)

------

arXiv:2608.05188v1 Announce Type: cross

Abstract: Despite ever-increasing sophistication in language model (LM) pre- and post-training pipelines, many important failures persist: models overcondition on user framing ("sycophancy"), exhibit incomplete logical generalization, and produce confident but incorrect responses. We argue that these failures arise from a modeling assumption permeating all aspects of the pipeline: that behavior can be specified and evaluated independently on single-output pairs. Many model failures are difficult, if not impossible, to detect without reasoning about relationships between a model's responses across inputs. In this position paper, we propose self-consistency as a framework for understanding these failures. We first observe that a wide variety of techniques designed to improve specific aspects of LM behavior-targeting properties as diverse as adversarial robustness and factual coherence-can be understood as special cases of a common "consistency optimization" procedure and addressed with a standard set of optimization tools. We next outline a set of new model properties that could be achieved by optimizing for consistency, and conclude with a discussion of what it would mean to develop generally consistent LMs, including the capabilities they would enable and the objections they raise.
