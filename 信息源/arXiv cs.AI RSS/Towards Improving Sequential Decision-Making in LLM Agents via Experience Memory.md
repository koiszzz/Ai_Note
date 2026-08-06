# Towards Improving Sequential Decision-Making in LLM Agents via Experience Memory

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jakub Rada (AI Center, Department of Computer Science, Faculty of Electrical Engineering, Czech Technical University in Prague), Viliam Lis\'y (AI Center, Department of Computer Science, Faculty of Electrical Engineering, Czech Technical University in Prague)　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03420)

------

arXiv:2608.03420v1 Announce Type: new

Abstract: Large language models have improved substantially on single-shot reasoning tasks, but their performance in sequential decision-making is less well understood. We study this on fully-observable two-player zero-sum games, which provide ground-truth evaluation: outcomes are determined by the rules, and optimality of individual moves can be computed or approximated, without relying on a judge model. Across model tiers, LLMs play suboptimally in simple games such as tic-tac-toe or Connect Four, and lose to MCTS opponents. Obfuscations that preserve the game tree but rewrite its surface form leave performance largely unchanged, indicating the gap is not fully explained by recall of memorized strategies. Motivated by this performance gap, we introduce an agentic framework enhanced with an experience memory designed for the sequential setting and addressing common challenges of sequential decision-making such as credit assignment. We show that post-game reflection and rule extraction yield measurable improvements on tic-tac-toe without modifying the model weights.
