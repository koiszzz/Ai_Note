---
published: 2026-08-05
title: "TabletCraft：用双向阿卡德语 NMT 与楔形文字渲染弥合 4000 年文化鸿沟"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TabletCraft- Bridging a 4,000-Year Cultural Gap with Bidirectional Akkadian NMT and Cuneiform Render.md"
source_note: "[[信息源/arXiv cs.LG RSS/TabletCraft- Bridging a 4,000-Year Cultural Gap with Bidirectional Akkadian NMT and Cuneiform Render.]]"
source_sha256: 49f2aec64d979f8a5e7d188ac97e635e44036443cb3fc43e53fceff78e3e2e1d
original_url: "https://arxiv.org/abs/2608.02609"
processed: 2026-08-05
language: zh-CN
---

# TabletCraft：用双向阿卡德语 NMT 与楔形文字渲染弥合 4000 年文化鸿沟

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zhaohui Wang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02609)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TabletCraft- Bridging a 4,000-Year Cultural Gap with Bidirectional Akkadian NMT and Cuneiform Render.|查看原始文件]]

## 摘要

- 世界各地博物馆存有 50 万块楔形文字泥板，但现代用户既不能读也不能写世界上最古老的书写系统，留下 4000 年文化壁垒，现有 NLP 工具只部分解决。
- 先前工作实现从阿卡德语到英语的单向、面向学者的翻译，但无反向路径：非专业用户无法用楔形文字创作新内容，因而仍是被动消费者而非积极参与者。
- 提出 TabletCraft，第一个支持与美索不达米亚书写双向交互的开源系统：用户可读古泥板（阿卡德语到英语），并把新消息创作成楔形文字泥板（英语到阿卡德语到楔形文字到渲染泥板）。
- 系统整合基于 ByT5 的翻译模型（在 116K 双向样本上训练）、含 14,240 个映射（95.3% 覆盖）的楔形文字符号转换器，与可视化泥板渲染器，打包为带 CLI 与 web 演示的 pip 安装工具包。
- 留出 Akkademia 验证划分（2,812 样本）上报告：阿卡德语到英语 49.1 BLEU、英语到阿卡德语 48.5 BLEU，这是反向方向首个发表的定量结果。

## 正文

论文编号：arXiv:2608.02609v1（更新类型：cross）。以下为摘要全文翻译。

世界各地博物馆中存有 50 万块楔形文字泥板，然而现代用户既不能读也不能写世界上最古老的书写系统，留下一个 4000 年的文化壁垒，现有 NLP 工具只部分解决。先前的工作实现从阿卡德语到英语的单向、面向学者的翻译，但没有提供反向路径：非专业用户无法用楔形文字创作新内容，因此仍是古代文化的被动消费者而非主动参与者。我们提出 TabletCraft，第一个支持与美索不达米亚书写双向交互的开源系统。用户既可以阅读古泥板（阿卡德语到英语），也可以把新消息创作成楔形文字泥板（英语到阿卡德语到楔形文字到渲染泥板）。该系统整合一个基于 ByT5 的翻译模型（在 116K 双向样本上训练）、一个含 14,240 个映射（95.3% 覆盖）的楔形文字符号转换器，以及一个可视化泥板渲染器，打包为可 pip 安装的工具包，带 CLI 与 web 演示。在留出的 Akkademia 验证划分（2,812 个样本）上，我们报告阿卡德语到英语 49.1 BLEU 与英语到阿卡德语 48.5 BLEU，这是反向方向第一个发表的定量结果。

## 关键词

#阿卡德语 #楔形文字 #神经机器翻译 #文化遗产 #NLP
