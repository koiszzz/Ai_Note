# FACTWASH: Catching AI Rewrites That Wash Hearsay into Fact

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Alex Kwon　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03372)

------

arXiv:2608.03372v1 Announce Type: cross

Abstract: AI systems rewrite information constantly: conversations become stored memories, documents become answers. The rewrite can keep a claim while washing away what made it checkable, who said it, how sure they were, when it held. We call that failure factwashing, and release factwash, an open-source write-time gate that catches it deterministically, with named flags and evidence rather than an LLM judge. Building it answers a practical question: when does a cheap check suffice, and when do you need a model? What decides is whether the property has a bounded surface-cue inventory. Explicit negation cues are close to enumerable, so a word list finishes and transfers, reaching 0.91 F1 on untuned text. Hedging and attribution have open-ended realizations, so vocabulary plateaus near half recall, and a one-question LLM witness recovers +17 and +15 points of cue-detection recall at equal precision. Deployed, that witness may only lower a verdict, so it buys precision rather than coverage. We measure cue detection on 105,596 independently annotated sentences. A blind-labelled corpus of memory writes then locates the failure: 55% of bad writes in conversational hearsay, 7% in business email (p < 0.001), so the first deployment question is not which detector to use but whether the failure occurs at all. On unmodified mem0 2.0.7, the gate flags 5 of 8 hedged-hearsay writes.
