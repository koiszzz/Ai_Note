---
published: 2026-08-03
title: condense-json 1.1
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/condense-json 1.1.md
source_note: "[[信息源/Simon Willison Blog/condense-json 1.1]]"
source_sha256: ef75bbf7ecd33b69adabdd0cb0a3ea4b598a6f73f3f6dc73781dbfad28bd9856
original_url: https://simonwillison.net/2026/Aug/3/condense-json/
processed: 2026-08-07
language: zh-CN
---

# condense-json 1.1

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-03
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/3/condense-json/)
> - Vault 原文件：[[信息源/Simon Willison Blog/condense-json 1.1|查看原始文件]]

## 摘要

- condense-json 1.1 新增两项功能：替换对象可包含字符串以外的值（用于结构性替换），以及对象可作为合并操作的基础。
- 作者还使用基于属性的 Python 测试库 Hypothesis 添加了往返（round-trip）测试。

## 正文

**发布：[condense-json 1.1](https://github.com/simonw/condense-json/releases/tag/1.1)**

在发布 [condense-json 1.0](https://simonwillison.net/2026/Aug/2/condense-json/) 之后，我开始把它集成到 LLM 中，并发现已经有一些令人期待的新特性需要补齐：

- 替换对象（Replacements object）现在可以包含字符串以外的值。`condense_json()` 和 `uncondense_json()` 会识别这些值并将其用作结构性替换。[#8](https://github.com/simonw/condense-json/pull/8)
- 对象可以作为合并（merge）操作的基础。`condense_json()` 会识别是否存在高度匹配的对象，并存储需要更新或删除的键的指令；`uncondense_json()` 随后可以应用这些合并。

我还使用基于属性的 Python 测试库 [Hypothesis](https://hypothesis.readthedocs.io/) 添加了[一些往返测试](https://github.com/simonw/condense-json/blob/1.1/tests/test_properties.py)。

## 关键词

#JSON #Python #condense-json
