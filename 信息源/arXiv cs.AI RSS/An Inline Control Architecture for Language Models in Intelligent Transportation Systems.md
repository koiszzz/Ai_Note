# An Inline Control Architecture for Language Models in Intelligent Transportation Systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Narendra Kumar Dewangan, Mounira Msahli　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04065)

------

arXiv:2608.04065v1 Announce Type: cross

Abstract: Vehicle-to-everything (V2X) systems increasingly incorporate large language models (LLMs) for semantic tasks such as message summarization, operator assistance, and decision support at roadside units and edge nodes. Although these components are not part of safety-critical control loops, they introduce prompt-level attack surfaces that are not addressed by traditional V2X security mechanisms focused on authentication and message integrity. This paper presents Guarded-V2X, an inline semantic guardrail architecture for securing LLM-enabled V2X services under real-time constraints. The proposed system integrates rule-based ingress filtering, a lightweight safety classifier, policy-constrained structured generation, trusted-only retrieval, and post-decision adjudication to enforce machine-checkable safety boundaries prior to downstream execution. Guarded-V2X is evaluated using a four-stage experimental pipeline encompassing intrusion vulnerability analysis, calibration and latency benchmarking, guardrail validation, and robustness under adversarial stress. Experiments are conducted on a V2X-aligned simulated dataset derived from RSU advisories, operator messages, and annotated V2X message summaries. Results show that unguarded and prompt-only baselines retain residual vulnerability under multi-turn adversarial trials, while Guarded-V2X consistently reduces intrusion acceptance success rates and eliminates observed unsafe completions in two-turn settings, without exceeding latency budgets for V2X semantic advisory paths.
