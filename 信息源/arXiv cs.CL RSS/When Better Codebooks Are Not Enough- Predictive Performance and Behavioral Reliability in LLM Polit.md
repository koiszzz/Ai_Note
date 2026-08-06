# When Better Codebooks Are Not Enough: Predictive Performance and Behavioral Reliability in LLM Political Event Coding

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Zixian He, Bharath Raahul Murugesan, Patrick Brandt, Yibo Hu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2606.06781)

------

arXiv:2606.06781v2 Announce Type: replace

Abstract: High accuracy does not necessarily make an LLM a faithful coder. This issue matters because many social-science studies rely on expert-written codebooks to turn text into structured data. We study political event coding, where a model must identify the action that one actor directs toward another under detailed coding rules. We compare label names alone with concise definitions and enriched guidance that adds examples, event-mode instructions, and boundary rules. We also evaluate alternative prompting and retrieval methods. We then test behavioral reliability under changes to codebook order, label names, and label-definition mappings. Enriched guidance raises mean root-level macro-F1 from 0.457 to 0.633. Methods with access to definitions remain effective when meaningful label names are removed, but no evaluated method exceeds 0.20 weighted F1 after the label-definition mapping is reassigned. These results motivate separate evaluation of predictive performance and adherence to the supplied coding rules.
