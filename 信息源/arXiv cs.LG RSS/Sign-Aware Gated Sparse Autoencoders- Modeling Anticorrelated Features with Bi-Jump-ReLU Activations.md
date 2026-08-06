# Sign-Aware Gated Sparse Autoencoders: Modeling Anticorrelated Features with Bi-Jump-ReLU Activations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Bartosz Wieciech, Zmnako Awrahman, Marcin Czelej, Victor Hugo Jaramillo Velasquez, Wioletta Stobieniecka　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.28149)

------

arXiv:2605.28149v3 Announce Type: replace

Abstract: Sparse Autoencoders (SAEs) extract interpretable features from Large Language Model activations, but standard variants enforce non-negative latents, so a bidirectional semantic axis (e.g., "pressure too high" vs. "pressure too low") must be split across two latents, wasting dictionary capacity on anticorrelated features. We propose the Sign-Aware Gated SAE (SA-GSAE), which combines two-sided gated sparsity, signed shrinkage-free magnitudes, and auxiliary gate supervision in a new Bi-Jump-ReLU activation, so that a single latent carries both polarities of one decoder direction; parameter accounting shows sign-awareness stays parameter-efficient even when anticorrelated pairs are rare. Across three mid-depth hookpoints on Pythia-1B and SmolLM3-3B (six cells, three seeds), a half-width SA-GSAE empirically dominates the aggregate mean frontier of a full-width Gated SAE on three of six cells, matches its R^2 within 0.025 on the remaining three, and cuts dead fraction by 0.35-0.82 absolute at matched L_0 = 64 on all six. Ablations show the two-sided gate and the auxiliary loss are essential whereas per-polarity asymmetry is not; we recommend the fully tied symmetric variant as the default. A blinded semantic audit finds nameable opposition between a latent's two sides is rare for SA-GSAE and all tested baselines, while sign-conditioned interventions show a single signed latent acts as a bidirectional causal dial where a pair of "opposite" non-negative latents does not; we scope interpretability claims accordingly. At full width, SA-GSAE is over-parameterized and its reported configuration exhibits a reproducible reconstruction collapse at the SmolLM3-3B residual-stream site; the recommended configuration (small threshold initialization with dead-latent threshold resets) prevents it.
