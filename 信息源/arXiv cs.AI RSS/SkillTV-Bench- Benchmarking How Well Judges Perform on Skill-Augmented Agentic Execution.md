# SkillTV-Bench: Benchmarking How Well Judges Perform on Skill-Augmented Agentic Execution

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhi Han, Chenxi Zeng, Liuhaichen Yang, Zihan Guo, Ming Zhou, Yang Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05573)

------

arXiv:2608.05573v1 Announce Type: new

Abstract: LLM agents increasingly execute long-horizon tasks through tool use and environment interaction, shifting evaluation from final-response scoring to verification of complete executions. For skill-augmented agents, verification additionally requires the procedural knowledge encoded in task-time skills, because this knowledge indicates what evidence to inspect and which failures are task-critical. However, existing judge benchmarks often expose final responses or static trajectories, and rarely combine task-time skills with directly inspectable artifacts and environments. We therefore introduce SkillTV-Bench, a 681-case benchmark of real agent trajectories from 50 tasks across eleven domains, designed to evaluate skill-aware trajectory verification for both LLM-as-a-Judge and Agent-as-a-Judge methods. Additionally, we propose SkillTV-Evolve, which externalizes verification knowledge as a reusable JudgeSkill that guides an agent judge to plan targeted inspections and issue evidence-grounded verdicts. On a disjoint development pool, an automated evolution loop further refines the JudgeSkill using misjudged cases. On SkillTV-Bench, the refined skill increases the same agent judge's accuracy by 14.8 percentage points. In offline rollout-pool selection, it increases selected-trajectory success from 22.9% with one rollout to 45.5% with ten rollouts. The code and data are available at https://github.com/HanZhi306/SkillTV-Bench
