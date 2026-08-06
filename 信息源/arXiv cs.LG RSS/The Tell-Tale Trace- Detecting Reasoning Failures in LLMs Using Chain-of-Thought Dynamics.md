# The Tell-Tale Trace: Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shashwat Sourav, Aishwarya Balwani　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03291)

------

arXiv:2608.03291v1 Announce Type: new

Abstract: Chain-of-thought (CoT) reasoning improves large language model (LLM) performance while also providing an observable interface to the model's reasoning process. Existing approaches that leverage verbalized CoTs to monitor reasoning correctness, however, largely evaluate the semantic correctness or consistency of individual intermediate steps, rather than how the reasoning process evolves across the trace. As a result, failures distributed across the reasoning trajectory, rather than those localized to a single incorrect step, remain comparatively underexplored. Furthermore, verbalized CoTs need not faithfully reflect the model's internal reasoning, motivating analyses that do not treat individual statements as literal accounts of internal computation. In this work, we therefore ask whether the dynamics of visible CoT can be leveraged to systematically distinguish successful from failed reasoning without assuming such semantic faithfulness. We study a range of LLMs on verifiable Boolean satisfiability tasks with variable complexity, enabling controlled comparisons near each model's capability frontier. Tagging CoT sentences by reasoning function reveals premature verification collapse on SAT problems: incorrect traces enter clause checking earlier, repeat similar operations, and finalize sooner. On UNSAT problems, models presumptuously move towards incorrect SAT conclusions, checking candidate assignments rather than deriving contradictions across constructed cases. Subsequently, a targeted proof-search prompt intervention raises Llama3-70B accuracy from 13.3% to 85%, correcting 84.6% of these errors. These results show that capability failures can manifest as distributed, task-dependent changes in the structure of visible reasoning, and that CoT dynamics agnostic to whether the verbalized trace reflects the model's internal computations can help diagnose and correct failures.
