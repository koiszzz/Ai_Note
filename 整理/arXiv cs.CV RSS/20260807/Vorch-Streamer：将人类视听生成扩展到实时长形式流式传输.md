---
published: 2026-08-07
title: "Vorch-Streamer：将人类视听生成扩展到实时长形式流式传输"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Vorch-Streamer- Extending Human Audio-Visual Generation to Real-Time Long-Form Streaming.md"
source_note: "[[信息源/arXiv cs.CV RSS/Vorch-Streamer- Extending Human Audio-Visual Generation to Real-Time Long-Form Streaming]]"
source_sha256: 8b5ec3be1fd78e4b889d36efff56a3941a1d301cdf5f69a7717e172d560f569e
original_url: "https://arxiv.org/abs/2608.05663"
processed: 2026-08-07
language: zh-CN
---

# Vorch-Streamer：将人类视听生成扩展到实时长形式流式传输

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Menglin Han, Yang Ding, Yulei Lu, Haoran Yu, Xin Ma, Junyi Chen, Zhangkai Ni, Lin Ma, Yaohui Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05663)

## 摘要

- 实时长形式虚拟形象音视频生成需要因果、连续合成，同时保持音视频同步与视觉一致性；将预训练双向模型适配到该设定呈现两个关键两难。
- 第一，自回归复用生成块作为上下文产生暴露偏差，导致长 rollout 中错误与视觉漂移累积；第二，全局语音语句不指示因果生成器在仅有限局部音视频上下文可用时应接下来讲哪部分。
- 呈现 Vorch-Streamer：应对这些挑战并实现实时长形式文本到音视频（T2AV）流式传输的训练后框架；构建 8 万个 12–21 秒虚拟形象片段的合成语料，先用混合教师强制与扩散强制训练因果生成器；再应用长时程自强制与 DMD 蒸馏，将模型暴露于自身 rollout 分布同时保留预训练双向教师质量。
- 显式控制语音进展：外部语言模型预测离散 25 Hz 语音规划 token，其连续特征条件化音频扩散分支并将每个因果块与应讲内容对齐；有界因果上下文与四步去噪下，Vorch-Streamer 以 27.12 FPS 从文本联合生成音频与视频，超过 24 FPS 实时回放率，同时保持竞争音唇同步与长形式生成中强身份保留。

## 正文

实时长形式的虚拟形象（avatar）音视频生成需要因果、连续的合成，同时保持音视频同步与视觉一致性。将预训练的双向模型适配到这一设定呈现两个关键的两难。第一，自回归地复用生成的块作为上下文会产生暴露偏差（exposure bias），导致长 rollout 中错误与视觉漂移累积。第二，一个全局的语音语句（utterance）并不指示一个因果生成器，在只有有限局部音视频上下文可用时，接下来应该讲哪一部分。研究呈现 Vorch-Streamer，一个应对这些挑战并实现实时长形式文本到音视频（Text-to-Audio-Video, T2AV）流式传输的训练后框架。研究构建一个包含 80K 个 12–21 秒虚拟形象片段的合成语料，首先用混合教师强制（Teacher Forcing）与扩散强制（Diffusion Forcing）训练一个因果生成器。随后应用长时程自强制（Self Forcing）与 DMD 蒸馏，将模型暴露于自身的 rollout 分布，同时保留预训练双向教师的质量。为显式控制语音进展，一个外部语言模型预测离散的 25-Hz 语音规划 token，其连续特征条件化音频扩散分支，并将每个因果块与它应该讲的内容对齐。凭借有界的因果上下文与四步去噪，Vorch-Streamer 从文本以 27.12 FPS 联合生成音频与视频，超过 24-FPS 的实时回放率，同时保持竞争的音频-嘴唇同步与长形式生成中的强身份保留。

## 关键词

实时生成、视听流式、虚拟形象、教师强制、蒸馏
