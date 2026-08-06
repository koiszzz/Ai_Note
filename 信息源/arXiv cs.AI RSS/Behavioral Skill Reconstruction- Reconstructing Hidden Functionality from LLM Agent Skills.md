# Behavioral Skill Reconstruction: Reconstructing Hidden Functionality from LLM Agent Skills

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Peichun Hua, Haoxuan Xu, Mengyuan Li　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04192)

------

arXiv:2608.04192v1 Announce Type: cross

Abstract: Closed source agent skills may encode proprietary instructions, scripts, constants, and data. Providers may offer their capabilities as services while keeping the underlying packages hidden. Prior work focuses on prompt injection attacks that directly disclose these artifacts, and existing defenses accordingly aim to prevent such leakage. However, preventing file disclosure does not prevent users from recovering the functionality those files implement. This raises a fundamental question: can a user reconstruct a skill's functionality through ordinary use while its files remain hidden?

We study behavioral skill reconstruction (BSR), in which an attacker uses valid task requests and observed responses to build a functional clone of a hidden skill. We introduce SkillClone, a black-box attack that clones a target skill by forming an interface hypothesis from its public advertisement, issuing structured benign probes, synthesizing an executable replica, and iteratively repairing it through differential validation against the victim skill. Across 30 skills spanning rules, tables, procedures, and algorithms, SkillClone achieves exact or partial recovery on held-out inputs for several targets. Iterative requerying closes gaps missed by single-round reconstruction. Because SkillClone uses only legitimate interactions, disclosure-focused defenses provide limited coverage, and less detailed skill descriptions offer limited protection. These results show that file secrecy alone does not ensure functional secrecy. Defenses must also limit cumulative information leakage from ordinary use.
