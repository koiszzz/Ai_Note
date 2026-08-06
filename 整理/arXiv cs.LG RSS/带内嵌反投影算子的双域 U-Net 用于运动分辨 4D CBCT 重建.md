---
title: "带内嵌反投影算子的双域 U-Net 用于运动分辨 4D CBCT 重建"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Dual-domain U-Nets with embedded back projection operators for motion-resolved 4D CBCT reconstructio.md"
source_note: "[[信息源/arXiv cs.LG RSS/Dual-domain U-Nets with embedded back projection operators for motion-resolved 4D CBCT reconstructio]]"
source_sha256: a50d926c04817aeca168b9c1a60e56abaa3feaa8d840f67611ccfc866ff87385
original_url: "https://arxiv.org/abs/2608.03430"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 带内嵌反投影算子的双域 U-Net 用于运动分辨 4D CBCT 重建

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Ivo Herzig、Pascal Paysan、Daniel Barco 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03430)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Dual-domain U-Nets with embedded back projection operators for motion-resolved 4D CBCT reconstructio|查看原始文件]]

## 摘要

- 提出运动分辨 4D CBCT 重建的深度学习方法（来自常规自由呼吸扫描，无需呼吸信号或显式投影分箱）：CNN 取自由呼吸 3D CBCT 投影为输入，预测最大吸气静态体加覆盖呼吸周期的十个位移向量场（DVF）。
- 四维锥束 CT（4D CBCT）对胸部癌症图像引导放疗重要，但其使用受长扫描时间限制（高患者剂量与运动/稀疏采样伪影）。
- 网络扩展 U-Net：编码器作用于滤波投影堆栈、解码器在体域运作、跳跃连接替换为多分辨率不可训练反投影函数（跨域转移特征）；模拟 CBCT 扫描训练，11 个未见模拟患者与 13 个临床自由呼吸扫描评估；另两个模型（60 秒与 6 秒扫描）由临床专家对三与两个扫描评估，比较 4D 重建单相与参考 3D SART-TV 图像的肿瘤与食管可见性。
- 专家偏好我们的方法（肿瘤可见性 59% 对 36% 无偏好、5% 参考；食管 47% 对 42%、11%）；模拟数据图像质量匹配 SART-TV（平均 RMSE −1.19 HU、PSNR +0.09 dB、SSIM −0.009）同时启用 4D 重建；临床扫描上动态结构（如膈肌）更锐利、运动条纹伪影更少——非患者特定 CNN 从单次自由呼吸扫描预测静态体与完整 4D 呼吸运动模型，无需呼吸替代或投影分箱，减少运动伪影并增加运动建模能力。

## 正文

论文编号：arXiv:2608.03430v1（更新类型：cross）。以下为摘要全文翻译。

四维锥束 CT（4D CBCT）对胸部癌症的图像引导放疗很重要，但其使用受长扫描时间限制：造成高患者剂量与运动/稀疏采样伪影。我们提出一个用于常规自由呼吸扫描运动分辨 4D CBCT 重建的深度学习方法，无需呼吸信号或显式投影分箱。我们的 CNN 取自由呼吸的 3D CBCT 投影作为输入，并预测一个最大吸气时的静态体，加上覆盖一个呼吸周期的十个位移向量场（DVF）。该网络扩展 U-Net：编码器作用于滤波投影堆栈，解码器在体域运作，而跳跃连接被多分辨率下的不可训练反投影函数替换，以在域间转移特征。模型在模拟 CBCT 扫描上训练，并在 11 个未见模拟患者与 13 个临床自由呼吸扫描上评估。另外两个模型（60 秒与 6 秒扫描）由临床专家在三个与两个扫描上评估，比较我们 4D 重建的单个相位与参考 3D SART-TV 图像的肿瘤与食管可见性。专家偏好我们的方法（肿瘤可见性 59% 对 36% 无偏好、5% 参考；食管可见性 47% 对 42%、11%）。在模拟数据上，图像质量匹配 SART-TV（平均 RMSE：−1.19 HU、PSNR：+0.09 dB、SSIM：−0.009），同时启用 4D 重建。在临床扫描上，我们的方法显示更锐利的动态结构（如膈肌）与比传统重建更少的运动条纹伪影。这个非患者特定的 CNN 从单次自由呼吸扫描预测静态体与完整的 4D 呼吸运动模型，无需呼吸替代或投影分箱，在减少运动伪影的同时增加运动建模能力。

## 关键词

#4D CBCT #医学影像重建 #U-Net #运动建模
