# Style Wins, Substance Loses: A Diagnosis of LLM-as-Judge in Idea Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Fengxian Ji, Yuke Li, Jingpu Yang, Juanfan Wu, Fan Zhang, Zhexuan Cui, Yu Xie, Min Peng, Qianqian Xie, Xiuying Chen, Zhuohan Xie　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.01666)

------

arXiv:2608.01666v2 Announce Type: replace-cross

Abstract: However, whether these judges truly evaluate the scientific substance of ideas or are influenced by superficial stylistic presentation remains an open question. To address this question, we propose SciStyleBench, a unified three-component benchmark for diagnosing and mitigating stylistic bias in LLM-based idea evaluation: (i) First, SciStyleStage, a three-stage evaluation environment that applies controlled stylistic perturbations to fixed scientific content across three settings no context, fixed-domain context, and open-domain retrieval context, covering 600 scientific ideas and 15 style variants, with 9,000 evaluation instances per setting; (ii) Second, SciStyleMetrics, a set of quantitative measures, including Style Bias Index (SBI), Substance Recognition Rate (SRR), and Adversarial Win Rate (AWR), to characterize how stylistic variation affects scoring stability, substance discrimination, and ranking robustness; (iii) Third, SciStyleExtractor, a plug-and-play evaluation module that separates presentation style from scientific content by predicting style type and deviation before style-conditioned evaluation, enabling us to assess whether style awareness reduces stylistic bias. Experiments on SciStyleBench show that direct LLM judges remain sensitive to writing style and struggle to distinguish scientific substance. In contrast, SciStyleExtractor reduces SBI from 0.566 to 0.501 while increasing SRR and AWR from 0.504 and 0.554 to 0.759 and 0.899, respectively. These results suggest that robust idea evaluation requires invariance to stylistic variation without sacrificing sensitivity to scientific substance. Overall, SciStyleBench provides a systematic framework for identifying, quantifying, and mitigating stylistic bias in scientific idea evaluation.
