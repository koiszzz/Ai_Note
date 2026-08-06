# Corrigibility Transformation: Constructing Goals That Accept Updates

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Rubi Hudson　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2510.15395)

------

arXiv:2510.15395v2 Announce Type: replace

Abstract: An AI agent will learn a desired goal more effectively if it does not resist the training process, but many partially learned goals incentivize an AI to avoid further goal updates. We would like goals to be corrigible, meaning they allow changes requested through designated channels, so that we can confidently correct errors and shut down the AI if necessary. Despite this being a crucial safety property, the existing literature does not specify goals that are both corrigible and competitive with alternatives. We introduce a transformation that constructs a corrigible version of nearly any goal, without sacrificing performance. This is done by eliciting predictions of reward conditional on costlessly preventing updates, and having that target be pursued myopically. These goals are then shown to lead to optimal performance among the class of corrigible goals, to incentivize allowing mid-action overrides, and to disincentivize deliberate self-modification. Empirically, they induce corrigible behavior in gridworld settings and for language models when applied at the prompt level.
