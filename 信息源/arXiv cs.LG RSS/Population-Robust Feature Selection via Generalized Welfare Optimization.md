# Population-Robust Feature Selection via Generalized Welfare Optimization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ruiqi Lyu, Alistair Turcan, Bryan Wilder　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02887)

------

arXiv:2608.02887v1 Announce Type: new

Abstract: Choosing which features to collect is a deployment decision: the same limited questionnaire, test panel, or sensor set may need to serve several heterogeneous populations. Standard feature-selection methods typically optimize for one large population, while existing robust approaches tend to learn one shared model for every population. We introduce PopFS, a method for learning one shared, deployable feature set that is robust to population differences while letting each pop- ulation train its own model. PopFS uses a tunable welfare objective that lets practitioners balance overall predictive ben- efit against stronger protection of the populations that benefit least. To make this objective practical at scale, PopFS first uses multitask sparse learning to reduce the candidate pool, then searches directly over hard feature sets by ranking promising additions and swaps and fully refitting only a shortlist. Across eight population splits from six prediction tasks drawn from five tabular and public-health datasets, PopFS consistently achieves strong average and worst-population performance while scaling to thousands of candidate features. A 43-state COVID-19 nowcasting study further shows that changing the welfare objective can improve the least-served states with lit- tle change in average performance and yields an interpretable change in the selected symptom signals. Our code is available at https://github.com/Rachel-Lyu/PopFS.
