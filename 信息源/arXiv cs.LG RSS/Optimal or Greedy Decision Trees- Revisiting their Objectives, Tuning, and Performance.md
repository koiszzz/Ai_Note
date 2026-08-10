# Optimal or Greedy Decision Trees? Revisiting their Objectives, Tuning, and Performance

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jacobus G. M. van der Linden, Dani\"el Vos, Mathijs M. de Weerdt, Sicco Verwer, Emir Demirovi\'c　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2409.12788)

------

arXiv:2409.12788v3 Announce Type: replace

Abstract: Recently there has been a surge of interest in optimal decision tree (ODT) methods that globally optimize accuracy directly, in contrast to traditional approaches that locally optimize an impurity or information metric. However, the literature shows conflicting evidence on the value of ODTs, with some demonstrating superior out-of-sample performance of ODTs over greedy approaches, while others show the opposite. The value and performance of ODTs therefore remains one of several open question regarding ODTs, most of which could not be answered before due to lack of scalability. With our experimental study---the largest to this date---we examine five such open questions. Our results show (i) that a major advantage of ODTs over greedy approaches is that they can optimize the target objective directly (e.g., accuracy rather than a proxy such as Gini impurity); (ii) that hyperparameter tuning of ODTs is essential; and reaffirm (iii) that optimal methods, on average, obtain smaller and more accurate trees than greedy approaches. Our results also refute two previously posited hypotheses: (iv) that the difference between optimal and greedy approaches diminish with more data, and (v) that optimal methods are more sensitive to overfitting. Finally, our work provides insights on the value of ODTs, clear recommendations for researchers and practitioners on the usage of greedy and optimal methods, and code for future comparisons.
