# RA-CAD: Learning Post-Execution Critique for State-Aware Text-to-CAD Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shuhao Yan, Changhao He, Xi Peng, Peng Hu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05714)

------

arXiv:2608.05714v1 Announce Type: new

Abstract: Text-to-CAD generation translates natural-language design intent into editable and executable parametric computer-aided design (CAD) codes, reducing the expertise and effort required for manual modeling. Existing methods incorporate fixed, externally supplied, prompt-induced, or separately optimized critique mechanisms to optimize the generation process, but they do not necessarily optimize how feedback is interpreted and translated into effective corrective actions throughout the generation process. To bridge this feedback-utilization gap, we present RA-CAD (ReAct Agent for CAD), a state-aware agent that interacts with the CAD environment through a Generate--Execute--Critique--Rewrite loop. At each iteration, RA-CAD executes the current code and observes its outcome. Conditioned on the design instruction, current code, and execution feedback, the agent then generates an explicit post-execution critique as an intermediate policy action. This critique either validates the current result for termination or provides revision-oriented guidance that conditions the next rewrite. CAD Code Bootstrapping (CCB) first establishes fundamental parametric CAD coding capabilities through supervised fine-tuning. Feedback-Driven Agent Optimization (FAO) subsequently applies trajectory-level Group Relative Policy Optimization to both policy-generated code and critique sequences, assigning terminal F1 and Chamfer Distance rewards to the complete interaction trajectory. This formulation makes critique an outcome-aligned, learnable policy decision rather than an unoptimized auxiliary output. Experiments on CADFusion and Text2CAD show that RA-CAD achieves state-of-the-art execution validity and geometric quality compared with existing methods and strong proprietary language models, demonstrating the effectiveness of the proposed state-aware text-to-CAD agent.
