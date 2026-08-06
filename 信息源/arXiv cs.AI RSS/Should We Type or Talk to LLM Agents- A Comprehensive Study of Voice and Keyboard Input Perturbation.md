# Should We Type or Talk to LLM Agents? A Comprehensive Study of Voice and Keyboard Input Perturbations

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zizhao Hu, Nathan Elijah Segura, Mohammad Rostami, Jesse Thomason　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03970)

------

arXiv:2608.03970v1 Announce Type: new

Abstract: Human input reaches language models by typing or speaking, and each channel leaves a distinct signature: orthographic noise for keyboards; for voice, disfluency from conventional transcription and restructuring from AI-backed dictation tools. How do they impact an LLM's performance? In this paper we present HIVE (Human Input-Variation Engine), a suite of voice transcription perturbations and QWERTY keyboard perturbations. We use HIVE to evaluate how robust models are to these perturbations. We present seven findings. (i) Voice transcription perturbations lower accuracy across every instruction-tuned model we test, and it is the structure of the transcription rather than its fillers that carries the cost. (ii) QWERTY keyboard perturbations cost less, and a model absorbs a lot of them before accuracy falls away. (iii) Both trace back to one cause, how many of the question's tokens survive the perturbation: destroying a token is what hurts, while adding new ones alongside it costs little. (iv) The gap between the two channels appears only where the answer must be constructed or deduced; on multiple choice there is none. (v) The harm does not solely come from test-set contamination. (vi) It cannot be trained away with lightweight adaptation. (vii) A thinking budget recovers the keyboard channel almost entirely but leaves the spoken registers untouched, and compressed speech is worse with it.
