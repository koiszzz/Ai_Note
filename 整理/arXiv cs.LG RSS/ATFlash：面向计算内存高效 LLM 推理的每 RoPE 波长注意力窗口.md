---
title: "ATFlash：面向计算/内存高效 LLM 推理的每 RoPE 波长注意力窗口"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ATFlash- Per-RoPE-Wavelength Attention Windows for Compute-Memory-Efficient LLM Inference.md"
source_note: "[[信息源/arXiv cs.LG RSS/ATFlash- Per-RoPE-Wavelength Attention Windows for Compute-Memory-Efficient LLM Inference]]"
source_sha256: 688fb76b77d93aefeb331192ac17370fe4809a7655b10ac8e4043224143501ba
original_url: "https://arxiv.org/abs/2608.02947"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ATFlash：面向计算/内存高效 LLM 推理的每 RoPE 波长注意力窗口

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Shun-ichiro Hayashi、Daichi Mukunoki、Tetsuya Hoshino 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02947)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ATFlash- Per-RoPE-Wavelength Attention Windows for Compute-Memory-Efficient LLM Inference|查看原始文件]]

## 摘要

- 提出每 RoPE 波长距离窗口：修剪超出波长比例距离的查询-键内积项——与滑动窗口不同，每个键仍可达（至少经低频对）；缩减率输入无关，对序列长度 N 有闭式对数形式，对比 MInference 等动态稀疏方法；token 级选择与频率级剪枝正交，窗口可叠加于这些方法。
- 带旋转位置嵌入（RoPE）的注意力分数精确分解为其 2D 旋转频率对的求和，每对波长限制其可区分位置的远近。
- Qwen2.5-0.5B 与 Llama-3.2-3B 上窗口在每个模型原生上下文长度内修剪 37–48% 查询-键内积项；相对全注意力，LongBench-v2 上下文上 top-1 匹配率保持 96–98%、平均输出分布 KL 在 10⁻³ nat 级；RULER、OpenAI-MRCR、LongCodeQA 与 ∞Bench 等长上下文基准绝对分数大体保持。
- 实现为查询-键收缩轴的切片，不触碰在线 softmax 递归，以最小差异移植进发布的 FlashAttention-4 预填充与 FlashInfer 解码；RTX PRO 6000 配 Llama 两个移植都超过原版，增益随上下文长度增长，128K 最高 1.29 倍；Qwen2.5-7B-1M 端到端剪掉 57% 内积项，1M token 上下文加速 1.31 倍。

## 正文

论文编号：arXiv:2608.02947v1（更新类型：new）。以下为摘要全文翻译。

带旋转位置嵌入（RoPE）的注意力分数精确分解为其 2D 旋转频率对的求和，而每对频率的波长限制它能区分位置的距离。与该结构对齐，我们提出每 RoPE 波长距离窗口：修剪超出波长比例距离的查询-键内积项。与滑动窗口不同，每个键仍然可达，至少通过低频对。缩减率输入无关，对序列长度 N 有闭式对数形式，对比 MInference 等动态稀疏方法。此类 token 级选择与我们的频率级剪枝正交，因此窗口可以叠加应用于这些方法之上。在 Qwen2.5-0.5B 与 Llama-3.2-3B 上，窗口在每个模型的原生上下文长度内修剪 37–48% 的查询-键内积项。相对全注意力，LongBench-v2 上下文上 top-1 匹配率保持在 96–98%，平均输出分布 KL 在 10⁻³ nat 级。我们检查 RULER、OpenAI-MRCR、LongCodeQA 与 ∞Bench 等长上下文基准的绝对分数：它们大体保持。我们把窗口实现为查询-键收缩轴的一个切片，不触碰在线 softmax 递归，并以最小差异移植进发布的 FlashAttention-4 预填充与 FlashInfer 解码。在 RTX PRO 6000 配 Llama 上，两个移植都超过原版，增益随上下文长度增长，128K 时最高 1.29 倍。Qwen2.5-7B-1M 端到端剪掉 57% 的内积项，在 1M token 上下文达到 1.31 倍加速。

## 关键词

#RoPE #注意力窗口 #推理加速 #长上下文
