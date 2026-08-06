# Preferred, Not Safer: Pairwise Preference Is a Poor Proxy for Clinical Safety

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Fay Elhassan, David Sasu, Alexandra Kulinkina, Lars Henning Klein, Mary-Anne Hartley　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02617)

------

arXiv:2608.02617v1 Announce Type: cross

Abstract: We evaluate whether clinician pairwise preferences provide a reliable signal of clinical safety in large language model (LLM) evaluation using expert feedback from MOOVE (Massive Open Online Validation and Evaluation), a clinician-led platform collecting blinded pairwise preferences alongside multi-criterion rubric ratings. Clinicians assign scores on a discrete $[-2, +2]$ scale, where negative values indicate clinically unsafe or misleading content. Using 26{,}804 pairwise judgments across outputs from 13 LLMs, contributed by more than 736 clinicians across 28+ countries, we find that clinician preference is a poor proxy for safety-critical performance. Models ranking highly under pairwise preference can still exhibit substantial rates of clinically meaningful failures ($\leq -1$) on dimensions such as \emph{Harmlessness} and \emph{Accuracy}. These failures are unevenly distributed across specialties, creating domain-specific ``no-go zones'' not visible in aggregate rankings or single-number leaderboards. We further analyze contributing factors including prompt length, refusal and escalation behavior, and the relative contributions of safety-critical versus surface-level features. A substantial fraction of preference votes carry no positive safety signal, while feature decomposition shows that surface-level characteristics explain slightly more preference variation than safety-critical rubric differences. Finally, we introduce a clinically adjusted preference ranking combining pairwise preference with rubric-derived feedback, producing a more safety-aware ordering than raw Bradley--Terry strength alone. Our findings support evaluation practices that separate preference from safety, report safety-critical failure rates directly, and incorporate clinically grounded adjustments when ranking LLMs for clinical decision making.
