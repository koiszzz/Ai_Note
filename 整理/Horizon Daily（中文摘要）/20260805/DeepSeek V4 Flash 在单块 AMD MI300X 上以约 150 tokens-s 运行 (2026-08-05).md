---
published: 2026-08-05
title: "DeepSeek V4 Flash 在单块 AMD MI300X 上以约 150 tokens/s 运行"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)]]"
source_fragment: "DeepSeek V4 Flash 在单块 AMD MI300X 上以约 150 tokens/s 运行"
source_sha256: a95ca2b002031ca8b11b06a7711ba64db3ff679428fdd0f1ed0860fe3068c63d
original_url: "https://github.com/ryanzhou/deepseek-v4-flash-mi300x"
processed: 2026-08-05
language: zh-CN
---

# DeepSeek V4 Flash 在单块 AMD MI300X 上以约 150 tokens/s 运行

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://github.com/ryanzhou/deepseek-v4-flash-mi300x)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)|查看原始日报]]

## 摘要

- 一个 GitHub 项目展示了在单个 AMD MI300X 上运行 DeepSeek V4 Flash，吞吐约每秒 150 token，同时将上下文窗口从原生 1M 缩减到 256k。该模型 256 个 MoE 专家为原生 MXFP4 量化，因此可装入 144GB 内存。MI300X 属于 OAM 模块，通常只能以多卡整机购买，而 PCIe 形态的 MI350P 内存较少（144GB）但同样可运行。这一优化/移植显示了在单块加速器上高效运行大模型的可行性，并揭示了硬件形态与量……

## 正文

一个 GitHub 项目展示了在单个 AMD MI300X 上运行 DeepSeek V4 Flash，吞吐约每秒 150 token，同时将上下文窗口从原生 1M 缩减到 256k。该模型 256 个 MoE 专家为原生 MXFP4 量化，因此可装入 144GB 内存。MI300X 属于 OAM 模块，通常只能以多卡整机购买，而 PCIe 形态的 MI350P 内存较少（144GB）但同样可运行。这一优化/移植显示了在单块加速器上高效运行大模型的可行性，并揭示了硬件形态与量化对部署的实际影响。

hackernews · zhoutong · 8月4日 10:00 · [社区讨论](https://news.ycombinator.com/item?id=49166386)

「背景」 DeepSeek V4 Flash 是 DeepSeek 发布的混合专家（MoE）大模型，官方版本使用 256 个专家并以原生 MXFP4 量化，通常以 1M 上下文提供服务。AMD MI300X 是配备 192GB HBM3 显存的加速器，但以 OAM 模块形态出货，实际多以 8 卡整机（约 25 万欧元）形式部署；MI350P 则是 144GB 显存的 PCIe 版本。该 GitHub 仓库记录了在单块 MI300X 上配置并运行 deepseek-ai/DeepSeek-V4-Flash-0731 的 Docker 镜像和补丁，在把上下文窗口从官方 1M 缩减到 256k 的情况下实现约 150 tokens/s 的吞吐；相关的先例还包括手写 CDNA3 内核优化，将单流解码速度提升约 3.1 倍。

「影响」 开发者现在可以在单块 MI300X 或类似 144GB 加速器上以可用吞吐量实验 DeepSeek V4 Flash，适合代码生成等场景，但需接受 256k 上下文限制。

「社区讨论」 评论者普遍肯定高 HBM 容量对这类模型的价值，并指出未将 DwarfStar 列为先前工作是遗漏；还有讨论强调 MI300X 是 OAM 模块、无法单独购买，以及 256k 上下文相比 1M 是实用折衷，质量在接近完整大小时会下降。

参考链接

- [GitHub - ryanzhou/deepseek-v4-flash-mi300x](https://github.com/ryanzhou/deepseek-v4-flash-mi300x)

- [MI300X-DeepSeek-V4-Flash-M1-PoW/docs at main - GitHub](https://github.com/AgntroAI/MI300X-DeepSeek-V4-Flash-M1-PoW/tree/main/docs)

- [DeepSeek V4 Flash on a Single AMD MI300X - upstract.com](https://upstract.com/x/f6c68a210dace3ec)

标签: #DeepSeek, #AMD MI300X, #GPU inference, #MoE, #model deployment

## 关键词

#DeepSeek #AMD-MI300X #GPU-inference #MoE #model-deployment #科技新闻
