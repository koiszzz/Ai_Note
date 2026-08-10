# Invariant Representation Learning for Source-Free Time Series Forecasting with LLM-Centric Proxy Denoising

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Kangjia Yan, Chenxi Liu, Hao Miao, Xinle Wu, Yan Zhao, Chenjuan Guo, Bin Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2510.05589)

------

arXiv:2510.05589v3 Announce Type: replace-cross

Abstract: Effective time series forecasting enables various real-world applications, benefiting from the proliferation of mobile devices. However, the volume of time series data may vary significantly across domains due to high data acquisition costs and data regulations. To maximally create value from sparse data, this study focuses on a new problem of source-free time series forecasting, aiming to adapt a pretrained model from sufficient source time series to the sparse target time series without access to the source data, enabling data protection. To achieve this, we propose TimeID, a novel source-free time series forecasting framework with a large language model (LLM) centric proxy denoising inspired by the powerful generalization capabilities of LLMs. Specifically, TimeID consists of three key components: (1) dual-branch invariant disentangled feature learning that enforces representation- and gradient-wise invariance by means of season-trend decomposition; (2) lightweight, parameter-free proxy denoising that dynamically calibrates systematic biases of LLMs; and (3) knowledge distillation that bidirectionally aligns the denoised prediction and the original target prediction. Extensive experiments on real-world datasets demonstrate that TimeID outperforms state-of-the-art baselines, improving MSE and MAE by 10.7% and 9.3% on average. The code is available at https://github.com/decisionintelligence/TimeID.
