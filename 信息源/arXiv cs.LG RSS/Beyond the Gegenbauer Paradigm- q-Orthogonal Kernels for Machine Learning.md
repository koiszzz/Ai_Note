# Beyond the Gegenbauer Paradigm: q-Orthogonal Kernels for Machine Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：\'Alvaro S\'anchez-Paniagua R\'ios, Juan P. Llerena, Alberto Lastra, Nuria Torrado, Edmundo J. Huertas　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03482)

------

arXiv:2608.03482v1 Announce Type: new

Abstract: The performance of Support Vector Machines (SVMs) critically depends on the kernel function choice, which enables implicit mapping of data into high-dimensional feature spaces. While classical kernels like Radial Basis Function (RBF) remain popular, orthogonal polynomial kernels offer mathematically interpretable alternatives that can incorporate structured prior knowledge. This work extends the orthogonal polynomial kernel paradigm by introducing a novel family based on discrete $q$-Hermite I polynomials, a class of $q$-orthogonal polynomials that generalize classical Hermite polynomials through a deformation parameter $q$. We formally define the q-Hermite kernel and establish its validity under Mercer's theorem. The kernel's inherent boundedness properties naturally prevent annihilation and explosion effects without requiring explicit scaling mechanisms. Extensive experiments across 20 benchmark datasets demonstrate that the proposed kernel achieves competitive performance compared to both classical kernels and other orthogonal polynomial kernels, while offering advantages in numerical stability and computational simplicity. Our results confirm that $q$-orthogonal polynomials constitute a promising direction for kernel design, bridging mathematical elegance with practical machine learning applications, that provides conceptual and algorithmic resources that may be further extended to emerging quantum computing paradigms. To facilitate full reproducibility, we provide the complete implementation and experimental pipeline in an open-access GitHub repository at https://github.com/Kokechacho/SVMs-QSVMs.
