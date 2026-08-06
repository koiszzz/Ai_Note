# When Prompts Control Robots: Prompt Injection Attacks in Multi-Agent Robotic Systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Neha Nagaraja, Amisha Bagari, Hayretdin Bahsi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.00747)

------

arXiv:2608.00747v2 Announce Type: replace-cross

Abstract: Large language models are increasingly integrated into autonomous robotic systems for task planning and control, but this integration exposes them to prompt injection attacks that can lead to unsafe decisions and physical harm. Multi-agent settings increase the risks through cross-agent contamination and broader attack surfaces. In this paper, we evaluate prompt injection attacks against an LLM-based multi-agent robotic system, considering both direct injections into task instructions and indirect injections through perception modules. In our experiments across varying attack-goal complexities and injection strategies in both single-agent and multi-agent settings, we show that prompt injection can induce adversarial actions while reducing task completion. We find that attacks can propagate from one agent to others through shared prompt structures, with impacts varying depending on prompt composition and the targeted agent. We further analyze how architectural changes affect LLM queries and, consequently, the attack success. To the best of our knowledge, this is the first study that systematically investigates prompt injection attacks in a multi-agent LLM-based robotic system.
