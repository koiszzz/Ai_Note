# AgentStream: How Well Do Self-Evolving LLM Agents Perform Under Streaming Tasks?

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Dong Yan, Jian Liang, Dapeng Hu, Ran He, Nicholas Jing Yuan, Qi Zhang, Tieniu Tan　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.00155)

------

arXiv:2608.00155v1 Announce Type: cross

Abstract: Large language model (LLM) agents can self-evolve by continually improving from their own accumulated experience. However, existing studies predominantly adopt independent evaluation. Consequently, the behavior of self-evolving agents in realistic streaming settings, where agents adapt to diverse and complex task streams, remains poorly understood. To address this gap, we introduce AgentStream, a unified framework that evaluates self-evolving agents spanning diverse evolution components by organizing agentic benchmarks into a configurable task stream and instantiating the \texttt{Isolated}, \texttt{Sequential}, and \texttt{Interleaved} streaming scenarios at test time, which progressively vary the scope and domain composition of the stream. Over these scenarios, we combinatorially evaluate five representative self-evolving methods across three frontier foundation models, disentangling how model capability, method architecture, and streaming scenario jointly shape self-evolution. Our results show that self-evolution reliability varies across streaming scenarios, the benefit of self-evolution is gated by model capability and non-monotonic in model strength, and no single method dominates across models and scenarios. These findings offer concrete guidance for selecting self-evolving methods across models and streaming scenarios. Overall, we advocate that self-evolving agents should be evaluated under realistic task streams rather than isolated single-task settings.
