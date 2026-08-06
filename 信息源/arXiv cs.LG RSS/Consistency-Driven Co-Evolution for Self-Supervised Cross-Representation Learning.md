# Consistency-Driven Co-Evolution for Self-Supervised Cross-Representation Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xuehang Guo, Pengyuan Li, Tom Hope, Tirthankar Ghosal, Manling Li, Qingyun Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04926)

------

arXiv:2608.04926v1 Announce Type: new

Abstract: As chart images, tabular data, and visualization code play increasingly important roles across diverse domains, cross-representation understanding across these modalities poses fundamental challenges for AI systems: the relationships across representations are inherently \textit{one-to-many}, supervision is ambiguous and costly, and model optimization lacks a principled signal that is both direction-adaptive and representation-generalizable beyond task-specific objectives. We introduce CoCoEvolve to improve consistency across chart, table, and code representations. Instead of treating cross-representation mapping as a one-to-many problem, we define explicit one-to-one correspondences and optimize models using agreement between representations, without additional annotations. During training, CoCoEvolve@Train performs co-evolution across the chart-table-code cycle, while CoCoEvolve@Test applies the same consistency objective at inference time for test-time co-optimization. We also present CoCoEvolve@Eval, an evaluation suite covering all six cross-representation tasks. Across four benchmarks, CoCoEvolve improves performance in both training-time and test-time settings. Our project page: https://xhguo7.github.io/CoCoEvolve/.
