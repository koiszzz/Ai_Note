# Interpretable Fuzzy Inference for UAV Target Tracking Using Bounding-Box Geometry

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Reza Ahmari, Ahmad Mohammadi, Vahid Hemmati, Nicholas Edmond, Hossein Z. Saghazadeh, Olusola Odeyomi, Parham Kebria, Abdollah Homaifar　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.04121)

------

arXiv:2608.04121v1 Announce Type: cross

Abstract: Vision-based guidance of unmanned aerial vehicles (UAVs) toward unmanned ground vehicles (UGVs) supports cooperative aerial--ground robotics, but reliable continuous yaw estimation from onboard vision remains challenging because of sensing uncertainty, limited computation, and the need for interpretable control. Existing deep-learning and geometric-reconstruction approaches often require large datasets, external localization, or complex modeling assumptions, reducing transparency and deployment suitability on resource-constrained platforms. We present an interpretable fuzzy-inference framework that generates continuous yaw commands from low-dimensional features extracted from YOLO boxes: target centroid location, area, and aspect ratio. No explicit geometric modeling is required. A Mamdani fuzzy system serves as an interpretable baseline using a shoulder--triangle--shoulder input partition. It is followed by a first-order Takagi--Sugeno model with three antecedent membership terms per input, whose parameters are derived from training-set quantiles, yielding a compact 27-rule structure. Evaluation uses 6{,}169 labeled samples from a VICON motion-capture environment. Across five randomized train--test splits, the Takagi--Sugeno model achieves a test-set mean absolute error of $0.140^\circ \pm 0.003^\circ$, a root mean squared error of $0.200^\circ \pm 0.008^\circ$, and a maximum absolute error of $1.254^\circ \pm 0.121^\circ$. Within-threshold accuracies are $99.676% \pm 0.270%$ for $\pm1^\circ$ and $100.000% \pm 0.000%$ for both $\pm3^\circ$ and $\pm5^\circ$. Directional consistency between image-plane horizontal displacement and predicted yaw sign reaches $90.254% \pm 0.612%$. These results show that the framework is transparent, data-efficient, computationally lightweight, and suitable for real-time vision-based UAV guidance toward mobile ground targets.
