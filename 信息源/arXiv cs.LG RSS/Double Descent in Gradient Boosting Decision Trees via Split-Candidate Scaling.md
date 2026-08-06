# Double Descent in Gradient Boosting Decision Trees via Split-Candidate Scaling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ryuichi Kanoh　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03111)

------

arXiv:2608.03111v1 Announce Type: new

Abstract: Double descent is commonly studied by scaling an explicit capacity parameter, such as neural-network width. For gradient boosting decision trees (GBDTs), however, an analogous single-axis capacity parameter has not been established. We propose the number of split candidates as an operational capacity parameter for GBDTs. Holding other training controls fixed, increasing the split-candidate budget refines the feature-quantization grid and expands the dictionary of root-to-leaf paths from which boosting selects its updates. To analyze this expansion, we construct an empirical tree-kernel diagnostic that summarizes how candidate-induced paths group the training examples. A regime in which the empirical kernel rank grows toward the sample size and very small positive eigenvalues emerge exposes noise-sensitive directions; in this regime, test error peaks before decreasing again at larger split-candidate budgets. This perspective predicts that deeper trees should reach the regime with fewer split candidates, larger training sets should require finer grids, and label noise should make the peak more pronounced. Experiments support these predictions and show test-error peaks at intermediate split-candidate budgets across XGBoost, LightGBM, and CatBoost, whereas a random-forest control improves monotonically under the same split-candidate sweep. Taken together, our analysis and experiments support split-candidate scaling as a single-axis capacity intervention for studying GBDTs and suggest that the observed double descent arises from an interaction between candidate-induced geometry and boosting dynamics.
