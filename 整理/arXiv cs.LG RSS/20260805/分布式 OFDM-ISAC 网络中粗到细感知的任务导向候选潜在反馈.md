---
published: 2026-08-05
title: "分布式 OFDM-ISAC 网络中粗到细感知的任务导向候选潜在反馈"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Task-Oriented Candidate-Latent Feedback for Coarse-to-Fine Sensing in Distributed OFDM-ISAC Networks.md"
source_note: "[[信息源/arXiv cs.LG RSS/Task-Oriented Candidate-Latent Feedback for Coarse-to-Fine Sensing in Distributed OFDM-ISAC Networks.]]"
source_sha256: efac084e3cebc4fffd3c7dfebaba7f6caa93e9d6fa463ce29f7bc9cb4b096898
original_url: "https://arxiv.org/abs/2608.03319"
processed: 2026-08-05
language: zh-CN
---

# 分布式 OFDM-ISAC 网络中粗到细感知的任务导向候选潜在反馈

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Shiv Shankar、Radha Krishna Ganti、J Klutto Milleth
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03319)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Task-Oriented Candidate-Latent Feedback for Coarse-to-Fine Sensing in Distributed OFDM-ISAC Networks.|查看原始文件]]

## 摘要

- 未来通感一体化（ISAC）架构把采集测量的感知实体（SE）与执行推理的感知功能（SF）分离，产生对 SE-SF 接口上紧凑、任务导向反馈的需求。
- 转发原始信道频率响应或完整每链路延迟—多普勒—方位—仰角（DDAE）张量代价高昂，而只报告峰值在杂波下丢弃目标判别结构。
- 提出基于学习的粗到细感知流水线，带单目标估计的候选潜在反馈：
- SE 端轻量卷积评分器从基于导频的 OFDM 信道估计产生稠密延迟—多普勒提议图，学得编码器通过融合每候选方位—仰角补丁、归一化位置与置信度线索构造 K 个紧凑 C 维候选 token。
- 潜在变量训练后均匀量化到 b 位，在有限预算 B_fb = bKC + 18K + 16 位下传给 SF，SF 执行跨候选精炼、重排与联合四参数估计。
- 在带静态与动态杂波的光线追踪城市场景中，(K, C, b) 设计空间中三个工作点取得 96.33–98.88% 检测，每个相干处理间隔 107–806 字节，相对 8 位 DDAE 幅度张量压缩比 1.2–9.2×10⁴，把 SE-SF 接口从多 Gbit/s 降到亚 Mbit/s 速率。
- 独立校园规模环境的跨场景评估无需重训练即取得 98.79–99.50% 检测与持平或更优角度准确率，表明学得表示捕捉的目标相关结构能跨杂波密度相当或更低场景迁移。

## 正文

论文编号：arXiv:2608.03319v1（更新类型：cross）。以下为摘要全文翻译。

未来的通感一体化（ISAC）架构把采集测量的感知实体（SE）与执行推理的感知功能（SF）分离，产生对 SE-SF 接口上紧凑、任务导向反馈的需求。转发原始信道频率响应或完整的每链路延迟—多普勒—方位—仰角（DDAE）张量代价过高，而只报告峰值在杂波下会丢弃目标判别结构。我们提出一个基于学习的粗到细感知流水线，用于单目标估计的候选潜在反馈。在 SE 端，一个轻量卷积评分器从基于导频的 OFDM 信道估计产生稠密的延迟—多普勒提议图，一个学得的编码器通过融合每候选的方位—仰角补丁、归一化位置与置信度线索构造 K 个紧凑的 C 维候选 token。潜在变量在训练后被均匀量化为 b 位，并在有限预算 B_fb = bKC + 18K + 16 位下传输给 SF，SF 执行跨候选精炼、重排与联合四参数估计。在一个带静态与动态杂波的光线追踪城市场景中，(K, C, b) 设计空间中的三个工作点取得 96.33–98.88% 的检测，每个相干处理间隔 107–806 字节，相对 8 位 DDAE 幅度张量的压缩比 1.2–9.2×10⁴，把 SE-SF 接口从多 Gbit/s 速率降至亚 Mbit/s。在一个独立的校园规模环境上的跨场景评估无需重训练即取得 98.79–99.50% 的检测与持平或更优的角度准确率，表明学得表示捕捉的目标相关结构可以跨杂波密度相当或更低场景迁移。

## 关键词

#通感一体化 #OFDM #感知 #候选潜在 #压缩反馈
