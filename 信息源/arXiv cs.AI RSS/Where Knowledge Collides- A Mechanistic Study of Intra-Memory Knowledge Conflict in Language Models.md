# Where Knowledge Collides: A Mechanistic Study of Intra-Memory Knowledge Conflict in Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Minh Vu Pham, Hsuvas Borkakoty, Yufang Hou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2601.09445)

------

arXiv:2601.09445v2 Announce Type: replace-cross

Abstract: In language models (LMs), intra-memory knowledge conflict arises when inconsistent information about the same subject is encoded within the model's parametric knowledge. Prior work has primarily focused on resolving conflicts between a model's internal knowledge and external sources, which is known as context-memory knowledge conflict, through approaches such as fine-tuning or knowledge editing, while the understanding of conflicts that arise internally remains largely unexplored. In this work, we design a framework to identify where internal conflicting knowledge is encoded within LMs. We test our framework on four LMs using both synthetic and real-world knowledge conflicts. We find that internal conflicts often arise and are resolved in the final layers across all models, but that interventions are markedly less effective on real-world knowledge conflicts. Targeted attention-head interventions outperform layer-wise ones, and a filtering analysis shows that heads specialized for a single competing fact are far more common in synthetic conflicts, helping explain this gap. Finally, we find no evidence of a single universal circuit for handling knowledge conflict. Instead, our results suggest that distinct circuits may separately encode competing pieces of knowledge, giving rise to conflict. Our results offer a first mechanistic account of intra-memory conflict resolution and highlight a substantial gap between synthetic and real-world settings.
