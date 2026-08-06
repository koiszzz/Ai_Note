# DeepImagine: Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Youze Zheng, Jianyou Wang, Yuhan Chen, Matthew Feng, Longtian Bao, Hanyuan Zhang, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Umber Dube, Ramamohan Paturi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2604.23054)

------

arXiv:2604.23054v2 Announce Type: replace-cross

Abstract: Predicting the outcomes of prospective clinical trials remains a major challenge. Clinical trial outcomes result from complex interactions among experimental factors such as drug interventions, participant demographics, and protocols. Here, we introduce DeepImagine, a framework that predicts target trial outcomes through stepwise counterfactual imagination anchored on historical trials with observed results. Starting from a relevant historical trial, DeepImagine sequentially modifies one differing experimental factor at a time. With each step a large language model (LLM) is posed a local counterfactual: how would the current imagined outcome change with this single perturbation? The updated result is carried forward as the input to the next step, until the historical configuration exactly matches the target, yielding the final prediction. Empirically, DeepImagine consistently outperforms direct one-step prediction across several off-the-shelf LLMs, with further gains when multiple imagination pathways, initiated from different historical anchors, are aggregated. We also construct natural counterfactuals augmented with synthetic reasoning traces and train a family of specialized language models, each dedicated to learning one factor's local counterfactual transition. Integrating these learned local operators into DeepImagine yields substantial improvements over general-purpose LLM baselines. Our findings position stepwise counterfactual imagination, distinct from both correlational prediction and explicit structural causal modeling, as a promising direction for clinical trial outcome prediction. All code, training scripts, and evaluation scripts are available at \href{https://github.com/deepimagine-counterfactual/DeepImagine}{https://github.com/deepimagine-counterfactual/DeepImagine}.
