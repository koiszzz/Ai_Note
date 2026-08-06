# WeClawArena: An Auditable Sandbox and Benchmark for Cross-User Agents Collaboration and Security in Human-Centered Agent Networks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Prince Zizhuang Wang, Aojie Yuan, Haiyue Zhang, Xiyang Hu, Yue Zhao, Shuli Jiang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03499)

------

arXiv:2608.03499v1 Announce Type: new

Abstract: Recent advances in persistent personal-agent frameworks are making human-centered agent networks realistic deployment targets: each user can be served by an AI agent that acts on the user's behalf, maintains state, and communicates with other agents through social and task relations. In these networks, everyday tool use becomes multi-party owned-agent collaboration over personal workspaces, where files, records, tools, and policies are not directly visible across owners. Existing agent benchmarks study tool use and collaboration, but they do not provide an end-to-end sandbox for verifiable cross-user agent collaboration with realistic user digital workspaces or test how harmful actions can travel through the human-centered agent network. We introduce WeClawArena, an auditable benchmark and runtime sandbox for multi-party owned-agent collaboration over personal workspaces. WeClawArena targets collaborative tool-use tasks in which personal workspaces serve as both operational tools and personal constraints. The benchmark contains 124 base tasks across six cross-user task domains and expands them into 620 scenario variants, with one benign control and four attack-vector variants per base task. The sandbox records peer messages, tool calls, resource operations, governed decisions, and final workspace states. WeClawArena reports utility and attack success rate separately and audits attack success from bounded runtime evidence, supporting diagnosis of task breakdown, privacy leakage, poisoned evidence, and invalid authority paths.
