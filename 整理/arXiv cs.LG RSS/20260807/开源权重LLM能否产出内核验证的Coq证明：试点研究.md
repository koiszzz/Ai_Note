---
published: 2026-08-07
title: "开源权重 LLM 能否产出内核验证的 Coq 证明：试点研究"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Can Open-Weight LLMs Produce Kernel-Verified Coq Proofs- A Pilot Study.md"
source_note: "[[信息源/arXiv cs.LG RSS/Can Open-Weight LLMs Produce Kernel-Verified Coq Proofs- A Pilot Study]]"
source_sha256: a86176cacff6768d1eb26f8a3282f6105b3ffd0da919c5a431539c30261990e8
original_url: "https://arxiv.org/abs/2608.05420"
processed: 2026-08-07
language: zh-CN
---

# 开源权重 LLM 能否产出内核验证的 Coq 证明：试点研究

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Ahmed Ryan, Md Erfan, Akond Ashfaque Ur Rahman, Md Rayhanur Rahman
> - **发布时间**：2026-08-07
> - **分类**：cs.LO
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05420)

## 摘要

- 评估六个开源权重 LLM 在 CoqStoq 基准（源自真实 Coq 项目）相同 100 个定理上的表现，每定理一次尝试、温度 0，只有 Coq 内核接受才算成功。
- Gemma 4 验证 12 个定理、Llama 3.3 验证 8 个、DeepSeek Coder V2 Lite 验证 1 个；Qwen 3.5、Mistral Small 3.1 与 GPT-OSS 未验证任何定理。
- 21 个成功的模型-定理结果覆盖 15 个不同定理，其中 11 个未被标准 Coq 策略基线解出；所有成功定理的参考证明为短或中长。
- 600 次尝试共 21 个内核验证证明，总成功率 3.5%；每个验证证明生成成本为 741–36193 输出 token、14.9–178.0 秒、0.0167–0.2000 GPU 小时。

## 正文

大语言模型（LLM）可以生成看似数学证明的文本，但相似性并不确立正确性。形式证明检查器验证每个证明步骤是否遵循既定逻辑规则。Coq 基于归纳构造演算（Calculus of Inductive Constructions），该逻辑框架定义了系统可接受的证明步骤。本试点研究在 CoqStoq（源自真实 Coq 项目的基准）的相同 100 个定理上评估六个开源权重 LLM。每个 LLM 每定理一次尝试、温度设为 0，Coq 在定理的原始项目环境中检查每个提议证明。只有 Coq 内核接受才计为成功。Gemma 4 验证了 100 个定理中的 12 个，Llama 3.3 验证 8 个，DeepSeek Coder V2 Lite 验证 1 个；Qwen 3.5、Mistral Small 3.1 与 GPT-OSS 未验证任何定理。21 个成功的模型-定理结果覆盖 15 个不同定理，其中 11 个未被标准 Coq 策略基线解出。所有验证成功的定理都有短或中长的人工参考证明；没有模型验证带长参考证明的定理。由于证明长度分析是探索性的，该模式并不确立证明长度造成差异。对至少有一次成功的三个模型，每个验证证明的总生成成本为 741–36193 输出 token、14.9–178.0 秒与 0.0167–0.2000 聚合 GPU 小时。无验证证明的模型无法计算这些比率。600 次尝试中模型产出 21 个内核验证证明，总成功率 3.5%。研究仅报告模型间的描述性差异，未进行统计检验，因此结果不确立六个模型的普适排名。

## 关键词

形式验证、Coq、LLM、定理证明、代码生成
