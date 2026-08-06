# Malice in Agentland: Down the Rabbit Hole of Backdoors in the AI Supply Chain

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：L\'eo Boisvert, Abhay Puri, Chandra Kiran Reddy Evuru, Nazanin Sepahvand, Nicolas Chapados, Quentin Cappart, Jason Stanley, Alexandre Lacoste, Krishnamurthy Dj Dvijotham, Alexandre Drouin　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2510.05159)

------

arXiv:2510.05159v5 Announce Type: replace-cross

Abstract: While finetuning AI agents on interaction data -- such as web browsing or tool use -- improves their capabilities, it also introduces critical security vulnerabilities within the agentic AI supply chain. We show that adversaries can effectively poison the data collection pipeline at multiple stages to embed hard-to-detect backdoors that, when triggered, cause unsafe or malicious behavior. We formalize three realistic threat models across distinct layers of the supply chain: direct poisoning of finetuning data, pre-backdoored base models, and environment poisoning, a novel attack vector that exploits vulnerabilities specific to agentic training pipelines. Evaluated on two widely adopted agentic benchmarks, all three threat models prove effective: poisoning only a small number of demonstrations is sufficient to embed a backdoor that causes an agent to leak confidential user information with over 80\% success.
