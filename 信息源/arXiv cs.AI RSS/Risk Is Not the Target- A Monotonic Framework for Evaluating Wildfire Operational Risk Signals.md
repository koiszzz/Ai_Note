# Risk Is Not the Target: A Monotonic Framework for Evaluating Wildfire Operational Risk Signals

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Nicolas Caron, Christophe Guyeux, Hassan Noura, Maxime Coulmeau, Benjamin Aynes　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.21597)

------

arXiv:2607.21597v2 Announce Type: replace

Abstract: Evaluating wildfire risk systems using standard machine-learning metrics such as F1-score or IoU is fundamentally flawed: these metrics assess event prediction accuracy, not the operational coherence of a continuous risk signal. This work proposes a novel monotonic evaluation framework that measures whether increases in a predicted risk score consistently correspond to increases in observed operational load, such as number of fires, intervention time, and deployed resources. Moreover, we compare three structurally different approaches on the French Alpes-Maritimes department: the expert-based DFE index, GRU- based predictive models, and FARS, a hybrid multi-agent system combining predictive AI with LLM-based reasoning. Experimental results reveal that the DFE, despite poor classification metrics, exhibits the most balanced monotonic behavior across the full risk scale. GRU models achieve strong local monotonicity but fail to produce well-distributed risk levels. FARS inherits and reveals the structural limitations of upstream signals rather than correcting them. The central finding is a paradigm shift: a good risk model does not predict fires accurately, but one whose ordinal scale meaningfully explains operational dynamics, as proved in this paper. Code of the monotonic framework is available on github.
