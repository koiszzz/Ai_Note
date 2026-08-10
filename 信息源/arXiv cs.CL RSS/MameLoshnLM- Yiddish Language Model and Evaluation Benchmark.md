# MameLoshnLM: Yiddish Language Model and Evaluation Benchmark

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Uri Katz, Omer Goldman, Tomasz Limisiewicz, Reut Tsarfaty, Noah A. Smith　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05850)

------

arXiv:2608.05850v1 Announce Type: new

Abstract: We present MameLoshnLM, the first open-source 8B-parameter language model built specifically for Yiddish. Despite Yiddish's rich textual tradition, its limited digital presence and the scarcity of reliable evaluation resources have constrained progress in Yiddish language modeling. Existing multilingual corpora and benchmarks are often poor proxies for the language, containing substantial amounts of noisy, machine-translated, and misclassified text. We address these gaps by introducing Oytser, a high-quality Yiddish pretraining corpus that combines contemporary web-native sources with literary materials, and Kashes, a multi-task benchmark spanning translation, linguistic analysis, information extraction, and language understanding. Using these resources, we continue pretraining Llama 3.1 8B to obtain MameLoshnLM. Across the tasks in the benchmark, MameLoshnLM outperforms open baselines of similar scale. Our analyses show that these gains are not only quantitative: relative to general-purpose multilingual models, MameLoshnLM better captures language-defining lexical and morphological patterns, pointing to a broader failure mode of noisy web-scale multilingual data for low-resource languages. Our results provide both a foundation for Yiddish NLP and a practical template for language model development in historically rich but digitally underrepresented languages.
