# CURV: Enhancing Chart Understanding Through Curriculum Visual Grounded Reasoning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xuehang Guo, Pingyue Zhang, Ruiyi Zhang, Zhenhailong Wang, Hanrui Lyu, Heng Ji, Tong Sun, Qingyun Wang, Manling Li　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02833)

------

arXiv:2608.02833v1 Announce Type: cross

Abstract: Chart question answering (CQA) requires multimodal large language models (MLLMs) to integrate visual comprehension with logical reasoning, yet current models struggle with accurate visual grounding and coherent reasoning chains. While extrinsic chain-of-thought prompting and visual cues significantly improve performance, current MLLMs lack intrinsic visual grounded reasoning capabilities, leading to inaccurate perception and reasoning disconnected from visual evidence. To address these limitations, we propose CURV, a curriculum learning framework that develops intrinsic visual reasoning capabilities by reformulating CQA as multi-step visual grounded reasoning, where each step coordinates logical reasoning with dynamic visual grounding through spatial attention concentration. To assist model learning, we further introduce CCQA, a three-level curriculum dataset with scalable synthetic generation across diverse chart types and reasoning patterns. Our curriculum systematically progresses from basic single-operation reasoning to complex multi-chart compositional tasks. Experiments demonstrate that CURV achieves up to $\uparrow20.50\%$ improvements over baselines and is generalizable to real-world benchmarks (up to $\uparrow12.30\%$) and out-of-domain multimodal reasoning tasks (up to $\uparrow10.20\%$), validating the effectiveness of internalizing visual reasoning with dynamic grounding for enhanced chart understanding capabilities. Code is available at: https://xhguo7.github.io/CURV/.
