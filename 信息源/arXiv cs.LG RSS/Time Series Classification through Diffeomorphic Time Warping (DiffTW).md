# Time Series Classification through Diffeomorphic Time Warping (DiffTW)

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Vicky Geneva Haney, Kamel Lahouel, Victor Rielly, Bruno M. Jedynak　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2606.23472)

------

arXiv:2606.23472v2 Announce Type: replace-cross

Abstract: Time series classification involves learning a mapping from a continuous, temporally ordered sequence of real-valued observations to discrete response variables, like class labels. This task is fundamental in domains, including health monitoring, where temporal structure is critical for prediction. Dynamic Time Warping (DTW) is a standard technique for measuring similarity between sequences varying in time or speed. However, DTW is restricted to discrete point matching. Moving beyond pairwise alignment, we propose a theoretical framework learning mappings between real-valued functions. These mappings approximate the flow associated with the characteristic curves of a linear transport equation with a space-dependent velocity field, providing a diffeomorphic transformation between time series. Using the method of characteristics, we transform this partial differential equation into ordinary differential equations (ODEs) modeling system dynamics. The objective function to learn these ODEs derives from the fundamental theorem of calculus. To enable flexible, expressive representations of the velocity field, we utilize reproducing kernel Hilbert spaces and optimal control methods. Our method, Diffeomorphic Time Warping (DiffTW), provides a theoretically grounded dissimilarity measure. Using a 1-nearest neighbor classifier, DiffTW outperforms unconstrained DTW on 39 of 85 datasets with 3 ties; however, constrained DTW outperforms DiffTW on 48 of 85 datasets with 5 ties.
