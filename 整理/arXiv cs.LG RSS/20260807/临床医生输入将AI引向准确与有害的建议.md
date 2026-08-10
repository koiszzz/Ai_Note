---
published: 2026-08-07
title: "临床医生输入将 AI 引向准确与有害的建议"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Clinician input steers AI toward accurate and harmful recommendations.md"
source_note: "[[信息源/arXiv cs.LG RSS/Clinician input steers AI toward accurate and harmful recommendations]]"
source_sha256: dca2f42cda3f1510c099a387fbf8302ddd8ded9b8f76770dc00a5f90daf45ed4
original_url: "https://arxiv.org/abs/2603.14158"
processed: 2026-08-07
language: zh-CN
---

# 临床医生输入将 AI 引向准确与有害的建议

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Ivan Lopez, Selin S. Everett, Bryan J. Bunning, April S. Liang, Dong Han Yao, Shivam C. Vedak, Kameron C. Black, Sophie Ostmeier, Stephen P. Ma, Emily Alsentzer, Jonathan H. Chen, Akshay S. Chaudhari, Eric Horvitz
> - **发布时间**：2026-08-07
> - **分类**：cs.HC
> - **原文**：[打开链接](https://arxiv.org/abs/2603.14158)

## 摘要

- 用 61 份精选 NEJM 病例记录、8 个专有与开源模型的 21 种推理变体，测试专家或误导性临床推理如何影响 AI 生成的鉴别诊断与下一步建议。
- 接触临床医生后 LLM-临床医生一致性上升：≥3 个重叠鉴别诊断的模拟从 65.8% 升至 93.5%，≥3 个重叠下一步建议从 20.3% 升至 53.8%。
- 专家语境显著提升全部 21 个模型的正确最终诊断纳入（平均 +20.4 个百分点），对抗语境显著降低 14 个模型性能（平均 −5.4 个百分点）。
- 推理时扩展将临床医生引入建议的有害回响在 WHO 危害等级上降低 62.7%–83.5%；推理时提示可恢复对抗语境损失的诊断准确率。

## 正文

大语言模型（LLM）正进入临床工作流，但评估很少考察临床交互中临床医生推理如何塑造模型行为。研究使用 61 份精选 NEJM 病例记录，在来自 8 个专有与开源模型的 21 种推理变体上，测试专家或误导性临床推理如何影响 AI 生成的鉴别诊断与下一步建议。接触临床医生后，LLM-临床医生一致性增加：含 ≥3 个重叠鉴别诊断的模拟从 65.8% 升至 93.5%，含 ≥3 个重叠下一步建议的从 20.3% 升至 53.8%。专家语境显著提升全部 21 个模型的正确最终诊断纳入（平均 +20.4 个百分点），既反映推理改善也反映被动内容回响；对抗语境则显著降低 14 个模型的性能（平均 −5.4 个百分点）。专家语境还显著提升全部 21 个模型的首位诊断准确率，而对抗语境显著降低 13 个模型的该指标。多轮分歧挑战揭示不同模型表型，从高度顺从到固执己见，对抗论证即使对原本稳健的模型也仍是弱点。推理时扩展将临床医生引入建议的有害回响按 WHO 危害严重度等级降低：轻度 62.7%、中度 57.9%、严重 76.3%、致死级 83.5%。推理时提示在 GPT-5、Claude Sonnet 4.5 与 Gemini 3 Flash 上恢复了对抗语境损失的诊断准确率，同时保留专家语境的收益，并大幅减少各严重度等级上高度一致的有害回响。这些发现为评估临床医生-AI 协作奠定基础，并引入对安全与稳健性至关重要的交互式指标与缓解策略。

## 关键词

临床 AI、LLM、诊断、对齐、有害建议、推理时干预
