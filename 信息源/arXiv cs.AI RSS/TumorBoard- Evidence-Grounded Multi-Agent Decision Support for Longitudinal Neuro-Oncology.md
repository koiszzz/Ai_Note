# TumorBoard: Evidence-Grounded Multi-Agent Decision Support for Longitudinal Neuro-Oncology

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yantong Liu, Zheyu Zhang, Runpeng Liu, Mu Xitang, Seong-Yoon Shin, Hyun-Ae Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03190)

------

arXiv:2608.03190v1 Announce Type: new

Abstract: Neuro-oncology decisions require coordinated interpretation of serial MRI, pathology, molecular markers, treatment history, performance status, and evolving guidelines. We present TumorBoard, a multi-agent decision-support system built around a shared longitudinal case state and an auditable claim-evidence ledger. Specialist agents for radiology, neuropathology, molecular diagnosis, guidelines, and therapy planning produce atomic claims with provenance. An adversarial critic exposes contradictions, and a safety governor releases, qualifies, or defers recommendations according to evidence sufficiency and temporal validity. On a 360-case hidden benchmark at a matched token budget, TumorBoard achieved an action F1 of 0.772 and evidence entailment of 0.914. It exceeded the strongest typed-council baseline by 3.1 percentage points (95% CI: 1.6 to 4.7, adjusted p = 0.0012), while recommendation-to-evidence coverage reached 0.927. Under evidence deletion, the system deferred 84.2% of unsafe cases and limited harmful recommendations to 5.8%. The safety governor reduced harmful release by 7.8 percentage points at a false-deferral cost of 4.3 percentage points. Ablation studies of the ledger, critic, and governor produced the predicted failure patterns, establishing structured coordination as the source of the measured multi-agent advantage.
