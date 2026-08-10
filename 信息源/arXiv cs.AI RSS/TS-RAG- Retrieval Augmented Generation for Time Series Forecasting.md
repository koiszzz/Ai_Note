# TS-RAG: Retrieval Augmented Generation for Time Series Forecasting

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yixiong Xiao, Congxi Xiao, Jingbo Zhou　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06223)

------

arXiv:2608.06223v1 Announce Type: new

Abstract: While deep learning models, particularly transformer-based architectures, have shown impressive performance in time series forecasting, the application of retrieval-augmented generation (RAG) in this domain remains limited. Since RAG has proven effective in enhancing the capabilities of large language models by incorporating relevant external information, retrieving similar time series sequences as references might also improve accuracy in time series forecasting tasks. However, most time series models are constrained by limited training data, smaller parameter scales, and a lack of the extensive generative capabilities found in large language models. Simply concatenating reference sequences into the prompt, as done in language models, may not yield the expected results. To address these challenges, we propose a novel approach, TS-RAG, which leverages RAG to enhance forecasting performance. The framework introduces specially designed reference tokens to effectively fuse information from the input sequence with that from retrieved similar sequences, enabling a more robust capture of complex temporal dynamics. Experimental results demonstrate that TS-RAG achieves consistent state-of-the-art performance across several real-world forecasting benchmarks.
