# Toward Federated Large Language Models in Medicine: A Parameter-Efficient Framework for Privacy-Preserving, Multi-Institutional Adaptation

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Anran Li, Yuanyuan Chen, Wenjun Long, Yu Yin, Yan Hu, Hyunjae Kim, Weipeng Zhou, Yujia Zhou, Hongyi Peng, Yang Ren, Xuguang Ai, Zhenyue Qin, Ming Hu, Xiaoxiao Li, Han Yu, Yih-Chung Tham, Lucila Ohno-Machado, Hua Xu, Qingyu Chen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2601.22124)

------

arXiv:2601.22124v2 Announce Type: replace

Abstract: Large language models (LLMs) are increasingly adapted for medical applications, but most are trained using data from a single institution because privacy and governance constraints prevent multi-institutional data sharing. As a result, these models often generalize poorly across heterogeneous healthcare systems. We address this gap by introducing Fed-MedLoRA and Fed-MedLoRA+, a parameter-efficient federated framework for collaborative LLM adaptation across healthcare institutions. Fed-MedLoRA transmits only low-rank adapters rather than full model weights, reducing communication overhead. We also evaluate a privacy-preserving variant that applies Gaussian perturbation to transmitted adapter updates. Fed-MedLoRA+ further incorporates adaptive aggregation to better address cross-site heterogeneity in patient populations, annotation practices, and disease distributions. We evaluate the framework on clinical information extraction across five independent patient cohorts totaling 42,198 entities and 41,570 relations, and compare it with zero-shot and fine-tuned LLMs, domain-specific BERT models, and federated baselines. Across all settings, the proposed methods consistently improve extraction performance and generalize better to heterogeneous cohorts. In a real-world case study using clinical notes from the Yale New Haven Health System, the framework demonstrates strong performance under low-resource new-site deployment. These results suggest that federated, parameter-efficient LLM adaptation is feasible, scalable, and effective for multi-institutional clinical deployment.
