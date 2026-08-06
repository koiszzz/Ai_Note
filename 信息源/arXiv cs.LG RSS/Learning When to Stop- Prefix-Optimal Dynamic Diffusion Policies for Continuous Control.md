# Learning When to Stop: Prefix-Optimal Dynamic Diffusion Policies for Continuous Control

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Rohit Kumar Salla, Manoj Saravanan, Simon Stepputtis　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05084)

------

arXiv:2608.05084v1 Announce Type: new

Abstract: Diffusion policies are a powerful policy class for continuous control, but their iterative denoising process creates a substantial computational bottleneck. Reducing this cost requires adapting the number of denoising steps to the difficulty of each action while preserving task performance. We introduce Prefix-Optimal Generative Policies (POGP), a framework that learns a prefix value function at every intermediate denoising step through a Bellman-style recursion over the denoising chain. The prefix value function serves two purposes: it provides an auxiliary training objective that encourages intermediate outputs to become high-quality actions, and it enables a test-time stopping rule that terminates denoising when additional steps are unlikely to produce meaningful improvement. Across four MuJoCo environments and comparisons with 12 baselines, POGP reduces the required number of denoising iterations by approximately 2.7-fold while retaining near-full task performance. Compared with state-of-the-art dynamic diffusion baselines, prefix training also improves final task performance by approximately 3.5%. These results indicate that supervising intermediate denoising steps is useful not only for adaptive early stopping, but also as an auxiliary objective that improves the learned policy.
