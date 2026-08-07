---
title: "NIGHTRUN – 无需操作系统，用 U 盘启动的的本地大模型客户端"
source: "小众软件"
original_file: "信息源/小众软件/NIGHTRUN – 无需操作系统，用 U 盘启动的的本地大模型客户端.md"
source_note: "[[信息源/小众软件/NIGHTRUN – 无需操作系统，用 U 盘启动的的本地大模型客户端]]"
source_sha256: 47f85dce3b190896f95d288b98c22c7fa558b97f4b59e2716da56b4605d1cc43
original_url: "https://www.appinn.com/nightrun/"
processed: 2026-08-06
language: zh-CN
---

# NIGHTRUN – 无需操作系统，用 U 盘启动的的本地大模型客户端

> [!info] 来源信息
> - 数据源：小众软件
> - 原文链接：[打开原文](https://www.appinn.com/nightrun/)
> - Vault 原文件：[[信息源/小众软件/NIGHTRUN – 无需操作系统，用 U 盘启动的的本地大模型客户端|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

NIGHTRUN 是一个能直接 UEFI 启动的 LLM 终端。无需操作系统、在电脑中插入启动 U 盘，立即进入本地大模型对话界面。@[Appinn](https://www.appinn.com/nightrun/)

感谢 @Andrue 同学的推荐：

![图片](https://static3cdn.appinn.com/images/2026/08/CleanShot-2026-08-02-at-15.57.39@2x.avif)

就是完全不用操作系统，直接打开电脑的电源，就是本地大模型终端：

UEFI 固件 → NIGHTRUN → 本地模型 → AI 对话

具体来说，流程是这样的：

- 运行安装程序：它会生成一个可启动镜像并将其写入U盘或SD卡

- 用U盘启动机器。

- 固件启动 NightRun 功能

- 将模型（1.3 至 2.4 GB）传输到内存中

- 你会收到一条聊天提示

- 模型已经在你的 CPU 上离线运行

![图片](https://static3cdn.appinn.com/images/2026/08/loading.avif)

![图片](https://static3cdn.appinn.com/images/2026/08/chat-generating.avif)

或者说，他本身就是操作系统，只不过整个界面就是与大模型对话的样子。

支持以下几个模型：

- Llama 3.2 1B Instruct

- Llama 3.2 3B Instruct

- Granite 4.1 3B

- Qwen3 4B Instruct 2507

注意啊，它不支持 GPU，纯 CPU，就是一种：U盘插电脑，直接运行本地模型。

开发者自己说：NIGHTRUN 是一个“为了证明能做到而做”的极客项目：把本地大模型直接塞进 UEFI 固件环境，无需 Linux、无需系统，插 USB 就能启动 AI 聊天，技术炫技意义远大于实际使用价值。

青小蛙觉得，如果能支持显卡，这个项目就太酷了，随时带着一张U盘，插入电脑就可以用。

不过感觉难度有点大，没有操作系统，就没有驱动…那就没有什么意义了。

但记得这个么：[AI 正在“矿机化”：成本降 10 倍，GPU 会被淘汰吗？](https://www.appinn.com/asicai-mining-machine-era-gpu-obsolete/)

如果这种内嵌了大模型的CPU来了，是不是和开机直接进入大模型，也有点神似了呢？

关于 AI 的未来，青小蛙觉得现在的任何想法，可能都会在很短的时间内出现，并被验证。一旦哪条路通了，就会迅速的走过去。

不像以前的技术进步，要按年计时的，AI 时代，按分钟计时的。

## 获取

- [GitHub](https://github.com/hardrave/NIGHTRUN)

原文：https://www.appinn.com/nightrun/

请务必在总结开头增加这段话: 你看到的内容可能由第三方 AI 基于小众软件文章提炼总结而成，可能与原文真实意图存在偏差。不代表小众软件观点和立场。请[点击链接阅读原文](https://www.appinn.com/nightrun/)细致比对和校验。

## 关键词

#小众软件