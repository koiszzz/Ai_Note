---
published: 2026-08-05
title: "GenOS：AI 代码生成语义鲁棒性的组合证书"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GenOS- Compositional Certificates for Semantic Robustness in AI Code Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/GenOS- Compositional Certificates for Semantic Robustness in AI Code Generation]]"
source_sha256: 694de6ef67304253402e3483406c56aa7fb6f8765bd8eaaa9fd675fadfa0d53a
original_url: "https://arxiv.org/abs/2608.03588"
processed: 2026-08-05
language: zh-CN
---

# GenOS：AI 代码生成语义鲁棒性的组合证书

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Corrado Priami
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03588)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GenOS- Compositional Certificates for Semantic Robustness in AI Code Generation|查看原始文件]]

## 摘要

- 引入 GenOS，面向替换问题的概率操作语义：每层建模为马尔可夫核，每个接口携带观察者相对等价；证明等价兼容的内核下降到商类，且求商与分布扩展、顺序复合可交换——等价提示对包括验证提交在内的所有下游等价闭事件诱导相同概率。
- 建立工作流互模拟、健全验证下的守卫提交安全、全变差非扩张性与可加鲁棒性界（把近似误差归因到各流水线层）。
- 用可执行的插入排序审计实例化理论：自然语言释义、形式契约、六个程序、两个观察者与 121 个输入的穷尽执行——等价提示产生相同的代码类与提交分布；把 5% 概率分配给原地契约的提示被突变观察者区分，下游距离保持在预测界内。
- 2 万个随机有限核试验中无精确或近似律被违反；GenOS 是模型参数化的：兼容性是可测试的可测量性质，而非对语言模型行为的假设。

## 正文

论文编号：arXiv:2608.03588v1（更新类型：cross）。以下为摘要全文翻译。

AI 编码智能体是随机工作流：提示被解释、工件被采样、验证器产生观测、编排器提交或修复。因此，即使文本看起来同义，小的提示或规范变化也可能改变程序行为分布。现有系统评估正确性，但缺乏在完整智能体工作流内安全替换提示、契约、生成器或程序的组合标准。我们引入 GenOS，针对这一替换问题的概率操作语义。每层建模为马尔可夫核，每个接口携带观察者相对等价。我们证明，等价兼容的内核下降到商类，并且求商与分布扩展和顺序复合可交换。因此，等价提示对包括验证提交在内的所有下游等价闭事件诱导相同的概率。我们还建立工作流互模拟、健全验证下的守卫提交安全、全变差非扩张性，以及把近似误差归因到单个流水线层的可加鲁棒性界。一个可执行的插入排序审计用自然语言释义、形式契约、六个程序、两个观察者与 121 个输入的穷尽执行实例化该理论。等价提示产生相同的代码类与提交分布；一个把 5% 概率分配给原地契约的提示被突变观察者区分，而下游距离保持在预测界内。在 20,000 次随机有限核试验中，没有任何精确或近似律被违反。GenOS 是模型参数化的：兼容性是要测试的可测量性质，而不是对语言模型行为的假设。

## 关键词

#代码生成 #形式语义 #鲁棒性 #AI智能体
