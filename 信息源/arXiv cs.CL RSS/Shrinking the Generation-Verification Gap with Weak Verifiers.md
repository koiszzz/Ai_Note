# Shrinking the Generation-Verification Gap with Weak Verifiers

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jon Saad-Falcon, E. Kelly Buchanan, Mayee F. Chen, Tzu-Heng Huang, Brendan McLaughlin, Tanvir Bhathal, Shang Zhu, Ben Athiwaratkun, Frederic Sala, Scott Linderman, Azalia Mirhoseini, Christopher R\'e　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2506.18203)

------

arXiv:2506.18203v3 Announce Type: replace

Abstract: Verifiers can improve language model capabilities by scoring and ranking responses from generated candidates. Currently, high-quality verifiers are either unscalable (e.g., humans) or limited in utility (e.g., tools like Lean). While LM judges and reward models have become broadly useful as general-purpose verifiers, a significant performance gap remains between them and oracle verifiers (verifiers with perfect accuracy). To help close this gap, we introduce Weaver, a framework for designing a strong verifier by combining multiple weak, imperfect verifiers. We find weighted ensembles of verifiers, which typically require learning from labeled data, significantly outperform unweighted combinations due to differences in verifier accuracies. To reduce dependency on labeled data, Weaver leverages weak supervision to estimate each verifier's accuracy and combines outputs into a unified score that better reflects true response quality. However, directly applying weak supervision algorithms poses challenges, including inconsistent verifier output formats and handling low-quality verifiers. Weaver addresses these using dataset statistics to normalize outputs and filter specific verifiers. We study Weaver's effectiveness in test-time repeated sampling, where a model generates multiple candidate responses and selects one. Our evaluations show Weaver significantly improves over Pass@1-performance when selecting the first candidate-across reasoning and math tasks, achieving o3-mini-level accuracy with Llama 3.3 70B Instruct as generator, and an ensemble of 70B or smaller judge and reward models as verifiers (87.7% average). This gain mirrors the jump between GPT-4o and o3-mini (69.0% vs. 86.7%), which required extensive finetuning and post-training. To reduce computational costs of verifier ensembles, we train a 400M cross-encoder using Weaver's combined output scores.
