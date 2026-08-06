---
title: "初探 DoomPaint：在 Win11 画图应用中运行《毁灭战士》游戏"
source: "it之家"
original_file: "信息源/it之家/初探 DoomPaint：在 Win11 画图应用中运行《毁灭战士》游戏.md"
source_note: "[[信息源/it之家/初探 DoomPaint：在 Win11 画图应用中运行《毁灭战士》游戏]]"
source_sha256: 30cf3b4ff5cd1c28c1e218ec1d1db58014f74982e2bef83df3153c117dce38bd
original_url: "https://www.ithome.com/0/985/864.htm"
processed: 2026-08-05
language: zh-CN
---

# 初探 DoomPaint：在 Win11 画图应用中运行《毁灭战士》游戏

> [!info] 来源信息
> - 数据源：it之家
> - 原文链接：[打开原文](https://www.ithome.com/0/985/864.htm)
> - Vault 原文件：[[信息源/it之家/初探 DoomPaint：在 Win11 画图应用中运行《毁灭战士》游戏|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，正文已从 HTML 转换为 Markdown 并统一排版。

## 正文

IT之家 8 月 5 日消息，科技媒体 Windows Latest 今天（8 月 5 日）发布博文，体验运行 DoomPaint 项目，**在 Windows 11 系统画图（Paint）应用中运行《毁灭战士》（Doom）游戏。**

*

IT之家此前报道，该项目由微软 Azure 首席技术官马克 · 鲁西诺维奇（Mark Russinovich）开发，[把微软画图（MS Paint）当作游戏画面的显示窗口](https://www.ithome.com/0/984/838.htm)，真正运行原版《毁灭战士》游戏。

*

在运行机制方面，游戏依靠 ViZDoom（引擎分支）在后台渲染游戏，通过 Windows 剪贴板将每帧画面粘贴到画图应用的画布中，此外 DOOM1.WAD 提供关卡和 Bobby Prince 的原声配乐。

*

在游戏运行方面，DoomPaint 支持完整键盘操作、音效和 MIDI 音乐。默认分辨率为 640×400，帧率最高约 35 FPS；调整为 320×200 后，帧率还会提升。

*

与此前把独立游戏窗口镜像或录屏到画图中的方案不同，DoomPaint 没有第 2 个《DOOM》窗口，画图画布就是唯一显示区域，玩家输入也必须经过画图。画面会以浮动选区形式出现在画布中，生命值、弹药、护甲和状态头像等 HUD 位于画布底部。

*

音效由 ViZDoom 通过 OpenAL（开放音频库）输出。音乐模块会从 WAD 文件提取原始音乐数据，需要时将 Doom 的 MUS 格式转换为 MIDI，再通过 Windows MIDI 音序器循环播放。

*

**相关阅读：**

-

《[微软 Azure 首席技术官打造趣味项目：用画图工具“运行”〈毁灭战士〉](https://www.ithome.com/0/984/838.htm)》

## 关键词

#it之家
