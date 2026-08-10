# Scientific Machine Learning of Chaotic Systems Learns Reduced-Order Equations for Neural Populations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Anthony G. Chesebro, David Hofmann, Vaibhav Dixit, Earl K. Miller, Richard H. Granger, Alan Edelman, Christopher V. Rackauckas, Lilianne R. Mujica-Parodi, Helmut H. Strey　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2507.03631)

------

arXiv:2507.03631v4 Announce Type: replace

Abstract: Extracting interpretable mathematical models from complex dynamical systems is difficult, especially for chaotic dynamics observed with noisy experimental data. We present PEM-UDE, a method that combines prediction-error methodology with universal differential equations to discover governing equations from limited, noise-corrupted observations. Prediction-error feedback smooths the chaotic optimization problem; for noise-free data generated within the model class, it preserves the data-consistent zero-loss set, whereas noise and model misspecification introduce a gain-dependent stability-bias trade-off. We test the method on two benchmark chaotic systems, the Rossler attractor and a real electrical circuit, and recover the correct functional forms even when one observed dimension contains noise of five times the signal magnitude. The method also accepts prior knowledge of the system as an initial functional form, which we use to learn neural circuit equations that account for sparse connectivity, a feature missing from conventional neural mass models. Applied to a population of Izhikevich neurons, PEM-UDE yields a multi-scale neural mass model that ties single-neuron parameters to macroscopic network dynamics and predicts a relationship between connection density, dominant oscillation frequency, and synchrony. We test these predictions against three intracranial recording datasets from rat and human cortices. For the neuroscience application, the learned equations are a reduced-order closure for a specified simulated Izhikevich network family; the experimental recordings provide an indirect consistency check of predicted frequency and synchrony trends, not a direct fit of the equations to recordings.
