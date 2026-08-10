---
published: 2026-08-07
title: "SCP-NL2TL：带语义验证的自然语言到时序逻辑规格的选择性保形预测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SCP-NL2TL- Selective Conformal Prediction with Semantic Verification for Natural Language to Tempora.md"
source_note: "[[信息源/arXiv cs.AI RSS/SCP-NL2TL- Selective Conformal Prediction with Semantic Verification for Natural Language to Tempora]]"
source_sha256: 4a98d5d2902b2c5b580630ed9a7d519250165ad301337809137ec33092d86906
original_url: "https://arxiv.org/abs/2608.05439"
processed: 2026-08-07
language: zh-CN
---

# SCP-NL2TL：带语义验证的自然语言到时序逻辑规格的选择性保形预测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yixuan Wang, Licheng Luo, Yu Fu, Kaidi Xu, Yue Dong, Mingyu Cai
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05439)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SCP-NL2TL- Selective Conformal Prediction with Semantic Verification for Natural Language to Temporal Lo|查看原始文件]]

## 摘要

- 将自然语言指令翻译为机器可解释的形式化规格使机器人与自主系统能规划、推理并形式化验证其行为；但现有翻译模型通常为每个输入生成规格，即使结果不可靠或未捕获用户意图，在安全关键应用中制造风险。
- 受选择性保形预测启发，提出选择性翻译框架：不仅生成形式化规格，还确定何时可信任——可靠性由两个互补黑盒信号评分：规格回译为自然语言的保真度，以及精确语义等价下重复翻译的离散度，它们在不同错误上失败，联合比单独任一更尖锐地分离不正确翻译。
- 保形风险控制将该分数校准为接受规格或弃权的决策，对接受错误规格用于执行的速率给出无分布界；指令嵌入上的保形异常检测器在任何翻译尝试前筛出分布外输入。
- 框架跨形式化规格语言通用，信号时序逻辑（STL）、线性时序逻辑（LTL）与几何时空逻辑（SpaTiaL）实验展示改进翻译可靠性、评估跨层偏移下稳健性与有效不确定性感知弃权；为可信自然语言接口建立基础，使 AI 系统识别生成规格可能不可靠的时机。

## 正文

将自然语言指令翻译为机器可解释的形式化规格，使机器人与自主系统能够规划、推理并形式化验证其行为。然而，现有翻译模型通常为每个输入生成一个规格，即使结果不可靠或未能捕获用户意图，在安全关键应用中制造风险。受选择性保形预测（selective conformal prediction）启发，我们提出一个选择性翻译框架：不仅生成形式化规格，还确定何时可以信任它们。可靠性由两个互补的黑盒信号评分：规格回译为自然语言的保真度（fidelity），以及精确语义等价下重复翻译的离散度（dispersion）。这两个信号在不同错误上失败，联合比单独任一更尖锐地分离不正确的翻译。保形风险控制（conformal risk control）将该分数校准为接受规格或弃权的决策，对接受错误规格用于执行的速率给出无分布（distribution-free）界，而指令嵌入上的保形异常检测器在任何翻译尝试之前筛出分布外输入。所提框架跨形式化规格语言通用，在信号时序逻辑（STL）、线性时序逻辑（LTL）与几何时空逻辑（SpaTiaL）上的实验展示了改进的翻译可靠性、在评估的跨层偏移下的稳健性，以及有效的不确定性感知弃权。这项工作为可信自然语言接口建立基础，使 AI 系统能够识别生成的规格可能不可靠的时机。

## 关键词

#自然语言到规格 #保形预测 #时序逻辑 #选择性翻译
