# MMLongBench-Doc-V2: A Corrected-Annotation, Semantics-Aware Revision of MMLongBench-Doc

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mingtian Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03397)

------

arXiv:2608.03397v1 Announce Type: new

Abstract: MMLongBench-Doc is a long-document QA benchmark of 1,082 questions over 135 PDFs. Two properties of it push measured scores away from the quantity they are meant to capture: the reference metric compares extracted answers, so 1,358,000 loses to 1358000; and a non-trivial share of ground-truth annotations are wrong, ambiguous, or incomplete --- concentrated, because of how they were found, in exactly the questions capable systems answer correctly. MMLongBench-Doc-V2 corrects 106 annotations, each published with the page and arithmetic that settle it, and replaces the string metric with a pinned LLM judge asked whether a response means the reference. Ten questions whose document ships under the wrong filename are removed rather than counted wrong, along with one duplicated question, leaving 1,071 questions over 134 documents. The most reusable contribution is a decision procedure for when an empty set key may be widened and when widening would destroy a deliberate negative sample; applied to all 208 rows, it widened 14. V2 scores are not comparable with published V1 numbers. The corrected corpus, the per-entry correction record and the evaluation harness are available at https://github.com/VectifyAI/MMLongBench-Doc-V2.
