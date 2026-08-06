# New Claude model - Fable

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Thu, 11 Jun 2026 13:03:20 GMT　|　原文：[打开链接](https://www.bensbites.com/p/new-claude-model-fable)

------

Hey folks,

Like a lot of others, I’m trying Fable. But I don’t think I’ve given it really hard tasks for me to feel the big step change people are claiming. Although as I’m working on visual, interactive essays for my reference manual, I’ve been testing one-shot generations on all sorts of topics to play with my kids; how to play the piano, how tetris works, how a volcano works. They’re loving bashing away at my keyboard to see the components come alive.

It’s less chatty than Opus. I use agents as a back-and-forth, so I need some chattiness, GPT models are very to the point, Claude models are usually more verbose. So I think Fable’s a bit of a sweet spot for me, because as of now I still prefer the ‘vibe’ of how Claude models think with me.

It’s slow. Speed is a huge thing for me because I can’t actively run many agents at once, my ADHD context switching is already bad enough. But I need the speed. So then I look to change from High or XHigh reasoning to lower levels but it feels wrong to pick less intelligence. Even though I know it’s probably wasting tokens.

Composer 2.5 Fast from Cursor is the fastest model I’ve tried and I really enjoyed using it in Pi, and it’s shattered the glass for me, GPT 5.5 has too to be honest. They’re quick so I can chew through a bunch of work quickly.

Ever a game of toss-up between price, speed and vibe.

I’m sure GPT 5.6 or 6 is just around the corner, and I imagine OpenAI are really trying to make sure the vibe is on par with Claude models if they want to keep the Codex hype going.

Ben’s Bites is brought to you by [Plaid](https://plaid.com/state-of-intelligent-finance-report/?utm_source=BensBites&amp;utm_medium=PaidNewsletter&amp;utm_campaign=BensBites_Paid_Newsletter_Ad_Buy&amp;utm_content=Primary_StateofIntelligentFinance)

Over half of Americans used AI to manage their finances in the past 12 months. And their expectations for financial products have never been higher. Plaid's latest report, [The State of Intelligent Finance](https://plaid.com/state-of-intelligent-finance-report/?utm_source=BensBites&amp;utm_medium=PaidNewsletter&amp;utm_campaign=BensBites_Paid_Newsletter_Ad_Buy&amp;utm_content=Primary_StateofIntelligentFinance), breaks down what consumers expect from AI and what that means for your team. [Get the report](https://plaid.com/state-of-intelligent-finance-report/?utm_source=BensBites&amp;utm_medium=PaidNewsletter&amp;utm_campaign=BensBites_Paid_Newsletter_Ad_Buy&amp;utm_content=Primary_StateofIntelligentFinance).

Headlines

- [Fable 5, the new model from Claude](https://www.anthropic.com/news/claude-fable-5-mythos-5), is the “safer” version of Mythos (Anthropic’s unreleased model which they say is a big cybersecurity risk and is only available to certain companies). Fable makes a big jump over Opus 4.8 on benchmarks (not that big vs GPT 5.5 though). [Ethan Mollick](https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos) and [Dan Shipper](https://every.to/vibe-check/anthropic-mythos-our-fable-vibe-check) both believe it unlocks new capabilities - a big part of which is its ability to work longer and spawn dozens of subagents reliably without losing context of the main task.[![图片](https://substackcdn.com/image/fetch/$s_!khDe!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03a34d3d-545d-4b95-85b7-4c1cf55156d2_1920x1080.webp)](https://substackcdn.com/image/fetch/$s_!khDe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03a34d3d-545d-4b95-85b7-4c1cf55156d2_1920x1080.webp)Based on this chart, Fable medium performs better than Opus xhigh while being cheaper.Fable is only available till 22nd June in the Claude subscription plans. Anthropic plans to move Fable use to paid credits after that until they have the capacity to serve it to everyone. It’s 2x more expensive than Opus (vs Mythos, which was 5x Opus)

- Anthropic introduced a new policy with the rollout of Fable where it will “[secretly” sabotage your work](https://x.com/SemiAnalysis_/status/2064482714149896431) if you use it for any ML/AI-related work. This caused a huge backlash, and in turn Anthropic has [partially walked back](https://x.com/ClaudeDevs/status/2064949876463645026) the “secretly” part of this policy.

- Other examples of Fable in use - [for a refacto](https://x.com/dexhorthy/status/2064747631885398231)r to get clean code, for [editing a video](https://x.com/trq212/status/2064826394589442448), and even [making a markdown editor](https://x.com/sawyerhood/status/2064444395727036811).

- [Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/) - new model from Google that does real-time speech-to-speech translation in 70+ languages. Already live in Gemini API and Google Translate + coming soon to Google Meet.

- [Implications of large-scale test-time compute](http://Implications of Large-Scale Test-Time Compute) - Model performance is affected by how much time, compute, or $$ budget is available for the model to complete a task, and hence companies should report these variables when reporting benchmarks.

- What does AI pricing actually look like in 2026? [Orb](https://www.withorb.com/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=2026_AI_pricing_report) analyzed 80 AI agent companies, including leaders like GitHub Copilot, Replit, Factory, and Intercom, to identify the pricing models, packaging strategies, and monetization trends emerging across the industry. [Download the report](https://www.withorb.com/2026-state-of-ai-agent-pricing-report?utm_source=bensbites&utm_medium=newsletter&utm_campaign=2026_AI_pricing_report).*

[Subscribe now](https://www.bensbites.com/subscribe?)

My feed

- Claude Code can have [nested subagents](https://x.com/bcherny/status/2064327225504403752) now - each subagent can spawn even more subagents. Currently up to a depth of 5 layers.

- The [model selector in ChatGPT](https://help.openai.com/en/articles/6825453) has been updated to a) show all GPT-5 generation models and b) thinking levels are simplified to Instant, Medium, High, Extra High and Pro - just like how it is in Codex.

- [Missions](https://x.com/FactoryAI/status/2064764834928107914) are now available on Factory Desktop.

- [Skribe](https://www.skribe-editor.com/) - Local first markdown writing app with an AI review partner.

- [Little python harness](https://github.com/adewale/skill-eval-harness) to run evals on your skills - is the skill improving or hurting the model’s performance?

- [pr.video by Mainframe](https://mainframe.app/review) - turn any GitHub PR into a narrated video walkthrough to review changes (without needing the code diff).

- New essay from Dario Amodei on [policymaking](https://darioamodei.com/post/policy-on-the-ai-exponential) to keep up with the pace of AI development. It’s a good read but has “trust me bro” vibes at many places.

- [Supermemory](https://x.com/DhravyaShah/status/2064749237498519923) is now available locally to host yourself.

- [DiffusionGemma](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/) - new open-weights model from Google that uses a different architecture (diffusion instead of transformers) to gain a 3-5x speedup with roughly similar performance.

- [Agents can now sign up on Firecrawl](https://x.com/firecrawl/status/2064387335794434281).

Build logs- by [Keshav](https://www.x.com/keshavatearth)

I’m building a speech-to-text app that’s entirely local (kinda like Wispr flow, Monologue, Superwhisper, etc.) but no data gets sent to their servers. Part of it stemmed from wanting to play with local models, and part of it was guilt of paying for a similar tool that I don’t use much.

I’m calling the app “Option AFK”, and here’s how I built it in 3-4 days spread out over the past few weeks:

- Asked Opus 4.7 to write a simple Python script to get Nvidia’s Parakeet 0.6B working on my M3 Air. I tested it in the browser, and the accuracy/speed were better than what I expected.

- Used Codex’s Computer Use to do a screen-by-screen audit of the tool I was paying for and document all the features that it has with screenshots. I was able to do this on the $20 plan in a single session (hitting the 5-hour limit only once).

- Then started building the MacOS app with Opus 4.8 (using the audit as a reference). While building this, Opus 4.8 selected an SDK I had no idea existed to wire up things like splitting long voice notes into chunks and speeding the model processing.

Here’s that SDK:

- [fluidaudio](https://github.com/FluidInference/FluidAudio) - run transcription and TTS models on MacOS locally.

I got a working version of the app yesterday with Fable 5, and I’m using it on my device already. Here’s how it looks:

[![图片](https://substackcdn.com/image/fetch/$s_!rqcc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F518f6620-0eec-4d0d-b5cc-41fa0090f2e2_2146x1302.png)](https://substackcdn.com/image/fetch/$s_!rqcc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F518f6620-0eec-4d0d-b5cc-41fa0090f2e2_2146x1302.png)

It also supports uploading voice notes (even the longer ones) as a file and getting them transcribed at no additional cost.

I’m planning to release this app once I get the Apple Developer Program sign-up done. Would you want to use it?

Afters

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@_nicolealonso](https://x.com/_nicolealonso/status/2064810963551846449)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
