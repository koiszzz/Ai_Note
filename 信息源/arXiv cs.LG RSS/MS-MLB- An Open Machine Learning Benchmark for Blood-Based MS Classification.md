# MS-MLB: An Open Machine Learning Benchmark for Blood-Based MS Classification

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Adam Simson, Ankush Dutta, Quang Bui　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05196)

------

arXiv:2608.05196v1 Announce Type: new

Abstract: Multiple sclerosis (MS) is diagnosed through clinical assessment, magnetic resonance imaging, laboratory evidence when appropriate, and exclusion of better explanations. Blood RNA expression data may contain disease associated immune signal, but a blood RNA classifier cannot be treated as a replacement for clinical diagnosis. This paper presents MS-MLB (Multiple Sclerosis Machine Learning Benchmark), a reproducible open benchmark for machine learning based MS research classification from whole blood RNA expression data. MS-MLB uses the public GSE17048 cohort, converts it into an MS versus healthy control task, and evaluates multiple algorithms under a shared, leakage controlled pipeline that a researcher can rerun without reconfiguring the evaluation. The evaluation includes nested cross-validation, an untouched stratified holdout set, bootstrap confidence intervals, ROC and precision recall analysis, calibration measurement, and an exploratory MS Research Score. In the final benchmark summary, Gradient Boosting ranked first by MS Research Score on the holdout set, with an MS Research Score of 93.83, AUC-ROC of 0.989, sensitivity of 0.950, specificity of 0.778, $F_{1}$ score of 0.927, and Brier score of 0.050. Prior studies have applied machine learning to MS blood transcriptomic data, including PBMC stage classification and whole blood diagnostic signature modeling. The contribution here is different and narrower. To our knowledge, MS-MLB is the first open benchmark focused on MS versus healthy control classification from GSE17048 whole blood RNA expression data with a documented external model submission pathway built into the framework. The score is intended for research comparison only and has not been clinically validated. The benchmark is accessible here: https://github.com/duckyquang/MS-MLB.
