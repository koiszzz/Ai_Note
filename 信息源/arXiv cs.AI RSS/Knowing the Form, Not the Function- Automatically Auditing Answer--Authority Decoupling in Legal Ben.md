# Knowing the Form, Not the Function: Automatically Auditing Answer--Authority Decoupling in Legal Benchmarks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hsien-Jyh Liao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02621)

------

arXiv:2608.02621v1 Announce Type: cross

Abstract: Legal benchmarks typically score final answers even when models also state legal authority. We test whether answer correctness can serve as a proxy for authority grounding. Under ordinary reasoning prompts that did not request statutory citations, four LLMs spontaneously produced authority markers across 238 Taiwan bar-examination items. Because each item has a verified governing provision, we automatically audit answer correctness and authority grounding jointly. The two dimensions dissociate in both directions. In criminal law, 24.0--42.4\% of valid responses were answer-correct but missed the gold authority, while 15.2--21.7\% were answer-incorrect but cited it. A separate statutory-retrieval probe and a permissive citation-abstention intervention further show that answer and citation behavior can move separately at the output level. Because this mismatch arises without adversarial or inconsistency-inducing prompting, answer-only scoring treats naturally occurring gold-authority misses as complete benchmark successes. Because statutory authority is structurally extractable and externally verifiable, the failure can be measured automatically. A preliminary PRC civil-law extension also observes citation-unrequested authority marking, motivating a full cross-jurisdictional joint audit. We therefore propose joint answer--authority evaluation for statute-grounded legal benchmarks.
