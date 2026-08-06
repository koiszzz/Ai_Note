# Surrogate Substitution Preserves PHI Detectability: A Multi-Detector Equivalence Study

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qiming Bao, Sherry J. H. Feng, Kim Chester Eugenio, Meng Fon　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03172)

------

arXiv:2608.03172v1 Announce Type: new

Abstract: Structure-preserving de-identification replaces protected health information (PHI) with realistic same-type surrogates -- "Anna S." becomes "Maria S.", not [NAME] -- so that clinical text stays fluent and downstream tools keep working. But this only helps if the substitution does not itself corrupt the signal those tools rely on. We ask a narrow, testable question: on the spans a de-identifier actually masks, can downstream PHI detectors still find the surrogate? We introduce a paired, multi-detector evaluation protocol that (i) scores utility only on masked spans, decoupling coverage from utility; (ii) uses equivalence testing (TOST) rather than null-hypothesis significance testing, which is uninformative at our sample size (57k paired spans); and (iii) builds a surrogate-failure typology separating fixable generator defects from intrinsic detector limits. Across 11 detectors, 7 benchmarks, and 7 languages (1,750 documents), recall on masked spans moves from 76.1% to 74.9% -- a change our equivalence test shows is statistically equivalent to zero within a +/-2-point margin (p ~ 3e-9), with detector ranking preserved. The residual loss does not reflect detectors getting worse at PHI: it concentrates in malformed and out-of-distribution surrogates (truncation Chicago -> Illino, salience loss Cedars-Sinai -> Vidant). A redaction floor and an open-source surrogate baseline indicate the effect is a property of well-formed substitution, not of one tool. We release the evaluation subsets, scoring code, and an interactive dashboard at https://custodianai.pages.dev so the protocol can audit any structure-preserving transform.
