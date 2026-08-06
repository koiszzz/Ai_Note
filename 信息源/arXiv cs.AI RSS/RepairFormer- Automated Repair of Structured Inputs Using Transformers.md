# RepairFormer: Automated Repair of Structured Inputs Using Transformers

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ovi Paul, Tom J King, Ali Shokri　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.05060)

------

arXiv:2608.05060v1 Announce Type: cross

Abstract: Structured input files such as JSON, DOT, OBJ, INI, S-expression, and TinyC are widely used in software systems, but small corruptions can cause parsers to reject otherwise useful data. Repairing such inputs is important because malformed configuration, program, and data files can interrupt testing, analysis, deployment, and downstream automation even when most of the original content remains intact. Existing repair techniques can produce structurally valid inputs, but they often rely on deletion or repeated search, which may lose original content and result in semantic incorrectness. This paper presents RepairFormer, a transformer-based framework for structured input repair. The approach formulates repair as a supervised sequence generation task and uses format tags, oracle validation, and boundary-localized repair to generate valid outputs while preserving content. The boundary workflow focuses generation on the detected fault region, reducing the input size, and supporting repair of longer files. In evaluation, RepairFormer achieves a 88% in repair and 94% in recovery, showing strongest content preservation when repairs are successful. Additional experiments on our benchmark shows RepairFormer repairs 97.57% and recovers 94.29% with 5x faster runtime compared to state of the art.
