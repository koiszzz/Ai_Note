# Invisible Ink Threats: Adversarial Goals Behind Legitimate Tasks in Computer-Use Agents

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jia-Chen Zhang, Ze-Yu Zhang, Kai-Wei Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02018)

------

arXiv:2608.02018v2 Announce Type: replace

Abstract: Computer-use agents (CUAs), which empower large language models to autonomously operate operating systems and the web, are increasingly vulnerable to indirect prompt injection attacks. A widely adopted defense is the human-in-the-loop paradigm, in which the agent pauses for explicit user confirmation before executing sensitive operations. While effective against conspicuously high-harm attacks, this defense offers little protection against what we term Invisible Ink Threats: low-harm injected goals, such as starring a repository or installing a package, that are behaviorally indistinguishable from legitimate task execution and thus evade both model safety mechanisms and human oversight. To systematically investigate this blind spot, we present II-Bench, a collection of seemingly harmless adversarial tasks. II-Bench comprises 444 examples targeting confidentiality and integrity attacks across three platforms, spanning three attack categories: page navigation and interaction, sensitive information exfiltration, and code download and execution. Each category is instantiated in both natural language and code forms under two levels of instruction specificity. Furthermore, we construct HITLCUA, a comprehensive adversarial testing framework that integrates a real virtual machine operating system environment with isolated Docker-based web platforms, and simulates human participation by allowing CUAs to consult an API-simulated user before proceeding with suspicious operations. Extensive evaluations of leading CUAs reveal that low-harm injections frequently bypass both agent defenses and simulated user review, exposing severe and previously underexplored security risks in current CUAs.
