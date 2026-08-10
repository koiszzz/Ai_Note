# On-Policy Delta Distillation for Multilingual Math Reasoning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Byeongho Heo, Jaehui Hwang, Sangdoo Yun, Dongyoon Han　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05802)

------

arXiv:2608.05802v1 Announce Type: cross

Abstract: On-Policy Distillation (OPD) is emerging as a promising alternative to reinforcement learning for LLM post-training, yet its effectiveness in multilingual settings remains underexplored. We study OPD and its advanced variant, On-Policy Delta Distillation (OPD$^2$), for mathematical reasoning in English, Korean, and Japanese. OPD$^2$ improves OPD by using the probability gap between a post-trained teacher and its base model as the learning signal. Experiments with Qwen3 show that OPD$^2$ consistently outperforms the original OPD, with particularly strong improvements in Korean and Japanese, and generally narrows the English-Korean performance gap. We further find that English-only OPD can also increase performance for Korean and Japanese, but often shifts the responses toward English, highlighting the importance of multilingual data to preserving target-language responses.
