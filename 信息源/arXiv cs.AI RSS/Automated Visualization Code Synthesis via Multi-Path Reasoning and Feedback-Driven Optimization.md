# Automated Visualization Code Synthesis via Multi-Path Reasoning and Feedback-Driven Optimization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Wonduk Seo, Daye Kang, Hyunjin An, Taehan Kim, Soohyuk Cho, Seungyong Lee, Minhyeong Yu, Jian Park, Yi Bu, Seunghyun Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2502.11140)

------

arXiv:2502.11140v4 Announce Type: replace-cross

Abstract: Large Language Models (LLMs) have become a cornerstone for automated visualization code generation, enabling users to create charts through natural language instructions. Despite improvements from techniques like few-shot prompting and query expansion, existing methods often struggle when requests are underspecified in actionable details (e.g., data preprocessing assumptions, solver or library choices, etc.), frequently necessitating manual intervention. To overcome these limitations, we propose VisPath: a Multi-Path Reasoning and Feedback-Driven Optimization Framework for Visualization Code Generation. VisPath handles underspecified queries through structured, multi-stage processing. It begins by using Chain-of-Thought (CoT) prompting to reformulate the initial user input, generating multiple extended queries in parallel to surface alternative plausible concretizations of the request. These queries then generate candidate visualization scripts, which are executed to produce diverse images. By assessing the visual quality and correctness of each output, VisPath generates targeted feedback that is aggregated to synthesize an optimal final result. Extensive experiments on MatPlotBench and Qwen-Agent Code Interpreter Benchmark show that VisPath outperforms state-of-the-art methods, providing a more reliable framework for AI-driven visualization generation.
