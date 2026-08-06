# Forecasting Revenue with its Customer-Base Drivers: When and Why Coordination Helps

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kyeongbin Kim, Daniel McCarthy, Dokyun Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02911)

------

arXiv:2608.02911v1 Announce Type: new

Abstract: Revenue forecasts guide acquisition budgets, demand planning, and customer-based valuations, yet an aggregate forecast does not show whether change reflects acquisition, repeat purchasing, spending per order, or offsetting movements. Using weekly transaction panels for 966 companies in 25 industries, the authors develop the Customer-Based Multi-task Transformer (CBMT), which learns shared structure, retains separate primitive forecasts, and aligns their combination with downstream revenue. CBMT's mean total-sales error is 30% below the strongest representative established customer-base benchmark. It is also 2.65% below a Transformer that forecasts total sales directly, although the paired difference is not statistically significant (p=.222), and it beats separately estimated single-task forecasts for 74.3% of firms. CBMT's source MAE is lower in 23 of 24 benchmark-by-outcome comparisons, with the remaining difference not statistically distinguishable from zero. Firms whose primitives co-move more strongly are more likely to benefit from joint forecasting; selected-family scenario-3 comparisons are consistent with gains from shared representation and revenue alignment but remain diagnostic rather than causal. Accuracy deteriorates for all models when customer-base dynamics are highly volatile, and CBMT's advantage narrows there. Calibration-period routing rules do not improve average accuracy over always deploying CBMT. The results show how coordinated customer-base forecasts support revenue planning and when they warrant greater caution.
