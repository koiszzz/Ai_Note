# EDATracer: An Agentic Framework for Large-Scale EDA Artifact Analysis

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Phat Tieu, Sayanti Jana, Matthew DeLorenzo, Jiawen Wu, Narendran Srinivasan, Srinivas Shakkottai, Jiang Hu, Jeyavijayan Rajendran　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AR　|　原文：[打开链接](https://arxiv.org/abs/2608.04032)

------

arXiv:2608.04032v1 Announce Type: cross

Abstract: Modern chip design relies on electronic design automation (EDA) tools that generate large, heterogeneous artifacts, including source files, scripts, logs, netlists, and reports. Analyzing these artifacts is critical for debugging, optimization, and design-flow understanding, but remains difficult because relevant evidence is often distributed across many artifact types and design stages. Although LLM agents show promise for EDA assistance, existing approaches lack public benchmarks for large-scale cross-artifact analysis and often struggle to ground reasoning in tool-generated evidence. We present EDATracer, an agentic framework for evidence-grounded EDA artifact analysis. EDATracer organizes design artifacts into a knowledge graph paired with a semantic vector index, enabling LLM agents to retrieve evidence across source files, logs, netlists, and reports. We curate an 18.9 GB dataset of 2,787 synthesizable open-source chip designs and introduce a 90-question benchmark spanning factual, statistical, and reasoning tasks. Across evaluated agents, EDATracer achieves the best pass@1 accuracy, outperforming Cursor and Claude Code by 6.4 and 7.2 percentage points on average, while using 2.0-3.2x fewer tokens.
