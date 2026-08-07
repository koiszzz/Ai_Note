---
published: 2026-08-06
title: RESPClinBench：呼吸道专科护理中多模态临床决策与纵向疾病管理的基准测试
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/RESPClinBench- Benchmarking Multimodal Clinical Decision-Making and Longitudinal Disease Management .md
source_note: "[[信息源/arXiv cs.CL RSS/RESPClinBench- Benchmarking Multimodal Clinical Decision-Making and Longitudinal Disease Management ]]"
source_sha256: ad7d1c7cf9a278646bbc6ba6e150132290e1aa402e4a288b92de48d96e6fe6ec
original_url: https://arxiv.org/abs/2608.04514
processed: 2026-08-07
language: zh-CN
---

# RESPClinBench：呼吸道专科护理中多模态临床决策与纵向疾病管理的基准测试

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04514)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/RESPClinBench- Benchmarking Multimodal Clinical Decision-Making and Longitudinal Disease Management |查看原始文件]]

## 摘要

- 背景：呼吸道专科护理需要多模态解读、纵向风险评估、符合指南的干预和全病程管理，而以考试为导向的医学基准对此刻画不足。
- 目标：开发 RESPClinBench——基于真实世界场景的呼吸道临床决策基准，并在 AECOPD-PIM 与 PNBIM 两个子集上评估七款当代大语言模型。
- 方法：病例改编自已去标识化的呼吸道临床数据；三位主治级呼吸科医生修订病例、参考答案与原子临床行动点，一位资深呼吸科专家进行交叉审查与最终裁定。AECOPD-PIM 含 427 道开放式慢阻肺病例，PNBIM 含 196 道结合胸部 CT 与结构化临床信息的多模态肺结节病例。七款模型经标准化 API 推理（temperature 0、最大输出 8192 token）生成 4361 条响应；自动化框架以原子行动召回率与基于量规的 LLM-as-a-Judge 评分的算术平均作为最终得分。
- 结果：623 例中平均最终得分 68.58；Qwen3.6-27B 以 71.22 总分第一，Qwen3.5-397B-A17B 以 72.48 领跑 PNBIM，Qwen3.6-27B 以 71.11 领跑 AECOPD-PIM。PNBIM 响应中影像幻觉与严重医疗风险分别占 31.85% 与 8.16%；AECOPD-PIM 响应中用药安全风险与严重医疗风险分别占 26.93% 与 1.44%。
- 结论：RESPClinBench 识别出多模态肺结节评估与纵向慢阻肺管理中的任务特化局限；结合显式临床行动覆盖、整体评估与独立安全标记，为模型选择与前瞻性验证提供了临床基础。

## 正文

本文编号：arXiv:2608.04514v1（公告类型：new），以下为摘要全文翻译。

背景：呼吸道专科护理需要多模态解读、纵向风险评估、符合指南的干预以及全病程管理，而这些在以考试为导向的医学基准中刻画不足。目标：开发 RESPClinBench——一个基于真实世界场景的呼吸道临床决策基准，并在 AECOPD-PIM 与 PNBIM 上评估七款当代大语言模型。方法：RESPClinBench 病例改编自已去标识化的呼吸道临床数据。三位主治级呼吸科医生修订了病例、参考答案和原子临床行动点，一位资深呼吸科专家进行了交叉审查与最终裁定。AECOPD-PIM 包含 427 道开放式慢阻肺病例，PNBIM 包含 196 道结合胸部 CT 与结构化临床信息的多模态肺结节病例。七款模型通过标准化 API 推理（temperature 为 0、最大输出长度 8192 token）生成了 4361 条响应。一个自动化框架计算最终得分，即原子行动召回率与基于量规的 LLM-as-a-Judge 评估的算术平均。结果：在 623 例中，平均最终得分为 68.58。Qwen3.6-27B 以 71.22 的总分位居第一，Qwen3.5-397B-A17B 以 72.48 领跑 PNBIM，Qwen3.6-27B 以 71.11 领跑 AECOPD-PIM。PNBIM 响应中影像幻觉和严重医疗风险分别出现在 31.85% 和 8.16% 的响应中；AECOPD-PIM 响应中用药安全风险和严重医疗风险分别出现在 26.93% 和 1.44% 的响应中。结论：RESPClinBench 识别出多模态肺结节评估与纵向慢阻肺管理中的任务特化局限。将显式临床行动覆盖、整体评估与独立安全标记相结合，为模型选择与前瞻性验证提供了具有临床依据的基础。

## 关键词

#RESPClinBench #临床决策 #呼吸道专科 #多模态医学 #大语言模型 #基准测试
