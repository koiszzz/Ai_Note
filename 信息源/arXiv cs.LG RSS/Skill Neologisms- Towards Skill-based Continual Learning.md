# Skill Neologisms: Towards Skill-based Continual Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Antonin Berthon, Nicolas Astorga, Mihaela van der Schaar　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.04970)

------

arXiv:2605.04970v3 Announce Type: replace

Abstract: Modern LLMs show mastery over an ever-growing range of skills, as well as the ability to compose them flexibly. However, extending model capabilities to new skills in a scalable manner is an open problem: fine-tuning and parameter-efficient variants risk catastrophic forgetting, while context-based approaches have limited expressiveness and are constrained by the model's effective context. We explore skill neologisms--soft tokens integrated in the model's vocabulary and optimized to improve capabilities over a specific skill--as a way to selectively acquire new skills without weight updates. We first observe that pretrained LLMs already exhibit tokens associated with procedural knowledge. We then show on a controlled synthetic task that skill neologisms can be learned to improve model capabilities on specific skills while being composable with out-of-distribution skills, and that independently trained skill neologisms can be composed zero-shot. Finally, we validate zero-shot composition of independently learned skill neologisms on the more realistic natural language setting of the Skill-Mix benchmark. These results suggest that skill neologisms may provide a scalable path towards skill-based continual learning.
