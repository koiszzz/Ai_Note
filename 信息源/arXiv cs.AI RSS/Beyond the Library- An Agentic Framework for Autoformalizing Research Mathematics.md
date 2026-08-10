# Beyond the Library: An Agentic Framework for Autoformalizing Research Mathematics

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Arshia Soltani Moakhar, Iman Gholami, Max Springer, Mahdi JafariRaviz, MohammadTaghi Hajiaghayi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2606.31134)

------

arXiv:2606.31134v3 Announce Type: replace

Abstract: While Large Language Models (LLMs) have demonstrated exceptional capabilities in mathematical reasoning, they frequently produce subtle errors that evade human detection. Formal mathematical languages like Lean 4 offer mechanical proof checking, strongly motivating the need for autoformalization: the automatic translation of natural language mathematics into verifiable code. Recent trends indicate that general-purpose LLMs, heavily optimized for standard programming, now outperform smaller models explicitly fine-tuned for Lean. Leveraging this shift, we introduce *Theo*, an agentic autoformalization framework powered by general coding LLMs. At the core of our system is an orchestrator that manages a multi-agent pipeline tailored for research-level mathematics. Because cutting-edge research frequently relies on concepts outside the scope of existing libraries like Mathlib, our system dynamically extends necessary type definitions and validates them via a novel Auxiliary Lemma technique before formalizing the primary theorems. We applied our approach to PutnamBench, producing machine-checked Lean proofs for a random sample of 32 problems. Furthermore, we evaluate our system on seven research papers---five from the ACM Symposium on Theory of Computing (STOC) and two recent OpenAI manuscripts---spanning combinatorics, communication complexity, mechanism design, learning theory, number theory, discrete geometry, and graph theory. We successfully formalize their main theorems and proofs and validate the generated formalizations with human experts; notably, two developments require no axioms beyond Lean's kernel. All of our formalizations are available at https://beyondthelibrary.github.io/formal_arxiv/.
