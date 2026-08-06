# Block-sparse GPU kernels

> 数据源：OpenAI News
> RSS：[打开源文件](https://openai.com/news/rss.xml)

> 发布时间：Wed, 06 Dec 2017 08:00:00 GMT　|　分类：Research　|　原文：[打开链接](https://openai.com/index/block-sparse-gpu-kernels)

------

We’re releasing highly-optimized GPU kernels for an underexplored class of neural network architectures: networks with block-sparse weights. Depending on the chosen sparsity, these kernels can run orders of magnitude faster than cuBLAS or cuSPARSE. We’ve used them to attain state-of-the-art results in text sentiment analysis and generative modeling of text and images.
