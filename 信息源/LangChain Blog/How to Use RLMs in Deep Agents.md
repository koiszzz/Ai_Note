# How to Use RLMs in Deep Agents

> 数据源：LangChain Blog
> RSS：[打开源文件](https://www.langchain.com/blog/rss.xml)

> 发布时间：Wed, 01 Jul 2026 17:04:24 GMT　|　原文：[打开链接](https://www.langchain.com/blog/how-to-use-rlms-in-deep-agents)

------

Recursive language models (RLMs) fix context rot by having agents write code that dispatches subagents over context chunks instead of pumping everything in one context window. Deep Agents now implements this through dynamic subagents and a lightweight code interpreter, letting agents programmatically fan out work like grep, map, and reduce over large inputs. We benchmark the approach on OOLONG, a long-context reasoning task, and show it holds up where turn-by-turn agents start to break down.
