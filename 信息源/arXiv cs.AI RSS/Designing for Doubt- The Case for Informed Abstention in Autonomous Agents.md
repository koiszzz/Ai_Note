# Designing for Doubt: The Case for Informed Abstention in Autonomous Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Victor Ojewale, Suresh Venkatasubramanian　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2606.02965)

------

arXiv:2606.02965v2 Announce Type: replace

Abstract: As large language models gain tool access and are deployed as autonomous agents capable of editing records, executing transactions, and modifying infrastructure, we still evaluate them based on the sole metric of task completion. We argue that this evaluation focus constitutes a systematic design failure. Benchmark scoring, product metrics, and default deployment configurations all reward agents for proceeding even when they lack the inputs, evidence, or authorization required to do so safely. We call this phenomenon compliance bias.

This paper makes three contributions. First, we show how compliance bias is embedded in the evaluation regimes that currently shape agent development: prominent benchmarks either penalize agents for pausing or fail to measure whether pausing was appropriate. Second, we introduce the Informed Abstention Framework, which reconceptualizes abstention not as a failure mode but as a structured capability: a precondition-aware pause that blocks the next tool call, names what is missing, and routes to a concrete recovery action. Third, we specify what informed abstention requires in deployment, arguing that runtime enforcement, calibrated guard mechanisms, and auditable trace generation should become standard properties of agentic system design rather than optional additions. We perform a preliminary evaluation of our approach across 144 scenarios and seven model families. Our results show that runtime enforcement achieves 87.5-91% hazardous-action blocking and 75-92% usability on authorized scenarios, that compliance bias takes two structurally opposite forms across model families, and that the safety-usability tradeoff is tunable rather than fixed.
