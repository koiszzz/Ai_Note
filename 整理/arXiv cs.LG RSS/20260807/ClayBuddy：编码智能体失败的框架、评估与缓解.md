---
published: 2026-08-07
title: "ClayBuddy：编码智能体失败的框架、评估与缓解"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ClayBuddy- A Framework, Evaluation, & Mitigation of Coding Agent Failures.md"
source_note: "[[信息源/arXiv cs.LG RSS/ClayBuddy- A Framework, Evaluation, & Mitigation of Coding Agent Failures]]"
source_sha256: 924e47c59ecd35f3a899b4b175b891bf9387cd189cc14857ff2d8d7fae086996
original_url: "https://arxiv.org/abs/2606.19380"
processed: 2026-08-07
language: zh-CN
---

# ClayBuddy：编码智能体失败的框架、评估与缓解

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Kenneth Ge, Andre Assis
> - **发布时间**：2026-08-07
> - **分类**：cs.SE
> - **原文**：[打开链接](https://arxiv.org/abs/2606.19380)

## 摘要

- 将编码智能体失败模式归因于三种机制：规格不足（默认模型行为不安全）、能力错误（安全动作可得但模型未遵守）与智能体外壳错误（模型无法经外壳执行安全动作）。
- 在 8 项不同评估（各源自真实部署失败）中评估，共 20 个编码环境与 59 个合成转录模板。
- 提出 ClayBuddy：可随用户偏好塑形、模型可会话中修改的外壳改造，以缓解这些错误。
- 通过添加智能体自编辑上下文的工具、扩展系统提示、可定制命令分类器与确定性护栏，ClayBuddy 在统计显著数量的样本上更安全。

## 正文

软件工程与部署正日益委托给 AI 编码智能体。其采纳规模正暴露罕见但极具破坏性的失败模式。本文研究这些失败模式，将其归因于三种不同机制：规格不足（underspecification），默认模型行为不安全；能力错误（capability errors），安全动作可得但模型因偏差或能力局限未遵守；以及智能体外壳错误（agent harness errors），模型无法经外壳执行安全动作。研究在 8 项不同评估中评估这些机制，每项都受真实部署失败启发，共 20 个编码环境与 59 个合成转录模板，作为隔离失败机制的受控压力测试。基于该评估，研究提出 ClayBuddy——一种塑形于用户偏好、模型可在会话中修改的外壳改造，以缓解这些错误。通过添加让智能体编辑自身上下文的工具、扩展的系统提示、可定制的命令分类器与确定性护栏，研究证明 ClayBuddy 在统计显著数量的样本上更安全。因此，研究为当前编码智能体提出具体缓解措施，并为未来智能体外壳功能提出设计哲学。

## 关键词

编码智能体、失败模式、护栏、AI 安全、智能体外壳
