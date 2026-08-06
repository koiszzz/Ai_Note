# UHP Detection: LVLMs have their Unique Hallucination Pattern in the Consistency Space

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Amir Mohammad Ezzati, Kiyan Rezaee, Bardiya Kariminia, Mohamad Amin Yousefi, Asal Mohammadjafari Mamaqani, Behrad Samimi, Mohammad Hossein Rohban　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03817)

------

arXiv:2608.03817v1 Announce Type: cross

Abstract: Large vision--language models (LVLMs) demonstrate strong multimodal reasoning capabilities but remain prone to hallucination, where model predictions are not grounded in visual evidence. Existing black-box hallucination detection methods estimate uncertainty through a single consistency metric, implicitly assuming that model uncertainty can be adequately characterized by a single measure. However, hallucinations exhibit diverse manifestations of uncertainty across different behavioral probes, making a single measure insufficient to characterize their underlying behavior. We propose \emph{Unique Hallucination Pattern (UHP) Detection}, a fully black-box framework that models hallucination as a structured uncertainty pattern defined by two axes: perturbation modality (image vs.\ text) and logical polarity (a statement vs.\ its negation). Their intersection produces four complementary consistency groups that capture distinct manifestations of model uncertainty, from which both within-group and between-group features are extracted to train a lightweight classifier. Through comprehensive experiments on AMBER and PhD across three LVLMs, UHP Detection consistently outperforms prior black-box and white-box baselines, with improvements of up to $+18.72\%$ AUC-ROC and $+20.07\%$ AUC-PR over the strongest black-box methods. Extensive ablation studies demonstrate that each consistency group contributes complementary information and that their combination forms a structured hallucination pattern. Furthermore, cross-dataset evaluation shows that this learned pattern generalizes across benchmarks, indicating that hallucination behavior reflects a model-specific consistency pattern. \textbf{Code is publicly available at} https://github.com/amirezzati/uhpdet.
