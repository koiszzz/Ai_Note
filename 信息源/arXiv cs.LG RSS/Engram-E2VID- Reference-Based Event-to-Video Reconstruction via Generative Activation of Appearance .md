# Engram-E2VID: Reference-Based Event-to-Video Reconstruction via Generative Activation of Appearance Engrams

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Feiyu Ji, Xiang Li, Hao Ma, Tianxiang Huang, Qingxin Lu, Mengqi Ji, Lei Han, Xiaokang Yang, Xiaoyun Yuan　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05728)

------

arXiv:2608.05728v1 Announce Type: cross

Abstract: Reference-based event-to-video reconstruction aims to recover target RGB frames from a reference frame and the event stream captured over the reference-to-target interval. Although events provide fine-grained temporal cues, they encode sparse and asynchronous log-intensity changes rather than absolute appearance, making faithful reconstruction intrinsically challenging. The central challenge lies in associating event-derived target-time structures with relevant appearance information from the reference frame, especially under complex motion and long temporal intervals. In this work, we propose Engram-E2VID, a structure-guided framework that reconstructs target frames through the generative activation of appearance engrams. Specifically, the reference frame is encoded into token-space appearance engrams, while the event stream and reference context are transformed into a target-time motion-structure scaffold that captures motion boundaries and event-induced structural changes. Within a one-step diffusion backbone, scaffold-derived structural tokens progressively interact with and activate relevant appearance engrams across layers. This token-space association allows target structures to access reference appearance without relying on direct pixel-wise correspondence, while the diffusion prior complements uncertain or newly revealed regions. Across three benchmarks, Engram-E2VID improves PSNR by up to 3.29 dB and reduces LPIPS by up to 0.08 over the strongest same-input baseline, while degrading more slowly as the reconstruction interval increases.
