# Better design than Fable

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Tue, 21 Jul 2026 13:25:28 GMT　|　原文：[打开链接](https://www.bensbites.com/p/better-design-than-fable)

------

Hey folks,

It’s my birthday - the grand old age of 36. And I’m on holiday with my family, which, for those of you with young kids, is more full-on than normal life.

There used to be a running joke inside my previous company that when I went away I’d come back with a new grand plan for what we were pivoting to.

Not so much this time.

Last December we had our third child, Poppy, and I was working at Factory. But she has some health issues, and I got pretty burnt out and overwhelmed, so I had to step back.

For the last 7 months I've been plodding along work-wise without much agency. Which isn’t like me at all.

I keep thinking of things I want to exist, but I can't bring myself to put in the work to bring them to fruition. Or more often than not, I'm not happy enough with how they turn out, so I kill them.

Ben’s Bites is the thing I've done longer than anything else. It’s because each email is new. I like new things. I don't like running things. Or doing things because that’s what a business is or should do.

And honestly, with two 3-year-olds and a 7-month-old and being a stay-at-home dad, it’s pretty tough to have the time and energy to shoot for the moon.

I’m going to stop trying to put my square peg in a round hole.

I’m going to put more of myself into this thing. This company is for people who are not traditionally technical but want to use the latest and greatest for work, life and building stuff. That’s who I am.

I’m going to share my opinions on what’s happening in AI more, call out stuff I think is bullshit and try to explain things I’m learning myself.

I’ll be an open book, like I'm being now.

And I’ll test new things too. Please be open with your feedback, but be nice today; it’s my birthday after all.

Ben’s Bites is brought to you by [Veridect](https://veridect.ai/)

Guardrails filter what your AI says. [Veridect governs what your agent does](https://veridect.ai/) — before it acts. Safe moves clear instantly and free; only the riskiest get the full adversarial cross-examination — greenlight, escalate, or block in ~3s, logged tamper-proof. [Try to beat it in 60s](https://veridect.ai/agentic-trust-demo).

Headlines

- [Kimi K3](https://www.kimi.com/blog/kimi-k3), a new model from the Beijing-based Moonshot AI, surpassed Fable and GPT-5.6-Sol on [Arena’s frontend coding leaderboard](https://arena.ai/leaderboard/code/webdev) (and generally came close to these models on other benchmarks as well). It’s a big model (2.8T parameters) and quite token-inefficient. It is half as expensive as GPT-5.6-Sol on a per-token basis but uses twice as many tokens as Sol, balancing out the costs.Kimi K3 is an incredible model, but it’s not an incredible value. - [Theo](https://x.com/theo/status/2078215659948052984)It works with images, has a 1M-token context window, and its weights will be released openly by 27th July. For now, the model is available on Kimi’s apps and API, but they have paused new subscriptions because they don’t have enough GPUs to serve the model to everyone.

- [Fable 5](https://x.com/claudeai/status/2078302415804379218) is now a permanent part of Max and Team subscription plans for Claude with the same condition: you can use 50% of your weekly limits towards Fable. Pro ($20/mo) accounts can use it via usage credits and will get a one-time $100 credit. Also, Fable found an example that [disproves the 87-year-old Jacobian conjecture](https://x.com/__alpoge__/status/2079028340955197566) in mathematics. No big deal, right?

- [Horizon by Sierra](https://sierra.ai/blog/horizon) - agents that work towards a business outcome over days or months, moving between calls, texts, email and company systems. Charged for outcomes, not tokens.

- NotebookLM turned three and got a new name: [Gemini Notebook](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/). It also got [Collections](https://x.com/Gemini_Notebook/status/2079315825119686899), a new feature to organise notebooks. One notebook can be part of multiple collections.

[Subscribe now](https://www.bensbites.com/subscribe?)

Quick links

- [Cursor rebuilt SQLite](https://cursor.com/blog/agent-swarm-model-economics) from an 835-page manual using multiple agent swarm setups. Across many configurations that passed all tests, costs varied a lot → Opus 4.8 + Composer 2.5 cost $1,339 vs $10,565 for GPT-5.5 alone.

- [Notion AI](https://x.com/akothari/status/2079345706410848355) can now use a browser for you. (in early access)

- [Ramp Router](https://ramp.com/router) - Send each request to a relevant model. It saves 30% in costs for Ramp internally. Comes with an OpenAI-compatible endpoint.

- [yoinks](https://github.com/pablostanley/yoinks) - terminal tool for downloading videos from X, YouTube, Instagram and more.

- [OpenShip](https://openship.io/) - open-source platform for deploying and running apps on your own infrastructure.

- [Lucy 2.5](https://x.com/DecartAI/status/2077801728213156044) by Decart AI - live AI model for editing video in real time with more control.

- [Linear Loops](https://x.com/linear/status/2079233260161323371) - recurring workflows that Linear Agent runs for your team.

- [Rivet](https://x.com/gormankind/status/2079296286608752761) - connect a local agent and design references, then explore several interface directions.

- [How much Ridge spends on AI](https://x.com/Seanfrank/status/2078607948583157839) - a non-tech company breaks down whether token costs are actually a problem.

- [12-factor companies](https://x.com/jeffreyhuber/status/2079266941366407380) - own your context, rent intelligence and teach agents the work before hiring for it.

- Building diagrams to explain databases using [Excalidraw charts and Cursor.](https://x.com/BenjDicken/status/2077826040127422568)

- [Harness engineering](https://github.com/lopopolo/harness-engineering) - 12 theses on designing the systems around coding agents.

- [Hilos](https://hilos.sh/) - team chat where people and coding agents work in the same conversation.

Connecting the dots…

- Aaron built himself an [SVG editor with Sol](https://x.com/aarondfrancis/status/2077870517395022278) instead of letting the model create the SVG in a single go and hoping it turns out exactly as he wants it to be. Now, both he and the model can tweak the SVG (using code or the knobs). Sunil from Cloudflare makes a similar case in his recent post: [one document, two hands](https://sunilpai.dev/posts/one-document-two-hands/) - you and the agent both should be able to work on the “document” directly inside an app.

- tldraw released a free, file-based desktop app for its “draw on a canvas” product. Any agent like Codex and Claude Code can use [tldraw offline](https://x.com/tldraw/status/2077784657869902121). So tldraw offline becomes one such surface where both you and an agent can work on a single document.

- [The Self-Driving Company](https://x.com/amasad/status/2077802290304684404) - Replit’s CEO Amjad Masad wrote this post sharing how agents are effectively in each part of operating Replit. Gumroad is another good example of a self-driving company. It is now mostly run by an AI called Gumclaw. Sahil (Gumroad’s founder) shared that June 2026 was the first month that Gumroad spent [equal amounts on AI tokens and human payroll](https://x.com/shl/status/2079387173749714944).

- Good reads from Gumroad/Gumclaw - [automating support](https://x.com/Gumclaw/status/2078196643879350331) and [TASTE.md](https://gist.github.com/gumclaw/eff5733392e7660e26c66622ff5ebc80)

Afters

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@keshavatearth](https://x.com/Keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
