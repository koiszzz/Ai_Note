# FM4WiFi: Flow Matching for Multi-AP Coordination in Dense Deployments of Beyond Wi-Fi 8 Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Maksymilian Wojnar, Krzysztof Rusek, Katarzyna Kosek-Szott, Szymon Szott　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.NI　|　原文：[打开链接](https://arxiv.org/abs/2608.04050)

------

arXiv:2608.04050v1 Announce Type: cross

Abstract: Wi-Fi networks are moving beyond random channel access toward tightly coordinated operation across access points (APs), a shift reflected in Wi-Fi 8's multi-AP coordination (MAPC). However, the current MAPC specification restricts cooperation to AP pairs, fundamentally limiting the gains achievable in dense deployments and calling for scalable, network-wide coordination in beyond Wi-Fi 8 systems. We target coordinated spatial reuse (Co-SR), where APs transmit concurrently at reduced power. Effective Co-SR demands joint selection and configuration of AP-station transmissions, yet existing approaches simply do not scale: they rely on heavy signaling, slow convergence, unrealistic assumptions, and often require computation time that explodes with network size. We introduce FM4WiFi, a generative ML pipeline that addresses these limitations by producing high-quality Co-SR configurations in a single inference step. FM4WiFi integrates (i) an autoencoder that learns compact latent representations of network states, (ii) a flow-matching generative model that synthesizes feasible Co-SR configurations (including rate control, absent from prior work), and (iii) a surrogate rate predictor that allows rapid, large-scale Co-SR candidate evaluation without dependence on a live system or digital twin. Across extensive evaluations (including experimental validation), FM4WiFi matches or exceeds state-of-the-art baselines at medium-to-large scales and scales to 30+ APs with sub-second inference. Extensive ablation studies validate each modeling and optimization choice.
