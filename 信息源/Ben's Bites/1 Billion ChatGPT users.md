# 1 Billion ChatGPT users

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Thu, 30 Jul 2026 13:02:53 GMT　|　原文：[打开链接](https://www.bensbites.com/p/1-billion-chatgpt-users)

------

Hey folks,

Following on from Tuesday’s messing around building, I built a few more widgets on my canvas. It pulls my X bookmarks, emails, and todos.

@tldraw offline is dope ","username":"bentossell","name":"Ben Tossell","profile_image_url":"https://pbs.substack.com/profile_images/1878086921726943233/vOx1kjeP_normal.jpg","date":"2026-07-28T15:35:59.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!tpfz!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2082127633307865089.jpg","link_url":"https://t.co/NLcKtBBhFc"}],"quoted_tweet":{},"reply_count":6,"retweet_count":2,"like_count":78,"impression_count":8724,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2082127633307865089/vid/avc1/1280x720/LP0lNFUvggEgCSRU.mp4","video_preview_media_key":"13_2082127633307865089","belowTheFold":false}" data-component-name="Twitter2ToDOM">

Before making this video I didn’t have Loom installed (since it’s crap after being acquired), so just told Codex to build me one.

[![图片](https://substackcdn.com/image/fetch/$s_!bHFv!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3be4c96-66db-4a4c-a8ba-ec53ed0592c0_2220x926.png)](https://substackcdn.com/image/fetch/$s_!bHFv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3be4c96-66db-4a4c-a8ba-ec53ed0592c0_2220x926.png)

I drew the image on the left, then just sent that prompt and it worked straight away.

So as software and mini tools are getting easier to create, the tools to create them are not...

I use Codex as my default app because it’s better than all the others and works the best on mobile. But I just downloaded [t3](https://x.com/theo/status/2082277789395501263) because they basically copied the interface and features, but it lets you choose between different agents; codex, claude, cursor (pi + droid soon). It’s made by a reputable developer that you may have seen mentioned here before, so I trust it’s built well.

At the moment, I ask Codex/ChatGPT to be the orchestrator and to go ask claude about something that is design-related. Which is fine-ish but not great as user experiences go.

What I’m noticing by doing this is how well Codex creates prompts for other agents to follow. I just have a normal chat in my session, then say ‘Use X agent to implement this. Watch its progress and send screenshots every time new work has landed.’ To which it sets up its own monitoring every 5 mins or so and updates me in the same thread, with screenshots.

I’m going to try and put together a ‘bites of the week’ email over the next few days to try and summarise all the stuff going on, what themes people are talking about (loops?!, software factories?!, etc) and explain them.

Let me know if there’s anything specific you need to wrap your head around (I may need to too).

Ben’s Bites is brought to you by [Brief](https://briefhq.ai/bens-bites/)

Struggling with fragmented context, slow product decisions, and rework? Brief distills your critical product context into an opinionated graph, then puts a PM agent everywhere you work, (e.g. Slack, Claude Code, email) reducing alignment tax and accelerating cycles. [Learn more.](http://briefhq.ai/bens-bites/)

### Headlines

[OpenAI used Sol to optimise Sol itself](https://x.com/OpenAI/status/2082577277246972300), cutting serving costs by 20% and making it 15%+ more efficient at generating tokens. And turns out, it also [tops the ARC-AGI-3](https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores/) benchmark.

Well, there’s a catch: OpenAI says the official ARC-AGI harness hurts Sol’s performance by “forgetting” its reasoning every turn and disabling compaction. Fixing these two things triples Sol’s score from 13.3% to 38.3%, with 6x fewer output tokens.

Re: last week’s fiasco of an OpenAI model hacking Hugging Face - HF published a [full replay](https://huggingface.co/blog/agent-intrusion-technical-timeline) of roughly 17,600 actions taken by the model. [METR and Redwood Research](https://x.com/METR_Evals/status/2082644379895050339) will also independently review what happened.

Though OpenAI is not out of trouble just yet, a [Reuters report](https://www.reuters.com/business/openais-rogue-agent-compromised-an-account-second-tech-firm-sources-say-2026-07-28/) claims that the same model broke into a customer account at another company (Modal Labs), with rumours suggesting that even more companies were affected.

Anthropic also claimed that Claude Mythos found [better attacks on two cryptographic algorithms](https://www.anthropic.com/research/discovering-cryptographic-weaknesses), though neither affects systems in use today.

Separately (not at all as a reaction to this general trend, right?), ~1300 people working at leading AI companies (OpenAI, Anthropic & others) want the US government to help “[pace the frontier](https://www.pacingthefrontier.com/)” of AI development. Kinda expected when the pace picks up, but this time a lot of the “model makers” themselves are in favour of this pause/slowdown.

btw, The Information reports [ChatGPT is nearing one billion weekly users](https://x.com/theinformation/status/2082526654446940539) - a milestone OpenAI originally hoped to hit seven months ago. More from OpenAI this week: [Codex Security CLI](https://github.com/openai/codex-security), free frontier access for [Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/), and [two new transcription models](https://x.com/OpenAIDevs/status/2082201169443905798).

[Grok app builder](https://x.com/nikitabier/status/2082140254237241588) - Grok has a vibe coding interface inside its app now. Create games and apps that can be shared directly to the X timeline. Also see: [Drawesome](https://x.com/benjitaylor/status/2082539313796182268) - a zero-dependency drawing toolbar for React, built over a weekend with Grok Build.

[Pangram 4](https://www.pangram.com/blog/introducing-pangram-4) claims it catches 98.83% of humanised AI text with one false positive per ~24,000 docs. An early test [found all 38 AI-written words](https://x.com/N8Programs/status/2082573906330652707) inside a 1,198-word story, though not on every run. Its new [image detector](https://www.pangram.com/blog/introducing-pangram-image-detection) claims 99.5% accuracy too.

[Subscribe now](https://www.bensbites.com/subscribe?)

### Quick links

- [Tavus](https://www.tavus.io/pal-maker) - Build AI that comes to life: video agents that see, hear, and answer in real time and do anything you want. Use TAVUS50 for 50% off.

- 66% of July traffic on docs built with [Mintlify](https://x.com/hahnbeelee/status/2082542239482614212) was from agents.

- Resend [added an MD version of their pricing page](https://x.com/zenorocha/status/2081752561028080026) to avoid confusing agents.

- [0%, 50% or 200%](https://www.danshapiro.com/blog/2026/07/0-50-or-200/) - ignore AI, halve staff or double the ambition.

- [Slackbot](https://x.com/SlackHQ/status/2082561315151687733) can now run code in the background for data analysis, slide creation, and to make live reports or widgets.

- [Gemini’s macOS app](https://blog.google/innovation-and-ai/products/gemini-app/speak-naturally-gemini-app-mac-os/) got a voice mode that lets you ramble, and the app turns it into a clean prompt. Hold Fn to try it.

- [The AI future is for everyone](https://www.wsj.com/opinion/the-ai-future-is-for-everyone-a0c24e20) - Mark Zuckerberg

- [Replit Design](https://replit.com/design) - make sites, prototypes and graphics from prompts, URLs, Figma files or screenshots.

- What’s gone [wrong with AI & labor](https://x.com/random_walker/status/2082163285588107752).

- [Kami](https://www.trykami.app/) - open-source Hermes agents that find customers, prepare outreach and content, then act after your approval.

- [Coast](https://coast.app/) - fully local memory for you and your agents, built from what you see on your Mac.

- [Pragmatic leverage](https://x.com/dexhorthy/status/2082510831858893115) in the software factory.

- [Crew Studio](https://x.com/joaomdmoura/status/2082133609264374271) - find useful ideas where agents can help your business, build those agents with the option to take the code home to run anywhere.

- [HeyGen Video Podcast](https://app.heygen.com/apps/video-podcast) - turn a doc, link or idea into a two-host video with scenes, camera cuts and B-roll.

- [Copper](https://shadcn.com/copper) - local scratchpad for saving answers, links and follow-up prompts across your AI apps.

- [FT Chart Doctor](https://github.com/Financial-Times/chart-doctor) - visual vocabulary and examples for choosing a chart that fits the relationship you need to show.

- [Mitchell Hashimoto](https://x.com/mitchellh/status/2082489600715661389) (Ghostty) and [Andrew Ng](https://x.com/AndrewYNg/status/2082199333920027009) (deeplearning.ai) are both starting new companies: [Superlogical](https://www.superlogical.com/) and [LearnVector](https://learnvector.ai/).

- [MCP’s biggest update](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude) removes the need for servers to remember every ongoing connection, making them easier to run and scale.

Afters

@richardpenner for the self-referential explanation on what ASD-STE100 is)","username":"benjaminsehl","name":"Ben Sehl","profile_image_url":"https://pbs.substack.com/profile_images/2001775300036681729/LdnrvG2L_normal.jpg","date":"2026-07-28T17:35:27.000Z","photos":[{"img_url":"https://pbs.substack.com/media/HOVPq3BW0AAELGz.jpg","link_url":"https://t.co/1s75HKFqXU"}],"quoted_tweet":{"full_text":"The fix for this is to say: only report to me in ASD-STE100 Simplified Technical English","username":"andrew_n_carr","name":"Andrew Carr 🤸","profile_image_url":"https://pbs.substack.com/profile_images/2069224163307659264/ASh-yk_b_normal.jpg"},"reply_count":53,"retweet_count":108,"like_count":3831,"impression_count":494234,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@keshavatearth](https://x.com/Keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
