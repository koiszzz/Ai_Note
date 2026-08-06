# Adversarial Stress Testing of Role-Playing Language Agents using Multi-Agent Evaluation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Saqib Shouqi, Abdullah Nazly, Januki Wanniarachchi, Ravisha De Alwis　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03166)

------

arXiv:2608.03166v1 Announce Type: new

Abstract: Role-Playing Language Agents (RPLAs) are increasingly deployed in high-stakes applications such as healthcare assistance, customer support, and education, where maintaining consistent personas, ethical constraints, and behavioral coherence under adversarial pressure is critical. Existing evaluation approaches rely on static benchmarks or isolated single-turn prompts that fail to capture cumulative behavioral failures emerging over extended interactions.

We present a modular multi-agent platform for adversarially stress-testing RPLAs through structured, multi-turn dialogue. The system coordinates three agents: a strategy-driven Interrogator Agent that applies six progressive adversarial strategies, a Target Agent representing the RPLA under evaluation, and an automated Judging Agent that scores behavior across role fidelity, drift, ethical deviation, and consistency dimensions.

Through experiments across three personas and three LLM families, we demonstrate that multi-strategy adversarial evaluation reveals failure modes invisible to single-strategy testing, reducing overall robustness scores by 0.17--0.20 points on average. Cross-model validation confirms consistent degradation patterns across Llama-3.3-70B, GPT-4o-mini, and Claude-3.5-Haiku, with Authority Challenge and Emotional Manipulation emerging as the most effective attack strategies. Automated judging achieves strong human alignment ($r = 0.82$, Fleiss' $\kappa = 0.71$). This work is released as an open-source platform to support AI safety and reproducible RPLA benchmarking. While the framework enables systematic discovery of failure modes, we acknowledge potential ethical risks associated with adversarial testing methodologies and emphasize responsible usage for improving AI safety.
