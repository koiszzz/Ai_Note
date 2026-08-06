# Rethinking Modality Reliability in Multimodal Sentiment Analysis with Incomplete Observations

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chunlei Meng, Jacqueline J. Pang, Pengbin Feng, Zhenyu Yu, Chun Ouyang, Zhongxue Gan　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03611)

------

arXiv:2608.03611v1 Announce Type: new

Abstract: Multimodal Sentiment Analysis (MSA) integrates text, audio, and vision to infer human affect, yet real-world multimodal observations are often incomplete. Existing methods for incomplete-observation MSA mainly follow two paradigms. Reconstruction-based methods recover missing information from observed modalities, while joint-representation methods learn directly from incomplete inputs. Although effective, these methods usually treat modality reliability only implicitly within representation learning or fusion design rather than modeling it explicitly. We argue that modality reliability is a central variable in incomplete-observation settings. Failure to model it explicitly gives rise to two related issues. The first is reliability mismatch, in which the affective evidence retained by each modality varies across samples and missing rates. The second is reliability propagation bias, in which messages from degraded modalities may adversely affect cross-modal interaction and predictive performance. To address these issues, we propose MRCF, a Modality Reliability-Calibrated Framework for MSA with incomplete observations. MRCF contains a Reliability-Aware Branch that estimates sample-specific modality reliability from intramodal quality cues and cross-modal semantic consistency, a Reliability-Guided Interaction Branch that uses the estimated scores to modulate cross-modal information flow, and a Reliability-Calibrated Fusion Module that integrates reliability and semantic cues for final prediction. Experiments on CMU-MOSI, CMU-MOSEI, and CH-SIMS show that MRCF achieves strong performance under standard incomplete-observation protocols. Further analyses provide evidence that explicit reliability modeling helps mitigate reliability mismatch and reliability propagation bias during interaction and fusion.
