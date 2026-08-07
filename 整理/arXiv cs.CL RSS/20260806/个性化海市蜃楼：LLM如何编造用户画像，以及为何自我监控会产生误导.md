---
published: 2026-08-06
title: 个性化海市蜃楼：LLM 如何编造用户画像，以及为何自我监控会产生误导
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/The Personalization Mirage- How LLMs Fabricate User Profiles, and Why Self-Monitoring Misleads.md
source_note: "[[信息源/arXiv cs.CL RSS/The Personalization Mirage- How LLMs Fabricate User Profiles, and Why Self-Monitoring Misleads]]"
source_sha256: 24f4d5258ff7f10408bdc90fabffb15514ecbc78f5196471aa78baaef26dd66c
original_url: https://arxiv.org/abs/2608.04570
processed: 2026-08-07
language: zh-CN
---

# 个性化海市蜃楼：LLM 如何编造用户画像，以及为何自我监控会产生误导

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04570)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/The Personalization Mirage- How LLMs Fabricate User Profiles, and Why Self-Monitoring Misleads|查看原始文件]]

## 摘要

- 具有持久记忆的个性化 LLM 正被日益部署，但其用户模型的忠实度仍未得到检验
- 研究过度推断（over-inference, OI）现象：LLM 编造超出证据支持范围的用户属性
- 提出 MirageBench：150 个横跨刻板、反刻板与中立类型的人格，6 项覆盖"想象梯度"的个性化任务，一套由独立评判者操作化的四向忠实度分类体系（对照 400 条声明的盲测人工标注验证：四类 Cohen's kappa = 0.863，二类 kappa = 0.900），以及 7 个模型家族 12 个模型在 143616 条已评判声明上的排行榜
- 过度推断普遍存在：全部 12 个模型在 35%--49% 的声明上过度推断（跨模型均值 41.6%，按声明加权 41.8%），无一幸免
- 揭示"自我监控反转"：在模型选择层面，模型的自我评估 OI 与其评判测得 OI 呈负秩相关（rho = -0.60, p = 0.044）

## 正文

具有持久记忆的个性化 LLM 正被日益广泛地部署，然而其用户模型的忠实度仍未得到检验。我们研究过度推断（OI）：即 LLM 编造超出证据支持范围的用户属性的现象。我们引入了 MirageBench，它包含 150 个在刻板、反刻板和中性画像之间均衡分布的人格，6 项横跨"想象梯度"的个性化任务，一套由独立评判者操作化的四向忠实度分类体系（该体系在 400 条声明上对照盲测人工标注者进行了验证：四类 Cohen's kappa = 0.863，二类 kappa = 0.900），以及 7 个模型家族共 12 个模型在 143616 条已评判声明上的排行榜。

我们发现过度推断无处不在：12 个模型中的每一个都在其 35%--49% 的声明上过度推断（跨模型均值 41.6%，按声明加权 41.8%），本次评估中没有模型能幸免。最引人注目的是，我们揭示了一种"自我监控反转"（Self-Monitoring Inversion）：在模型选择层面，模型的自我评估 OI 与其评判者测得的 OI 呈负秩相关（rho = -0.60, p = 0.044；探索性结果，宽 bootstrap 置信区间 [-0.90, +0.06]，n = 12）。报告过度推断最少的模型，往往恰恰是被标记为编造最多的模型，因此自我报告的信心在比较模型时是一个误导性信号——尽管在单个模型内部，自我审计仍能对该模型自身的声明进行中等程度的排序（AUROC 0.58--0.83）。

我们进一步表明，OI 与任务相关（27%--59%），并且在一个多轮试点实验中，推断出的属性近似线性地累积，很少被修正。MirageBench 将外部验证而非模型自我报告定位为可信个性化更可靠的基础。

## 关键词

#个性化 #用户画像 #过度推断 #自我监控 #LLM忠实度 #MirageBench #arXiv
