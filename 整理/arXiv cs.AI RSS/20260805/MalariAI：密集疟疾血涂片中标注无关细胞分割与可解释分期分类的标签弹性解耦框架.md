---
published: 2026-08-05
title: "MalariAI：密集疟疾血涂片中标注无关细胞分割与可解释分期分类的标签弹性解耦框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MalariAI- A Label-Resilient Decoupled Framework for Annotation-Agnostic Cell Segmentation and Explai.md"
source_note: "[[信息源/arXiv cs.AI RSS/MalariAI- A Label-Resilient Decoupled Framework for Annotation-Agnostic Cell Segmentation and Explai]]"
source_sha256: de1b211e7fb1921a0a3efbef9f09d7be0bd6eea23147a71f56c1a375eeaa78c8
original_url: "https://arxiv.org/abs/2607.00385"
processed: 2026-08-05
language: zh-CN
---

# MalariAI：密集疟疾血涂片中标注无关细胞分割与可解释分期分类的标签弹性解耦框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kaysarul Anas Apurba、Md Hasibul Hasan、Mohammed Ali 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.00385)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MalariAI- A Label-Resilient Decoupled Framework for Annotation-Agnostic Cell Segmentation and Explai|查看原始文件]]

## 摘要

- 提出 MalariAI，两阶段解耦框架，解决三个叠加失败：端到端检测器把未标注细胞当作背景（召回受标注完整性而非真实细胞恢复扭曲）；NMS 在密集涂片中抑制有效检测；流水线缺乏逐细胞空间证据供临床审计。
- 阶段 1 用标注无关的分水岭算法在完整 1600×1200 图像中隔离每个细胞，无需任何真值输入即可恢复 75.95% 的真值细胞；端到端二元寄生 AP@0.5 达 29.10%，更严格的多类 mAP@0.5 8.67% 主要反映分水岭的有机区域边界相对轴对齐真值框被惩罚。
- 阶段 2 用 Focal Loss 在真值裁剪块上微调 EfficientNet-B0，分类准确率 98.36%（细胞正确定位后的预言上限），罕见裂殖体与配子体阶段准确率 87.5% 与 75.0%（对比 YOLOv8s 的 38.45% 与 57.27% AP）。
- 每个检测细胞生成 Grad-CAM++ 热图提供实例级空间证据；定量能量框内分析确认激活显著集中在标注细胞体上（+0.0485，配对 p=1.4×10⁻³³），使显微镜检查者能在不牺牲分类性能的情况下在单个寄生虫级别验证预测。

## 正文

论文编号：arXiv:2607.00385v2（更新类型：replace-cross）。以下为摘要全文翻译。

从血涂片显微镜进行自动化疟疾诊断是一个关键的全球健康 AI 挑战；专家稀缺仍是主要诊断瓶颈。现有深度学习系统面临三个叠加失败：端到端检测器把未标注细胞当作背景，使召回按标注完整性而非真实细胞恢复被扭曲；非极大值抑制（NMS）在密集涂片中抑制有效检测；流水线缺乏供临床审计的逐细胞空间证据。我们提出 MalariAI，一个解决全部三者的两阶段解耦框架。阶段 1 应用标注无关的分水岭算法，在完整 1600×1200 图像中隔离每个细胞，无需任何真值输入即可恢复 75.95% 的真值细胞。端到端流水线达到 29.10% 的二元寄生 AP@0.5——标记任何感染细胞的临床相关指标——而更严格的多类 mAP@0.5 8.67% 主要反映分水岭的有机区域边界相对轴对齐真值框被惩罚，而非定位失败。阶段 2 在真值裁剪块上用 Focal Loss 微调 EfficientNet-B0，实现 98.36% 的分类准确率——细胞正确定位后的预言上限——罕见裂殖体与配子体阶段准确率分别为 87.5% 与 75.0%，而现代 YOLOv8s 检测器在同一类别上端到端评估的 AP 仅为 38.45% 与 57.27%。为每个检测细胞生成的 Grad-CAM++ 热图提供实例级空间证据供临床审计；定量能量框内分析确认该激活显著集中在标注细胞体上，远超几何偶然基线（+0.0485，配对 p=1.4×10⁻³³），使显微镜检查者能在不牺牲分类性能的情况下在单个寄生虫级别验证预测。

## 关键词

#疟疾诊断 #医学影像 #细胞分割 #可解释AI
