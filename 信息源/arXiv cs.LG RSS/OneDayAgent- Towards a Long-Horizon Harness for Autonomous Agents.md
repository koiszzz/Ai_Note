# OneDayAgent: Towards a Long-Horizon Harness for Autonomous Agents

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jingsheng Zheng, Xinyuan Fang, Jintian Zhang, Zhengke Gui, Huajun Chen, Ningyu Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05013)

------

arXiv:2608.05013v1 Announce Type: cross

Abstract: LLM agents are increasingly applied to open-ended everyday requests that span work, study, and life. These tasks are long-horizon, cross-environment, and multimodal, forcing the agent to preserve goals and constraints across many steps while navigating heterogeneous tools and attachments. While prior work has addressed individual failure modes such as goals drift, states loss, and context overflow, whether a single harness can manage them jointly and remain effective across backends has received less study. We present OneDayAgent, a long-horizon harness for autonomous agents. OneDayAgent turns an open-ended request into a managed execution process that decomposes tasks into bounded subtasks, maintains execution memory under context pressure, and verifies and repairs the final deliverable. We evaluate OneDayAgent on AgentIF-OneDay across 104 tasks. With the GLM-5.2 backend, OneDayAgent sets a new state of the art with an overall score of 0.821. The same harness runs across five backend LLMs from three model families, indicating the harness generalizes across backends without tuning, even as different models induce distinct execution styles under the same workflow.
