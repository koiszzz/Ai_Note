# ReGround: Restoring Visual Grounding in Multi-Step Reasoning through Self-Diagnosis and Visual Re-Examination

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Lei Peng, Shuai Lv, Wei Hu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04385)

------

arXiv:2608.04385v1 Announce Type: new

Abstract: Vision-Language Models (VLMs) often lose visual grounding during multi-step reasoning: as reasoning chains grow longer, later inference steps rely increasingly on language priors rather than image evidence. We identify a consistent benchmark-level signature associated with this degradation: across 2,510 re-examined samples from four benchmarks, attention entropy over image tokens typically decreases during Round 1 and rises again after image re-injection.

However, we find that effective visual re-examination requires two complementary ingredients: image re-injection and targeted self-diagnosis. Without targeted diagnosis, re-examination can even hurt performance, whereas accurate self-diagnosis yields substantial gains -- a swing of several points on key benchmarks, indicating that diagnostic quality is a key factor in whether re-examination helps or hurts in our setting. We present ReGround, a two-stage framework that teaches VLMs to self-diagnose grounding failures and selectively re-examine visual evidence, without architectural modifications or external tools. Through capability bootstrapping, a stronger variant from the same model family provides diagnostic scaffolding only during data construction, while the policy model learns to diagnose autonomously at inference time and retains most of the assisted gains.

Experiments on eight benchmarks across two VLM backbones demonstrate consistent gains, especially on visually intensive multi-step reasoning tasks, while incurring only modest inference overhead relative to tool-augmented baselines. Project page: https://sespoir.github.io/reground-page/ . Code: https://github.com/sespoir/ReGround .
