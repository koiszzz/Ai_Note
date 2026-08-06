# Agents need their own computer. Here's how to give them one safely.

> 数据源：LangChain Blog
> RSS：[打开源文件](https://www.langchain.com/blog/rss.xml)

> 发布时间：Tue, 21 Jul 2026 23:48:02 GMT　|　原文：[打开链接](https://www.langchain.com/blog/agents-need-their-own-computer)

------

For most of computing history, a developer environment meant a physical machine, then a VM, then a container, with each one shared across the work happening on it, each one requiring deliberate setup and teardown. The idea of giving every agent its own isolated computer, booting in under a second and cleaning up when done wasn't practical at scale. Sandboxes give you a safer way to run upgraded workflows, providing you an isolated environment to run tasks that require iteration, verification, and access to the tools a person would normally use, all without requiring human supervision. Every human developer gets a laptop. Every agent can get a computer.
