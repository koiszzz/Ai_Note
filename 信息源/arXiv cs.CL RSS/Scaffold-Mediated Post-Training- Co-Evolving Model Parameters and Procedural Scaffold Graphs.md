# Scaffold-Mediated Post-Training: Co-Evolving Model Parameters and Procedural Scaffold Graphs

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Fei Ding, Yongkang Zhang, Runhao Liu, Yuhao Liao, Zijian Zeng, Huiming Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05156)

------

arXiv:2608.05156v1 Announce Type: new

Abstract: Post-training of large language models optimizes only parameters, while inference-time procedural scaffolds are typically designed independently of parameter training. This disconnect makes it difficult to automatically acquire and internalize complex strategies. We propose scaffold-mediated post-training: procedural scaffolds are organized into an evolvable graph structure that co-evolves with model parameters through discovery, distillation, and dynamic recompilation. We instantiate this paradigm as Skill Training. On FeatureBench, automatically discovered skills improve the passed rate by 8.1pp, and after progressive distillation the model still achieves a 27.7% passed rate without any external scaffold (distillation retention rate 85.2%, defined as post-distillation / with-skill passed rate), significantly outperforming standard SFT on the same data.
