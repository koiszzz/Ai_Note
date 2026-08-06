# Coupled Continuous-Discrete Generation for Scene Text Image Super-Resolution

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Axi Niu, Knag Zhang, Qingsen Yan, Hao Jin, Jinqiu Sun, Yanning Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04525)

------

arXiv:2608.04525v1 Announce Type: new

Abstract: Scene text image super-resolution (STISR) aims to recover visually plausible appearance while preserving character semantics from degraded inputs. Existing STISR systems often rely on externally generated priors or separate image and text models, resulting in error propagation and costly multi-stage inference. We present DualTSR, a unified framework that formulates STISR as coupled continuous-discrete generation. Conditional flow matching restores continuous image latents, while absorbing-state discrete diffusion reconstructs text tokens. Both processes share a multimodal transformer backbone, allowing the evolving image and text states to interact throughout generation without an external OCR prior at inference. On CTR-TSR, DualTSR achieves the best FID, LPIPS, ACC, and NED among the compared methods at both X2 and X4. On an aligned RealCE subset, it obtains the best FID, ACC, and NED with competitive LPIPS. Compared with DiffTSR at X4, DualTSR improves ACC by 12.78 percentage points while reducing the parameter count from 1.23B to 203M and end-to-end latency from 13.3s to 132ms. These results establish DualTSR as an accurate and efficient method for STISR.
