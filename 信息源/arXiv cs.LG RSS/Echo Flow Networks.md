# Echo Flow Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hongbo Liu, Jia Xu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2509.24122)

------

arXiv:2509.24122v3 Announce Type: replace

Abstract: At the heart of time-series forecasting (TSF) lies a fundamental challenge: how can models efficiently and effectively capture long-range temporal dependencies across ever-growing sequences? While deep learning has brought notable progress, conventional architectures often face a trade-off between computational complexity and their ability to retain accumulative information over extended horizons.

Echo State Networks (ESNs), a class of reservoir computing models, have recently regained attention for their exceptional efficiency, offering constant memory usage and per-step training complexity regardless of input length. This makes them particularly attractive for modeling extremely long-term event history in TSF. However, traditional ESNs fall short of state-of-the-art performance due to their limited nonlinear capacity, which constrains both their expressiveness and stability.

We introduce Echo Flow Networks (EFNs), a framework composed of a group of extended Echo State Networks (X-ESNs) with MLP readouts, enhanced by our novel Matrix-Gated Composite Random Activation (MCRA), which enables complex, neuron-specific temporal dynamics, significantly expanding the network's representational capacity without compromising computational efficiency. In addition, we propose a dual-stream architecture in which recent input history dynamically selects signature reservoir features from an infinite-horizon memory, leading to improved prediction accuracy and long-term stability.

Extensive evaluations on five benchmarks demonstrate that EFNs achieve up to 4x faster training and 3x smaller model size compared to leading methods like PatchTST, reducing forecasting error from 43% to 35%, a 20% relative improvement. One instantiation of our framework, EchoFormer, consistently achieves new state-of-the-art performance across five benchmark datasets: ETTh, ETTm, DMV, Weather, and Air Quality.
