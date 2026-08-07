---
published: 2019-09-19
title: "基于人类偏好微调 GPT-2"
source: "OpenAI News"
original_file: "信息源/OpenAI News/Fine-tuning GPT-2 from human preferences.md"
source_note: "[[信息源/OpenAI News/Fine-tuning GPT-2 from human preferences]]"
source_sha256: aa01f63ae77d9a92e445574f1f16f8d59f523814892ea288099d8a5b6512d1c2
original_url: "https://openai.com/index/fine-tuning-gpt-2"
processed: 2026-08-06
language: zh-CN

---

# 基于人类偏好微调 GPT-2

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2019-09-19
> - 原文链接：[打开原文](https://openai.com/index/fine-tuning-gpt-2)
> - Vault 原文件：[[信息源/OpenAI News/Fine-tuning GPT-2 from human preferences|查看原始文件]]

## 摘要

- 我们使用人类反馈对 774M 参数的 GPT-2 语言模型进行微调，成功匹配了外部人类标注者的偏好（尽管这些偏好并不总与我们自己的一致）。
- 在摘要任务上，标注者更偏好从输入中原样复制的句子，于是模型学会了复制；摘要需要 6 万个标注，而简单的续写任务只需 5000 个。
- 我们的动机是让安全技术更贴近「机器与人对话」这一普遍任务，这被认为是提取人类价值观信息的关键。

## 正文

我们使用人类反馈对 774M 参数的 GPT-2 语言模型进行了各种任务的微调，成功匹配了外部人类标注者的偏好，尽管这些偏好并不总是与我们自己的偏好一致。具体来说，在摘要任务中，标注者更偏好从输入中原样摘抄的句子（我们只要求他们确保准确性），因此我们的模型学会了复制。摘要需要 6 万个人类标注，而各种风格续写等较简单的任务只需 5000 个标注。我们的动机是让安全技术更接近「机器与人类对话」这一普遍任务，我们相信这是提取人类价值观信息的关键。

## 关键词

#OpenAI #GPT-2 #人类反馈 #微调