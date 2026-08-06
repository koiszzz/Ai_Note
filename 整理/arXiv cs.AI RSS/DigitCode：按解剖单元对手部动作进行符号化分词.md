---
title: "DigitCode：按解剖单元对手部动作进行符号化分词"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DigitCode- Symbolic Tokenization of Hand Motion by Anatomical Units.md"
source_note: "[[信息源/arXiv cs.AI RSS/DigitCode- Symbolic Tokenization of Hand Motion by Anatomical Units]]"
source_sha256: 7a0214c248f4fb18b0432ab097fe6330f682e7bf5b57958e7ed68f7ab44e767d
original_url: "https://arxiv.org/abs/2608.03127"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DigitCode：按解剖单元对手部动作进行符号化分词

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Haoyu Gu、Haotian Lu、Jingrun Du 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03127)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DigitCode- Symbolic Tokenization of Hand Motion by Anatomical Units|查看原始文件]]

## 摘要

- 手部动作表示（关节角或 MANO 参数）准确但无结构；DigitCode 通过沿手的单元层级适配、分组与分层 HL 字母表，在一个代码中确定符号应跨越的解剖单元（骨骼、手指或整只手），把符号表示的量化误差削减四分之三。
- 关键杠杆是单元而非量化器族：固定单元时，免训练与学习型强量化器在重建上可互换，而沿解剖层级下移才是改变精度的关键。
- 层级还对应下游任务需求：每个手指 token 兼作免训练、可编辑的句柄，用于修复畸形生成的手与重定向到机器人。
- 发布可复现测试平台 HandTok，项目页面：https://digitcode-demo.github.io

## 正文

论文编号：arXiv:2608.03127v1（更新类型：cross）。以下为摘要全文翻译。

手部动作承载人类活动中最细粒度的信息，但手部生成、理解与机器人学习背后的表示绝大多数是连续的——关节角或 MANO 参数。这些表示准确但无结构：手指无法作为符号被索引或编辑，也没有任何标记表明姿势在解剖学上是否有效。离散符号表示正好提供这种结构，而手部拉班舞谱（HL）已证明其对手的可行性：把动作写作 T×40 网格，每根骨骼一个固定方向符号。在这个网格基础上，我们追问其下的问题：符号应跨越的解剖单元——骨骼、手指还是整只手。DigitCode 通过沿手的单元层级在一个代码内适配、分组与分层 HL 的字母表来回答，将符号表示的量化误差削减四分之三。杠杆是单元而非量化器族：在固定单元下，免训练与学习型强量化器在重建上可互换，而沿解剖层级下移才是改变精度的因素。该层级还对应下游任务的需求。由于手指是真实、可枚举的单元，每个手指 token 兼作免训练、可编辑的句柄，用于连续表示无法解决的作业——修复畸形生成的双手，以及将其重定向到机器人。我们发布 HandTok，一个可复现的测试平台，使手部分词器可以逐单元比较。项目页面：https://digitcode-demo.github.io

## 关键词

#手部动作 #符号表示 #分词 #机器人操作
