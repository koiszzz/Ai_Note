---
published: 20260806
title: "工具结构化 LLM 推理的仅振幅 FFN 干预方法：门控评估协议与跨模型实证结果"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,.md"
source_note: "[[信息源/arXiv cs.AI RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,]]"
source_sha256: 0f20ab0b5d482ec80224f165013ec3274ba53391489126a15eae3ef4378663ea
original_url: "https://arxiv.org/abs/2607.11183"
processed: 2026-08-06
language: zh-CN

---

# 工具结构化 LLM 推理的仅振幅 FFN 干预方法：门控评估协议与跨模型实证结果

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sheng Xu, Zhen Chen, Junhua Wang, Boyuan Huang, Ke Jia, Jiadun Zhu, Yiming Xu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.11183)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,|查看原始文件]]

## 摘要

- 大语言模型日益作为工具使用智能体运行，小格式、参数或函数调用错误可使原本看似合理的响应失效；本文研究推理时前馈网络（FFN）干预作为无需重训练模型权重即改进结构化输出的方式。
- 提出振幅门控（AG），保留预训练 FFN 权重方向并在解码期间调制激活幅度；AG 分离候选生成、排序和前瞻接受/回退决策，并引入每样本修复-伤害评估（PFHE）配对报告协议。
- 在唯一通过源对齐审计的跨位置联合上，探索性离线混合选择器将 Qwen3.5-9B 工具路由微平均从 38.66% 提升到 42.92%（+4.27 个百分点）；结果支持模型和任务特定选择配严格回退，而非通用 AG 开关。

## 正文

大语言模型日益作为工具使用智能体运行，小格式、参数或函数调用错误可使原本看似合理的响应失效。我们研究推理时前馈网络（FFN）干预作为无需重训练模型权重即改进结构化输出的方式。较早的项目特定方法正交残差投影（ORP）暴露了敏感的 SwiGLU FFN 位点和非单调能量效应，但其改变方向的操作在关键诊断中产生比修复更多的回归。因此我们提出振幅门控（AG），它保留预训练 FFN 权重方向并在解码期间调制激活幅度。AG 分离候选生成、排序和前瞻接受/回退决策。我们还引入每样本修复-伤害评估（Per-Sample Fix-Harm Evaluation，PFHE），一个配对报告协议，用修复、伤害、保留正确案例和保留错误案例补充原生任务指标。在唯一通过源对齐审计的跨位置联合上，探索性离线混合选择器将描述性异构评分者 Qwen3.5-9B 工具路由微平均从 38.66% 提升到 42.92%（+4.27 个百分点）；两个 Hermes 函数调用端点改进 +7.64 和 +7.62 点。相同输出 PFHE 格式视图记录 2,556 单元中 48 个修复、26 个伤害、294 个保留正确案例和 2,188 个保留错误案例，原生和严格效应的配对 bootstrap 区间为正。协议分离的 Qwen3-8B 和 Qwen2.5-7B 分析保留 oracle 余量但无正的训练选择固定工具路由。分组五折 RF 诊断暗示弱非线性排序信号但强制干预，缺乏基线回退和配对不确定性，且不是部署证据。结果支持模型和任务特定选择配严格回退，而非通用 AG 开关。

## 关键词

#FFN干预 #工具使用 #LLM推理 #结构化输出 #arXiv