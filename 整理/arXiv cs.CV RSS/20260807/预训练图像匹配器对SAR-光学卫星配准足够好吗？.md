---
published: 2026-08-07
title: "预训练图像匹配器对 SAR-光学卫星配准足够好吗？"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Are Pretrained Image Matchers Good Enough for SAR-Optical Satellite Registration-.md"
source_note: "[[信息源/arXiv cs.CV RSS/Are Pretrained Image Matchers Good Enough for SAR-Optical Satellite Registration-]]"
source_sha256: 88cb574043b36cbe9b4d24a11dfc53ae1271f5e30f28f9012a2fe3135bcb4350
original_url: "https://arxiv.org/abs/2604.10217"
processed: 2026-08-07
language: zh-CN
---

# 预训练图像匹配器对 SAR-光学卫星配准足够好吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Isaac Corley, Alex Stoken, Gabriele Berton
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2604.10217)

## 摘要

- 跨模态光学-SAR（合成孔径雷达）配准是遥感灾害响应的瓶颈；现代图像匹配器几乎只在自然图像域开发与基准测试。
- 零样本设定评估 24 个预训练匹配器配置（无微调或对卫星/SAR 数据域适应）；评估跨 SpaceNet9 与两个额外跨模态基准，用确定性协议：平铺大图像推理、稳健几何过滤与连接点锚定度量。
- 结果展现不均迁移：有显式跨模态训练的匹配器并不统一优于没有的；XoFTR（为可见-热匹配训练）与 RoMa 在标注 SpaceNet9 训练场景取得最低报告平均连接点误差 3.0 px；RoMa 无任何跨模态训练实现该结果；MatchAnything-ELoFTR（3.4 px，合成跨模态对训练）紧随其后。
- XoFTR 比 RoMa 家族快约一个数量级（每对 0.4 s vs 5.0 s）；RoMa 性能与冻结 DINOv2 特征赋予大外观漂移稳健性的假说一致；部署协议选择（几何模型、瓦片大小、内点门控）对单匹配器平均误差改变最多 33 倍（超过协议消融中更换匹配器的影响）；仿射几何单独将平均误差从 12.3 降至 9.7 px。

## 正文

跨模态光学-SAR（合成孔径雷达，Synthetic Aperture Radar）配准是遥感灾害响应的瓶颈。现代图像匹配器几乎专门在自然图像域开发与基准测试。研究在零样本设定中评估 24 个预训练匹配器配置，无微调或对卫星或 SAR 数据的域适应。评估跨 SpaceNet9 与两个额外跨模态基准，使用确定性协议：平铺大图像推理、稳健几何过滤与连接点锚定（tie-point-grounded）度量。结果展现不均的迁移：有显式跨模态训练的匹配器并不统一优于没有的。XoFTR（为可见-热匹配训练）与 RoMa 在标注的 SpaceNet9 训练场景取得最低报告平均连接点误差 3.0 px。RoMa 实现该结果无需任何跨模态训练。在合成跨模态对上训练的 MatchAnything-ELoFTR（3.4 px）紧随其后。XoFTR 运行速度也比 RoMa 家族快约一个数量级（每对 0.4 秒对 5.0 秒）。RoMa 的性能与冻结 DINOv2 特征赋予对大外观漂移稳健性的假说一致。部署协议选择（几何模型、瓦片大小、内点门控）对单一匹配器改变平均误差最多 33 倍。该变化可超过在所评估协议消融内更换匹配器的影响。仿射几何单独将平均误差从 12.3 降至 9.7 px。

## 关键词

SAR、光学配准、图像匹配、零样本、卫星影像
