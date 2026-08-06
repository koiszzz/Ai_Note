# Evaluating the Diagnostic Robustness of Vision-Language Models Under Visual and Textual Perturbations

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Ali Khoramfar, Mohammad Javad Dousti, Alireza Mohamadian, Heshaam Faili　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04885)

------

arXiv:2608.04885v1 Announce Type: cross

Abstract: Standard accuracy metrics for VLMs often mask significant reliability failures in sensitive domains. In this work, we utilize a histopathology-validated brain MRI dataset to systematically assess the diagnostic robustness of four VLM families under evidence-preserving perturbations. By reordering anatomical slices and swapping target label positions, we evaluate whether models maintain consistent predictions when clinical evidence remains invariant. Our results reveal significant vulnerabilities in presentation-order stability, with models exhibiting prediction flips in up to 48.9% of cases under simple sequence reversals. We further identify a textual selection bias, where label reordering triggers inconsistent diagnoses in up to 67.8% of cases despite identical visual inputs. Negative-control tests further reveal diagnostic overcommitment: models generate categorical diagnoses in up to 76.1% of cases after expert-annotated lesion slices are removed. These results demonstrate that high accuracy can overestimate clinical reliability, masking sensitivity to sequential presentation and textual framing that is not captured by aggregate accuracy. Our findings highlight the necessity of stability-based metrics for the deployment of VLMs in safety-critical clinical applications. Our evaluation data and code will be made public upon acceptance.
