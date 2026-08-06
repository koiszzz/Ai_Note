# SleepVLM: A Rule-Grounded Vision-Language Model for Auditable Sleep Staging

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Guifeng Deng, Pan Wang, Mengfan Niu, Jiquan Wang, Shuying Rao, Junyi Xie, Xi'ang Chen, Sha Zhao, Gang Pan, Wanjun Guo, Tao Li, Haiteng Jiang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2603.26738)

------

arXiv:2603.26738v4 Announce Type: replace

Abstract: Sleep staging is essential for sleep assessment and disorder diagnosis. In recent years, automatic sleep staging systems have achieved accuracy approaching that of human experts, but the black-box nature of their predictions hinders clinical adoption. Existing interpretability methods offer partial insight into model behavior, but their outputs still require expert reinterpretation and do not provide a direct basis for auditing individual predictions. To improve trustworthiness, we propose the task of auditable sleep staging. To solve this task, we present SleepVLM, a vision-language model that casts sleep staging as visual reasoning over rendered polysomnography (PSG) waveform images. For each epoch, SleepVLM outputs a stage together with the applicable American Academy of Sleep Medicine (AASM) rules and an auditable rationale. The model is trained using a two-stage framework: Waveform-Perceptual Pre-training followed by Rule-Grounded Supervised Fine-tuning over a mixture of fine-grained and coarse annotations. Experiments on four datasets show that SleepVLM outperforms state-of-the-art methods on average. An automated AASM-feature audit shows broad coverage of stage-defining evidence in the rationales, and independent experts validate their reasoning quality. To facilitate further research, we construct and release MASS-EX, an expert-annotated dataset for rule-grounded sleep staging with AASM rule annotations and expert-written rationales.
