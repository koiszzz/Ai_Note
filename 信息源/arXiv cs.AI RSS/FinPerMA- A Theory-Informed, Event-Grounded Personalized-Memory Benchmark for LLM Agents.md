# FinPerMA: A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ben Wang, Kang Zhou, Lifan Guo, Feng Chen, Chi Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04095)

------

arXiv:2608.04095v1 Announce Type: new

Abstract: Large language model (LLM) agents are increasingly used as personalized assistants in high-stakes domains such as financial advising, yet it remains unclear whether they can maintain and update an individualized user model over long horizons. Existing personalized-memory benchmarks primarily test factual retention or rely on weakly constrained model-generated trajectories, leaving event-driven preference adaptation underexplored. We introduce FinPerMA, an event-grounded benchmark that evaluates personalized memory against frozen longitudinal investor trajectories. Its generation pipeline combines deterministic, theory-informed impact rules, controlled LLM narration, and automated quality screening; a Post-Shock checkpoint isolates whether an agent has integrated a material event into its persistent user model. On 2,994 questions from 276 personas, seven frontier LLMs and up to seven memory configurations remain far from saturated: no full-context configuration exceeds approximately 0.47 overall accuracy or approximately 39% on multiple-choice questions. Attribution analysis shows that summary-based memory often preserves factual details while losing the preference signals needed for personalization; simple retrieval can therefore outperform purpose-built memory systems, with the gap widening after shocks.
