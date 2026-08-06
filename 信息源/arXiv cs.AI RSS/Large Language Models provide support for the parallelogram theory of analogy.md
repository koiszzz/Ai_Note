# Large Language Models provide support for the parallelogram theory of analogy

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qiawen Ella Liu, Raja Marjieh, Jian-Qiao Zhu, Adele E. Goldberg, Thomas L. Griffiths　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2603.19066)

------

arXiv:2603.19066v2 Announce Type: replace-cross

Abstract: Four-term word analogies (A:B::C:D) are classically modeled geometrically as parallelograms: adding the vector B-A+C produces D. Recent work suggests that this model poorly captures how humans produce analogies, with simple local-similarity heuristics often providing a better account (Peterson et al., 2020). But does the parallelogram model fail because it is a bad model of analogical relations, or because people are not very good at generating relation-preserving analogies? We compared human and large language model (LLM) analogy completions on the set of problems from Peterson et al. (2020). We find that LLM-generated analogies are reliably judged as better than human-generated ones, and are also more consistent with parallelograms in a distributional embedding space. Crucially, we show that the improvement over human analogies is driven by greater parallelogram alignment and reduced reliance on accessible words rather than enhanced sensitivity to local similarity. Finally, fine-tuning GloVe to better satisfy the parallelogram constraint makes the model's top-ranked candidates more likely to be the completions humans and LLMs actually produced, and improves its prediction of human ratings. Overall, these results provide support for the parallelogram model of word analogies.
