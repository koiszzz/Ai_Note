# In-Context Molecular Property Prediction with LLMs: A Blinding Study on Memorization and Knowledge Conflicts

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Matthias Busch, Marius Tacke, Sviatlana V. Lamaka, Mikhail L. Zheludkevich, Christian J. Cyron, Christian Feiler, Roland C. Aydin　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2603.25857)

------

arXiv:2603.25857v3 Announce Type: replace

Abstract: The capabilities of large language models (LLMs) have expanded beyond natural language processing to scientific prediction tasks, including molecular property prediction. However, their effectiveness in in-context learning remains ambiguous, particularly given the potential for training data contamination in widely used benchmarks. This paper investigates whether LLMs perform genuine in-context regression on molecular properties or instead rely on verbatim retrieval of memorized target values. Furthermore, we analyze the interplay between pre-trained knowledge and in-context information through a series of progressively blinded experiments. We evaluate nine LLM variants across three families (GPT-4.1, GPT-5, Gemini 2.5) on three MoleculeNet datasets (Delaney solubility, Lipophilicity, QM7 atomization energy) using a systematic blinding approach that iteratively reduces available information, complemented by 0-, 60-, and 1000-shot in-context sample sizes as an additional control for information access. To validate the memorization analysis and the blinding experiments, we add a positive and a negative control for the memorization experiments and structural reference baselines for the multi-shot experiments as well as bootstrap confidence intervals for all results. We find no evidence of verbatim retrieval on the legacy benchmarks and show that blinding exposes conflicts between pre-trained knowledge and in-context information. This work provides a principled framework for evaluating molecular property prediction under controlled information access.
