# One Knob to Rule Them All: A Unified Optimal Transport View of Cold-Start Active Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ning Zhu, Xiaochuan Ma, Juntao Xu, Jingze Liang, Mengfei Zhao, An Chen, Liang-Jian Deng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03249)

------

arXiv:2608.03249v1 Announce Type: new

Abstract: Cold-Start Active Learning (CSAL) aims to select a valuable subset from an unlabeled pool without any prior knowledge or human assistance. Existing methods take diverse routes based on typicality, coverage, or diversity. Each rests on its own inductive bias and therefore performs well on some tasks yet poorly on others. We argue that the real challenge is not to design yet another selection heuristic, but to make CSAL adapt automatically to the data and task at hand. To this end, we revisit CSAL through the lens of optimal transport. First, we propose a generalized transport selection framework that reveals the shared allocation structure of existing methods and exactly subsumes representative formulations. Second, we introduce a theoretical analysis that characterizes the trade-off controlled by entropic regularization and establishes a task-agnostic minimax bound for cold-start selection. These results provide a principled foundation for adapting the regularization strength to the unlabeled data. Third, we derive a data-adaptive regularization rule and present a novel Sinkhorn-based CSAL algorithm, termed $\epsilon$-Adaptive Selection ($\epsilon$-AS). Extensive experiments on six public datasets and multiple annotation budgets show that $\epsilon$-AS consistently achieves state-of-the-art performance. On ImageNet-1k, it improves the average accuracy over ActiveFT by 1.29% while reducing selection time by 56.2%. Code will be released at https://github.com/Z-yiwei/OT-CSAL
