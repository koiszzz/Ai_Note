# Automatic Patient-Specific Microwave Ablation Planning Accelerated by a Physics-Guided Deep Learning Model

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Seonaeng Cho, Minjee Seo, Minju Seol, Juil Park, Joon Ho Kwon, Kyungho Yoon　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2608.03086)

------

arXiv:2608.03086v1 Announce Type: cross

Abstract: Microwave ablation (MWA) is a promising minimally invasive treatment for liver tumors, but its therapeutic outcome strongly depends on patient-specific planning of antenna insertion trajectory, power, and treatment duration. Accurate numerical simulation can provide physically reliable ablation predictions; however, its high computational cost limits its use in optimization-based planning, where repeated forward evaluations are required. To address this issue, we propose a digital twin-based automatic planning framework that combines a neural ablation prediction model with a genetic algorithm. The model was trained on multiphysics simulation data generated from patient-specific tumor and vessel structures, antenna configurations, and treatment conditions, and was used as a fast forward model during planning. The prediction model achieved a Dice score of 95.1%, enabling accurate deep learning-based optimization. In 13 unseen planning cases, the proposed method improved ablation efficiency by 54.3% and reduced organ damage by 55.0% compared with clinician-defined planning, while slightly shortening the insertion path length by 3.3%. Most generated plans were also judged clinically applicable by MWA specialists. Furthermore, the framework enabled approximately 420-fold faster planning than numerical-simulation-based planning, demonstrating its potential as a fast digital twin for quantitative and personalized MWA treatment planning. The code is available at: https://github.com/SeonAengCho/MWA-Planning.git
