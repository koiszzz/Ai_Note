# Differential 6-DOF Pose Estimation with Provable First-Order Immunity to Camera Calibration Errors

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yueqiang Zhang, Liang Deng, Yi Zhang, Baoqiong Wang, Wenjun Chen, Shuixin Pan, Yulan Guo, Qifeng Yu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04673)

------

arXiv:2608.04673v1 Announce Type: new

Abstract: Accurate six-degree-of-freedom (6-DOF) motion estimation is essential for robotic manipulation, autonomous systems, and structural displacement monitoring. Conventional 3D-2D methods estimate absolute camera poses independently at each time and recover platform motion through camera-to-platform extrinsics, making them sensitive to extrinsic calibration errors, especially for micromotion. We present a differential pose estimation method that directly recovers platform motion from inter-frame image displacements and known 3D control points. By differencing perspective projection equations, using a depth-invariance approximation, and modeling motion on SE(3), the method avoids independent absolute-pose estimation and supports both monocular and multi-camera systems. We prove that translational extrinsic errors cancel exactly, while rotational errors induce a bounded perturbation determined by calibration error, motion magnitude, and observation geometry. We also derive generic observability conditions, a Cramer-Rao lower bound, and a bias-eliminated consistent estimator, and characterize the validity limits of the approximations. Extensive synthetic and real-world experiments establish a new state of the art for 6-DOF platform micromotion estimation, outperforming representative PnP and generalized-PnP methods in accuracy, calibration robustness, and computational efficiency. With five control points and 0.5-pixel image noise, the monocular solver obtains a combined pitch-yaw rotation RMSE of 10.09 arcsec, a translation RMSE of 3.70 mm, and a runtime of 0.34 ms. The binocular solver achieves a rotation RMSE of 10.58 arcsec, a translation RMSE of 3.91 mm, and a runtime of 0.27 ms. Code will be released upon publication at https://github.com/zyoungszu/pami2026.
