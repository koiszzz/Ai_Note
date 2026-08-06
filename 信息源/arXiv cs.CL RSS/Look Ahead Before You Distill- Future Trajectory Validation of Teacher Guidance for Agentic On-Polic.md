# Look Ahead Before You Distill: Future Trajectory Validation of Teacher Guidance for Agentic On-Policy Distillation

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Chishui Chen, Yaoyou Fan, Te Sun, Yi Yang, Chenghao Sun, Delin Mao, Hongbo Qiao, Zuowei Zhang, Junxi Wang, Chenxing Sun, Yangen Hu, Lu Pan, Xuyang Liu, Linfeng Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.01953)

------

arXiv:2608.01953v2 Announce Type: replace

Abstract: On-policy distillation (OPD) provides teacher supervision on states visited by the student, reducing the distribution gap between training and inference. However, in multi-turn agentic tasks, student deviations may accumulate over time, gradually moving the trajectory away from states where teacher guidance remains effective. Our quantitative analysis further shows that high-disagreement states offer promising opportunities for teacher guidance, but determining whether such guidance is beneficial requires examining its effect on subsequent student trajectories. We propose FutureBridge-OPD (FTB), which executes a short teacher bridge at a high disagreement state and uses the resulting student continuation to assess whether the bridge increases the density of positive distillation signals relative to the teacher. On ALFWorld, WebShop, and ScienceWorld, under the main Qwen3-32B teacher to Qwen3-1.7B student setting, FTB outperforms vanilla OPD and TCOD by an average of 16.6 and 7.6 points, respectively, and remains effective across student scales and teacher settings. Our code is publicly available at https://github.com/ChenChiShui/FutureBridge-OPD.
