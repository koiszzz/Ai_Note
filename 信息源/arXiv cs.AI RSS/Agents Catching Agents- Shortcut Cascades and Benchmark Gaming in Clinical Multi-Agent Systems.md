# Agents Catching Agents: Shortcut Cascades and Benchmark Gaming in Clinical Multi-Agent Systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Sebasti\'an Andr\'es Cajas Ord\'o\~nez, Agastya Munnangi, Aldo Marzullo, Felipe Ocampo Osorio, Quang Bui, Mohammad Shahin, Armaan Grewal, Emmanuel Paul Kwesiga, Anqi Peter Li, Josephine Nanyonjo, Aaditya Panchal, Arshnoor Bhutani, Nikhil Jaiswal, Milit S. Patel, Maximin Lange, Leo Anthony Celi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03744)

------

arXiv:2608.03744v1 Announce Type: new

Abstract: Clinical decision support is moving toward committees of language-model agents deliberating on a shared workspace. We ask whether such committees can be gamed by shortcuts, cues a benchmark rewards but a clinician would ignore. Across seven cohorts on six public datasets spanning text (MedQA-USMLE, MedMCQA, MIMIC-CXR reports), imaging (NIH ChestX-ray14, MIMIC-CXR-JPG, CheXpert) and tabular ICU records (SUPPORT2), Gemini committees resist these cues in isolation (flip 5-16%), yet a socially plausible shortcut spreads: when two peers assert the same wrong answer, the holdout under test adopts it in 38% of cases, as does a false "pre-screen" system flag, on both capability tiers. Of three oversight agents, a gate cannot separate adoption from honest agreement (false-positive rate 100%); a same-lineage judge reading only the transcript flags adoption on text (precision 100%, recall 93%) but collapses onto the gate in imaging; a referee that privately re-queries the holdout transfers to imaging (77-88% precision, 13-21% false-positive rate). Tripling a cue's visual salience does not move contagion, whereas a second peer voice raises it by half again. Gaming a hidden rubric is near-silent: only 1/10 text and 1/134 imaging drifters name the rubric they moved toward. What games a committee is social plausibility, and only a referee independent of self-report catches it. Code: https://github.com/criticaldata/benchmaxxing
