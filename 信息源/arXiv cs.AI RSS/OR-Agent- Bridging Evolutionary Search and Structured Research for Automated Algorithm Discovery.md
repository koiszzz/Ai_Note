# OR-Agent: Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qi Liu, Ruochen Hao, Can Li, Wanjing Ma　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2602.13769)

------

arXiv:2602.13769v3 Announce Type: replace

Abstract: Automating heuristic design in complex, experiment-driven domains requires more than iterative mutation of solution algorithms. Current LLM-based evolutionary methods often rely on stochastic mutation loops that lack long-term strategic planning and a formal mechanism to learn from historical failures, leading to inefficient exploration and redundant trials. To address this, we present OR-Agent, a multi-agent research framework designed for automated heuristic design in optimization problems with rich experimental environments. OR-Agent organizes heuristic search as tree-based workflow that explicitly models branching hypothesis generation and systematic backtracking. Furthermore, to address the lack of adaptive learning in current agents, we introduce a hierarchical, optimization-inspired reflection system in which short-term reflections act as verbal gradients, long-term reflections as verbal momentum, and memory compression as semantic weight decay - collectively forming a principled mechanism for governing research dynamics. Extensive experiments on classical combinatorial optimization problems (e.g., TSP, CVRP, bin packing) and simulation-based cooperative driving scenarios demonstrate that OR-Agent outperforms strong evolutionary search baselines. All code and experimental data are publicly available at https://github.com/qiliuchn/OR-Agent.
