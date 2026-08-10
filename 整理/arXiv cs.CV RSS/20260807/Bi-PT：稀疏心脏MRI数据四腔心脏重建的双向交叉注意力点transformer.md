---
published: 2026-08-07
title: "Bi-PT：稀疏心脏 MRI 数据四腔心脏重建的双向交叉注意力点 transformer"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Bi-PT- Bidirectional Cross-Attention Point Transformers for Four-Chamber Heart Reconstruction from S.md"
source_note: "[[信息源/arXiv cs.CV RSS/Bi-PT- Bidirectional Cross-Attention Point Transformers for Four-Chamber Heart Reconstruction from S]]"
source_sha256: 272664a721c0ad4ecdf3036e70bb6fe9d81b580b4e67f6839c1cc21ad07e70d0
original_url: "https://arxiv.org/abs/2607.06923"
processed: 2026-08-07
language: zh-CN
---

# Bi-PT：稀疏心脏 MRI 数据四腔心脏重建的双向交叉注意力点 transformer

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Chenchuhui Hu, Shaoming Pan, Leon Axel, Meng Ye
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.06923)

## 摘要

- 提出 Bi-PT：从临床稀疏采样心脏磁共振成像（CMR）数据重建 3D 四腔人心脏网格的流水线。
- 处理从常规临床 CMR 协议所用 2D 长轴与短轴视图提取的稀疏点云（SPC）生成 3D 心脏形状的易错问题。
- Bi-PT 通过在图谱与 SPC 之间的双向点交叉注意力学习稳健点特征，加上改进对应估计的逐点语义标签，从 SPC 准确推断四腔心脏网格。
- 将形变场形式化为神经常微分方程（NODE），由逐点仿射变换与平移参数化，将图谱变形到目标心脏形状；学习 NODE 保证形变场为局部仿射微分同胚形变；将语义标签损失集成进 Chamfer 距离鼓励标签一致对应，并加平滑正则化稳定改进形变场学习；大量实验显示相对基线准确且稳健。

## 正文

研究提出 Bi-PT，一个从临床稀疏采样心脏磁共振成像（CMR）数据重建 3D 四腔人心脏网格的流水线。该工作解决从常规临床 CMR 协议所用 2D 长轴与短轴视图提取的稀疏点云（sparse point cloud, SPC）生成 3D 心脏形状的易错问题。Bi-PT 通过图谱与 SPC 之间的双向点交叉注意力学习稳健点特征，并结合改进对应估计的逐点语义标签，实现从 SPC 准确推断四腔心脏网格。研究将形变场形式化为神经常微分方程（Neural ODE, NODE），由逐点仿射变换与平移参数化，将图谱变形到目标心脏形状。通过学习此类 NODE，研究可保证形变场是局部仿射的微分同胚形变。研究还将语义标签损失集成进 Chamfer 距离，鼓励标签一致的对应，并添加平滑正则化以稳定与改进形变场学习。大量实验表明，Bi-PT 相对基线实现准确且稳健的性能。

## 关键词

心脏重建、点 transformer、CMR、神经 ODE、医学影像
