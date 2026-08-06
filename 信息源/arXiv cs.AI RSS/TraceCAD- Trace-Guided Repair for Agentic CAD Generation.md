# TraceCAD: Trace-Guided Repair for Agentic CAD Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Fengxiao Fan, Jingzhe Ni, Fan Sang, Xiaolong Yin, Yu Liu, Ruofeng Tong, Min Tang, Peng Du　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03062)

------

arXiv:2608.03062v1 Announce Type: new

Abstract: LLM-based CAD agents produce executable parametric programs, but their correction loops may lose evidence about satisfied requirements, faulty operations, and prior repairs. We introduce TraceCAD, a recovery layer that links requested features, modeling steps, failure evidence, and candidate outcomes as persistent state. TraceCAD diagnoses likely faulty operations, searches bounded edits in their dependency regions, validates candidates through execution and preservation checks, and retains successful and failed repair outcomes in reusable skill memory. On DeepCAD-derived benchmarks with 200-model ablations and a 1K-model comparison, TraceCAD achieves competitive geometric quality in terms of IoU, Chamfer distance, and Hausdorff distance. Removing persistent state nearly halves recovery score; removing localized search more than doubles geometric regression and doubles code-agent invocations. Initializing the skill store on disjoint training models further reduces retries, token cost, and latency. These results demonstrate that persistent, localized, and reusable recovery improves final CAD quality and repair reliability.
