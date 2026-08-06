# Permission Denied: Policy-Graded Evaluation of Coding Agents in Hardened Environments

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dotan Davidovich, Yair Amar, Hai Rozencwajg, Or Hiltch　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02670)

------

arXiv:2608.02670v1 Announce Type: cross

Abstract: Coding agents increasingly run inside organizations whose security controls (scoped credentials, restricted egress, read-only filesystems, non-root execution) constrain them like any other software. Existing benchmarks, however, evaluate agents almost exclusively in permissive sandboxes, so it is unknown how performance changes when policy is enforced. In this work, we evaluate 12 coding agents on Terminal-Bench 2.1 across nested security policy levels derived from common real-world enterprise restrictions. Hardening is never free but far from uniform: under the strictest policy, success losses reach 18.3 points and cost inflation 167.3\%, and the two axes disagree; the model that best preserves success is also the one that loses the most efficiency, so model choice is policy-dependent. Beyond aggregate scores, we characterize how agents behave when policy blocks their actions and decompose the failures hardening induces: runs grind into timeouts or wrong solutions rather than stopping early, in a mix that differs by model. To ground comparisons, we verify task solvability under the strictest policy, separating model failures from tasks the policy forecloses. We release Boundary-Bench, an open-source hardening plugin enabling policy-constrained evaluation of coding agents on Terminal-Bench and compatible benchmarks.
