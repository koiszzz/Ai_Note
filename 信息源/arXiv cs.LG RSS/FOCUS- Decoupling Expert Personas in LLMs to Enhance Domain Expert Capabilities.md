# FOCUS: Decoupling Expert Personas in LLMs to Enhance Domain Expert Capabilities

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Guanyu Wang, Zidi Zhang, Xu Chu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05611)

------

arXiv:2608.05611v1 Announce Type: cross

Abstract: Large Language Models (LLMs) can exhibit diverse personas, and activating expert personas has been shown to improve domain expertise and task accuracy. However, existing persona control methods often suffer from cross-domain coupling, which may lead to overly aggressive behavior in high-caution domains such as healthcare, or excessive conservatism in risk-sensitive domains such as financial trading. To address this issue, we propose FOCUS (\textbf{\underline{F}}ine-tuning with \textbf{\underline{O}}rthogonal \textbf{\underline{C}}ontrol for \textbf{\underline{U}}ncoupled persona\textbf{\underline{S}}). FOCUS first automatically extracts expert persona vectors from LLMs, then applies orthogonal decomposition to decouple domain-specific expert personas, and finally introduces an expert gating module to adaptively control persona activation according to task contexts. With a two-stage training strategy and a gated selection regularizer, the model learns to activate appropriate personas for both single-domain and cross-domain tasks. Experiments on financial, legal, medical, and cross-domain benchmarks show that FOCUS improves task accuracy and outperforms existing persona control methods. Our code is available at \href{https://anonymous.4open.science/r/openpersona-48F4}{this url}.
