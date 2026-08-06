# A neural operator framework for data-driven discovery of stability and receptivity in physical systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chengyun Wang, Liwei Chen, Nils Thuerey　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：physics.flu-dyn　|　原文：[打开链接](https://arxiv.org/abs/2604.19465)

------

arXiv:2604.19465v3 Announce Type: replace-cross

Abstract: Understanding how complex systems respond to perturbations, such as whether they will remain stable or what their most sensitive patterns are, is a fundamental challenge across science and engineering. Traditional stability and receptivity (resolvent) analyses are powerful but rely on known equations and linearization, limiting their use in nonlinear or poorly modeled systems. Here, we introduce a data-driven framework that automatically identifies stability properties and optimal forcing responses from observation data alone, without requiring governing equations. By training a neural network as a dynamics emulator and using automatic differentiation to extract its Jacobian, we can compute eigenmodes and resolvent modes directly from data. We demonstrate the method on both canonical chaotic models and high-dimensional fluid flows, successfully identifying dominant instability modes and input-output structures even in strongly nonlinear regimes. By leveraging a neural network-based emulator, we readily obtain a nonlinear representation of system dynamics while additionally retrieving intricate dynamical patterns that were previously difficult to resolve. This equation-free methodology establishes a broadly applicable tool for analyzing complex, high-dimensional datasets, with immediate relevance to grand challenges in fields such as climate science, neuroscience, and fluid engineering.
