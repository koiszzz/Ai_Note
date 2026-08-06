# Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jinquan Zhang, Dongfu Yin, Run Yang, Yufeng Yan, Zhen Tian, F. Richard Yu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.03231)

------

arXiv:2608.03231v1 Announce Type: cross

Abstract: Vision-Language-Action (VLA) policies promise general robotic manipulation, but their robustness against physical-world attacks remains fragile. In particular, we show that physically realizable adversarial patches can reliably induce failures by triggering a mechanism we call policy-critical action-to-vision attention hijacking, where action-conditioned attention is diverted from task-relevant regions to a localized patch. To demonstrate the threat, we propose Attention-Guided Semantic Disruption (AGSD), an Expectation-over-Transformation (EOT) optimized printable patch that jointly (i) concentrates action-to-vision attention on the patch and (ii) disrupts vision-language semantic alignment, yielding strong cross-task and cross-architecture transfer. To mitigate such attacks, we introduce Structure-Aware Robust Fine-Tuning (SARF), a zero-inference-overhead defense that fine-tunes only the visual encoder using feature anchoring, policy-critical attention correction, and language-guided geometric consistency restricted to semantically relevant regions. On LIBERO, SARF reduces OpenVLA's failure rate under AGSD from 100% to 14.2%-56.8% (28.6% average) across suites while preserving clean performance, and on a real PiPER manipulator it improves average success under AGSD from 23.0% to 65.0%. These results highlight mechanism-level robustness as a practical path to securing VLA robots against physical attention hijacking.
