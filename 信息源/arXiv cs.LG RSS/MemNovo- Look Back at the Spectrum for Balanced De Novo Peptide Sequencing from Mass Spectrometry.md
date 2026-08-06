# MemNovo: Look Back at the Spectrum for Balanced De Novo Peptide Sequencing from Mass Spectrometry

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Dongxin Lyu, Jingbo Zhou, Hongxin Xiang, Yuqiang Li, Jun Xia　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.11868)

------

arXiv:2606.11868v2 Announce Type: replace

Abstract: De novo peptide sequencing from tandem mass spectrometry is pivotal in proteomics, enabling identification of novel peptides without reference databases. While recent Transformer-based encoder-decoder models have achieved remarkable performance, we uncover a critical pathology in their inference dynamics. Through comprehensive feature scaling experiments, we demonstrate that existing auto-regressive peptide decoders tend to over-rely on generated-sequence priors while progressively under-utilizing fine-grained physical evidence from the input mass spectrum. This phenomenon leads to suboptimal results, where generated peptide sequences are biologically plausible yet not faithful to the input spectrum. To rectify this, we propose MemNovo, a training-free and plug-and-play mechanism that re-balances peptide and spectral contributions at inference time. MemNovo alleviates the information bottleneck by establishing a persistent spectral memory bank and injecting retrieved features directly into the final decoding stage via an ultra-conservative residual connection. Theoretical analysis confirms that this mechanism restores the mutual information between the decoder state and the raw spectrum. Extensive experiments on the Nine Species benchmark with two representative baselines, Casanovo and InstaNovo, demonstrate that MemNovo consistently improves both amino acid precision and peptide precision, achieving up to 39.1% relative improvement in peptide precision for Casanovo and up to 3.9% for InstaNovo, with negligible computational overhead.
