---
title: "符号感知门控稀疏自编码器：用双跳 ReLU 激活建模反相关特征"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Sign-Aware Gated Sparse Autoencoders- Modeling Anticorrelated Features with Bi-Jump-ReLU Activations.md"
source_note: "[[信息源/arXiv cs.LG RSS/Sign-Aware Gated Sparse Autoencoders- Modeling Anticorrelated Features with Bi-Jump-ReLU Activations.]]"
source_sha256: fe0aa2d3e64b0ca4d4023dd9d35f6d4fa840cab7695e7812f7210f950cff0e06
original_url: "https://arxiv.org/abs/2605.28149"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 符号感知门控稀疏自编码器：用双跳 ReLU 激活建模反相关特征

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Bartosz Wieciech、Zmnako Awrahman、Marcin Czelej、Victor Hugo Jaramillo Velasquez、Wioletta Stobieniecka
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.28149)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Sign-Aware Gated Sparse Autoencoders- Modeling Anticorrelated Features with Bi-Jump-ReLU Activations.|查看原始文件]]

## 摘要

- 稀疏自编码器（SAE）从大语言模型激活中提取可解释特征，但标准变体强制非负潜在变量，因此双向语义轴（如"压力过高"对"压力过低"）必须拆成两个潜在变量，在反相关特征上浪费字典容量。
- 提出符号感知门控 SAE（SA-GSAE）：在新的双跳 ReLU（Bi-Jump-ReLU）激活中结合两侧门控稀疏性、无符号收缩的幅度与辅助门监督，使单个潜在变量承载一个解码器方向的两种极性；参数核算表明即使反相关对罕见，符号感知仍保持参数高效。
- Pythia-1B 与 SmolLM3-3B 三个中层钩点（六个单元、三个种子）上，半宽 SA-GSAE 在六单元中的三个上经验主导全宽门控 SAE 的聚合均值前沿，其余三个在 0.025 内匹配其 R²，并在全部六个匹配 L0=64 上把死单元分数绝对降低 0.35–0.82。
- 消融显示两侧门控与辅助损失必不可少，而每极性不对称性非必需；推荐全绑定对称变体为默认。
- 盲审语义审计发现：SA-GSAE 与所有测试基线中，潜在变量两侧的可命名对立罕见；而符号条件干预显示单个带符号潜在变量充当双向因果旋钮，而一对"相反"非负潜在变量不能；相应界定可解释性声明。
- 全宽下 SA-GSAE 过参数化，其报告配置在 SmolLM3-3B 残差流站点表现出可复现的重建坍缩；推荐配置（小阈值初始化配死单元阈值重置）可防止。

## 正文

论文编号：arXiv:2605.28149v3（更新类型：replace）。以下为摘要全文翻译。

稀疏自编码器（SAE）从大语言模型激活中提取可解释特征，但标准变体强制非负潜在变量，因此一个双向语义轴（例如"压力过高"对"压力过低"）必须拆分成两个潜在变量，在反相关特征上浪费字典容量。我们提出符号感知门控 SAE（SA-GSAE），在一个新的双跳 ReLU（Bi-Jump-ReLU）激活中结合两侧门控稀疏性、无符号收缩的幅度与辅助门监督，使单个潜在变量承载一个解码器方向的两种极性；参数核算表明，即使反相关对罕见，符号感知仍然参数高效。在 Pythia-1B 与 SmolLM3-3B 的三个中层钩点（六个单元、三个种子）上，一个半宽 SA-GSAE 在六个单元中的三个上经验主导全宽门控 SAE 的聚合均值前沿，在其余三个上在 0.025 内匹配其 R²，并在全部六个单元上把死单元分数在匹配 L0 = 64 时绝对降低 0.35–0.82。消融表明，两侧门控与辅助损失必不可少，而每极性不对称性不是；我们推荐全绑定对称变体作为默认。一项盲审语义审计发现，对于 SA-GSAE 与所有测试基线，潜在变量两侧之间可命名的对立是罕见的；而符号条件干预显示，一个单一的带符号潜在变量充当双向因果旋钮，而一对"相反"的非负潜在变量不能；我们据此界定可解释性声明。在全宽下，SA-GSAE 过参数化，其报告配置在 SmolLM3-3B 残差流站点表现出可复现的重建坍缩；推荐的配置（小阈值初始化配死单元阈值重置）可以防止它。

## 关键词

#稀疏自编码器 #可解释性 #反相关特征 #门控 #激活函数
