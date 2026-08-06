# ActQuant: Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Arash Akbari, Arman Akbari, Masih Eskandar, Qitao Tan, Yixiao Chen, Jingwu Luo, Bertha Pangaribuan, Liyun Zhang, Jennifer Dy, Geng Yuan, Xue Lin, Gaowen Liu, Stratis Ioannidis, Yanzhi Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2605.24011)

------

arXiv:2605.24011v3 Announce Type: replace-cross

Abstract: Vision-Language-Action (VLA) models exhibit remarkable action generation for embodied intelligence, but their heavy compute make deployment on edge platforms impractical. Aggressive, sub-4-bit weight quantization is the natural solution, yet existing post-training quantization (PTQ) methods suffer severe performance degradation in this regime. To address this, we introduce ActQuant, an action-guided mixed-precision PTQ framework that operates in two stages: (1) an inter-tensor bit allocator that assigns each weight matrix a single bit-width based on how much it contributes to predicting the agent's actions; (2) an intra-tensor scale optimizer tunes per-block quantization scales using action-aware curvature, so that dynamic range is concentrated on the weights most influential for control. To deliver the on-device benefits of our aggressive quantization, we further introduce OmniModel.cpp, an agentic conversion pipeline that ports architectures into a native C/C++ runtime with efficient low-bit kernels. We evaluate ActQuant both in simulation and on a real-world 6-DoF UR3 arm, with all models deployed through OmniModel.cpp. On the LIBERO benchmark, ActQuant is the only method that operates at or below 3 bits-per-weight, retaining 95.0% on OpenVLA-OFT and 94.8% on $\pi_{0.5}$. Pushed further, ActQuant reaches 2.5 bpw at 90.1% on OpenVLA-OFT, compressing the backbone from 14.3 GB to 2.7 GB (5.3$\times$). On the physical UR3 arm, $\pi_{0.5}$ quantized with ActQuant retains the baseline's success rate while reducing the memory footprint by 2.5$\times$.
