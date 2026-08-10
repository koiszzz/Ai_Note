---
published: 2026-08-07
title: "SCP-NL2TL：带语义验证的选择性保形预测用于自然语言到时序逻辑规格"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SCP-NL2TL- Selective Conformal Prediction with Semantic Verification for Natural Language to Tempora.md"
source_note: "[[信息源/arXiv cs.LG RSS/SCP-NL2TL- Selective Conformal Prediction with Semantic Verification for Natural Language to Tempora]]"
source_sha256: 98d63e67673d70f018b10762ca90a596535b7ca44cb91f1256a698ca19b2d4bd
original_url: "https://arxiv.org/abs/2608.05439"
processed: 2026-08-07
language: zh-CN
---

# SCP-NL2TL：带语义验证的选择性保形预测用于自然语言到时序逻辑规格

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yixuan Wang, Licheng Luo, Yu Fu, Kaidi Xu, Yue Dong, Mingyu Cai
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05439)

## 摘要

- 将自然语言指令翻译为机器可解释形式规格使机器人与自主系统能规划、推理并形式验证行为；但现有翻译模型通常为每个输入生成规格，即使结果不可靠或未捕捉用户意图，在安全关键应用中制造风险。
- 受选择性保形预测启发，提出选择性翻译框架：不仅生成形式规格，还决定何时可信任；可靠性由两个互补黑盒信号评分：规格回译为自然语言的保真度与精确语义等价下重复翻译的离散度——它们在不同错误上失败，联合比任一单独更锐利地分离错误翻译。
- 保形风险控制将该分数校准为接受或弃权的决策，对执行中被接受的错误规格率给无分布界；指令嵌入上的保形异常检测器在任何翻译尝试前筛出分布外输入。
- 框架跨形式规格语言通用，信号时序逻辑（STL）、线性时序逻辑（LTL）与几何时空逻辑（SpaTiaL）实验显示改进的翻译可靠性、评估跨层漂移下的稳健性以及有效的不确定性感知弃权。

## 正文

将自然语言指令翻译为机器可解释的形式规格，使机器人与自主系统能够规划、推理并形式验证其行为。然而，现有翻译模型通常为每个输入生成规格，即使结果不可靠或未能捕捉用户意图，在安全关键应用中制造风险。受选择性保形预测（selective conformal prediction）启发，研究提出选择性翻译框架：不仅生成形式规格，还确定它们何时可以被信任。可靠性由两个互补黑盒信号评分：规格回译为自然语言的保真度（fidelity），以及精确语义等价下重复翻译的离散度（dispersion）。它们在不同的错误上失败，联合起来比任一单独信号更锐利地分离错误翻译。保形风险控制（conformal risk control）将该分数校准为接受或弃权的决策，对执行中被接受的错误规格率给出无分布界；指令嵌入上的保形异常检测器在任何翻译尝试之前筛出分布外输入。所提框架跨形式规格语言通用，信号时序逻辑（STL）、线性时序逻辑（LTL）与几何时空逻辑（SpaTiaL）上的实验显示翻译可靠性改进、评估跨层漂移下的稳健性以及有效的不确定性感知弃权。该工作通过使 AI 系统识别生成的规格可能不可靠的时刻，为可信自然语言界面奠定基础。

## 关键词

时序逻辑、自然语言到形式规格、保形预测、弃权、语义验证
