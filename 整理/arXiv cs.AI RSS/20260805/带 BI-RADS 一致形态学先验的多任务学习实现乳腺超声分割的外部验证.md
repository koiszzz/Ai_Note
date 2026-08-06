---
published: 2026-08-05
title: "带 BI-RADS 一致形态学先验的多任务学习实现乳腺超声分割的外部验证"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Externally Validated Breast Ultrasound Segmentation via Multi-task Learning with BI-RADS-Consistent .md"
source_note: "[[信息源/arXiv cs.AI RSS/Externally Validated Breast Ultrasound Segmentation via Multi-task Learning with BI-RADS-Consistent .]]"
source_sha256: f8d2ee8bb5a43cea6eaeda5623734e49c575a75e6f2e4226a22b876c499f107e
original_url: "https://arxiv.org/abs/2511.15968"
processed: 2026-08-05
language: zh-CN
---

# 带 BI-RADS 一致形态学先验的多任务学习实现乳腺超声分割的外部验证

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jingru Zhang、Saed Moradi、Ashirbani Saha
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.15968)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Externally Validated Breast Ultrasound Segmentation via Multi-task Learning with BI-RADS-Consistent .|查看原始文件]]

## 摘要

- 提出乳腺超声分割与恶性分类的多任务框架：核心方法是可微的形态-恶性桥——从预测的软分割掩码计算病灶面积、边界粗糙度、紧凑度与纹理，用学习权重聚合成基于形态的恶性分数，并约束其与图像级分类器一致。
- 这是首个用自身软分割输出派生的 BI-RADS 启发形态作为恶性分类端到端一致性目标的乳腺超声框架；也是首个报告四个独立数据集之间所有有向外部迁移的 2D B 模式多任务研究（12 个源-目标对）。
- 匹配比较中，单模型配置在分割（DC：0.764 对 0.740）与恶性分类（AUC：0.818 对 0.791）上优于专用单任务基线；集成取得平均外部 DC 0.786，与使用 EfficientNet-B7 编码器的基于 SAM 的分割方法竞争。
- 学习到的形态权重在全部四个数据集上保持相同排序，边界粗糙度权重最大；建立了首个四数据集 2D 乳腺超声联合分割与恶性分类的有向基准。

## 正文

论文编号：arXiv:2511.15968v2（更新类型：replace-cross）。以下为摘要全文翻译。

乳腺超声分割模型的外部验证仍然有限，因为内部训练-测试划分无法捕获跨成像系统、采集协议与患者群体的域偏移。我们引入一个用于乳腺超声分割与恶性分类的新多任务框架。其核心方法论进展是可微的形态-恶性桥：病灶面积、边界粗糙度、紧凑度与纹理从预测的软分割掩码计算，用学习权重聚合成基于形态的恶性分数，并约束其与图像级分类器一致。据我们所知，这是首个使用源自自身软分割输出的 BI-RADS 启发形态作为恶性分类端到端一致性目标的乳腺超声框架。它也是首个报告四个独立数据集之间所有有向外部迁移的 2D B 模式多任务研究：在每数据集上训练并在其余三个上测试，产生 12 个源-目标对，用单一模型与五折集成评估。在所有对的匹配比较中，所提单模型配置在分割（DC：0.764 对 0.740）与恶性分类（AUC：0.818 对 0.791）上优于专用单任务基线。集成取得平均外部 DC 0.786，与使用 EfficientNet-B7 编码器、同时预测恶性的基于 SAM 的分割方法竞争。学习到的形态权重在全部四个数据集上保持相同排序，边界粗糙度获得最大权重。这些结果建立了首个完整的四数据集 2D 乳腺超声联合分割与恶性分类有向基准，并证明临床接地的形态一致性在域偏移下改善两个任务。

## 关键词

#乳腺超声 #图像分割 #多任务学习 #BI-RADS
