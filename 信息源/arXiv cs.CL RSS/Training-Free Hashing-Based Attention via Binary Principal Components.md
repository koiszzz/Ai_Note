# Training-Free Hashing-Based Attention via Binary Principal Components

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Daohai Yu, Zhanpeng Zeng, Keyu Chen, Wenhao Li, Zhifeng Shen, Luxi Lin, Ruizhi Qiao, Xing Sun, Rongrong Ji　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04405)

------

arXiv:2608.04405v1 Announce Type: cross

Abstract: Long-context large language models (LLMs) are increasingly deployed in real-world applications, yet self-attention remains a major efficiency bottleneck -- especially during decoding -- due to the necessity of repeatedly processing ever-growing key-value (KV) caches. Existing sparse attention reduce computation by attending to fewer KV pairs, but often suffer from substantial accuracy degradation, require additional training, or rely on expensive hashing. In this work, we present BinaryPC, a training-free, data-aware hashing-based sparse attention for long-context LLMs. BinaryPC constructs compact binary hash codes and corresponding hash function by computing binary principal components of data. Unlike Locality-Sensitive Hashing (LSH) with data-independent random projections or learned non-linear hashing methods, BinaryPC constructs binary codes that explicitly preserve the structural information of data without requiring gradient-based training. Comprehensive experiments across multiple model families and long-context benchmarks show that BinaryPC preserves accuracy relative to full attention while achieving superior performance among sparse and hashing-based baselines. On modern GPUs, BinaryPC improves end-to-end decoding throughput by 3.56$\times$ over the FlashAttention kernel. Our code is available at https://github.com/yudaohai666/BPC.
