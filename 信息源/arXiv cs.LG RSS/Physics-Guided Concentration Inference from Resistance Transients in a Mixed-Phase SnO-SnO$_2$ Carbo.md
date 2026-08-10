# Physics-Guided Concentration Inference from Resistance Transients in a Mixed-Phase SnO-SnO$_2$ Carbon Monoxide Sensor with p-n Switching

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Sani Biswas, Preetam Singh, Amit Kumar Gangwar　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：physics.chem-ph　|　原文：[打开链接](https://arxiv.org/abs/2605.23971)

------

arXiv:2605.23971v2 Announce Type: replace-cross

Abstract: This work presents a physics-guided machine-learning framework for carbon monoxide concentration inference from experimentally measured resistance transients of a mixed-phase SnO-SnO$_2$ material gas sensor exhibiting temperature-dependent p-n switching behavior. Cycle-level transient responses are represented through physically interpretable descriptors and complemented by compact fast Fourier transform (FFT) and discrete wavelet transform (DWT)-based summaries. Using leakage-aware grouped cross-validation, we study both multi-class concentration classification and continuous concentration regression for the p-type and n-type sensing regimes separately. Across both regimes, fused features provide the strongest overall performance, while the physics-guided descriptor block remains highly competitive, indicating that the dominant concentration information is already encoded in physically meaningful transient dynamics. The p-type branch shows the best concentration-class discrimination, with the fused Random Forest classifier reaching approximately $96.5\%$ accuracy, whereas the n-type branch yields the best quantitative concentration estimation, with the fused Random Forest regressor achieving an MAE$\approx 1.48$ ppm and an R$^2$ $\approx 0.992$. These results reveal a clear dual-regime behavior: p-type sensing is particularly favorable for classification, whereas n-type sensing is more favorable for high-fidelity regression. More broadly, the study demonstrates that leakage-aware, cycle-level, physics-guided machine learning can extend conventional gas-sensing analysis beyond single-response metrics while preserving physical interpretability
