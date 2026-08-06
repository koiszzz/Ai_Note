# Learning the Word Problem: Geodesic Lengths and Cryptographic Applications

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Elisabeth Fink　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2607.26241)

------

arXiv:2607.26241v2 Announce Type: replace-cross

Abstract: The Word Problem has been a subject of intensive mathematical study for over a century, initially driving advances in combinatorial group theory and more recently emerging as a foundational hardness assumption in post-quantum cryptography (PQC). While generally undecidable, several families of infinite non-abelian groups exhibit solvable or algorithmically fast word problems, making them attractive platforms for cryptographic design. This paper introduces WPNet, a novel Graph Neural Network architecture capable of solving the Word Problem heuristically, which is demonstrated on the Baumslag-Solitar group $BS(1,2)$ and on an Artin group. By mapping unreduced words to dynamic graph structures, the model learns to cluster algebraically equivalent elements in a continuous embedding space, effectively identifying the geodesic representative of a word without executing discrete reduction steps. As an application, a model variant is developed that can predict the geodesic length of an unreduced word in both groups. To demonstrate the cryptographic severity of this structural leakage, WPNet is successfully deployed against the Wagner-Magyarik public-key cryptosystem.
