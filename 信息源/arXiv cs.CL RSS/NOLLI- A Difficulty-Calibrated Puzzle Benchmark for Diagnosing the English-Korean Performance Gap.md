# NOLLI: A Difficulty-Calibrated Puzzle Benchmark for Diagnosing the English-Korean Performance Gap

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Dasol Choi, Joonyong Park, Daegon Yu, Soo Yong Kim, Youngsook Song, Seunghyeok Hong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04397)

------

arXiv:2608.04397v1 Announce Type: new

Abstract: We introduce NOLLI, a procedurally generated English-Korean puzzle benchmark designed to diagnose where Korean performance gaps arise. It comprises 15 puzzle types (25 tasks; 7,500 items), with every instance seed-regenerable, verified to have a unique solution, and scored deterministically. Rather than equating harder with bigger, we calibrate difficulty behaviorally, tuning each generator until a fixed reference model lands in target accuracy bands. Its three-level design combines matched direct translations, script adaptations over Hangul jamo (sub-syllabic letters), and Korean-only tasks grounded in Korean culture or orthography. We evaluate 15 frontier, open-weight, and Korean-developed models; among the 12 above a 3% overall-accuracy floor, matched English-Korean accuracy is statistically equivalent within a +/- 10 pp margin (TOST), suggesting little cost from presentation language alone. Writing-system-intensive tasks show sharper gaps: Korean Cipher falls behind English by up to 68.7 pp, whereas Cryptarithmetic over the same jamo shows no systematic penalty, and Jamo Composition accuracy predicts Korean Cipher accuracy. These contrasts are diagnostic rather than causal, consistent with difficulty in multi-step sub-syllabic execution. Korean-only tasks separate rule-application deficits, which vary in sign, from a Kinship deficit positive in all 12. Finally, a salient size measure fails to grow from Easy to Hard in 7 of 15 types, making structural size an unreliable proxy for empirical difficulty.
