# RICE-PO: Turning Retrieval Interactions into Credit Signals for Reasoning Agents

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Mingchen Li, Hansi Zeng, Zhuo Qian, Jiatan Huang, Sunjae Kwon, Hamed Zamani, Hong Yu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2605.26352)

------

arXiv:2605.26352v3 Announce Type: replace

Abstract: Retrieval is increasingly moving from one-shot matching toward interactive reasoning, where language agents iteratively inspect evidence, reformulate queries, and search again. Training such agents raises a credit-assignment challenge: executable actions such as queries or summaries can be directly evaluated by the retriever, while latent reasoning steps are not directly observable and only affect future executable actions. This asymmetry makes outcome-level reward assignment unreliable, as the same final reward may credit reasoning steps that did not actually shape retrieval success. We propose RICE-PO, a critic-free policy optimization framework that converts retrieval interactions into localized learning signals. RICE-PO selects high-uncertainty executable actions as anchors, evaluates local counterfactual branches using retrieval metrics, and propagates credit to latent reasoning steps only when reasoning-to-action influence is strong and future residual effects are stable. On BRIGHT and BEIR, RICE-PO consistently outperforms prompt-based agents and group-based RL baselines under the same retriever setting. These results show that the structure of agent-environment interaction itself can provide useful supervision for training reasoning-based retrieval agents.
