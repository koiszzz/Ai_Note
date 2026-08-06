# Prompt-Induced Waste in Coding Agents: Reasoning Structure, Tool Behavior, and End-to-End Cost

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Sarel Weinberger, Amir Hozez　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.01347)

------

arXiv:2608.01347v2 Announce Type: replace

Abstract: Coding agents do not simply execute instructions; the wording of those instructions changes how much work they perform, what kind of work they perform, and how much that work costs. We present a preregistered study across multiple reasoning models, two real coding-agent harnesses, and controlled software tasks with hidden evaluation.

The main finding is that several common prompt habits create substantial extra work without improving success. Asking for multiple approaches causes agents to develop and discard several solution paths before implementing one. Telling them to think deeply mainly produces longer visible reasoning, while demanding maximum certainty encourages repeated checking, extra tests, additional turns, and longer execution. Misleading architectural hints can also push agents toward unsupported lines of investigation.

By contrast, prompts that define scope, request the smallest sufficient change, and include a clear stopping rule preserve diagnosis and validation while avoiding unnecessary work. This shows that effective prompts are not merely shorter; they are better bounded.

We further show that different kinds of waste propagate through different channels. Some remain mostly in reasoning, while others expand into tool use, latency, repeated testing, and context growth. The agent harness itself can matter even more than the prompt, because system instructions, turn structure, and tool policy strongly shape total cost.

Overall, prompt design is an operational control over coding-agent behavior. Efficient agents require prompts that focus work, avoid unnecessary exploration, and stop once the task is complete.
