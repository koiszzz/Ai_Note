# One Qubit Can Beat One Bit: Quantum Advantage for Post-Training Quantization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuma Ichikawa, Moeto Mishima　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：quant-ph　|　原文：[打开链接](https://arxiv.org/abs/2608.05240)

------

arXiv:2608.05240v1 Announce Type: cross

Abstract: One-bit post-training quantization represents each weight using only its sign, requiring all deployment contexts to share the same binary weight matrix even when their activation statistics favor different sign patterns. We study this shared-sign constraint and introduce Quantum Random Access Quantization (QRAQ). This framework encodes context-dependent signs in a quantum random-access code and retrieves them via context-matched Pauli measurements. Under an explicit fresh-copy logical readout model, QRAQ produces an unbiased, context-specific binary surrogate with a tractable shot-noise penalty. We prove a row-wise separation from shared-sign one-bit PTQ with signed per-row scales. When the optimal context-wise signs are incompatible, QRAQ achieves a strictly lower ideal reconstruction risk. We also derive finite-shot and calibrated-noise conditions under which this separation is retained. Fixed-readout quantum schemes are classically simulable, so the relevant resource in this model is measurement incompatibility rather than quantization alone. Finally, we characterize the role of scale granularity, provide finite-sample certificates, and evaluate the predicted ideal, finite-shot, noisy, and multi-context regimes in simulator experiments.
