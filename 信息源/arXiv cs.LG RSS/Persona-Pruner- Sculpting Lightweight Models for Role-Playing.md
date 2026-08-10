# Persona-Pruner: Sculpting Lightweight Models for Role-Playing

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jinsu Kim, Jihoon Tack, Noah Lee, Jongheon Jeong　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.14695)

------

arXiv:2606.14695v2 Announce Type: replace

Abstract: Language Models (LMs) have shown remarkable potential as role-playing chatbots, delivering consistent, stylized interactions when given a specification of a character or user persona. However, applying these capabilities to real-world applications (e.g., ecosystems with numerous NPCs interacting simultaneously) exposes a critical inefficiency due to the excessive computational cost. In this paper, we question the necessity of dedicating a full, generalist model to a single persona, hypothesizing that a specific character identity relies on only a fraction of the model's total capacity. We observe that naively pruning LMs often severely degrades the role-playing performance for a specific persona; it does not distinguish between redundant knowledge and essential character traits. We propose Persona-Pruner, a framework that sculpts a lightweight role-playing model by isolating persona-specific sub-networks from a single description. Our experiments consistently show that Persona-Pruner preserves role-playing performance substantially more effectively than existing state-of-the-art LLM pruning techniques, reducing the performance drop from the dense model by up to 93.8% over the strongest baseline on RoleBench in LLM-as-a-judge score, while still maintaining general LLM capabilities. Code is available at https://github.com/jsu-kim/Persona-Pruner.
