# WorldMark: A Unified Benchmark Suite for Interactive Video World Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xiaojie Xu, Zhengyuan Lin, Kang He, Yukang Feng, Xiaofeng Mao, Yuanyang Yin, Yongtao Ge, Kaipeng Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.21686)

------

arXiv:2604.21686v2 Announce Type: replace

Abstract: Unlike text- or image-driven video generation, an interactive world model is driven by actions: the user acts, and the world responds. Two obstacles stand in the way of fair and comprehensive evaluation. First, models take actions in incompatible formats---captions, camera trajectories, action functions---so no shared protocol has been established. Second, while existing benchmarks have advanced world memory and visual quality, action following is reduced to trajectory or direction error, which collapses a whole path into one number: not how quickly the world reacts to a command switch, nor how cleanly it moves along the commanded axis. WorldMark removes both obstacles. Per-model adapters translate a shared WASD-style vocabulary into each model's native control format, so ten heterogeneous models receive semantically identical instructions across 500 standardized cases spanning styles, viewpoints, and difficulty tiers; a new model costs one adapter. On this common ground we characterize action dynamics through a control-systems lens---direction accuracy, direction purity, response latency, and motion stability, each resolved per axis---alongside suites for world memory and visual quality. Together they expose differences existing protocols cannot see: the fastest responders are often the least stable, a trade-off no single action metric captures; per-axis resolution reveals models that follow translation almost perfectly while barely responding to rotation; the model with the best perceptual and aesthetic quality ranks last in translational direction accuracy and latency; and stylized scenes cost every model global consistency while leaving action dynamics largely intact. We will release all data, evaluation code, and model outputs.
