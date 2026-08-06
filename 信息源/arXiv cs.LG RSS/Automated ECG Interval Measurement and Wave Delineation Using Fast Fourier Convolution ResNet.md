# Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Farhan Adam Mukadam, Harshit Mishra, Nachiket Makwana, Pradyot Tiwari, Subramani Kandasamy, KVS Hari　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.SP　|　原文：[打开链接](https://arxiv.org/abs/2608.00058)

------

arXiv:2608.00058v2 Announce Type: replace-cross

Abstract: Accurate measurement of ECG intervals, including PR, QRS duration, and QT/QTc, is central to cardiac diagnosis, yet the published ECG delineation literature evaluates performance almost exclusively as fiducial-point timing errors on small curated databases, rather than as clinical interval accuracy on large unselected cohorts. We bridge this gap by evaluating a complete end-to-end pipeline on 10,646 clinical 12-lead ECGs and reporting the first large-scale interval measurement accuracy study with full statistical characterisation, including bias, 95% limits of agreement (Bland-Altman), bootstrap confidence intervals, and rhythm-stratified error analysis. The underlying delineation is performed by a Fast Fourier Convolution ResNet (FFCResNet), adapting local temporal convolutions with global spectral processing via FFT and augmented with register tokens for contextual feature learning. Three per-wave models (P, QRS, and T) are trained on six public databases with ECG-specific augmentation. On 10,646 ECGs, the system achieves a QT MAE of 17.5 ms [95% CI: 16.9-18.2], with a Bland-Altman bias of +8.5 ms (LoA: -68.5 to +85.5 ms); a QRS duration MAE of 14.8 ms [95% CI: 14.6-15.0], with a bias of +12.6 ms (LoA: -12.3 to +37.6 ms); and a ventricular rate MAE of 0.8 beats/min. All biases are statistically significant by the Wilcoxon signed-rank test (p < 0.001) but remain within or near published inter-observer variability bounds for sinus rhythms. Rhythm-stratified analysis reveals substantially higher QT errors for supraventricular tachycardias (SVT MAE: 75.0 ms; AVRT MAE: 85.3 ms) than for sinus bradycardia (SB MAE: 9.3 ms) and sinus rhythm (SR MAE: 8.9 ms), providing an honest characterisation of the deployment scope. Wave segmentation achieves internal Dice scores of 95.5%, 98.2%, and 96.1% for P, QRS, and T waves, respectively, and cross-database Dice scores of 78.1%, 85.5%, and 74.2%.
