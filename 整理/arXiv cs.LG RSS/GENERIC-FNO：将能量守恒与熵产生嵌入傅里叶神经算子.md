---
title: "GENERIC-FNO：将能量守恒与熵产生嵌入傅里叶神经算子"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GENERIC-FNO- Embedding Energy Conservation and Entropy Production into Fourier Neural Operators.md"
source_note: "[[信息源/arXiv cs.LG RSS/GENERIC-FNO- Embedding Energy Conservation and Entropy Production into Fourier Neural Operators.]]"
source_sha256: 5617bfe5545b721bcf58fe9b20202d4f84eca37f1544f1e9ef62f6875197d1aa
original_url: "https://arxiv.org/abs/2606.08343"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GENERIC-FNO：将能量守恒与熵产生嵌入傅里叶神经算子

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jason Sulskis、Sathya Ravi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.08343)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GENERIC-FNO- Embedding Energy Conservation and Entropy Production into Fourier Neural Operators.|查看原始文件]]

## 摘要

- 提出 GENERIC-FNO，首个直接在函数空间中嵌入非平衡热力学完整 GENERIC（度量泊松）结构——可逆、能量守恒动力学与不可逆、熵产生动力学经退化条件耦合——的神经算子。
- 现有保持结构的神经算子最多强制单一守恒律或可逆（哈密顿）结构，而热力学一致学习此前局限于有限维、图或粒子系统；GENERIC-FNO 填补了这一空白。
- 方法将能量与熵泛函学习为神经算子，将泊松与摩擦算子参数化为夹在两个秩一投影之间的对角傅里叶乘子，从而精确强制退化条件——无需惩罚项、更新投影或残差。
- 退化恒等式对任意初始化、维度或分辨率均精确到机器精度（残差约 1e-13），因此连续时间动力学守恒学习到的能量并精确产生熵；显式时间步进仅增加小的 O(dt²) 漂移（每步残差约 1e-6）。
- 指出给定流的 (E,S,L,M) 分解并不唯一，并引入一个规范不变的耗散诊断量，独立于学习到的泛函分离可逆与耗散动力学。
- 在三种算子骨干（1D/2D FNO 与 DeepONet）和四个横跨可逆、耗散与混合机制的 PDE 上，GENERIC-FNO 在 4 倍超分辨率范围（64 到 256）上零样本保持其精确结构保证，恢复物理耗散的 ground-truth 排序，并与强无约束及能量惩罚基线竞争，在多个耗散与混合问题上以相当或更少的参数取得更优性能。

## 正文

论文编号：arXiv:2606.08343v4（更新类型：replace）。以下为摘要全文翻译。

我们提出 GENERIC-FNO，第一个直接在函数空间中嵌入非平衡热力学完整 GENERIC（度量泊松）结构的神经算子——可逆、能量守恒动力学与不可逆、熵产生动力学通过退化条件耦合。现有保持结构的神经算子最多强制单一守恒律或可逆（哈密顿）结构，而热力学一致的学习此前局限于有限维、图或粒子系统。GENERIC-FNO 弥合了这一差距：它把能量与熵泛函学习为神经算子，并把泊松与摩擦算子参数化为夹在两个秩一投影之间的对角傅里叶乘子，从而在构造上精确强制退化条件——不需要惩罚项、更新投影或残差。退化恒等式对任意初始化、维度或分辨率都精确到机器精度（残差约 10^-13），因此连续时间动力学精确守恒学习到的能量并产生熵；显式时间步进只增加微小的 O(dt²) 漂移（每步残差约 10^-6）。我们进一步指出，给定流的 (E,S,L,M) 分解并不唯一，并引入一个规范不变的耗散诊断量，可独立于学习到的泛函分离可逆与耗散动力学。在三种算子骨干（1D/2D FNO 和 DeepONet）和四个横跨可逆、耗散及混合机制的 PDE 上，GENERIC-FNO 在 4 倍超分辨率范围（64 到 256）上零样本保持其精确的结构保证，恢复物理耗散的 ground-truth 排序，并与强无约束和能量惩罚基线竞争，在多个耗散和混合问题上以相当或更少的参数取得更优性能。

## 关键词

#神经算子 #FNO #非平衡热力学 #结构保持 #PDE
