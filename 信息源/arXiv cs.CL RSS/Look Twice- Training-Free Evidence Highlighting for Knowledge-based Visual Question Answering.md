# Look Twice: Training-Free Evidence Highlighting for Knowledge-based Visual Question Answering

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Marco Morini, Sara Sarto, Marcella Cornia, Lorenzo Baraldi, Rita Cucchiara　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.01280)

------

arXiv:2604.01280v2 Announce Type: replace-cross

Abstract: Knowledge-based Visual Question Answering (KB-VQA) requires Multimodal Large Language Models (MLLMs) to identify and combine fine-grained visual cues with retrieved textual evidence. However, retrieval often introduces noisy and partially relevant content, while images contain distracting visual regions, causing pretrained MLLMs to overlook the evidence that actually supports the answer. To address this, we introduce Look Twice (LoT), a training-free inference-time framework that turns the model's own internal attention into an explicit multimodal evidence-selection mechanism. LoT first leverages the model's internal attention patterns to identify query-relevant image regions and textual sentences, filters attention sinks and distracting content, and reformulates the input to explicitly highlight the selected evidence before answer generation. The method requires no parameter updates, auxiliary models, or architectural modifications. Across four KB-VQA benchmarks and ten off-the-shelf MLLMs ranging from 2B to 38B parameters, LoT improves every evaluated backbone, with average gains of up to +12.5 accuracy points. It also provides further gains when combined with established context-refinement strategies, yielding additional improvements over already refined inputs. These results establish LoT as a general and effective mechanism for enabling pretrained MLLMs to exploit available multimodal evidence more accurately. Source code is publicly available at https://aimagelab.github.io/LoT/.
