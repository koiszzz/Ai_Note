# Can Deep Research Agents Retrieve and Organize? Evaluating the Synthesis Gap with Expert Taxonomies

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Ming Zhang, Jiabao Zhuang, Wenqing Jing, Kexin Tan, Ziyu Kong, Jingyi Deng, Yujiong Shen, Yuhui Wang, Zhenghao Xiang, Qiyuan Peng, Yuhang Zhao, Ning Luo, Renzhe Zheng, Jiahui Lin, Mingqi Wu, Long Ma, Shihan Dou, Maxm Pan, Tao Gui, Qi Zhang, Xuanjing Huang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2601.12369)

------

arXiv:2601.12369v5 Announce Type: replace

Abstract: Deep Research Agents increasingly automate survey writing, yet existing benchmarks do not jointly test whether they retrieve the papers experts consider essential and organize those papers into paper-grounded taxonomies. We introduce TaxoBench, a benchmark built from 72 highly cited LLM surveys, 3,815 cited papers, and their expert-authored taxonomies. TaxoBench evaluates systems in two settings: Deep Research mode measures end-to-end retrieval and organization from a topic, while Bottom-Up mode provides the expert paper set and isolates organization. We evaluate leaf-level assignments with ARI and V-Measure and hierarchy-level structure with US-TED, US-NTED, and Sem-Path. Across 7 Deep Research Agents and 16 LLM configurations, the best agent retrieves only 20.92% of expert-cited papers, and none of 70 standard Bottom-Up runs reaches the experts' average depth of 4.86. A controlled probe shows that models which match this depth do so by fragmenting the taxonomy, reducing alignment with the expert reference. We further find that raw Sem-Path remains near a no-organization floor even when a newer model generation gains 3.68 pp ARI; after depth matching, humans lead on all 10 matched surveys by 13.27 pp. These results identify retrieval and hierarchical organization as separate bottlenecks and show why hierarchy metrics must be calibrated before they are used to compare models.
