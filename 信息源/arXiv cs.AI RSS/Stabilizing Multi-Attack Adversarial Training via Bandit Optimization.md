# Stabilizing Multi-Attack Adversarial Training via Bandit Optimization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Rui Wang, Zeming Wei, Xiyue Zhang, Meng Sun　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.12265)

------

arXiv:2511.12265v2 Announce Type: replace-cross

Abstract: Deep Neural Networks (DNNs) remain vulnerable to diverse adversarial perturbations, motivating multi-attack adversarial training (AT) for improved robustness. However, existing methods either incur prohibitive overhead by computing all attacks at each iteration, or rely on stochastic sampling over adversarial examples, which may cause excessive parameter drift. To address these issues, we propose Calibrated Adversarial Sampling (CAS), an efficient and stable framework that reformulates multi-attack AT as a multi-armed bandit optimization problem. By sampling a single attack per iteration that dynamically balances exploration and exploitation, CAS significantly reduces training cost while mitigating optimization conflicts across attacks and controlling excessive parameter drifts. Extensive experiments demonstrate that CAS achieves superior overall robustness at low computational cost, offering a scalable and principled approach to robust generalization against multi-attack settings. Our code is available at https://github.com/1240148048/CAS.
