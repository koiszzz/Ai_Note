# Semantic Frame Interpolation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yijia Hong, Jiangning Zhang, Ran Yi, Weijian Cao, Xiaobin Hu, Lizhuang Ma, Shuicheng Yan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2507.05173)

------

arXiv:2507.05173v2 Announce Type: replace

Abstract: Generating intermediate video content of varying lengths based on given first and last frames, along with text prompt information, offers significant research and application potential. However, traditional frame interpolation tasks primarily focus on scenarios with a small number of frames, no text control, and minimal differences between the first and last frames. Recent community developers have utilized large video models represented by Wan to endow frame-to-frame capabilities. However, these models can only generate a fixed number of frames and often fail to produce satisfactory results for certain frame lengths, while this setting lacks a clear official definition and a well-established benchmark. In this paper, we first propose a new practical Semantic Frame Interpolation (SFI) task from the perspective of academic definition, which covers the above two settings and supports inference at multiple frame rates. To achieve this goal, we propose a novel SemFi model building upon Wan2.1, which incorporates a Mixture-of-LoRA module to ensure the generation of high-consistency content that aligns with control conditions across various frame length limitations. Furthermore, we propose SFI-300K, the first general-purpose dataset and benchmark specifically designed for SFI. To support this, we collect and process data from the perspective of SFI, carefully designing evaluation metrics and methods to assess the model's performance across multiple dimensions, encompassing image and video, and various aspects, including consistency and diversity. Through extensive experiments on SFI-300K, we demonstrate that our method is particularly well-suited to meet the requirements of the SFI task.
