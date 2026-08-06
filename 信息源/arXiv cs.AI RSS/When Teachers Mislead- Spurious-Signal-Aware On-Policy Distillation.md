# When Teachers Mislead: Spurious-Signal-Aware On-Policy Distillation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yinuo Jiang, Yongjie Ye, Zhou Tao, Xiang Zhuang, Qiang Zhang, Huajun Chen, Tiankai Li　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03632)

------

arXiv:2608.03632v1 Announce Type: new

Abstract: On-Policy distillation (OPD) transfers teacher capabilities by supervising student-sampled trajectories with dense token-level teacher signals. Recent selective OPD methods improve this process by prioritizing signals that are confident, informative, or learnable. However, the assumptions overlook a fundamental failure mode of language models: their token-level judgments can be driven by input-agnostic language priors, formatting conventions, or stereotyped reasoning templates rather than task-specific evidence. We refer to such optimization-relevant but weakly input-grounded supervision as spurious signals in OPD, which may produce large gradients while contributing little task-improving direction. To mitigate this issue, we propose SA-OPD, a Spurious-Signal-Aware On-Policy Distillation framework that identifies and filters misleading token-level supervision based on input-groundedness and optimization impact. SA-OPD introduces a lightweight input-groundedness proxy estimating whether a token-level distillation signal truly depends on the input. It then filters only tokens that simultaneously exhibit low input-groundedness and extreme distillation divergence, thereby removing high-impact spurious updates and achieving fine-grained OPD optimization. Extensive experiments on both large language model (LLM) and vision-language model (VLM) settings demonstrate that SA-OPD consistently outperforms Vanilla OPD and competitive selective methods. These results establish input-groundedness as a key dimension for OPD supervision selection and offer a simple, effective strategy for mitigating spurious updates.
