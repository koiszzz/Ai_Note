# GenOS: Compositional Certificates for Semantic Robustness in AI Code Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Corrado Priami　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.PL　|　原文：[打开链接](https://arxiv.org/abs/2608.03588)

------

arXiv:2608.03588v1 Announce Type: cross

Abstract: AI coding agents are stochastic workflows: prompts are interpreted, artifacts are sampled, validators produce observations, and orchestrators commit or repair. Small prompt or specification changes can therefore alter program-behavior distributions even when the texts appear synonymous. Existing systems evaluate correctness, but lack a compositional criterion for safely replacing a prompt, contract, generator, or program inside a complete agentic workflow. We introduce GenOS, a probabilistic operational semantics for this replacement problem. Each layer is modeled as a Markov kernel, and each interface carries an observer-relative equivalence. We prove that equivalence-compatible kernels descend to quotient classes and that quotienting commutes with distributional extension and sequential composition. Hence, equivalent prompts induce equal probabilities for all downstream equivalence-closed events, including verified commit. We also establish workflow bisimulation, guarded-commit safety under sound validation, total-variation non-expansiveness, and an additive robustness bound that attributes approximation error to individual pipeline layers. An executable insertion-sort audit instantiates the theory with natural-language paraphrases, a formal contract, six programs, two observers, and exhaustive execution on 121 inputs. Equivalent prompts yield identical code-class and commit distributions; a prompt assigning 5% probability to an in-place contract is distinguished by a mutation observer, while downstream distances remain within the predicted bound. Across 20,000 randomized finite-kernel trials, no exact or approximate law is violated. GenOS is model-parametric: compatibility is a measurable property to test, not an assumption about language-model behavior.
