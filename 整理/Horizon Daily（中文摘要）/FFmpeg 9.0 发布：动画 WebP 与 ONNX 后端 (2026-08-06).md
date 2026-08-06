---
title: "FFmpeg 9.0 发布：动画 WebP 与 ONNX 后端"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH)]]"
source_fragment: "FFmpeg 9.0 发布：动画 WebP 与 ONNX 后端"
source_sha256: 6eb01013c952babadec417836467614fe54ac3fae3fc587167282efa60091f31
original_url: "https://news.ycombinator.com/item?id=49166202"
published: 2026-08-06
processed: 2026-08-06
language: zh-CN
---

# FFmpeg 9.0 发布：动画 WebP 与 ONNX 后端

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://news.ycombinator.com/item?id=49166202)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH)|查看原始日报]]

## 摘要

- FFmpeg 9.0 正式发布，新增动画 WebP 解码器与分离器、v360_vulkan 滤镜、Playdate 视频编码器及封装器、HE-AAC 960 解码（DAB+）、transpose_cuda 滤镜、AMF 帧率转换器滤镜，以及 ONNX Runtime DNN 后端等多项功能。
- 开发团队通过 Anthropic 的 Claude for Open Source 计划获得六个月免费 Claude Max 订阅，AI 主要用于帮助查找缺失的向后移植补丁。
- 社区成员对 AI 辅助开发的安全审查流程表达了关注。

## 正文

FFmpeg 9.0 正式发布，新增多项多媒体功能，包括动画 WebP 解码器与分离器、v360_vulkan 滤镜、Playdate 视频编码器及封装器、HE-AAC 960 解码（DAB+）、transpose_cuda 滤镜、AMF 帧率转换器滤镜，以及 ONNX Runtime DNN 后端。开发团队通过 Anthropic 的 Claude for Open Source Program 获得六个月免费 Claude Max 计划，AI 主要用于帮助查找缺失的向后移植（backports）。社区成员对 AI 辅助开发的安全审查流程表达了关注。

telegram · zaihuapd · 8月5日 10:32

「背景」 FFmpeg 是一个广泛使用的开源多媒体处理框架，提供音视频编解码、转封装和滤镜等功能。动画 WebP 是 Google 推出的支持动画的图片格式，虽然浏览器早已支持，但 FFmpeg 长期缺少解码与分离能力，导致许多非浏览器桌面应用无法播放此类文件。此外，本次发布前 FFmpeg 开发者通过 Anthropic 的 Claude for Open Source 计划获得免费 Claude Max 订阅，并利用 Claude 帮助查找缺失的后向移植补丁。

「影响」 FFmpeg 用户和下游发行版维护者可以立即获得动画 WebP、Playdate 编码、HE-AAC 960 解码等新能力；同时，AI 辅助补丁的引入也促使社区和项目维护者更加重视代码审查流程。

参考链接

- [FFmpeg 维基百科](https://en.wikipedia.org/wiki/FFmpeg)

- [FFmpeg 官方 X 推文：多名开发者获赠 Claude Max 订阅](https://x.com/FFmpeg/status/2084084810813743614)

- [FFmpeg 9.0 的 Hacker News 讨论](https://news.ycombinator.com/item?id=49166202)

标签: #ffmpeg, #multimedia, #release, #open-source, #ai-assisted-development

## 关键词

#ffmpeg #multimedia #release #open-source #ai-assisted-development #科技新闻
