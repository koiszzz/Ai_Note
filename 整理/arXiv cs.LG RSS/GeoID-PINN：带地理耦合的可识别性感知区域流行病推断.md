---
title: "GeoID-PINN：带地理耦合的可识别性感知区域流行病推断"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GeoID-PINN- Identifiability-Aware Regional Epidemic Inference with Geographic Coupling.md"
source_note: "[[信息源/arXiv cs.LG RSS/GeoID-PINN- Identifiability-Aware Regional Epidemic Inference with Geographic Coupling.]]"
source_sha256: 45734b4f91e07213664a36b0850e1cf0b13b8e29edc641e3c5af656704cac4f3
original_url: "https://arxiv.org/abs/2608.02633"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GeoID-PINN：带地理耦合的可识别性感知区域流行病推断

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Weixiong Hua、Fan Bu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02633)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GeoID-PINN- Identifiability-Aware Regional Epidemic Inference with Geographic Coupling.|查看原始文件]]

## 摘要

- 区域监测数据同时反映本地传播、报告、输入病例与外部感染压力，这些成分难以单独识别；提出 GeoID-PINN，一个用于易感—感染—康复—死亡（SIRD）动力学的物理信息神经网络（PINN）。
- 模型用行随机源组成矩阵表示空间依赖：每行赋予非负源权重且和为 1；将该矩阵向由距离、邻接、通勤或领先—滞后信息构建的空间先验做正则化。
- 在已知真值的四区域仿真中，相容的距离先验给出源组成误差 0.099；无正则化时误差升至 0.159，在先验严重错设时达 0.577，而轨迹拟合与传播规模估计保持相近——准确轨迹并不保证恢复区域依赖结构。
- 回顾性评估使用路易斯安那州 64 县的 COVID-19 数据：相对自回归负二项基线，Forecast-Trained Geo-PINN 把均方误差（MSE）从 32,957 降至 11,468，平均绝对误差（MAE）从 70.60 降至 57.73；基线负对数似然（NLL）更低（5.158 对 5.346），分布拟合更好但点预测精度更差。
- 受控的 15 县比较中，县际邻接使 MSE 降低 6.85%、MAE 降低 3.1%；不同合理先验下的相似性能支持结构化正则化，但不支持唯一边恢复。
- 结论：这些结果要求在解释前进行先验敏感性与观测模型检查。

## 正文

论文编号：arXiv:2608.02633v1（更新类型：new）。以下为摘要全文翻译。

区域监测数据反映本地传播、报告、输入病例与外部感染压力，这些成分难以分别识别。我们引入 GeoID-PINN，一个用于易感—感染—康复—死亡（SIRD）动力学的物理信息神经网络（PINN）。该模型用行随机源组成矩阵表示空间依赖，其每一行分配非负源权重且权重和为 1。我们把这个矩阵向由距离、邻接、通勤或领先—滞后信息构建的空间先验做正则化。在已知真值的四区域仿真中，相容的距离先验给出源组成误差 0.099。无正则化时误差升至 0.159，在先验严重错设时达到 0.577，而轨迹拟合与传播规模估计保持相近。因此，准确的轨迹并不保证恢复区域依赖结构。我们还用路易斯安那州 64 个县的 COVID-19 数据对 GeoID-PINN 做回顾性评估。相对自回归负二项基线，Forecast-Trained Geo-PINN 将均方误差（MSE）从 32,957 降至 11,468，平均绝对误差（MAE）从 70.60 降至 57.73。基线具有更低的负对数似然（NLL），5.158 对 5.346，表明分布拟合更好但点精度更差。在受控的 15 县比较中，县际邻接使 MSE 降低 6.85%、MAE 降低 3.1%。不同合理先验下相似的性能支持结构化正则化，但不支持唯一的边恢复。这些结果要求在解释前进行先验敏感性与观测模型检查。

## 关键词

#物理信息神经网络 #流行病学 #可识别性 #SIRD #空间耦合
