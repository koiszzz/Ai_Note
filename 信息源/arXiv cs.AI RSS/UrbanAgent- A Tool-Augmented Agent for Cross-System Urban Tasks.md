# UrbanAgent: A Tool-Augmented Agent for Cross-System Urban Tasks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jiayu Cao, Xingyuan Zeng, feiyu Li, Zhijing Huang, Xujie Yuan, Rongxiang Chen, Shimin Di, Libin Zheng, Jian Yin　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03018)

------

arXiv:2608.03018v1 Announce Type: new

Abstract: Modern cities rely on an increasing number of digital services to operate, but residents' daily needs are still difficult to meet. Services are fragmented and have little interoperability, placing a heavy operational burden on users. Existing digital platforms, urban foundation models, and intelligent assistants each address only isolated aspects of an urban task. But they struggle to reliably convert complex natural-language requests into executable cross-system workflows. We propose Urban-Agent, a tool-augmented agent framework for cross-system urban tasks. It couples the cognitive and reasoning capabilities of a large language model with a tool-set supporting code execution, API calls, and Model Context Protocol. Through one adaptive closed loop, it clarifies missing information before acting, grounds tool use in live observations, and aligns the final response with observed evidence and task constraints. To address the evaluation gap, we introduce Urban-Eval, a benchmark specifically designed for cross-system urban request. Unlike prior benchmarks that assess either general tool use or urban knowledge and reasoning, Urban-Eval evaluates both task results and execution quality, including required tool coverage, dependency validity, and evidence traceability. Experimental results indicate that Urban-Agent reaches a 71% task success rate, 10 points above the strongest baseline. This lead holds across GPT-5-mini, Gemini-2.5-flash, DeepSeek-V4-flash, and Qwen3-235B-A22B.
