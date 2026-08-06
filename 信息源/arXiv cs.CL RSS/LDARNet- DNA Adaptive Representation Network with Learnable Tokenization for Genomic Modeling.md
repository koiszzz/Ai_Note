# LDARNet: DNA Adaptive Representation Network with Learnable Tokenization for Genomic Modeling

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Daria Ledneva, Denis Kuznetsov　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2606.04552)

------

arXiv:2606.04552v2 Announce Type: replace

Abstract: Genomic foundation models increasingly adopt large language model architectures, yet almost universally rely on fixed tokenization schemes such as $k$-mers, BPE, or single nucleotides, which impose arbitrary sequence boundaries that may obscure biologically relevant structure. We present LDARNet, a 110M-parameter hierarchical genomic foundation model that adapts H-Net-style dynamic chunking from autoregressive generation to masked language modeling, combining BiMamba-2 state-space layers with local attention, bidirectional routing, and a ratio-based regularizer to induce adaptive token boundaries without supervision. Fine-tuned on 27 tasks from the Nucleotide Transformer and Genomic Benchmarks suites, LDARNet achieves 15/18 wins among compact models ($<$300M parameters) and the best overall result on 9 of the 10 histone modification tasks, outperforming models up to 20$\times$ larger. A FLOPs-matched controlled experiment isolates learned routing as the source of these gains: learned boundaries beat fixed-grid boundaries by up to 14 percentage points on histone tasks at identical compute. Nucleotide-resolution analysis further shows that the learned boundaries align with canonical promoter motifs and splice junctions without supervision, providing a biological interpretation for adaptive tokenization in genomic foundation models.
