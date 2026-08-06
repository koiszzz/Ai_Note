# Can LLMs Test Terminal User Interfaces?

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chao Peng, Ruida Hu, Ajitha Rajan, Tegawend\'e F Bissyand\'e, Jacques Klein, Cuiyun Gao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.03743)

------

arXiv:2608.03743v1 Announce Type: cross

Abstract: Terminal User Interfaces (TUIs) combine the stateful, screen-oriented behaviour of GUIs with terminal deployment and are now common in developer tools. Yet they lack a dedicated testing methodology. We survey 197 real-world TUI applications: only 12% of test code exercises the interface, and 45% of those tests never send input, checking a static frame instead. We turn these applications into a headless benchmark spanning ratatui/Rust, bubbletea/Go, textual/Python, and ink/TypeScript, packaging each as an instrumented Docker image. We record line and widget coverage where reliable, rendered terminal states, and crashes. Under equal wall-clock budgets, we compare four frontier LLMs with random exploration. No model dominates. Random is a strong time-budgeted baseline, but its crash advantage comes from higher throughput: per interaction, LLM guidance is more efficient and uniquely reaches input-gated faults. Automatically deriving launch inputs yields the largest practical gain, enabling applications that otherwise never start. Line coverage poorly predicts crash discovery, weakening it as a proxy for test effectiveness. Automated TUI testing is feasible but far from solved, and honest baselines matter more than model choice. We release the coverage tool tuicov at https://github.com/tui-testing/tuicov and the testing framework tuibot at https://github.com/tui-testing/tuibot.
