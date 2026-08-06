# AgenticSCR: An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Wachiraphan Charoenwet, Kla Tantithamthavorn, Patanamon Thongtanunam, Hong Yi Lin, Minwoo Jeong, Ming Wu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2601.19138)

------

arXiv:2601.19138v2 Announce Type: replace-cross

Abstract: Secure code review is critical during pre-integration, where Atlassian developers rely on lightweight analysis tools, while deep security assessment is deferred to later stages, delaying feedback and increasing remediation costs. Existing static analyzers are often noisy and struggle with context-dependent or partially manifested vulnerabilities, while static large language model (LLM) reviewers are constrained by context windows and lack tool interaction. Agentic AI, which combines LLMs with code navigation, shows promise; however, its effectiveness for early-stage secure code review remains underexplored. We present AgenticSCR, an agentic secure code reviewer augmented with security-focused semantic memory that grounds reasoning in structured security knowledge to detect vulnerabilities before they fully manifest. AgenticSCR achieves at least 153% relative improvement in generating comments with correct localization, vulnerability type, and relevance over static LLM baseline, multi-agent reviewer, and SAST tools. In a shadow deployment, 54% of its comments were validated by security engineers for developer reporting, demonstrating practical utility while underscoring the difficulty of the task. These findings position the security-focused semantic memory as a promising direction for agentic secure code review, enabling early-stage vulnerability identification. Our approach builds an important step toward reliable localization, detection, and explanation in shift-left security practices
