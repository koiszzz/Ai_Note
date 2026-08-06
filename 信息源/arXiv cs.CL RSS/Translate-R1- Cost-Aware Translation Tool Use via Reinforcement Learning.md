# Translate-R1: Cost-Aware Translation Tool Use via Reinforcement Learning

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Pratik Jayarao, Chaitanya Dwivedi, Himanshu Gupta, Neeraj Varshney, Adithya M Devraj, Meet Vadera, Priyanka Nigam, Bing Yin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2606.06835)

------

arXiv:2606.06835v2 Announce Type: replace

Abstract: The performance gap across languages in LLMs is well documented, and closing it natively requires pretraining or fine-tuning on corpora that, for most languages, are quite limited. Translation offers an alternative: converting an input into the model's dominant language unlocks its full capabilities at once. But translating every input is wasteful for languages the model already handles, while leaving the choice to the model fails too, as LLMs are overconfident and skip the tool even when they cannot understand the input. Prior work resolves this with language-specific rules, heuristics, or external routers, each requiring manual engineering. We instead learn a single policy that decides when to translate from reward alone, developing language- and domain-adaptive introspection that invokes translation only when it cannot solve a task natively.

Using data from our answer-preserving translation pipeline, we continue RL on the post-trained Qwen3-4B across 22 languages in 3 resource tiers (High, Low, XLow) and 5 domains, and introduce confidence-gated GSPO for cost-sensitive tool use. The gated policy lifts reward over the untrained baseline by +4.6 on High, +23.5 on Low, and +17.5 on XLow, and extends zero-shot to 9 held-out languages. Against an unconstrained policy that almost always translates (the reward upper bound), it preserves full reward at 66% of the cost, outperforming other cost penalties by up to +24.3 on the low-resource tiers while matching the free policy's reward on high-resource tiers at a fraction of the tool use. On 2 synthetic languages with zero prior exposure it correctly learns to always translate, improving +18.7 over the overconfident baseline.
