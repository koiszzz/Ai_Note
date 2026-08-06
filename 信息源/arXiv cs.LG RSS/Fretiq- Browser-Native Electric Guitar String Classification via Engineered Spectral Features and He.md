# Fretiq: Browser-Native Electric Guitar String Classification via Engineered Spectral Features and Held-Out Free-Play Evaluation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Aadi Garg　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2607.18303)

------

arXiv:2607.18303v2 Announce Type: replace-cross

Abstract: Identifying which string produces a given pitch in monophonic electric guitar audio is a classification challenge: a single pitch can often be produced on multiple strings, with timbral differences largely imperceptible to untrained humans. We present Fretiq, a preliminary single-instrument, single-player browser-based string classification system using a 26-dimensional feature representation of frequency band energies, spectral statistics, and 13 Mel-Frequency Cepstral Coefficients. Across five seeds, a shuffled frame-level validation split yields 97.25 +/- 0.32 percent accuracy, with an ablation study identifying MFCCs as the primary accuracy driver (92.09 +/- 0.50 percent without MFCCs). We introduce Comparison Training, a data collection method recording same-pitch pairs on adjacent strings in deliberate alternation. An initial shuffled-split comparison found no net benefit but was confounded by non-comparable validation sets across conditions. A corrected matched evaluation, using an identical recording session held out from training and model selection, shows including comparison-session data improves accuracy by 25.78 +/- 1.46 percentage points; a size-matched control shows this is not explained by training-set size alone. A recording-session-held-out evaluation yields 86.53 +/- 1.23 percent accuracy, closely matching an independently collected free-play evaluation (87.8 percent), both well below the shuffled-split figure, showing shuffled validation substantially overestimates real generalization here. We describe the feature extraction pipeline in Python and TypeScript for training-inference parity and document two implementation failure modes. The system runs entirely in-browser with no specialized hardware required.
