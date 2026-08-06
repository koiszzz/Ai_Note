# Leakage-Audited Benchmarking Reveals Limited Evidence for Cross-Subject Auditory-Evoked EEG Vowel Perception Decoding

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xiaoyang Li, Zeyan Tao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.SP　|　原文：[打开链接](https://arxiv.org/abs/2605.00865)

------

arXiv:2605.00865v2 Announce Type: replace-cross

Abstract: We tested whether auditory-evoked EEG supports subject-independent five-vowel perception decoding when trial identity, model identity, prediction provenance, and participant-level inference are controlled within a single benchmark. We reconstructed Study 2 event tables from OpenNeuro ds006104 version 1.0.1 and analyzed the consonant-vowel pair task. One-to-one marker-stimulus pairing yielded 3,840 independent trials; control-condition selection and artifact rejection retained 1,094 epochs from 16 participants and 61 EEG channels. Thirteen unique implementations were evaluated using leave-one-subject-out testing, with participant metrics reconstructed from 36,102 trial predictions across 33 complete prediction replicas. Random Forest was numerically highest at 21.474% balanced accuracy (95% participant-bootstrap interval, 19.526-23.482%; chance, 20%), but neither its participant-level tests nor any implementation survived correction across the 13-model family. Deep-model performance was close to chance, and several architectures showed substantial seed-dependent variation and low trial-label agreement. In a separate descriptive sensor-space representation, participant-associated effects accounted for 72.24% of the balanced standardized centroid sum of squares, compared with 2.04% for vowel-associated effects; between-participant same-vowel distances exceeded within-participant across-vowel distances for all 16 participants. An exploratory MDM analysis comprising 9,616 genuine refits across training cohorts of 3-15 participants showed no monotonic performance gain. Within this dataset and protocol, evidence for reliable cross-subject five-vowel decoding is limited. The benchmark provides a reproducible chain from source rows to retained epochs, predictions, participant-level metrics, multiplicity-adjusted inference, and bounded diagnostic analyses.
