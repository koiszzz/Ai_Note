# Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shengxin Kong, Liwen Xu, Jingwen Fu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04384)

------

arXiv:2608.04384v1 Announce Type: new

Abstract: Neural PDE solver auto-design is fundamentally a search-space representation problem. In the space of unrestricted Python programs, valid solvers form an extremely sparse subset: most candidate programs are syntactically incorrect, semantically incompatible, or numerically unstable. Direct code generation therefore forces an LLM to spend most of its search capacity navigating implementation failures rather than reasoning about solver quality. ADSL-PDE addresses this challenge by introducing a structured search state between solver concepts and executable code. It represents the functional decisions that determine a neural PDE solver (architecture, physical constraints, objectives, sampling, and optimization) while abstracting away low-level implementation details. A deterministic compiler maps each valid search state to an executable solver. In effect, ADSL-PDE reshapes the search space: it removes large regions of invalid programs, increases the density of meaningful candidates, and preserves the compositional freedom needed to discover previously unseen designs. Solver evolution can thus operate over design decisions rather than code artifacts. Built on this representation, our evolutionary agent iteratively proposes, evaluates, and refines solver search states using empirical feedback. Across multiple PDE benchmarks, ADSL-PDE improves both search efficiency and optimization stability, achieving an improvement of more than 52% within the first ten evolution iterations. These results suggest a broader principle for LLM-driven auto-design: effective agents do not merely require stronger reasoning, but rather a search representation that concentrates exploration on valid and consequential decisions.
