# Interpreting GFlowNets for Drug Discovery: What probes can and cannot show

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Amirtha Varshini A S, Duminda S. Ranasinghe, Hok Hei Tam　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.19264)

------

arXiv:2511.19264v2 Announce Type: replace-cross

Abstract: Generative Flow Networks (GFlowNets) construct molecules through sequential decisions, but their internal policies remain opaque, limiting adoption in drug discovery, where chemists need interpretable rationales for proposed structures. We present a control-validated interpretability study of SynFlowNet, a synthesis-aware GFlowNet trained with a drug-likeness (QED) reward. Our framework combines gradient saliency and counterfactual edits, an undercomplete factor analysis, and an overcomplete BatchTopK sparse autoencoder, evaluated with shuffled-label controls, RDKit-descriptor baselines, a scaffold-disjoint split, cross-seed stability, and an architecture-matched untrained network.

These controls materially change the interpretation. Physicochemical properties and functional groups are highly decodable from SynFlowNet embeddings, but an untrained network with the same architecture performs essentially as well as the trained policy (drug-likeness within 0.005 and marginally better molecular-size decoding). Thus, this decodability reflects graph architecture and atom featurization rather than representations acquired through policy training. The surviving conclusions are narrower: the overcomplete autoencoder reconstructs embeddings better than a matched undercomplete baseline at comparable sparsity; chemically enriched substructure detectors, including per-halogen and boron features, emerge in individual runs, although only a small subset of dictionary directions is stable across seeds; and zeroing individual features produces property-specific effects on probe decoding.

Beyond SynFlowNet, this study provides a reusable control protocol for molecular-model interpretability, separating learned structure from signals supplied by architecture and input representation. High probe scores alone should not be treated as evidence of learned chemistry.
