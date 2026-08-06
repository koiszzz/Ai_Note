# ChartAnno: Evaluating MLLMs for Chart Annotation Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhenghan Chen, Zekai Shao, Lidan Tan, Xin Lin, Xingchen Zeng, Yi Shan, Ziyue Lin, Xiaoliang Fu, Xinyuan Liu, Yuetong Guo, Fen Wang, Bongshin Lee, Siming Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03464)

------

arXiv:2608.03464v1 Announce Type: new

Abstract: Multimodal large language models (MLLMs) have made significant progress in chart understanding, generation, and editing, but their ability to annotate existing charts remains underexplored. Annotating charts is a common yet challenging communicative task, requiring models to infer intended messages, interpret chart semantics, and place appropriate textual or graphical elements. To address this gap, we introduce ChartAnno, a benchmark for evaluating MLLMs on chart annotation generation. It contains 1,200 real-world charts with paired code and annotation instructions across three levels of instruction specificity. We evaluate 10 representative MLLMs under two primary input settings: (1) chart code alone and (2) both chart code and chart image, and further include a chart image-only ablation study. Results show that proprietary models remain stronger overall, although large-scale open-source models narrow the gap. More specific instructions improve annotation quality, while inferring abstract intent remains most difficult for current MLLMs. Providing chart images brings limited overall gains, with improvements mainly appearing in design-related metrics. These findings highlight chart annotation generation as a challenging task requiring semantic grounding and effective annotation design. Code and data will be released in a future version.
