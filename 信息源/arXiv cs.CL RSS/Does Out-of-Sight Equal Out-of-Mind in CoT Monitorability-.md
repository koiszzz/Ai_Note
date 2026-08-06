# Does Out-of-Sight Equal Out-of-Mind in CoT Monitorability?

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Pedro Ferreira, Wilker Aziz, Ivan Titov　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04928)

------

arXiv:2608.04928v1 Announce Type: new

Abstract: Chain-of-thought (CoT) reasoning offers a window into the decision-making of large language models (LLMs), which can be monitored for target behaviors by reading the reasoning trace, motivating work on CoT monitorability. Latent CoT approaches, however, replace the explicit tokens with a small number of continuous states, lowering inference costs but removing the readable trace this monitoring relies on. Monitoring then requires alternative access to the model, such as probing its activations or verbalizing the latent states back into text, but how much monitorability these alternatives preserve is unclear. We study this question with a hint-based intervention setup, a proxy for behaviors where models exploit biasing input cues, e.g., an inadvertently leaked answer or a belief stated by the user, without acknowledging them. Taking hint-reliance as the monitorability target, we compare monitors across reasoning modes, from explicit CoT to weakly- and strongly-supervised latent CoT, on math reasoning and question answering. We find that, in this setup, monitorability depends more on properties of the task (such as whether the correct answer constrains the supporting reasoning) and the level of access to model internals than on the reasoning mode.
