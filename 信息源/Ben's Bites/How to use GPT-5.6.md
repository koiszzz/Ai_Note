# How to use GPT-5.6

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Tue, 14 Jul 2026 13:01:24 GMT　|　原文：[打开链接](https://www.bensbites.com/p/how-to-use-gpt-56)

------

Hey folks,

OpenAI finally released the [GPT-5.6 models to everyone](https://openai.com/index/gpt-5-6/), with many product changes. ChatGPT’s macOS app and the Codex app are now merged, with a new mode called [ChatGPT Work](https://x.com/OpenAI/status/2075274271845404744). You can update your Codex app and get the new combined app. Codex and Work look similar, with the details fine-tuned for coding-related vs non-coding-related work. There’s a new plugin called “ChatGPT Sites” that lets you build hosted websites with an optional “Login with ChatGPT” feature. It’s nice for sharing but kept annoying me by making everything that I ask on ChatGPT Sites, so I turned it off.

GPT-5.6 series has three models: Luna, Terra and Sol. Each of them comes with 5 thinking levels - light, medium, high, xhigh, max, and a new mode: Ultra mode. Ultra mode basically allows these models to go haywire with subagents.

Now… these models eat up your usage limits much faster when used at higher thinking levels. So don’t rip ultra; first time I’ve ever been nearly out of usage in Codex. I’m defaulting to sol medium for most building/creativity, background agents for harder tasks and day-to-day productivity using luna xhigh.

Some general patterns I’ve noticed:

- Sol is pretty good at UI, but it’s even better once you give it some references. Sol at Max thinking has really good writing, and it’s fun to chat with.

- Terra feels like a replacement for 5.5 with minor improvements in UI and writing skills. It also feels more steerable, so skills would be useful with it.

- Luna has a bit of a mini model smell, like sometimes it doesn’t “get” what you meant in ambiguous prompts. But it doesn’t fail at tasks you clearly define.

Over the weekend, OpenAI reset usage 4-5 times while they were fixing bugs introduced during the app merge, and they have temporarily removed the 5h limit on your usage. Take note of that because you might end up using up your weekly limits in one go.

These models in the Codex app are really good at Computer Use, i.e., self-driving your cursor so it can open apps, click buttons, and use them by looking at the screen. You should definitely try this with Sol medium/high for some small task to see it in action.

Further reading:

- [Sol helped post-train Luna](https://x.com/jxnlco/status/2075437278596669799).

- [Train a model on your iMessages](https://x.com/skirano/status/2075283308276220011).

- [Using GPT-5.6 without burning limits](https://x.com/theo/status/2076078865060151465).

Ben’s Bites is brought to you by [Voices](https://www.voices.com/landing/off-the-shelf-catalogue?utm_source=bens_bites&utm_medium=newsletter&utm_campaign=client_ots-bulk-sales-play_2026)

Building or training voice models? Stop scraping. [Voices](https://www.voices.com/landing/off-the-shelf-catalogue?utm_source=bens_bites&utm_medium=newsletter&utm_campaign=client_ots-bulk-sales-play_2026) has professionally directed, fully consented voice data ready now—part of 100,000+ hours of custom, premium data. Character performances, 43 emotional states, 8 languages. [Request a sample today](https://www.voices.com/landing/off-the-shelf-catalogue?utm_source=bens_bites&utm_medium=newsletter&utm_campaign=client_ots-bulk-sales-play_2026).

Headlines

- Anthropic again [extended Fable 5](https://x.com/claudeai/status/2076351399999557669) on paid plans and Claude Code’s 50% higher weekly limits through July 19. This feels like a joke at this point.

- [Claude Code got an in-app browser](https://x.com/ClaudeDevs/status/2075635283211772279) - let Claude open and click through docs, designs or your app. [Claude Code Artifacts](https://x.com/ClaudeDevs/status/2076789349145092230) now support public links and multiplayer editing, including pages made through Claude Tag in Slack.

- [Meta released Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) - a multimodal model for coding, computer use and agent tasks with a 1M token context window. Meta is also starting to offer its models in the API now, and Muse Spark 1.1 is available at a relatively cheaper price point vs its peers.

- [Apple is suing OpenAI](https://apnews.com/article/apple-openai-lawsuit-trade-secrets-theft-6fff8833f5889d86406b89a02dd8fb16) and two former employees over alleged trade-secret theft for its upcoming AI hardware. Apple says candidates were told to share confidential information and bring physical parts to interviews; OpenAI says it has no interest in others’ secrets and is reviewing the case.

- [Notion Ship OS](https://www.notion.com/product/ship-os) runs product development from customer feedback to a merged PR in one workspace. Agents triage, route, and summarise work while people make the judgment calls, using Notion’s existing docs and databases.

[Subscribe now](https://www.bensbites.com/subscribe?)

My feed

- [The future worth building is human](https://thinkingmachines.ai/blog/the-future-worth-building-is-human/) - New mission statement from Thinking Machines making the case for many AIs shaped by local knowledge.

- [Tend](https://x.com/every/status/2075619608325922989) - open-source ChatGPT Work loop for inboxes, hiring or support that learns from your approvals.

- [v0 Design Systems 2.0](https://x.com/v0/status/2075589636227735902) - import components, Figma and Storybook so generated apps use your real system.

- [NameThat](https://namethatui.com/) - visual dictionary for UI patterns you can see but do not know how to describe to an agent.

- [OptionAFK](https://optionafk.com/) - Private and fast dictation + transcription toolkit that your agents can use.

- [shadcn/typeset](https://x.com/shadcn/status/2075600582518124657) - one editable CSS file for styling Markdown in blogs, docs and streaming chat.

- [Inference AutoTune](https://x.com/samhogan/status/2076044602554159240) - claims to distil a frontier model into your own 1-30B specialist in ~2 hours for under $250.

- [Cloud Run sandboxes](https://x.com/steren/status/2075248370587697213) - isolated computers for agents from Google Cloud.

- [Hot takes on AI memory](https://x.com/samzliu/status/2075737137341940098) - why retrieval and longer context will not solve company-wide memory.

- [A software factory that works](https://x.com/piersonmarks/status/2075361336381555096) - scheduled agents create Linear issues; a label sends Claude to fix them. ([What is a software factory?](https://x.com/chamath/status/2075514068064944593))

- [Control ideas, not code](https://antirez.com/news/169) - agents are good at local code; humans should own the design, testing and direction.

- [AI’s biggest winners may have the lowest margins](https://x.com/dkfromdk/status/2075696599242821979) - agents can cut coordination costs in physical businesses.

- [The reverse information paradox](https://x.com/satyanadella/status/2076323181154230284) - Satya Nadella thinks firms should own the corrections and feedback that make AI useful.

Afters@aiDotEngineer, I presented the 2026 AI Engineering Survey: 1,000+ AI engineers on model selection, build vs. buy, who’s shipping with AI, and (of course) whether GPUs are going to space.\n\nThis year, we ran it with @NotionHQ and @vercel. Some highlights 🧵","username":"barrnanas","name":"Barr Yaron","profile_image_url":"https://pbs.substack.com/profile_images/1603997198709972992/ygkwHlWj_normal.jpg","date":"2026-07-08T18:31:52.000Z","photos":[],"quoted_tweet":{},"reply_count":13,"retweet_count":25,"like_count":101,"impression_count":30403,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@keshavatearth](https://x.com/Keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
