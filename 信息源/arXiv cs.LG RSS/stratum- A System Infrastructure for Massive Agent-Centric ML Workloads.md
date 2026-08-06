# stratum: A System Infrastructure for Massive Agent-Centric ML Workloads

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Arnab Phani, Elias Strauss, Sebastian Schelter　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.DB　|　原文：[打开链接](https://arxiv.org/abs/2603.03589)

------

arXiv:2603.03589v3 Announce Type: replace-cross

Abstract: Recent advances in large language models (LLMs) transform how machine learning (ML) pipelines are developed and evaluated. LLMs enable a new type of workload, agentic pipeline search, in which autonomous or semi-autonomous agents generate, validate, and optimize complete ML pipelines. These agents predominantly operate over popular Python ML libraries and exhibit highly exploratory behavior. This results in thousands of executions for data profiling, pipeline generation, and iterative refinement of pipeline stages. However, the existing Python-based ML ecosystem is built around libraries such as Pandas and scikit-learn, which are designed for human-centric, interactive, sequential workflows and remain constrained by Python's interpretive execution model, library-level isolation, and limited runtime support for executing large numbers of pipelines. Meanwhile, many high-performance ML systems proposed by the systems community either target narrow workload classes or require specialized programming models, which limits their integration with the Python ML ecosystem and makes them largely ill-suited for LLM-based agents. This growing mismatch exposes a fundamental systems challenge in supporting agentic pipeline search at scale. We therefore propose stratum, a unified system infrastructure that decouples pipeline execution from planning and reasoning during agentic pipeline search. Stratum integrates seamlessly with existing Python libraries, compiles batches of pipelines into optimized execution graphs, and efficiently executes them across heterogeneous backends, including a novel Rust-based runtime. We present stratum's architectural vision along with an early prototype, discuss key design decisions, and outline open challenges and research directions. Finally, preliminary experiments show that stratum can significantly speed up large-scale agentic pipeline search up to 16.6x.
