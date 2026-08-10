# Vorch-Director: Interactive World Story Model via Noise-Aware Error Rectification

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Lisai Zhang, Yidi Wu, Qi Liu, Xin Ma, Yang Ding, Gang Yue, Siqian Yang, Jingyuan Chen, Lin Ma, Yaohui Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05776)

------

arXiv:2608.05776v1 Announce Type: new

Abstract: Autoregressive continuation provides a natural path toward minute-scale audio-visual generation by repeatedly extending a short-window generator conditioned on previously generated video and audio. However, models are trained on clean ground-truth histories, while inference relies on their own generated histories, where accumulated errors cause identity drift, over-smoothing, and audio-visual desynchronization. Recent methods reduce this mismatch by reusing prediction residuals as synthetic corruption, but we observe that the effectiveness of residual correction critically depends on the flow-matching noise level at which residuals are produced. We propose Vorch-Director, a noise-level-aware residual correction strategy that associates each residual with its originating noise level and injects residuals from matched noise regimes during training. By aligning injected errors with the denoising process, Vorch-Director produces more realistic autoregressive histories while retaining efficient teacher-forcing training. Built on the audio-visual LTX-2 diffusion transformer, Vorch-Director further introduces task embeddings to distinguish historical video, reference images, and target video, enabling unified conditioning for long-horizon generation. Together with a clean conditioning sink and mixed-task training, Vorch-Director supports multi-shot, multi-subject, reference-guided audio-visual long-video generation. We evaluate Vorch-Director on ST-Bench and introduce a new long-horizon audio-visual benchmark with metrics for quality drift and long-range consistency. Extensive experiments demonstrate improved stability and audio-visual fidelity over strong baselines.
