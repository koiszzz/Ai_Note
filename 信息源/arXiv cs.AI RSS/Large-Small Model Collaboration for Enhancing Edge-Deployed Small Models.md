# Large-Small Model Collaboration for Enhancing Edge-Deployed Small Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Peigen Liu, Yijiang Fan, Zixuan Xu, Yuren Mao, Longbin Lai, Ying Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2503.10367)

------

arXiv:2503.10367v2 Announce Type: replace-cross

Abstract: Edge devices host domain-specific small language models (SLMs) with limited resources, while private clouds offer larger LLMs. We propose G-Boost, an adaptive edge-cloud framework that improves a deployed SLM's task performance without parameter updates. It formulates reasoning as a tree search, choosing at each step between SLM-only inference and SLM-LLM logit fusion---which transfers domain knowledge from the SLM's adapted version to the cloud LLM without exposing private data. A process reward model guides Monte Carlo tree search to select beneficial collaboration steps dynamically. The edge runs the SLM and search controller; the cloud hosts the LLM and reward model, exchanging only current context. Evaluated on GSM8K and MATH-500 with Qwen2.5 and LLaMA2, G-Boost outperforms the SLM alone, static fusion, and fine-tuned baselines, gaining up to 8.6 and 10.7 percentage points over MCTS and Proxy-Tuning, respectively. Results confirm that step-level, reward-guided dynamic collaboration enhances reasoning and domain utilization for deployed edge SLMs.
