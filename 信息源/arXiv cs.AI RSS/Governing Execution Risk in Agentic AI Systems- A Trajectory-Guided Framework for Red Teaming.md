# Governing Execution Risk in Agentic AI Systems: A Trajectory-Guided Framework for Red Teaming

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhihao Zhu, Yi Yang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CY　|　原文：[打开链接](https://arxiv.org/abs/2608.04018)

------

arXiv:2608.04018v1 Announce Type: cross

Abstract: AI agents are increasingly embedded in organizational workflows, where they interact with external information sources and invoke digital tools to perform operational tasks. As organizations adopt such systems, a critical challenge is identifying and mitigating risks arising from malicious or untrusted external information that can steer agents toward unintended actions. Existing red-teaming approaches largely rely on fixed attack templates or final attack outcomes, providing limited visibility into how attacks unfold through multi-step reasoning and tool use. We argue that agent execution risk should be understood as a trajectory-level phenomenon. Building on this perspective, we propose TrajRed, a trajectory-guided red-teaming framework that uses execution trajectories to uncover vulnerabilities in agentic AI systems. We further develop TrajGuard, a runtime governance layer that uses high-risk trajectories discovered during red teaming to monitor and intervene in ongoing workflows. Experiments on AgentDojo across four organizational task suites show that TrajRed identifies substantially stronger vulnerabilities than fixed-template and automatic red-team baselines. Building on these vulnerability findings, TrajGuard reduces attack success across all evaluated attack methods to near zero while preserving benign task utility. Together, the results demonstrate that execution trajectories provide a practical foundation for both red teaming and risk control in agentic AI systems. This work highlights the importance of governing agent execution in organizational AI deployments.
