# Internalising the Identity Primitive: Cryptographic Individuality for an Autonomous Agent on a Public Blockchain

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Keisuke Suzuki　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02986)

------

arXiv:2608.02986v1 Announce Type: cross

Abstract: A software agent on a public blockchain accumulates authority and economic stakes, raising the engineering question of what makes it count as an individual. The paper's central contribution is a shift of trust root for the key-to-weights binding of agent identity: from hardware, operator, or wrapper trust to cryptographic assumptions enforced by a pinned implementation (liveness, key custody, oracle trust, and the underlying software stack remain external). We design and deploy on Solana devnet an agent whose neural-network weights are a deterministic function of its private key. The binding is committed in zero knowledge at genesis, re-checked against that commitment at every state transition, and signed by the agent into an on-chain history unforkable once finalized; in a PoC-tier extension, a protocol-imposed metabolic cost is debited each cycle from a key-derived economic account, adding a consumption-side economic-viability constraint to the key-history-economy triple. Empirically, the agent completes a 2.36-day on-chain run with two host-side resumptions but no rejected transition, at bounded per-transition verification cost; a substituted substrate is rejected on chain, and independently keyed agents diverge as predicted while a same-key control stays at zero. To our knowledge, this is the first published on-chain agent whose identity primitive is itself a cryptographic invariant re-checked at every state transition. The resulting transition-time invariant instantiates the cryptographic individuality proposed by Suzuki 2026's Artificial Externality framework.
