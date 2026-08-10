---
published: 2026-08-09
title: SQLite 压缩文本历史原型
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/SQLite compressed text-history prototypes.md
source_note: "[[信息源/Simon Willison Blog/SQLite compressed text-history prototypes.md]]"
source_sha256: ca2252b66fdecb2f5c590c281f4e43ba0fef8eeb593c1a712b6c95f39bb728c2
original_url: https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything
processed: 2026-08-10
language: zh-CN
---

# SQLite 压缩文本历史原型

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 作者：Simon Willison
> - 发布时间：2026-08-09
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/SQLite compressed text-history prototypes.md|查看原始文件]]

## 摘要

- Simon Willison 一直对在关系数据库中存储修订历史感兴趣，散步时产生新想法：把每个旧版本全文放进一个大 JSON 字符串数组，再对整体应用 zlib 或 zstd 压缩，利用大量重复字符串获得极高压缩率。
- 他与 ChatGPT iPhone 应用中效果已经很不错的 GPT-Live 语音模式讨论了该原型，并转录了一段“意识流”式描述。
- 随后他用文本提示词让 GPT-5.6 Sol Pro 用 Python 围绕这一想法构建实验原型，模型工作了 38 分钟并交付了代码与文件。
- 方案效果出色：对一篇文档模拟 1000 次修订，产生 20.4 MB 原始修订文本，经 Zstandard 压缩的 JSON 数组后仅占 80.3 KB。
- Sol 建议为避免每次编辑都解压重压整个数组，可将历史拆分为多行，每行最多含 128 次修订或 3 MB 未压缩 JSON。

## 正文

研究项目：SQLite 压缩文本历史原型

我长期以来一直对在关系数据库中存储修订历史的方案感兴趣。遛狗时我冒出一个新想法：把每个旧版本的全文放进一个大的 JSON 字符串数组，然后对整体应用 zlib 或 zstd 压缩。由于存在大量重复字符串，压缩效果理应非常好。

ChatGPT iPhone 应用新推出的 GPT-Live 语音模式已经相当好用，于是我用它讨论了这一原型。语音对话的 URL 仍然无法分享，但以下是我从转录中复制下来的原话（意识流式）：

> 我有一个有趣的想法，关于用一种尽可能高效的方式，在 SQLite 数据库的某一列中保存一段被不断编辑的文本的所有历史版本。我以前构建过这类系统，一直很难想出高效的做法。最简单的办法是为字符串的每一个历史值建一行。但如果是一份很长的文档，比如 20 KB 的数据，那么每一次编辑都会往数据库里增加 20 KB 数据，对吧。所以我现在想的是，压缩会非常有效，对吧？如果你把这份文档从最初到现在所有的不同版本打包在一起，对它们应用一个好的压缩算法，应该就能基本消除大量冗余文本。所以我的想法是：用一个非常非常简单的机制——在表上加一个 history 列，它是 blob 类型，存储二进制数据，然后把所有历史文档的 zlib 或甚至 zstd 压缩的 JSON 文本数组放进去。所以你可能需要两列：一列是那个神奇的 JSON 文本数组，另一列是不需要压缩的 JSON 时间戳数组。时间戳可以只是整数数组，Unix 整数。整个方案就是这样。

然后我退出语音模式，向 GPT-5.6 Sol Pro 输入了以下文本提示词：

> 用 Python 围绕这个想法构建实验原型

它连续工作了 38 分钟，交付了这个答案，以及你在这个文件夹里看到的那些文件。

方案效果非常好！对一篇文档模拟 1000 次修订，产生了 20.4 MB 原始修订文本，压缩为 Zstandard 压缩的 JSON 数组后只有 80.3 KB。

为避免每次编辑都要解压并重新压缩整个数组的开销，Sol 建议把历史拆分成多行，每行最多包含 128 次修订或 3 MB 未压缩 JSON。

## 关键词

#SQLite #压缩 #文本历史 #zstd #原型
