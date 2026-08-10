# WitCert: Sound Runtime Risk Observability and Gating for KV-Cache Quantization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Fanzhe Wei (Metask Lab), Li Liu (Metask Lab), Ziyang Wang (Metask Lab), Chenyu Wang (Metask Lab)　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AR　|　原文：[打开链接](https://arxiv.org/abs/2607.28699)

------

arXiv:2607.28699v2 Announce Type: replace-cross

Abstract: KV-cache quantization is validated today by offline benchmark averages; a deployed system cannot tell whether compression is damaging the request it is serving right now. We give it a provably sound runtime meter -- a "DTrace for KV quantization": a per-(layer, head, step) upper bound on the total variation between exact and compressed attention. The meter has two tiers: a deterministic band-norm-witness bound, sound for any cache-preserving black-box quantizer and for any query (adaptive-safe, worst-case Cauchy--Schwarz plus RoPE band-unitarity), and a tighter probabilistic certificate for a controlled subtractively-dithered INT8 quantizer under an explicit request-level failure budget (stated for non-adaptive queries; core theorems machine-checked in Lean 4). Three results. Observability: the meter enters SGLang through an env-guarded patch, and any scheme registered as one tensor function is measured in live serving. Repair: meter-driven gating -- risk-ranked where the witness is saturated, certified where it is informative -- empirically restores the quality floor at benchmark scale, e.g. raw-cast fp8 from 22.8 back to 79.7 on hard RULER tasks with the difference from uncompressed bounded at $[+0.0,+0.8]$ by a paired test. Analysis: aggressive schemes survive on cross-layer error cancellation, not per-step fidelity -- in a 28-layer sweep, no single layer's pollution alone loses anything (0/28) -- and the certified int8 cache serves $1.88\times$ more KV tokens at the same memory in SGLang. All artifacts, guards, and the Lean development are released at https://github.com/metask-ai/witcert-kv-certificates; every number regenerates from the shipped artifacts by one command.
