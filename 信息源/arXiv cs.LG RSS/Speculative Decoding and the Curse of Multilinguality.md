# Speculative Decoding and the Curse of Multilinguality

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nirajan Paudel, Michael Ginn, Luc De Nardi, Alexis Palmer　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2605.30580)

------

arXiv:2605.30580v2 Announce Type: replace-cross

Abstract: Speculative decoding is a popular technique for large language model (LLM) inference, enabling faster generation by drafting multiple tokens with a smaller draft model. However, the effectiveness of speculative decoding has mainly been studied for English. Motivated by the curse of multilinguality, we hypothesize that speculative decoding is far less effective for low-resource languages due to the limited multilingual capacities of smaller models. We test eleven languages under a standard speculative decoding setup and find strong evidence for our hypothesis.

Next, we try to improve the multilingual capabilities of the smaller draft model via distillation from the larger model. We find, though, that distillation generalizes poorly across tasks in the same language, and we argue that assembling a task-agnostic, fully representative dataset is infeasible for low-resource languages. Finally, we propose weaker n-gram models as draft models; these provide moderate speed-ups due to their minuscule inference cost.
