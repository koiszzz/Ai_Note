# BBOWP-Bench: Evaluating LLMs on Black-Box Optimization Word Problems

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yutaro Yamada, Kei Hiroshima, Nozomu Yoshinari, Kento Uchida, Shinichi Shirakawa　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02612)

------

arXiv:2608.02612v1 Announce Type: cross

Abstract: Formulating an optimization problem strongly affects the quality of the final solution, yet good formulations usually require substantial expertise. Recent studies have therefore examined how to automatically derive optimization problems from natural-language descriptions, but existing benchmarks focus on settings where objectives and constraints can be written explicitly as mathematical expressions. Many practically important problems are naturally treated as black-box optimization (BBO) problems, in which only objective values are observable, and the functional form is unavailable. In BBO, the search space design, a part of the problem formulation, and the selection of the optimization algorithm are crucial for problem-solving. Automating these processes with large language models (LLMs) is a significant challenge. This paper introduces Black-Box Optimization Word Problems (BBOWP), a novel problem setting in which a system must infer both a search space and an optimization algorithm from a natural-language description of a black-box optimization task. To support research on this setting, we establish the BBOWP Benchmark Suite (BBOWP-Bench), a dataset and evaluation framework for BBOWP. Each instance combines a natural-language problem description, an executable evaluation environment, and a human-designed baseline formulation, allowing evaluation of both search-space design and algorithm selection. Using this benchmark, we provide the first evaluation of LLMs and show that current LLMs are capable of selecting suitable algorithms based on the given evaluation budget. However, they sometimes struggle with search space design, particularly in identifying important variables and balancing their ranges when the problem description is less informative or the search space is highly problem-specific. Our code and dataset are available at https://github.com/shiralab/bbowp-bench.
