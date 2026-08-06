# Revisiting Generalization Across Difficulty Levels: It's Not So Easy

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yeganeh Kordi, Nihal V. Nayak, Max Zuo, Ilana Nguyen, Stephen H. Bach　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2511.21692)

------

arXiv:2511.21692v3 Announce Type: replace-cross

Abstract: We investigate how well large language models (LLMs) generalize across different task difficulties, a key question for effective data curation and evaluation. Existing research is mixed regarding whether training on easier or harder data leads to better results, and whether those gains come on easier or harder test data. We address this question by conducting a systematic evaluation of LLMs' generalization across models, datasets, and fine-grained groups of example difficulty. We rank examples in six datasets using the outputs of thousands of different LLMs and Item Response Theory (IRT), a well-established difficulty metric in educational testing. Unlike prior work, our difficulty ratings are therefore determined solely by the abilities of many different LLMs, excluding human opinions of difficulty. With a more objective, larger-scale, and finer-grained analysis, we show that cross-difficulty generalization is often limited; training on either easy or hard data cannot achieve consistent improvements across the full range of difficulties. These results show the importance of having a range of difficulties in both training and evaluation data for LLMs, and that taking shortcuts with respect to difficulty is risky.
