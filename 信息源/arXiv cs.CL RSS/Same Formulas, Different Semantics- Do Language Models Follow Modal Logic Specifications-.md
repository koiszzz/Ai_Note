# Same Formulas, Different Semantics: Do Language Models Follow Modal Logic Specifications?

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：R\'eemi Andrieu, Damien Sileo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05097)

------

arXiv:2608.05097v1 Announce Type: new

Abstract: Reasoning about necessity and possibility depends on assumptions about accessibility between worlds and about which objects exist at each one. The same inference may therefore hold under one modal system and fail under another. Evaluating language models on such problems requires testing whether their judgments follow the stated semantics rather than a familiar logic. We construct paired modal problems with identical premises and conjecture but different frame or domain conditions; automated reasoning verifies opposite labels. A balanced core prevents the semantic condition alone from revealing the answer. On this core, four of five recent models perform below the condition-only baseline under direct prompting. Yet enabling reasoning mode raises DeepSeek V4 Flash from 4.4% to 88.1% on unchanged prompts. Following stipulated modal semantics thus depends strongly on inference mode as well as model identity. When frame conditions are omitted, models often agree but fit different familiar logics best. We release the formulas, oracle artifacts, countermodels, and responses.
