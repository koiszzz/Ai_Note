# CaliDist: Calibrating Large Language Models via Behavioral Robustness to Distraction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mohammad Anas Jawad, Cornelia Caragea　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.05799)

------

arXiv:2606.05799v2 Announce Type: replace

Abstract: Existing calibration methods for Large Language Models (LLMs) often overlook a critical dimension of trustworthiness: a model's behavioral robustness to irrelevant or misleading information. In this paper, we argue that a model's true confidence should reflect its stability under cognitive pressure. We introduce CaliDist, a novel post-hoc calibration approach that directly measures and penalizes a model's susceptibility to distraction. CaliDist quantifies how an LLM's predictions and uncertainty change when its input prompt is perturbed with semantic distractors. This stability (or lack thereof) signal is then used to adaptively scale the model's initial confidence score. Our extensive experiments on seven Natural Language Understanding classification benchmarks using six distinct LLMs show that CaliDist consistently achieves lower Expected Calibration Error (ECE) and Brier Score compared with strong baselines. Remarkably, our method reduces the ECE from 23% to 7% on average--a relative improvement of 70%--demonstrating that behavioral stability is a powerful signal for calibration. We make our code and datasets available at github.com/anas-jawad/CaliDist.
