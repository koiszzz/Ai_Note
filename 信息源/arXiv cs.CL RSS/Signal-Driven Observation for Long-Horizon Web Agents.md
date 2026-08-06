# Signal-Driven Observation for Long-Horizon Web Agents

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Shubham Gaur, Ian Lane　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2606.06708)

------

arXiv:2606.06708v2 Announce Type: replace

Abstract: Web agents operating over long horizons ingest raw DOM and accessibility trees -- routinely tens of thousands of tokens -- at every action step, causing progressive context degradation that erodes reasoning well before tasks complete. We argue that this coupling of observation frequency to action frequency is an architectural mistake. Drawing on the insight from Recursive Language Models that querying a document outperforms reading it wholesale, we propose Signal-Driven Observation (SDO): a dedicated sub-call reads the full DOM but returns only task-relevant elements and their selectors, and is re-invoked only when a lightweight signal detector fires -- triggered by URL transitions, newly visible interactive elements, action failures, or exogenous browser events. We outline the open problems SDO introduces and call on the community to treat observation compression as a core architectural decision in web agent design.
