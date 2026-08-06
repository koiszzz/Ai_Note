# An Enhanced Geometric-Spectral Feature Learning Framework for Airborne Multispectral Point Cloud Classification

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xian Li, Yanfeng, Gu Linghua Xu, Aleksandra Pi\v{z}urica　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.09123)

------

arXiv:2606.09123v2 Announce Type: replace

Abstract: Multispectral point cloud (MPC) is composed of 3D spatial-spectral information, which holds tremendous potential for accurate land-cover classification. However, the representation power of classification models is limited by inherent high-dimensional and heterogeneous spatial-spectral information, unbalanced sample distribution, and inter-class spectral similarity of airborne MPCs. We build two MPC datasets and propose an enhanced geometric-spectral feature learning framework based on attentions for airborne MPC classification. A key component in our model is a two-stream feature fusion method with attention mechanisms, which enhances the representation capability of spatial-spectral features from high-dimensional heterogeneous MPCs. The first stream aims to extract position-encoded global spectral features with fusion self-attention, and the second stream comprises a multikernel point convolution and feature aggregation attention to extract spectral-guided geometric features. We then develop a residual attention fusion block to integrate the most informative geometric-spectral features from the two parallel streams. Another important contribution of this work is a joint loss function to improve the learning ability on unbalanced and interclass similar samples. Experimental results on two airborne MPC datasets demonstrate the effectiveness of the proposed method compared with the state-of-the-art methods. Furthermore, the codes and datasets used in this paper will be made available freely at https://github.com/HITlixian/TGRS_GSFF.
