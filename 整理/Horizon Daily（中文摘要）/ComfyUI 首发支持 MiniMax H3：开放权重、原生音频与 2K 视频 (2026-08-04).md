---
title: "ComfyUI 首发支持 MiniMax H3：开放权重、原生音频与 2K 视频"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH)]]"
source_fragment: "ComfyUI 首发支持 MiniMax H3：开放权重、原生音频与 2K 视频"
source_sha256: 394593e54b3a42b7dc4973ca5a342d896120ce9bbc7a6f374ffa92c89c7b9829
original_url: "https://blog.comfy.org/p/minimax-h3-day-0-support-in-comfyui"
published: 2026-08-04
processed: 2026-08-05
language: zh-CN
---

# ComfyUI 首发支持 MiniMax H3：开放权重、原生音频与 2K 视频

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-04
> - 原文链接：[打开原文](https://blog.comfy.org/p/minimax-h3-day-0-support-in-comfyui)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH)|查看原始日报]]

## 摘要

- ComfyUI 宣布对 MiniMax H3 提供 Day-0 支持；该开放权重模型支持原生音频与 2K 视频生成，并可通过动态显存卸载在 RTX 3060 等消费级 GPU 上本地运行。模型通过剪枝和查找表替换调制权重，使内存占用从全精度的 123.6 GB 降至最小变体的 42.5 GB，整体减少 66%。社区实测显示，RTX 4070 Ti Super 16GB 生成 10 秒 480p 视频约需 10 分钟，效果“惊人”；更小显存设备也有可行路径。具体版本、许可条件和……

## 正文

ComfyUI 宣布对 MiniMax H3 提供 Day-0 支持；该开放权重模型支持原生音频与 2K 视频生成，并可通过动态显存卸载在 RTX 3060 等消费级 GPU 上本地运行。模型通过剪枝和查找表替换调制权重，使内存占用从全精度的 123.6 GB 降至最小变体的 42.5 GB，整体减少 66%。社区实测显示，RTX 4070 Ti Super 16GB 生成 10 秒 480p 视频约需 10 分钟，效果“惊人”；更小显存设备也有可行路径。具体版本、许可条件和官方基准未被本次内容提供。

hackernews · vblanco · 8月3日 13:34 · [社区讨论](https://news.ycombinator.com/item?id=49155629)

「背景」 MiniMax H3 是 MiniMax 于 2026 年 7 月 31 日发布的开放权重全模态视频模型，可在同一生成流程中输出带原生立体声的 2K、约 15 秒视频，并能在单一上下文中接受文本、图像、视频和音频输入。ComfyUI 是流行的节点式 AI 工作流工具，因 H3 开放权重，开发者能在发布当天（Day-0）将其集成，支持文本生成视频（T2V）、图像生成视频（I2V）和参考视频生成视频（R2V），并提供 FL2VA 与 Ref2VA 等变体。这些背景有助于理解为何该模型能在本地 GPU 上以较低显存运行并快速获得社区关注。

「影响」 对 AI 视频创作者和本地部署开发者而言，MiniMax H3 的 ComfyUI 集成意味着无需高端服务器即可试验 2K 视频和原生音频生成，但生成速度和质量仍因硬件和提示场景而异。

「社区讨论」 评论者普遍认可 MiniMax H3 的文本生成视频质量和速度，认为已接近当前 SOTA，但也有“AI 平滑”伪影和非常规场景下画面崩溃的问题；有用户对其“无质量损失剪枝”方法表示好奇，并询问是否适用于 LLM。

参考链接

- [MiniMax H3: Open Omni-Modal Video Model With Native Audio](https://comfyui-wiki.com/en/news/2026-07-31-minimax-h3-omni-modal-video)

- [MiniMax H3 in ComfyUI: Day-0 Local Guide | Topview](https://www.topview.ai/blog/minimax-h3-comfyui-day-0-guide)

- [MiniMax H3 and ComfyUI: Open Weights, Native - Sesame Disk](https://sesamedisk.com/minimax-h3-comfyui-native-audio-open/)

标签: #ComfyUI, #MiniMax, #text-to-video, #open-weights, #AI video generation

## 关键词

#ComfyUI #MiniMax #text-to-video #open-weights #AI-video-generation #科技新闻
