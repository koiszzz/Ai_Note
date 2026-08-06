# Image classification via a quantum-inspired strategy involving a mixture of experts

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kumari Jyoti, Rohith Babu, Apoorva D. Patel　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.07754)

------

arXiv:2607.07754v2 Announce Type: replace

Abstract: Pattern recognition problems arise in a variety of physical image processing situations, and convolutional neural networks are a popular scheme for the required feature extraction and classification tasks. The classical networks use diffusion-based smearing and block-wise pooling to downsample the image data and capture important structural features. In this work, we propose and demonstrate a more efficient quantum-inspired strategy involving a mixture of experts. It is a hybrid classical-quantum framework. The quantum part consists of amplitude encoding of the images, convolution using local unitary operations, multiple experts processing the same image with different parameters, and feature extraction using quantum stabiliser codes. The classical part then jointly processes the features extracted by different experts using a standard fully connected neural network for image class prediction. Using MNIST and Fashion-MNIST datasets as benchmarks, we demonstrate that the joint expert analysis outperforms the individual expert one, as well as reduces the failure rate of image class prediction by around a factor of two. The overhead of our quantum-inspired strategy is only moderate on GPU workstations, which makes our proposal a practical alternative to existing classical schemes. We also point out how the quantum part of our framework can be executed on a quantum processor.
