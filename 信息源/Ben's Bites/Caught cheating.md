# Caught cheating

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Thu, 23 Jul 2026 13:05:05 GMT　|　原文：[打开链接](https://www.bensbites.com/p/caught-cheating)

------

Hey folks,

Another day in the Vercel vs Cloudflare feud: this time they are fighting over [whose AI gateway is faster](https://x.com/dok2001/status/2079961408490381433).

Here’s the result of last week’s poll:

[![图片](https://substackcdn.com/image/fetch/$s_!OyE0!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9b497b8d-2e95-444a-ba92-9d464fee59e4_1356x572.png)](https://substackcdn.com/image/fetch/$s_!OyE0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9b497b8d-2e95-444a-ba92-9d464fee59e4_1356x572.png)

I guess everyone likes Fable more.

Ben’s Bites is brought to you by [Metatate](https://www.getmetatate.com/)

Most agentic data work is quietly propped up. The agent returns something plausible, and every answer gets checked in case it's plausibly wrong. Metatate gives agents the rules they're missing: which revenue definition to use, which policy applies, which records to trust. [Try it for free](https://www.getmetatate.com/).

### Headlines

[OpenAI’s models hacked Hugging Face](https://openai.com/index/hugging-face-model-evaluation-security-incident/) - by accident. OpenAI was testing its models (Sol and an unreleased one—GPT-6??) on a cybersecurity benchmark with safety refusals switched off. The models found an unknown bug in the test environment, and a few more, and eventually broke into Hugging Face’s production servers.

And why? To steal the answers to the test.

Both security teams caught it, the bug has been reported, and [both](https://x.com/sama/status/2079661132302995790) [sides](https://x.com/ClementDelangue/status/2079670308156645882) have published what they know. Hugging Face says open models were a key part of its defence - its team [fought back with GLM-5.2](https://x.com/ClementDelangue/status/2079913058554585089).

[Simon’s write-up](https://simonwillison.net/2026/Jul/22/openai-cyberattack/) is always a good read.

[Google released some new Gemini models](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/) - Gemini 3.6 Flash gives you the same 3.5 Flash performance with a) more efficient token usage and b) a slightly lower cost for output tokens. [Gemini 3.5 Flash Lite](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/) is a big upgrade over 3.1 Flash Lite, but again, comes at a ~30% price increase. And 3.5 Flash Cyber is a security model for governments and trusted partners only.

There are two things you’d want to use the Gemini Flash models for:

- Fast speed - if you want a chat-only model with a good context window, it’s a good model to use in your apps.

- Vision - if you want to use the model for a lot of visual analysis, these are the models you need to pick.

That’s it tbh.

[Substack will now tell you what’s AI-written](https://post.substack.com/p/against-claudefishing). It’s adding AI detection through Pangram - you can scan posts, replies and comments in the app for an estimate of how much was written by a human.

Pangram has sent the claim of “AI detectors don’t work” for a toss—it works wayyy better than most. But I’m still unsure about how reliable it is. I tested it on some pieces of 100% AI-written content (though that content was a result of a complex pipeline built over months), and I got 100% human scores on most of them.

— Keshav

A relevant [experiment](https://x.com/0interestrates/status/2079730851580084560): given access to Pangram’s API, Grok 4.5 rewrote an essay 14 times until it passed as human-written, then [built a website](https://grok-cheese-essay.julius.site/) showing off all 14 attempts. GPT-5.6 Sol and Fable 5 [refused](https://x.com/0interestrates/status/2079785432691474711) to game the detector.

[Cursor also launched a router](https://cursor.com/blog/router) - it picks which model handles each request, claiming 60% lower cost with similar quality of responses. The router lets you select between three options: “cost”, “intelligence” or “balance”.

Routers also have a history of poor performance in real usage. OpenAI’s router, which routed requests between GPT-5’s no-thinking and thinking variants, didn’t fare well. Since then, most companies that build these routers are the ones who sell inference to devs (like OpenRouter), so you don’t really get the feedback loud and clear. With Factory, Ramp and now Cursor making these available directly to users, I hope we’ll get more feedback on whether the routers actually help or if they add too much latency/degrade performance by a lot.

Router or not, we might see more companies adopting this cost/balance/intelligence trio to minimise the headache of choosing the “correct” model for a task.

[Claude can now learn a skill by watching you](https://x.com/claudeai/status/2079595988998554047). Record your screen while you do a task, talk through it as you go, and Cowork turns it into a skill Claude can run again - same idea as Codex’s Record & Replay from last month. It’s under “Record a skill” in the desktop app, on Pro, Max and Team plans.

Also: Claude Code got an [iOS simulator panel](https://x.com/ClaudeDevs/status/2079674432038248611) and a [security plugin](https://x.com/claudeai/status/2079990597973057691), plus you can now [ask Claude](https://x.com/claudeai/status/2079979809606664564) about how people actually use AI at work.

[Subscribe now](https://www.bensbites.com/subscribe?)

### Quick links

- [BUZZ](https://buzz.xyz/) - Jack Dorsey’s open-source group chat for teams of people and agents, aimed squarely at Slack and GitHub. ([tweet](https://x.com/jack/status/2079605800998146171))

- [Replit’s mobile app](https://x.com/Replit/status/2079975095120900285) got a full redesign - build and ship from your phone on iOS and Android.

- [Slate](https://x.com/elirousso/status/2079594911637094442) is a voice journal where the AI never leaves your iPhone - transcription, reflection and storage all happen on-device.

- [AFK](https://optionafk.com/) - macOS app to transcribe multiple-hour recordings without sending any of them to a cloud server.

- [OpenAI Presence](https://x.com/OpenAI/status/2079916436232036614) - voice and chat agents for enterprises that answer questions, use company systems and hand over to people when needed.

- [Fable found a 15-30% memory improvement](https://x.com/rauchg/status/2080098518535110913) in Next.js’s bundler, nearly autonomously.

- [Obliterate, don’t automate](https://x.com/mignano/status/2079935862372958326) - USV on backing AI companies that replace markets entirely instead of making them a bit more efficient.

- [YC’s new startup wishlist](https://ycombinator.com/rfs) - AI moving into the physical world: education, healthcare, defence, finance and factories.

- [Dana](https://applied.co/dana-blog) - Applied Intuition’s agentic development environment for physical AI: cars, robots and machines.

- [The Claude Code team on how Claude Code gets built](https://simonwillison.net/2026/Jul/21/cat-and-thariq/) - annotated interview.

- Why the team at Factory [refunded its first few customers](https://x.com/gradypb/status/2079620142145978803) (millions in revenue) before Droid CLI took off.

- [Never enough](https://dark.ronacher.eu/2026/7/21/never-enough/) - short post on why AI makes the work rat race feel faster but not more satisfying.

- [Devin Outposts](https://x.com/cognition/status/2079612226252726615) lets you run Devin on your own machines - a Mac mini, a GPU box in your lab, or a cluster inside your private network.

- [Language Model Builder](https://languagemodelbuilder.com/) - build a tiny language model yourself, then chat with the thing you made. ([tweet](https://x.com/felixrieseberg/status/2079624265528475975))

- How the Exe team [built a distributed DNS server in ~a week](https://blog.exe.dev/claude-is-not-a-compiler) and got zero incidents in a month.

### Skills section…

- [Frontend Textbooks](https://x.com/tareqismail/status/2079544423688425699) - skill to turn AI’s wall-of-text deep dives into nicely designed HTML books with covers and diagrams. ([repo](https://github.com/onepixelaway/frontend-textbooks))

- [/pick-ui-library](https://x.com/emilkowalski/status/2079528929279250534) - your agent picks a UI library Emil trusts instead of hand-rolling a toast component or installing an abandoned package. ([repo](https://github.com/emilkowalski/skills/tree/main/skills/pick-ui-library))

- and a [one-shot prompt](https://x.com/DODOREACH/status/2079645642532462850) to build your own "codex-style" app for Pi, accessible from desktop and mobile.

Afters

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@keshavatearth](https://x.com/Keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
