---
published: 2026-08-07
title: "Token 原生存储：用智能体的语言读写"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Token-Native Storage- Read and Write in your Agent's Language.md"
source_note: "[[信息源/arXiv cs.CL RSS/Token-Native Storage- Read and Write in your Agent's Language]]"
source_sha256: d411eaa0e2ea9672a295330e83692846833e2d8f23a76fac4d971b043b8370eb
original_url: "https://arxiv.org/abs/2608.02376"
processed: 2026-08-07
language: zh-CN
---

# Token 原生存储：用智能体的语言读写

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Kumar Shivendu
> - **发布时间**：2026-08-07
> - **分类**：cs.DB
> - **原文**：[打开链接](https://arxiv.org/abs/2608.02376)

## 摘要

- 搜索与数据库引擎仍以 UTF-8 存储文本，这是为人类构建的格式；但日益读写这些文本的系统（嵌入器、重排器与语言模型智能体）使用 token ID 而非字符，因此每次访问都付出两者间转换的代价。
- 主张 token 原生存储：将文本保持为模型自己的字节对编码（BPE）token ID；将 r50k ID 打包为 uint16 在英文上已无压缩胜过 UTF-8 2.25 倍，叠加熵编码器达 3.30 倍。
- 跨六个分词器与三个语料（英文、代码、印地语），压缩 token ID 匹配或胜过每个字节编解码器，甚至胜过语料训练的 zstd 字典；按合并顺序而非频率编号的 BPE，经按频率重排，普通整数编解码器（streamvbyte）可恢复熵编码器的大部分比率，同时解码快约 7 倍——对 AI 实验室发布词表方式近乎免费的改变。
- 因模型读取 token ID 而非文本，token 原生存储直接交出 ID 而无需每次读取重新分词；唯一要求是读写方共享分词器，而不同模型家族今天常使用不同分词器，因此主张标准化：发布共享词表，如同 ASCII 与 UTF-8 标准化了文本。

## 正文

搜索与数据库引擎仍然以 UTF-8 存储文本，这是一种为人类构建的格式。但日益读写这些文本的系统（嵌入器、重排器与语言模型智能体）使用的是 token ID 而非字符，因此每一次访问都要付出两者之间转换的代价。随着智能体成为存储文本的主要读写者，研究主张 token 原生存储（token-native storage）：将文本保持为模型自己的字节对编码（BPE）token ID。将 r50k ID 打包为 uint16 在英文上已无压缩地比 UTF-8 好 2.25 倍，在其上叠加熵编码器可达到 3.30 倍。跨六个分词器与三个语料（英文、代码、印地语），压缩 token ID 匹配或胜过每一种字节编解码器，甚至包括语料训练的 zstd 字典。两项发现强化了这一论点。BPE 按合并顺序而非频率对 token 编号，而按频率重新排序后，一个普通的整数编解码器（streamvbyte）就能恢复熵编码器的大部分压缩比，同时解码约快 7 倍——这对 AI 实验室发布词表的方式来说是一个近乎免费的改变。而且，由于模型读取的是 token ID 而非文本，token 原生存储直接交出 ID，而非在每次读取时重新分词。唯一的要求是读写双方共享一个分词器，而不同的模型家族今天常常使用不同的分词器，因此研究主张标准化：发布一个共享词表，正如 ASCII 与 UTF-8 标准化了文本那样。

## 关键词

token 原生存储、BPE、压缩、分词、智能体
