# Formal Analysis and Supply Chain Security for Agentic AI Skills

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Varun Pratap Bhardwaj　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2603.00195)

------

arXiv:2603.00195v2 Announce Type: replace-cross

Abstract: 32 pages, 5 theorems with full proofs, 68 references, open-source tool: https://github.com/qualixar/skillfortify. v2: corrects the bibliography (22 entries had author lists that did not match the papers at the cited arXiv identifiers; all verified against the arXiv API and corrected, and affected authors notified) and three external claims against primary sources: MalTool reports 1,300 standalone and 5,727 embedded malicious tools, not 6,487; CVE-2026-25253 is authentication-token exfiltration via an unvalidated gatewayUrl, credited to depthfirst and fixed in 2026.1.29, not remote code execution through a crafted skill package; ClawHavoc counts are 341, later 824, and 1,184 by source and date, not "over 1,200". All experiments re-measured against the released v0.6.0 implementation using harnesses now committed to the repository. E1/E2 unchanged (F1 96.15%). E3 reverses to a negative result: information flow analysis adds no detections over pattern matching on this corpus. The soundness theorem's scope is stated explicitly and no longer conflated with the zero false-positive rate.
