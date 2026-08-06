# Multi-Task Multi-Frame Visual Piano Transcription

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yonghyun Kim, Hoyeol Sohn, Juhan Nam, Alexander Lerch　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.03419)

------

arXiv:2608.03419v1 Announce Type: cross

Abstract: Audio-based piano transcription performs well on onset, pitch, and velocity, but the sustain pedal lets sound persist long after key release, so audio systems predict pedal-extended offsets rather than physical key release. Yet existing Visual Piano Transcription (VPT) systems focus on onset detection from short video windows, offset accuracy lags onset by a wide margin, and note-level velocity has not been reported. To address these gaps, we present V2N (Video to Notes), the first complete VPT system: a shared temporal backbone feeds task-specific heads for onset, offset, key hold, and velocity, jointly trained with per-frame supervision rather than only at the window center. Ablations show that multi-task supervision enables offset and velocity prediction while improving onset accuracy; longer temporal context yields further improvements. V2N sets new state-of-the-art results on PianoVAM and R3.
