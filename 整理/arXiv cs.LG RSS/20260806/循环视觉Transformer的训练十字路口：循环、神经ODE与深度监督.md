---
published: 2026-08-06
title: 循环视觉 Transformer 的训练十字路口：循环、神经 ODE 与深度监督
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Training Crossroads for Recurrent Vision Transformers- Recurrence, Neural ODEs, and Deep Supervision.md
source_note: "[[信息源/arXiv cs.LG RSS/Training Crossroads for Recurrent Vision Transformers- Recurrence, Neural ODEs, and Deep Supervision]]"
source_sha256: 9521cfa835b8603304e994b825cbc3dc5c6259f2957a7b864200c36b79ea01e4
original_url: https://arxiv.org/abs/2608.04879
processed: 2026-08-07
language: zh-CN
---

# 循环视觉 Transformer 的训练十字路口：循环、神经 ODE 与深度监督

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04879)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Training Crossroads for Recurrent Vision Transformers- Recurrence, Neural ODEs, and Deep Supervision|查看原始文件]]

## 摘要

- 在统一 CIFAR-100 协议下固定 bViT 架构，对三种训练与推理机制（循环 vs 独立深度、ODE 求解、深度监督）进行受控经验刻画。
- FLOPs 约束下标准 ViT 更优，内存约束下循环 ViT 提供更好的准确率-参数权衡；高阶求解器充当架构偏置而非数值精度改进。
- 逐阶段深度监督不提高名义准确率，但在训练视界之外优雅退化，而朴素循环崩溃为接近随机表现。

## 正文

视觉 Transformer（ViT）实现了强大的图像识别性能，但当每个块独立参数化时，其参数量随深度线性增长。单块循环 ViT（bViT）通过重复应用一个共享块来消除这种增长。我们不是提出新架构，而是固定一个 bViT，并在统一的 CIFAR-100 协议下对三种训练和推理机制进行受控经验刻画，提出三个问题：(i) 循环何时胜过独立参数化的深度——在 FLOPs 匹配还是参数内存匹配时？(ii) 当残差循环块通过 ODE 求解器训练时，求解器阶数是充当数值细化还是架构偏置？(iii) 超出训练视界的鲁棒性要付出多少名义准确率的代价？我们发现：当 FLOPs 是主要约束时，标准 ViT 仍然更可取；而在内存约束下，循环 ViT 提供更好的准确率-参数权衡。与残差网络是 ODE 的欧拉离散化的标准观点一致，残差循环块的连续时间类比是状态相减的向量场 $\dot{z}=F_\theta(z)-z$；虽然这个区分在原理上已知，但当块被包装为黑盒向量场时很容易被违反，我们在若干准确率点上量化了这一代价。由于向量场与求解器联合学习，高阶求解器充当求解器诱导的架构偏置，而非数值精度改进，且其收益并不均匀。最后，逐阶段深度监督描绘出一条准确率-鲁棒性前沿：它不提高名义准确率，但在远超训练视界时优雅退化，而朴素循环则崩溃为接近随机的表现。

## 关键词

#循环ViT #神经ODE #深度监督 #鲁棒性 #CIFAR-100
