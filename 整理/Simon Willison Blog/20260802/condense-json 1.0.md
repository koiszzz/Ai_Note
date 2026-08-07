---
published: 2026-08-02
title: condense-json 1.0
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/condense-json 1.0.md
source_note: "[[信息源/Simon Willison Blog/condense-json 1.0]]"
source_sha256: c790ef2938f97560a27a88b1f5df8adc3795ad958a875a1fc18cc9df486880fc
original_url: https://simonwillison.net/2026/Aug/2/condense-json/
processed: 2026-08-07
language: zh-CN
---

# condense-json 1.0

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-02
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/2/condense-json/)
> - Vault 原文件：[[信息源/Simon Willison Blog/condense-json 1.0|查看原始文件]]

## 摘要

- 作者发布了 condense-json 1.0：一个小型 Python 库，已有一年半历史，本次以明智且无破坏性的修复为基础发布了正式的 1.0 版本。
- 其核心功能：扫描输入 JSON 中与替换对象（replacements object）匹配的字符串或子字符串，并在输出中用特殊的 `{"$r": ...}` 语法进行替换。
- 文中示例：输入 JSON 中 `foo.bar.string` 的值是包含"with foxes in it"的字符串，`foo.bar.nested.more` 数组中的第二条字符串也包含该短语；通过替换对象 `{"1": "with foxes in it"}`，condense_json() 把匹配部分压缩为 `{"$": "1"}` 引用结构。
- 使用 `uncondense_json(condensed, replacements)` 可以逆转压缩效果，恢复原始 JSON。
- 用途：让存储包含来自其他相关结构重复数据的 JSON 更加容易；作者用它为 LLM 生成的 SQLite 日志节省空间，最新实现参见 PR #1586。

## 正文

**发布：[condense-json 1.0](https://github.com/simonw/condense-json/releases/tag/1.0)**

我正在努力鼓起勇气发布 1.0 版本。这个小库已经有一年半的历史了——我应用了一些明智且无破坏性的修复，并为它发布了意义重大的 1.0 版本。

下面是从 README 中摘取的示例，展示它能做什么。输入是一个嵌套的 JSON 对象：在 `foo` 之下有 `bar`，`bar` 又包含一个名为 `string` 的字段，其值为"This is a string with foxes in it"，以及一个名为 `nested` 的字段，`nested` 之下还有 `more` 数组，数组中的两条字符串分别是"Here is a string"和"another with foxes in it too"：

```json
{
  "foo": {
    "bar": {
      "string": "This is a string with foxes in it",
      "nested": {
        "more": ["Here is a string", "another with foxes in it too"]
      }
    }
  }
}
```

再配合一个替换对象（replacements object），把子串"with foxes in it"映射为键 `"1"`：

```json
{"1": "with foxes in it"}
```

而 `condense_json(input_json, replacements)` 会生成以下结果：`string` 字段变成了由文本片段与引用结构组成的数组 `{"$r": ["This is a string ", {"$": "1"}]}`，其中 `{"$": "1"}` 指向替换对象中的键 `"1"`；`nested.more` 数组中的第二条字符串也以同样的方式被压缩为 `{"$r": ["another ", {"$": "1"}, " too"]}`，而第一条字符串因不含匹配子串而保持原样：

```json
{
  "foo": {
    "bar": {
      "string": {"$r": ["This is a string ", {"$": "1"}]},
      "nested": {
        "more": ["Here is a string", {"$r": ["another ", {"$": "1"}, " too"]}]
      }
    }
  }
}
```

它的工作方式是：扫描替换对象中存在的字符串或子字符串，并在输出中将这些内容替换为特殊的 `{"$r": ...}` 语法。

你可以通过 `uncondense_json(condensed, replacements)` 逆转这一效果，把压缩后的 JSON 恢复成原始结构。

其设计目的是让存储包含来自其他相关结构的重复数据的 JSON 更加容易。我用它在 [LLM](https://llm.datasette.io/) 生成的 SQLite 日志中节省空间——最新的实现参见 [PR #1586](https://github.com/simonw/llm/pull/1586)。

## 关键词

#JSON #Python #condense-json #LLM #项目
