# Opus 4.8

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Tue, 02 Jun 2026 13:29:05 GMT　|　原文：[打开链接](https://www.bensbites.com/p/opus-48)

------

Hey folks,

I’m spending as much time as possible off Twitter, and any other general doomscroll distractions. I’ve got work to do (the course/manual/whatever it’ll be called).

Aiming to get at least the preview ‘lessons’ out this month.

I’m not going to force any wisdom out in today’s intro because it’s not my style.

On to the condensed version of the AI madness…

Ben’s Bites is brought to you by [Smallest AI](https://smallest.ai/?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime2june)

Pulse is world’s fastest speech-to-text model (#1 on [Sierra’s μ-Bench](https://research.sierra.ai/mubench/) for P95 latency) with top performing accuracy (under 5% WER on [Artificial Analysis](https://artificialanalysis.ai/speech-to-text/non-streaming) leaderboard), works across 39 languages and 100+ accents.

Get $25 free credits, use code [BYTE25-N3CX3UKV](https://app.smallest.ai/dashboard?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime2june) (valid till 6/6)

Headlines

- [Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8) is out, with dynamic workflows in Claude Code. Claude now writes an orchestration script, then spins up subagents in parallel to work through complex tasks.[Dex’s take](https://x.com/dexhorthy/status/2060144982372340155): this doesn’t prove loose multi-agent systems work. Deterministic workflows around small agent loops are more reliable.

- Claude Opus 4.8 - [Simon Willison calls it a modest but useful upgrade](https://simonwillison.net/2026/May/28/claude-opus-4-8/), mostly because it’s more honest about uncertainty and less likely to miss flaws in its own code. [Every’s vibe check](https://x.com/danshipper/status/2060061586018951546?s=20) is more bullish: they found it a big jump from 4.7, strong at coding/writing/knowledge work, and competitive with GPT-5.5 on their internal senior-engineer benchmark. The catch is the harness: the model is back, but Claude’s app still feels messier than Codex.[Scores top on ARC-AGI-3](https://x.com/arcprize/status/2061512025638121516?s=20), tripling 5.5’s score

- [Datacurve’s new benchmark](https://deepswe.datacurve.ai/) places it below gpt 5.5 and only marginally better than 5.4. Using a lot more tokens…$$$.[![图片](https://substackcdn.com/image/fetch/$s_!9eAc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4d42ad4-51b2-40c0-91c0-6561c58300ff_983x246.png)](https://substackcdn.com/image/fetch/$s_!9eAc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4d42ad4-51b2-40c0-91c0-6561c58300ff_983x246.png)

- [Anthropic filed a confidential S-1](https://www.anthropic.com/news/confidential-draft-s1-sec) and raised a round [$65B Series H at $965B post-money](https://www.anthropic.com/news/series-h?939688b5_page=1&refid=f12170c9-3765-478f-9679-5ed11bf6510b). IPO this year?

- [NVIDIA and Microsoft are reinventing Windows PCs for personal AI agents](https://nvidianews.nvidia.com/news/nvidia-microsoft-windows-pcs-agents-rtx-spark) — RTX Spark is a 1-petaflop Windows superchip with up to 128GB unified memory, full CUDA/RTX support, local 120B model support, and new Windows agent security primitives + NVIDIA OpenShell. Microsoft’s [Surface Laptop Ultra](https://blogs.windows.com/devices/2026/05/31/introducing-surface-laptop-ultra-made-for-world-makers/) is the flagship device.

- [Codex is becoming a productivity tool for everyone](https://openai.com/index/codex-for-knowledge-work/)

- [Stacker's AI Accelerator](https://stacker.ai/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=ai-accelerator) is offering $500k in inference credits to businesses ready to go AI-first. Selected companies get credits and hands-on mentoring to deploy AI agents across their operations. Applications close June 9th. [Apply now](https://stacker.ai/ai-accelerator?utm_source=bensbites&utm_medium=newsletter&utm_campaign=ai-accelerator).*

[Subscribe now](https://www.bensbites.com/subscribe?)

My feed

- [Stacker](https://stacker.ai/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=tool-placement) is an AI coworker that joins the dots in your business. Stacker lives in Slack, connects your tools, and does the work.*

- ChatGPT has a new [table of contents UI for long chats](https://x.com/ChatGPTapp/status/2060467129066070182), and a [full-screen long-form writing mode](https://x.com/ChatGPTapp/status/2061571468992126982) that can save drafts to your Library.

- Codex got [computer use + mobile remote control](https://x.com/OpenAI/status/2060428604727771421) on Windows and a [Python SDK](https://x.com/reach_vb/status/2061569472792572163).

- [Replit added a Canvas](https://docs.replit.com/learn/projects-and-artifacts/canvas) to create variants, annotate, compare design directions and apply changes back into your app.

- [Figma Make now works on your local code](https://www.figma.com/blog/figma-make-now-on-your-local-code/) - visually edit the app, annotate, chat and open PRs.

- Linear’s new product [Diffs](https://linear.app/changelog/2026-05-27-linear-diffs) adds PR review into Linear, with guided reviews and agent iteration.

- [SkillSpector](https://github.com/nvidia/skillspector) - a new security scanner for skills by NVIDIA

- [Google AI Studio](https://x.com/OfficialLoganK/status/2061568290984800740) now lets you build apps that connect to Gmail, Drive, Sheets and more without jumping through other Google Cloud screens.

- [Agent Cookie](https://x.com/mvanhorn/status/2061259423197372566) - syncs cookies, CLI tokens and API keys from your laptop to a Mac mini running OpenClaw/Hermes.

- [Agent Handler for Employees](https://www.merge.dev/agent-handler/employees): secure AI access for every employee.

- [Impeccable 3.5](https://x.com/pbakaus/status/2060208540992880794) - design skill for coding agents with model-specific anti-pattern rules.

- Four tips to help agents [understand your codebase](http://x.com/leerob/status/2061557826787344781).

- [Sandboxes](https://crystalxtang.substack.com/p/sandboxes) are becoming the OS for agents.

- [30 mins epsiode on /goal](https://x.com/clairevo/status/2059685739546448333) and how to use it in Codex.

- Building Grok Imagine in 3 months and [Video Agents](https://www.latent.space/p/video-agents).

- The most [rational take on AI](https://www.youtube.com/watch?v=BD3vLtWhT5A) you’ll hear this year

Aftersanimations.dev/vocabulary ","username":"emilkowalski","name":"Emil Kowalski","profile_image_url":"https://pbs.substack.com/profile_images/1469017066795679751/CjEOyirb_normal.jpg","date":"2026-06-01T12:35:56.000Z","photos":[{"img_url":"https://substackcdn.com/image/upload/w_1028,c_limit,q_auto:best/l_twitter_play_button_rvaygk,w_88/erhpvxrannj44aopbg6g","link_url":"https://t.co/SQXn2piA6r"}],"quoted_tweet":{},"reply_count":45,"retweet_count":196,"like_count":2841,"impression_count":144053,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2061426386775023617/vid/avc1/1452x720/OUMU9efhmckbgwzK.mp4","video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

@benedictevans:\n\n1. We’re in 1997 for AI—it’s as big a deal as the internet or mobile, and only as big a deal as the internet or mobile. We’re at the stage where most stuff kind of doesn’t work yet, most of what people will build hasn’t been built, and","username":"lennysan","name":"Lenny Rachitsky","profile_image_url":"https://pbs.substack.com/profile_images/1592990461517389824/iln8hi1f_normal.jpg","date":"2026-06-01T14:18:42.000Z","photos":[],"quoted_tweet":{"full_text":"A rational conversation on where AI is actually going with @benedictevans \n\nFor 20+ years, Benedict has been one of the clearest, most reliable thinkers on where technology is heading, and how it'll impact our lives. He was @a16z's resident \"thinker\" for 5+ years, and has spent","username":"lennysan","name":"Lenny Rachitsky","profile_image_url":"https://pbs.substack.com/profile_images/1592990461517389824/iln8hi1f_normal.jpg"},"reply_count":37,"retweet_count":70,"like_count":565,"impression_count":126261,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail by [@keshavatearth](https://www.x.com/keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
