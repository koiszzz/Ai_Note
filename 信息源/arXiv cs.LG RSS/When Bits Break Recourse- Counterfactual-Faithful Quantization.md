# When Bits Break Recourse: Counterfactual-Faithful Quantization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chaymae Yahyati, Ismail Lamaakal, Khalid El Makkaoui, Ibrahim Ouahbi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.17160)

------

arXiv:2605.17160v4 Announce Type: replace

Abstract: Model quantization is widely used to reduce memory, latency, and deployment cost, and is typically judged by whether predictive accuracy is preserved. In decision systems that provide algorithmic recourse, however, accuracy preservation is not sufficient: a small actionable change that flips the decision of a full-precision model may fail after quantization, or require a substantially larger intervention. This paper studies this deployment mismatch and introduces counterfactual sensitivity under quantization, a framework for measuring how compression changes recourse behavior. We propose two metrics: Validity Drop (VD), which measures the fraction of full-precision recourse actions that no longer achieve the target outcome after quantization, and Counterfactual Recourse Gap (CRG), which measures the increase in minimal recourse cost under the quantized model. To mitigate this failure mode, we introduce Counterfactual-Faithful Quantization (CFQ), a quantization-aware training method that jointly learns quantizer parameters and mixed-precision bit allocation while preserving the target prediction at teacher-generated recourse points. CFQ is compatible with standard LSQ/PACT-style quantizers and mixed-precision policies, and can also be instantiated as a training-free calibration procedure for post-training quantization. Experiments on Adult, German Credit, and COMPAS show that standard QAT and mixed-precision baselines can preserve accuracy while substantially degrading recourse stability. At matched accuracy and bit budget, CFQ consistently reduces VD and CRG; for example, on Adult, CFQ reduces VD/CRG from $0.121/0.162$ for an accuracy-centric mixed-precision baseline to $0.061/0.071$.
