# MI-CXR: A Benchmark for Longitudinal Reasoning over Multi-Interval Chest X-rays

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Sunghwan Steve Cho, Yunseok Han, Jaeyoung Do　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2605.15574)

------

arXiv:2605.15574v3 Announce Type: replace

Abstract: Longitudinal chest X-ray (CXR) interpretation requires reasoning over disease evolution across multiple patient visits, yet most existing medical VQA benchmarks focus on single images or short-horizon image pairs. We introduce MI-CXR, a benchmark for standardized evaluation of Multi-Interval longitudinal reasoning over multi-visit CXR sequences, without requiring free-form report generation or additional clinical context. MI-CXR comprises five-way multiple-choice questions over five-visit patient timelines and instantiates three complementary task families: Temporal Event Localization, Interval-wise Change Reasoning, and Global Trajectory Summarization, which assess clinically grounded visual reasoning over time. Evaluating 14 state-of-the-art vision-language models (VLMs) shows low overall performance, with an average accuracy of 29.3%, only modestly above random guessing. Using stage-wise diagnostic probing, we find that models often produce locally plausible interval descriptions but fail to enforce temporal constraints or compose evidence into globally consistent decisions over the full timeline. These findings reveal key limitations of current VLMs and establish MI-CXR as a principled benchmark for longitudinal medical reasoning. The benchmark is available at https://github.com/AIDASLab/MI-CXR
