# Tree of Thoughts as a Classical Heuristic Search Problem: Formal Foundations and Design Patterns

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Guni Sharon　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2605.28566)

------

arXiv:2605.28566v2 Announce Type: replace-cross

Abstract: Large Language Models (LLMs) have demonstrated remarkable reasoning capabilities, yet their standard generation process -- auto-regressive token prediction -- is inherently myopic and prone to cascading errors. To address this, the Tree-of-Thoughts (ToT) framework creates a search space over intermediate reasoning steps, allowing search models to explore, look ahead, and backtrack. However, current ToT research remains fragmented across Natural Language Processing and Automated Planning communities, often using inconsistent terminology and ad-hoc implementations. Consequently, we synthesize the ToT landscape through a unified taxonomy based on classical heuristic search terminology. We map LLM-based reasoning to classical search components: state representation (granularity of thoughts), successor generation (prompting operators), and heuristic evaluation (self-assessment of progress). We analyze existing work within the context of our taxonomy and identify emerging design patterns: systematic search (Best-First Search) for shallow, deterministic tasks and lookahead-heavy strategies (DFS, MCTS) for deep multi-step reasoning. We conclude by identifying open algorithmic challenges at the intersection of heuristic search and LLM reasoning, and call on the heuristic search community to engage with this emerging domain.
