---
published: 2026-08-07
title: "CASCADE：用于患者数据验证的下游扰动预测的智能体监管网络框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CASCADE- An Agentic Regulatory Network Framework for Patient-Data-Validated Downstream Perturbation .md"
source_note: "[[信息源/arXiv cs.AI RSS/CASCADE- An Agentic Regulatory Network Framework for Patient-Data-Validated Downstream Perturbation ]]"
source_sha256: 8731e82e9aa6e884da6671a50a088aec7f6139abad1828f84c79ab224883ccc9
original_url: "https://arxiv.org/abs/2608.05359"
processed: 2026-08-07
language: zh-CN
---

# CASCADE：用于患者数据验证的下游扰动预测的智能体监管网络框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jose A. Bird
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05359)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CASCADE- An Agentic Regulatory Network Framework for Patient-Data-Validated Downstream Perturbation |查看原始文件]]

## 摘要

- CASCADE 是一个智能体框架，从通过 MCP 暴露的预计算 ARACNe 监管网络预测基因扰动的下游转录效应。
- 与先验工作只检查预测基因是否为已知癌症基因（成员资格）不同，本文测试预测变化方向是否与现实匹配，使用焦点基因拷贝数扩增作为敲低之逆的剂量代理，对照真实 TCGA 患者肿瘤数据。
- 对 MYC，CASCADE 预测的敲低靶标与真实扩增与非扩增肿瘤表达在三种癌症类型上强一致（BRCA 90.0%、COAD 72.0%、STAD 85.7%；均 p<0.0013），远高于置换基线，经受 PAM50 亚型对照并在独立队列（METABRIC 87.2%）复现。
- 与策划的 MSigDB 基因集基线 Fisher 精确检验相比，CASCADE 的准确率未显示超过 MYC 或 E2F 驱动生物学的现有公共知识，但其基因特异方向判定明显优于朴素均匀猜测。
- 扩展到另外十五个基因后验证是基因特异而非普遍的：增殖机制调节因子大多复现，而谱系身份转录因子与一个细胞周期蛋白 D 旁系同源物（CCND2）一致失败；另基准测试 LLM 智能体是否将自然语言请求正确接地到 CASCADE 的真实 MCP 工具调用：35 个查询中，有记录的本地模型达 71.4% 精确匹配（更大模型 85.7%）；模式与基因别名失败可被规模或服务端修正解决，但两个模型在模糊查询上都自信默认错误的扰动类型。

## 正文

CASCADE 是一个智能体框架，从通过 MCP 暴露的预计算 ARACNe 监管网络预测基因扰动的下游转录效应。先验工作通过检查预测基因是否为已知癌症基因（成员资格）来验证此类工具；我们改为测试预测的变化方向是否与现实匹配，使用焦点基因拷贝数扩增作为敲低之逆的剂量代理，对照真实 TCGA 患者肿瘤数据。对 MYC，CASCADE 预测的敲低靶标在三种癌症类型（BRCA：90.0%，COAD：72.0%，STAD：85.7%；均 p<0.0013）中与真实扩增与非扩增肿瘤表达强一致，远高于置换基线，经受 PAM50 亚型对照，并在独立队列（METABRIC，87.2%）复现。与策划的 MSigDB 基因集基线通过 Fisher 精确检验相比，CASCADE 的准确率未显示超过 MYC 或 E2F 驱动生物学的现有公共知识，但其基因特异方向判定明显优于朴素均匀猜测。扩展到另外十五个基因后，验证证明是基因特异而非普遍的：增殖机制调节因子大多复现，而谱系身份转录因子与一个细胞周期蛋白 D 旁系同源物（CCND2）一致失败，我们将其作为有对冲的事后假说讨论。我们另设基准，测试基于 LLM 的智能体是否将自然语言请求正确接地到 CASCADE 的真实 MCP 工具调用。跨 35 个查询，一个有记录的本地模型达到 71.4% 的精确匹配（更大模型为 85.7%）；模式与基因别名失败可被规模或服务端修正解决，但两个模型在模糊查询上都自信地默认为错误的扰动类型，而针对性的修复无法解决该失败，因为其触发条件从未发生。

## 关键词

#监管网络 #基因扰动 #LLM智能体 #TCGA验证
