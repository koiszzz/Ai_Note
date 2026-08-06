# Dynamically Allocating Evaluation Effort for Model Ranking

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Vil\'em Zouhar, Julia Kreutzer, Alon Lavie, Tom Kocmi, Matt Post, Ond\v{r}ej Bojar, Mrinmaya Sachan　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03437)

------

arXiv:2608.03437v1 Announce Type: cross

Abstract: While human evaluation is the gold standard in many NLP tasks, it suffers from prohibitive costs and poor scalability. When identifying top-performing models, typical evaluation protocols waste effort by exhaustively evaluating all models on the entire benchmark, a safe but inefficient approach. In this work, we formalize multi-model human evaluation as a best-arm identification problem in a multi-armed bandit setup with correlated arms, where pulling an arm corresponds to human-evaluating a model. By sampling adaptively based on the intermediate model rankings obtained on the samples so far, we can focus the annotation budget on the most competitive models. We prove the optimality of the proposed algorithms and show that it improves discrimination between top-performing models. This makes evaluations faster, cheaper and more aligned with large-scale competition evaluation goals.
