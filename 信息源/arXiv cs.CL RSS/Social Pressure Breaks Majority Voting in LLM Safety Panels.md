# Social Pressure Breaks Majority Voting in LLM Safety Panels

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Yibo Hu, Jiaming Qu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04415)

------

arXiv:2608.04415v1 Announce Type: new

Abstract: Large language models (LLMs) are increasingly used to detect unsafe content. A common approach is to combine judgments from a panel of models to correct individual mistakes, but this benefit may disappear when every model sees the same misleading context before voting. We study this risk in a controlled two-round experiment. Each model first judges an item alone, then judges it again after six simulated peers either assert the wrong label or abstain. We combine the final judgments by majority vote. Across six open-weight LLMs and six datasets, we find that the wrong-label peer message raises the average reviewer false-alarm rate from 56.5% under silent peers to 87.5%, and majority voting raises the panel false-alarm rate to 100%. Without an asserted label, the same panel outperforms its average member. The effect is strongly asymmetric: reviewers follow pushes toward "unsafe" far more than pushes toward "safe" (about 75% versus 17%), so the panel's false-alarm rate rises sharply while its harmful-miss rate changes little. The proprietary-model probe shows substantial variation across models. These results identify susceptibility to shared social cues as a failure mode of safety panels and provide a simple pre-deployment diagnostic.
