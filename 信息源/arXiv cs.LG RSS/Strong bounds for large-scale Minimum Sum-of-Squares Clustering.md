# Strong bounds for large-scale Minimum Sum-of-Squares Clustering

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Anna Livia Croella, Veronica Piccialli, Antonio M. Sudoso　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：math.OC　|　原文：[打开链接](https://arxiv.org/abs/2502.08397)

------

arXiv:2502.08397v3 Announce Type: replace-cross

Abstract: Clustering is a fundamental technique in data analysis and machine learning, used to group similar data points together. Among various clustering methods, the Minimum Sum-of-Squares Clustering (MSSC) is one of the most widely used. MSSC aims to minimize the total squared Euclidean distance between data points and their corresponding cluster centroids. Due to the unsupervised nature of clustering, achieving global optimality is crucial, yet computationally challenging. The complexity of finding the global solution increases exponentially with the number of data points, making exact methods impractical for large-scale datasets. Even obtaining strong lower bounds on the optimal MSSC objective value is computationally prohibitive, making it difficult to assess the quality of heuristic solutions. We address this challenge by introducing a novel method to validate heuristic MSSC solutions through optimality gaps. Our approach employs a divide-and-conquer strategy, decomposing the problem into smaller instances that can be handled by an exact solver. The decomposition is guided by an auxiliary optimization problem, the "anticlustering problem", for which we design an efficient heuristic. Computational experiments demonstrate the effectiveness of the method for large-scale instances, achieving optimality gaps below 3% while maintaining reasonable computational times. These results highlight the practicality of our approach in assessing feasible clustering solutions for large datasets, bridging a critical gap in MSSC evaluation.
