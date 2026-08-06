# Give your agent its own computer

> 数据源：LangChain Blog
> RSS：[打开源文件](https://www.langchain.com/blog/rss.xml)

> 发布时间：Thu, 25 Jun 2026 00:21:53 GMT　|　原文：[打开链接](https://www.langchain.com/blog/give-your-ai-agent-its-own-computer)

------

Running code execution in an AI agent is harder than it looks. Your agent needs a real computer (filesystem, shell, package manager, persistent state) but handing it access to your infrastructure is dangerous.Think about it this way: you use one laptop. You are n of one. But agents are going to run millions of tasks, and each one needs its own computer to work from. That's the infrastructure shift happening right now. Satya Nadella put it plainly: "Every agent needs a computer." The question is what that computer looks like, and how you give it to them safely.LangSmith Sandboxes are our answer to that. Here's why it matters, and why doing it yourself is harder than it sounds.
