---
published: 2026-08-06
title: 错误的设计意图比没有更糟：CAD 程序补全中标题条件作用的错排对照诊断
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Wrong Design Intent Can Be Worse Than None- A Derangement-Control Diagnosis of Header Conditioning i.md
source_note: "[[信息源/arXiv cs.LG RSS/Wrong Design Intent Can Be Worse Than None- A Derangement-Control Diagnosis of Header Conditioning i]]"
source_sha256: b9c9bb5dd54013ffb914198f5f5fa183f7b0d6e0acc760102f965b263af8dd63
original_url: https://arxiv.org/abs/2607.23191
processed: 2026-08-07
language: zh-CN
---

# 错误的设计意图比没有更糟：CAD 程序补全中标题条件作用的错排对照诊断

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.23191)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Wrong Design Intent Can Be Worse Than None- A Derangement-Control Diagnosis of Header Conditioning i|查看原始文件]]

## 摘要

- 研究 CADCON（五特征设计意图标题）在 Qwen2.5-Coder-1.5B LoRA 微调中的条件作用：在条件补全（40% 前缀）下，语义错误的标题使模型本可渲染的意图（多边形、薄壁）符合度低于无标题基线（0.43 → 0.30/0.21），但组合显著性规则未通过。
- 错排对照（打乱标题重训）显示边际相同、内容相关性大降，却无可检测的正确到错误下降，证明危害来自学习到的标题到程序映射而非标题边际。
- 要求程序可执行会消除正确标题几乎全部表面收益（+0.22 → +0.03 → +0.02），即"执行盲区"而非检测器分歧；危害具有场景特异性，0% 前缀时基线无法生成任何有效 CAD。

## 正文

微调后的代码 LLM 常常以设计意图标题（design-intent header）为条件来引导参数化 CAD 生成，但模型是否真正读取该标题的内容，既没有在执行级评分下测试过，也没有使用因果对照来验证。我们研究 CADCON，一个在 Qwen2.5-Coder-1.5B 的 LoRA 微调过程中前置到 CadQuery 风格草图-拉伸程序上的五特征设计意图标题，并用对生成 B-rep 实体执行可执行几何断言的重新评分。

跨三个种子和一个预注册的 {0%, 40%} 前缀 × {正确, 错误, 掩码} 标题矩阵——推理对提交阶段审计发现的 38 个唯一程序簇保持去重感知——我们报告：（i）在条件补全（40% 前缀）中，语义错误的标题使模型本可在无条件下渲染的意图（即多边形和薄壁）的符合度低于无标题基线（文本/标记从 0.43 降至 0.30/0.21）。该下降在 3/3 个标记标题种子中显著，但在 3 个文本标题种子中只有 1 个显著，因此预注册的组合规则（要求文本侧也显著）未通过。

（ii）错排对照（derangement control）——用打乱的标题重新训练：边际完全相同，内容相关性大幅降低——依然胜任，却未显示出可检测的正确到错误下降，而原文模型 M 存在这种下降（文本标题；交互在 3/3 个种子上显著，$p \le 0.024$，一个种子低于冻结的非零计数护栏）。因此，危害需要学习到的标题→程序映射，而不是标题边际。

（iii）要求生成程序可执行会消除正确标题几乎全部的表面收益（标记：未门控正则 +0.22 → 门控正则 +0.03 → 门控几何 +0.02），因此这种缩水是执行盲区（execution blindness），而非检测器分歧。（iv）这种危害是场景特定的：在 0% 前缀下，基线根本无法生成任何有效 CAD。错误的意图不是噪声：在可检测之处，它积极地误导生成。

## 关键词

#CAD生成 #代码LLM #条件生成 #因果对照 #错排对照
