# Towards Robust Tool Use in Agents via Experience-Driven Adaptive Guidance

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Can Wang, Haoran Chen, Li Yu, Ding Hao, Bohai Zhao, Zhaoyang Liu, Zhiying Tu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03403)

------

arXiv:2608.03403v1 Announce Type: new

Abstract: The performance bottleneck of agents is increasingly shifting from model capability to the robustness of their execution processes. Tools play a central role as the primary interface through which agents interact with external environments, yet existing methods rarely focus on ensuring robust tool use across diverse runtime conditions. To address this problem, we propose ExpG, a mechanism that builds and refines adaptive guidance capturing each tool's capability boundaries and best practices, thereby enabling agents to use tools more robustly and effectively. ExpG consists of three phases: (1) experience acquisition, which analyzes tool invocation quality from historical execution trajectories, producing structured learnable experiences through multi-aspect attribution; (2) experience distillation, which keeps the experience pool effective by filtering unhelpful experiences, selecting representative ones with an equivalence-class-based method, and summarizing them into generalizable guidance; and (3) experience reuse, which applies the guidance adaptively during future task solving. Extensive experiments show that ExpG brings consistent improvements across the tool selection, tool calling, and response generation tasks, enabling smaller agents to outperform larger ones that do not use ExpG. Moreover, ExpG achieves particularly strong gains in challenging settings, suggesting a promising path toward more robust tool use. Our code, experiments, and results are available.
