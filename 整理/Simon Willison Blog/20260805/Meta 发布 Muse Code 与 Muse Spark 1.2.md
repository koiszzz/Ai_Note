---
published: 2026-08-05
title: Meta 发布 Muse Code 与 Muse Spark 1.2
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Introducing Muse Code and Muse Spark 1.2.md
source_note: "[[信息源/Simon Willison Blog/Introducing Muse Code and Muse Spark 1.2]]"
source_sha256: e7737ad3ff4f46e86b18961d490e0156dfb711cf431a41dfe246c08d8a420fe9
original_url: https://simonwillison.net/2026/Aug/5/muse-code-and-muse-spark-12/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# Meta 发布 Muse Code 与 Muse Spark 1.2

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/5/muse-code-and-muse-spark-12/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Introducing Muse Code and Muse Spark 1.2|查看原始文件]]

## 摘要

- Meta 发布了 Muse Code（自家的编码智能体）与 Muse Spark 1.2（面向编码的模型更新），进一步印证当前模型最重要的特性是长序列智能体工具调用。
- Muse Spark 1.2 与 Muse Code 联合训练，大幅提升代码生成、复杂调试、代码库理解与端到端开发者工作流，并显著扩大训练环境多样性。
- 定价上 `muse-spark-1.2` 为每百万输入 1.25 美元、每百万输出 4.25 美元（接近 Gemini 3.6 Flash）；同意 Meta 用数据改进产品的 `muse-spark-1.2-contributor` 仅 0.10/0.20 美元，接近 GPT-5.6 Luna 与 Gemini 3.1 Flash-Lite。
- Simon 让 Muse Spark 1.2 生成了一只"骑自行车的鹈鹕"SVG，认为比 7 月 9 日的 Spark 1.1 版本有"小而实质"的改进。

## 正文

**[介绍 Muse Code 与 Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)**

又一条证据表明，如今任何模型最重要的特性就是长序列智能体工具调用。Meta 为了把它做好，甚至发布了自己的编码智能体！

> Muse Spark 1.2 是 Muse Spark 1.1 面向编码的更新版本，在代码生成、复杂调试、代码库理解和端到端开发者工作流方面均有改进。在 Muse Spark 1.2 中，我们显著扩大了编码任务上的训练算力，同时扩展了训练环境的多样性。该模型在通用智能体等其他关键领域也保持了优势。[...]
>
> 我们将 Muse Spark 1.2 与 Muse Code 联合训练，确保两者配合使用时模型能展现出最佳性能与编码可用性。训练包括拒绝采样的 harness 轨迹，以及对目标、压缩和子智能体的配方优化，同时集成 Muse Code 工具集以最大化 harness 兼容性。[...]
>
> Muse Spark 1.2 在长周期编码任务上接受了广泛训练，包括整仓库生成、大型端到端项目和自动研究。

这里有一只由 [Muse Spark 1.2 生成的"骑自行车的鹈鹕"SVG](https://tools.simonwillison.net/markdown-svg-renderer#url=https%3A%2F%2Fgist.github.com%2Fsimonw%2Fce974a21202b0595e36ec2a5ddb51480)：

![卡通插画：一只橙色喙的白色鹈鹕骑着红色自行车，背景是浅蓝色天空、云朵和下方一条绿色草地。鹈鹕戴着一顶看起来有点像罗马百夫长头盔的小黄帽，脸颊红润，橙色蹼足踩在黄色踏板上。](https://static.simonwillison.net/static/2026/muse-spark-1.2.png)

你可以在这里看到 [7 月 9 日的 Spark 1.1 鹈鹕](https://simonwillison.net/2026/Jul/9/muse-spark-1-1/)。我认为 1.2 的鹈鹕是一个小但实质性的改进。

定价方面有一个有趣的转折：该模型[以两个不同的模型 ID 提供](https://developer.meta.com/ai/models/muse-spark/)。`muse-spark-1.2` 定价为每百万输入 token 1.25 美元、每百万输出 token 4.25 美元——接近 Gemini 3.6 Flash（1.50/7.50 美元）——但如果你同意让 Meta 使用你的数据"改进我们的产品"，就可以使用 `muse-spark-1.2-contributor`，价格仅为 0.10/0.20 美元——大幅折扣，更接近 GPT-5.6 Luna（0.20/1.20 美元）和 Gemini 3.1 Flash-Lite（0.25/1.50 美元）。

我已把这些新价格[添加到 llm-prices.com](https://www.llm-prices.com/#sel=muse-spark-1.2%2Cmuse-spark-1.2-contributor)。

Via [Hacker News](https://news.ycombinator.com/item?id=49187575)

标签：ai、generative-ai、llms、meta、llm-pricing、pelican-riding-a-bicycle、llm-release、coding-agents

## 关键词

#Meta #Muse-Code #Muse-Spark #编码智能体 #LLM定价 #模型发布
