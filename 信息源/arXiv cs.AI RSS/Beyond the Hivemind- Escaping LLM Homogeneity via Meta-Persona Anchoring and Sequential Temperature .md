# Beyond the Hivemind: Escaping LLM Homogeneity via Meta-Persona Anchoring and Sequential Temperature Scaling

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Tairan Fu, Javier Conde, Carlos Arriaga, Gonzalo Mart\'inez, Pedro Reviriego, Javier Coronado-Bl\'azquez　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.02618)

------

arXiv:2608.02618v1 Announce Type: new

Abstract: Recent studies have identified an ``Artificial Hivemind'' effect in Large Language Models (LLMs) causing models to converge on a narrow, homogenized consensus even for open questions. This semantic collapse limits the diversity of AI, resulting in high inter-response similarity ($\approx 0.80-0.90$) even under high-temperature sampling. In this paper, we propose a novel mitigation framework to increase diversity: Meta-Persona Anchoring combined with Filtered Temperature Scaling (FTS). Our approach utilizes a two-stage generation process: first, the model is prompted to self-select a unique, idiosyncratic persona to anchor its starting point; second, we apply a dual-stage sampling sieve, utilizing Top-$p$ filtering to preserve grammatical validity followed by extreme temperature scaling ($T \ge 4.0$) on the surviving candidates to explore the broadened probability distribution. We evaluate our method using the INFINITY-CHAT dataset on state-of-the-art open weight models under $\sim$20B parameters. Our results demonstrate a significant reduction in semantic convergence, with average pairwise cosine similarity dropping from ($\approx 0.85$) to ($\approx 0.65$). Our scheme achieves a majority of questions below the 0.7 threshold, effectively reducing the gap between artificial mode collapse and human-level typological diversity. We provide our implementation as an open-source framework to enable more diverse and creative AI deployments.
