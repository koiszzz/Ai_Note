# MutMem: Cryptographically Authorized Mutation in Persistent Agent Memory

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Walid Saidi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02843)

------

arXiv:2608.02843v1 Announce Type: cross

Abstract: Persistent agent memory must adapt as later outcomes change earlier evidence, yet mutable retrieval weights create an attribution problem: reviewers must distinguish authorized adaptation from database tampering. We present MutMem, an authorized-mutation protocol in HOM-AIMOS, a persistent agent-memory engine. MutMem retains memory content, records signed positive and negative outcome evidence without age-based expiry, and commits each nontrivial weight change as a housekeeper-authorized transition. Each transition binds a terminal provenance node, signer epoch, quantized old and new weights, a no-fork predecessor, and two domain-separated SHA-256 commitments. Ed25519 verification runs in both the database writer and a portable verifier. Content classified as poison-likely is retained with signed, revisable labels used by recall as trust evidence. We evaluate utility, mutation integrity, and poisoning adaptation. HOM-AIMOS answers 459/500 LongMemEval questions correctly under LLM judgment (91.8%). On LoCoMo, it obtains 74.12% judged accuracy and, under a separate upstream-compatible protocol, 58.20 token F1. A native suite passes all declared authorization, topology, tamper, signer-epoch, and post-mutation-recall cases; median signed-transition latency is 4.865 ms. In a declared N=100 PoisonedRAG adaptation, no injected poison appears in attacked top-5 disclosures (0/100; 95% Wilson upper bound 3.70%), while induced target-answer attack success among 98 clean-negative targets is 1/98 (1.02%). A preregistered four-arm ablation attributes the retrieval reduction to signed stored labels: the retriever selects poison for 94/100 targets when epistemic policy is bypassed and 0/100 when labels are restored. MutMem provides evidence of integrity, authorization, traceability, and historical continuity; it does not establish content truth.
