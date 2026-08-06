# MDArena: Evaluating Coding Agents on Realistic Molecular Dynamics Workflows

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Nithishwer Mouroug Anand, Wei-Tse Hsu, Kyle Vaccaro, Eden James Gage, Jonathan David Colburn, Linda Xi Phan, Minjoon Seo, Kevin Guan, Philip C. Biggin　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：physics.chem-ph　|　原文：[打开链接](https://arxiv.org/abs/2608.02642)

------

arXiv:2608.02642v1 Announce Type: cross

Abstract: Accelerating scientific discovery is among the most consequential applications of AI, and computational biomolecular simulation stands out as a particularly promising target within this broader effort. Coding agents promise to automate significant portions of this workflow, yet their reliability on realistic molecular dynamics (MD) tasks remains poorly characterized. To address this issue, we introduce MDArena, a benchmark of 50 containerized tasks drawn from active biomolecular simulation projects, spanning 29 molecular systems and 14 broad research protocols, including trajectory analysis, complex system preparation, free-energy protocols, and enhanced sampling. We evaluate six model/harness configurations spanning Codex and OpenCode. Among the evaluated configurations, Codex GPT-5.5 at extra-high reasoning effort performs best, reaching 24/50 Strict-Pass@1 successes (48%), followed by Codex GPT-5.5 Medium with 21/50, and OpenCode Gemini Flash 3.5 with 20/50. Average correctness and process rewards are substantially higher than strict success rates across all configurations, indicating that agents frequently make meaningful partial progress but fail on the fine-grained details required for reproducible scientific workflows. Hard tasks remain largely unsolved, particularly membrane-protein system preparation and alchemical free-energy setup, both unsolved or near-unsolved by every evaluated configuration. MDArena thus exposes a substantial gap between the usefulness of coding agents as supervised assistants and their reliability as autonomous MD researchers, while providing a reproducible and extensible platform for tracking progress toward closing it.
