# AutoSND: From Execution Evidence to Structural Policies for Automated Network Dismantling Heuristic Discovery

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhijing Hu, Changjun Fan, Yufan Deng, Zhiguang Cao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03653)

------

arXiv:2608.03653v1 Announce Type: new

Abstract: Network dismantling is fundamental to analyzing the robustness and vulnerability of complex systems, yet practical heuristics must balance effectiveness and computational efficiency, and are usually designed manually by researchers. Existing large language model based automatic heuristic design methods can generate and screen candidates, yet they have difficulty further transforming candidate quality or failure states during execution into structural-level guid- ance for subsequent generation. We propose AutoSND, a three stage tree search framework for complete network dismantling pro- grams. Stage I broadly explores from simple heuristics and archives execution evidence. Stage II compiles candidate records into struc- tural policies concerning local signals, neighborhood access, and state update ranges. Stage III continues tree search conditioned on these policies and obtains the final quality prioritized and speed prioritized candidates, AutoSND-Q/S. Experiments on 12 real world networks and 3 large real world networks show that AutoSND achieves better search performance and stability and discovers more competitive and structurally interpretable network disman- tling programs. The final candidates form an interpretable structure that uses residual degree as the backbone, adjusts node order with bounded local signals, and restricts the state update range. Code is available at https://github.com/MirrorNew/AutoSND.
