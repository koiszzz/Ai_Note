# Forgetful Attention: An Auditable Support-Vector Memory for Selective Retention and Verified Deletion

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Vishwajith Ramesh　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.12204)

------

arXiv:2607.12204v2 Announce Type: replace

Abstract: Auditable memory requires a precise contract: which output is preserved, relative to which reference solve, and across which updates. We introduce Support Vector Attention (SV-Attention), a one-class support vector data description (SVDD) gate whose coefficients enter the readout. Zero-coefficient keys are reserve; positive-coefficient keys are active. Removing a reserve token without re-solving preserves the current readout. Maintained deletion, which updates the existing solver state, targets a fresh retained-key fit under the same coefficient cap C. Across 1,200 fp64 deletion/refit trials on Gaussian, redundant, MIMIC-IV, and learned keys, 1,199 complete. Median maximum gate-score discrepancy over declared probes ranges from 4.5e-13 to 5.7e-7, and fresh refitting is 24-223 times slower than maintained deletion on the reference CPU. A deterministic example shows that current reserve status does not guarantee equivalence after future admissions. At matched token counts, rare-group recall is 0.861 versus 0.319 for an oracle attention-mass proxy (H2O-style). In a held-out-channel ICU control, SpO2 below 90 percent defines events but SpO2 is excluded from every selector; event-hour retention is 0.464 versus 0.225 for an RBF-density baseline. A separate batched approximation supports end-to-end training; at 3.22M parameters, seven paired seeds yield mean best-validation bits per character of 2.178 versus 2.383 (p=0.001). The contracts are point-in-time and fixed-C; future-safe streaming and general-purpose performance remain open, and larger fixed-step runs suggest slower optimization.
