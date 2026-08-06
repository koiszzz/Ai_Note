# Attribute-based Undetectable Watermarking for Generative AI Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Miryam Mi-Ying Huang, Chung-Wei Lee, Max Raffel, Er-Cheng Tang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.03174)

------

arXiv:2608.03174v1 Announce Type: cross

Abstract: Generative AI systems increasingly produce content whose provenance is difficult to verify, motivating watermarking techniques for identifying model-generated outputs. Existing cryptographic watermarking methods provide strong undetectability guarantees: without a detection key, watermarked outputs are computationally indistinguishable from unwatermarked ones. However, these approaches do not address the crucial deployment challenge of how to safely delegate detection capabilities. With an unrestricted detection key, a malicious detector may use the detection key beyond its intended scope, enabling watermark sanitization, scope abuse, and user profiling.

To mitigate this safety concern, we introduce, to the best of our knowledge, the first \emph{attribute-based watermarking} for generative AI models, providing fine-grained, policy-controlled watermark detection. In our approach, each generated output is associated with attributes, and each detection key is \emph{constrained by a policy} on potential attributes. A detection key can only be used to detect watermarked outputs whose attributes satisfy the corresponding policy, while watermarked outputs that fall outside the policy remain computationally indistinguishable from unwatermarked ones. We construct such an attribute-based watermarking scheme and formalize its security properties, including consistency, adaptive robustness to bounded corruptions, undetectability, and soundness, along with a security proof under standard cryptographic assumptions. Our construction integrates constrained pseudorandom functions, pseudorandom error-correcting codes, and randomness recovery procedures with generative AI models. Finally, we implement a prototype and an empirical evaluation, demonstrating that attribute-based watermarking is both effective and practical.
