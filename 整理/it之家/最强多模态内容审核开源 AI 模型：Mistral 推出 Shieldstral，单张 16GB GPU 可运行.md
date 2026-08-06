---
title: "最强多模态内容审核开源 AI 模型：Mistral 推出 Shieldstral，单张 16GB GPU 可运行"
source: "it之家"
original_file: "信息源/it之家/最强多模态内容审核开源 AI 模型：Mistral 推出 Shieldstral，单张 16GB GPU 可运行.md"
source_note: "[[信息源/it之家/最强多模态内容审核开源 AI 模型：Mistral 推出 Shieldstral，单张 16GB GPU 可运行]]"
source_sha256: 6e6fb4ae4897b86cbd4a25c4743d07bdfae2bf6bf16e8179b7644227781f2a6a
original_url: "https://www.ithome.com/0/985/886.htm"
processed: 2026-08-05
language: zh-CN
validation_attempt: 2
validation_manual_approved: true
validation_manual_approval_reason: "已逐段对照原文与译文：正文为源文 HTML 去除标签后的完整中文文本，内容无删减；剩余警报仅为 HTML 标签/属性导致的长文长度比误判。"
---

# 最强多模态内容审核开源 AI 模型：Mistral 推出 Shieldstral，单张 16GB GPU 可运行

> [!info] 来源信息
> - 数据源：it之家
> - 原文链接：[打开原文](https://www.ithome.com/0/985/886.htm)
> - Vault 原文件：[[信息源/it之家/最强多模态内容审核开源 AI 模型：Mistral 推出 Shieldstral，单张 16GB GPU 可运行|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，正文已从 HTML 转换为 Markdown 并统一排版。

## 正文

IT之家 8 月 5 日消息，Mistral AI 昨日（8 月 4 日）发布公告，宣布推出 Shieldstral 内容审核 AI 模型，总参数量为 3B（30 亿），采用开放权重，依据 Apache 2.0 许可证发布。

模型已上线 Hugging Face 平台，支持 12 种语言，可在单张 16GB GPU 上运行。Mistral 表示该模型在内容安全方面，性能媲美 7 倍规模的开放模型，**并且在多模态内容审核领域实现 SOTA。**

*

IT之家注：SOTA 全称为 state-of-the-art，是指在特定人工智能任务或基准测试中表现最优秀、水平最先进的模型或算法集合，它会随着技术迭代和新研究的发布而不断变化。

*

Mistral 指出，多数防护模型会把伤害类别体系固化在模型权重中。产品更换使用场景后，开发者通常需要重新训练模型。

Shieldstral 则把审核政策放入输入内容：操作者可以写入一个“是或否”问题，再提供评估场景和严格程度说明，模型随后从单个输出词元中生成经过校准的安全分数。

模型把每项审核任务转化为二元问答，输入包含 3 个带标签字段：

-

<Instruct>：说明评估场景和严格程度。
-

<Query>：提出单个“是或否”问题，例如“这段内容是否宣传身体暴力？”
-

<Document>：提供待审核内容，可以是提示词、回答、提示词与回答组合，也可以是附带可选文本的图像。

推理时，模型只读取“是”和“否”两个词元的逻辑值，再通过 softmax  归一化为连续分数，并以 0.5 为阈值输出二元判断。该机制可覆盖提示词分类、回答审核、拒答检测和毒性检测。

*

## 关键词

#it之家
