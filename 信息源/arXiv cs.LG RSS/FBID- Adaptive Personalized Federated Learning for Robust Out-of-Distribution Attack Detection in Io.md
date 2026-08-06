# FBID: Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in IoT Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：An Khanh Bui, Cong Thanh Nguyen, Hoang-Anh Pham, Hoang Thai Dinh, Diep N. Nguyen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04073)

------

arXiv:2608.04073v1 Announce Type: cross

Abstract: Personalized Federated Learning (PFL) has emerged as a promising solution for intrusion detection in heterogeneous IoT environments, as it can improve local adaptation under highly Non-Independent and Identically Distributed (non-IID) data distributions. However, existing PFL methods often rely on client-side self-adjustment, which may lead to over-personalization and substantial degradation in out-of-distribution (OOD) attack detection. In this paper, we propose Federated Bandit Intrusion Detection (FBID), a novel adaptive PFL framework to address this limitation through server-side personalization control. In particular, FBID employs a contextual multi-armed bandit at the server to dynamically regulate each client's local training intensity according to its observed behavior and update quality. Moreover, FBID introduces a trust-based blending mechanism to derive client-specific interpolation coefficients between the global and local models, thereby preserving global attack-detection knowledge while still allowing beneficial local specialization. Through extensive experiments on the CICIoT2023 dataset under heterogeneous client distributions and OOD stress-test settings, we show that FBID improves individual client OOD Detection Rate (DR) by up to 7.66% and F1-Score (F1) by up to 5.08% (relative) over the strongest stable baseline, while also improving robustness to previously unseen attack classes.
