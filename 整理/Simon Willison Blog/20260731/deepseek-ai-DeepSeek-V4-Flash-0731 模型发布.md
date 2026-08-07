---
published: 2026-07-31
title: deepseek-ai/DeepSeek-V4-Flash-0731 模型发布
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/deepseek-ai-DeepSeek-V4-Flash-0731.md
source_note: "[[信息源/Simon Willison Blog/deepseek-ai-DeepSeek-V4-Flash-0731]]"
source_sha256: 09eb9861a57dffa8b0c81d7b2eaea31dbdca85d2ba7c2ba9eb0be572e8eeee69
original_url: https://simonwillison.net/2026/Jul/31/deepseek-v4-flash-0731/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# deepseek-ai/DeepSeek-V4-Flash-0731 模型发布

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/31/deepseek-v4-flash-0731/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/deepseek-ai-DeepSeek-V4-Flash-0731|查看原始文件]]

## 摘要

- DeepSeek V4 系列发布了最新版本 [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)，官方宣称其"智能体能力大幅增强"。
- 该模型有 3040 亿参数（Hugging Face 上约 167GB），但在基准表现上"远超其体量"：Artificial Analysis 将其排在 4280 亿参数的 MiniMax M3 之前。
- 定价为每百万输入 token 0.14 美元、每百万输出 token 0.27 美元，可能是目前性价比最高的模型。
- Simon 用默认推理强度（经 OpenRouter）生成的"鹈鹕骑自行车"图片效果不佳，把 `reasoning_effort` 调高后效果好得多。

## 正文

**[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**

这是 DeepSeek V4 系列的最新版本，"智能体能力大幅增强"。它有 3040 亿参数——在 Hugging Face 上约 167GB——但表现似乎*远超*其体量。

[Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-flash) 将其排在 MiniMax M3（一款 4280 亿参数的模型）之前。它每百万输入 token 0.14 美元、每百万输出 token 0.27 美元的定价，意味着它可能是目前市面上性价比最高的模型。它在[智能指数 vs. 每智能指数任务成本](https://artificialanalysis.ai/models/deepseek-v4-flash#intelligence-comparison-tabs)图上表现非常亮眼：

![Artificial Analysis 散点图，横轴为"Artificial Analysis 智能指数"（20 至 65），纵轴为"每任务成本（美元，对数刻度）"（0.02 至 3 美元）。左上角有一个绿色的"最具吸引力象限"方框和一条虚线的"帕累托线"。DeepSeek V4 Flash 0731（max）以深蓝色高亮显示，位于约 0.028 美元、智能得分 50 的位置，独自处在绿色象限左缘、帕累托线急剧上升之处。智能水平相近或更低的一些模型（如 MiniMax-M3、Kimi K3（低）、GLM-5.1、Kimi K2.6）成本高出十倍，而击败它的模型（Grok 4.5、Gemini 3.6 Flash、GLM-5.2、Kimi K3、Claude Opus 5、Claude Fable 5、GPT-5.6 Sol）都远在右侧，每任务成本为 0.4 至 3 美元。](https://static.simonwillison.net/static/2026/deepseek-flash-chart.webp)

我通过 OpenRouter 使用默认推理级别，从它那里得到了[一只令人失望的鹈鹕](https://gist.github.com/simonw/83bfb1171792f1e7a4d8935b5e82317e#prompt)：

![一幅白色鹈鹕的扁平矢量插画：长长的脖子、巨大的橙色喙囊，悬停在一辆被撞坏的蓝橙两色自行车上方。背景是深灰色的道路和白色的虚线车道标线。自行车画错了：轮子只是没有轮圈和辐条的橙色弧线，车架管件彼此分离悬浮，车把没有连接到任何东西。背景是浅蓝色，左上角有一个黄色的太阳，白色云朵，左侧有灰色速度线暗示运动。](https://static.simonwillison.net/static/2026/deepseek-flash-v4-default.png)

但当我把推理级别调到 high 之后，得到了[好得多的结果](https://gist.github.com/simonw/83bfb1171792f1e7a4d8935b5e82317e#options)：

```bash
llm -m openrouter/deepseek/deepseek-v4-flash-0731 -t pelican -o reasoning_effort high
```

![一幅白色鹈鹕骑自行车的扁平矢量插画：粉红色背景，身后有一个较浅的粉色圆盘。鹈鹕用翅膀握住车把，一只橙色脚踩在踏板上，巨大的橙色喙囊角落还露出一条蓝色小鱼。自行车车架红蓝橙三色，深色轮胎，身后拖着灰色速度线暗示运动。](https://static.simonwillison.net/static/2026/deepseek-flash-v4-high.png)

Via [Hacker News](https://news.ycombinator.com/item?id=49120299)

标签：ai、generative-ai、llms、pelican-riding-a-bicycle、deepseek、llm-release、openrouter、ai-in-china、artificial-analysis

## 关键词

#DeepSeek #V4-Flash #LLM发布 #模型性价比 #生成式AI #OpenRouter
