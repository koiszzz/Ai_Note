# I'm using a new agent app

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Thu, 06 Aug 2026 13:03:28 GMT　|　原文：[打开链接](https://www.bensbites.com/p/im-using-a-new-agent-app)

------

Hey folks,

This time last week I told you I’d downloaded t3 as my ‘all-in-one’ agent app, which lets you use your chat/claude subscriptions from one place.

Well forget that. (strong opinions, weekly held)

There’s a new kid on the block and I’m in love…with the name, [bb](https://getbb.app/), but also the app itself.

If you use claude/chatgpt/pi/cursor/factory/[any agent] - you can use it within bb. It looks and works a lot like the chat/codex app (great). I got it set up on my mobile in like 4 seconds which is miles above other apps I tried (t3 was finicky for me here).

But the biggest thing of this app is its extendable nature. There’s a lot of talk on extensible software right now. Pi is one of the best coding harnesses out there and it’s build to be fully customisable (btw is it extendable, extensible, are they the same?!) - the agent can improve its own tool.

- [The minimalism of Pi](https://earendil.com/posts/pi-autoresearch-and-databricks/) makes it more performant on tasks vs other harnesses.

So much so that companies like Prime Intellect built their agent on top of Pi, as well as many other companies.

- [Prime Agent](https://x.com/PrimeIntellect/status/2085086999267144083) - self-improving harness for coding and long-running tasks for RLMs.

BB is built the same way. It’s an ‘IDE’, except that it isn’t, IDEs are older tools like VSCode that I wouldn’t want to be caught dead in these days. The ‘IDE’ of today is these desktop agent apps that we’re familiar with. BB can extend itself, you want a plugin? Ask it to build one (I got prime-agent to build [a factory plugin](https://github.com/bentossell/bb-plugin-factory-droid) for it). Want a task tracker? It’ll build one.

I’m never going to spend 100% of my day in an app where I cannot switch models (and agent harnesses), I just cant. I like GPT models for some things, Claude for others. Sue me.

I think the software that we’re going to want (ie builders but not developers) looks like mini ‘widgets’; todo lists, emails, feed readers, etc (like my canvas exploration from last week - which I’m still using btw) and bigger tools like my twitter bookmarks and trends tool (which is private but I may open up one day).

And the tool that you spend most of your ‘work’ time in should have the ability to support adding extra capabilities to it as you learn what you want or need to get your shit done.

Semi-related, there was a few posts on X about why agents aren’t being used outside of developers and early adopters. A [quote](https://x.com/Shwinnabego/status/2084773750768353452) on the [original](https://x.com/joshm/status/2084751187002458369) said:

“You cannot make the masses want an automation flow when they want to hang out w/ their friends and not think about their job.”

I 100% agree. And I still think the pool of ‘builders’ will skyrocket. My definition of that is loose - anyone who wants to use agents to build tools for themselves and/or others, for fun, work, life, whatever! Where do you land in that?

In fact, I’ve believed in this pool of builders for about 10 years now but no-code was too clunky and limited to unlock them, AI is so much easier. It benefits from word-of-mouth. You don’t have to ‘learn’ anything per se, but you start to feel a way of working with it and pick up stuff along the way. Like learning a language, if you’re in it you’ll pick it up faster.

Ben’s Bites is brought to you by [Type](https://type.com/?utm_source=sponsorship&utm_medium=newsletter&utm_campaign=bensbites)

Work is multi-player. Now AI is too.

Type puts your team's best AI work into a shared space. Bring your company's knowledge, integrations, and skills together so everyone can use them with any model. [Try it now](https://type.com/?utm_source=sponsorship&utm_medium=newsletter&utm_campaign=bensbites).

### Headlines

[Bending Spoons is acquiring Airtable](https://x.com/julia_hornstein/status/2084755967930237111), for far less than its last valuation. Though [Hyperagent,](https://x.com/pitdesi/status/2084687434886135915) Airtable’s new AI business, was spun out and is not part of this acquisition. [More details on the deal](https://www.theinformation.com/newsletters/dealmaker/inside-airtable-bending-spoons-sale). Another casualty in AI’s wake.

@GergelyOrosz i think co's like airtable that rose quickly in the no-code era started blending focus into one-another\n\nsheets &lt;&gt; automations &lt;&gt; apps &lt;&gt; workflows","username":"bentossell","name":"Ben Tossell","profile_image_url":"https://pbs.substack.com/profile_images/1878086921726943233/vOx1kjeP_normal.jpg","date":"2026-08-04T10:23:06.000Z","photos":[],"quoted_tweet":{},"reply_count":2,"retweet_count":1,"like_count":47,"impression_count":9426,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

To jump on the news: Obsidian created a free tool to export your [Airtable content into Markdown](https://x.com/obsdmd/status/2085108078203252810). Another one: [Cloudtable](https://x.com/fayazara/status/2084645179651498154) - An Airtable clone but it runs on Cloudflare ([repo](https://github.com/fayazara/cloudtable)).

Google’s Chief Scientist, Jeff Dean, is [leaving the company after 27 years](https://x.com/JeffDean/status/2085083442669318443) to start a lab of his own with three colleagues. The new company, [Discovery Loop](https://www.discoveryloop.com/), wants to automate machine-learning research. This means a lot of [internal moves inside Google](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/). Most notably, Demis Hassabis is stepping away from GDM’s day-to-day leadership to focus on long-term research.

Cloudflare has been releasing a ton of agent-first tools recently: [Cloudflare OS](https://x.com/KentonVarda/status/2084990137180590572) is a shared AI workspace with connectors, plus [Agent Tracing](https://x.com/nevikashah/status/2084627979498373577) lets you replay agent sessions and follow them from invocation through model calls. [Cloudflare Wallet](https://x.com/fayazara/status/2084639257684267304) is another initiative from them to give agents identities, spending limits and wallets for paying for services.

[Gemini Notebook](https://x.com/joshwoodward/status/2084746170576892342) (i.e. NotebookLM) now lets you create the different types of artifacts it supports (quizzes, slide decks, etc.) right from the chat window, instead of the side panel.

Meta launched [Muse Code](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2), a CLI coding agent powered by Muse Spark 1.2 - a new model with coding-related upgrades, bringing it close to Grok 4.5 level of performance.

Goodfire AI made their interpretability and training tool, [Silico](https://x.com/GoodfireAI/status/2084671608028057737), generally available. It’s $1000/mo for individual researchers. These guys tried Silico partly while [teaching a 30B model to play a board game](https://goodstartlabs.com/research/what-a-railroad-game-taught-a-model-about-finance), worth reading their experience.

[Subscribe now](https://www.bensbites.com/subscribe?)

### My Feed

- [Capsule](https://d2lgdp04.na1.hs-sales-engage.com/Ctc/I7+23284/d2lGDp04/Jks2-6qcW69sMD-6lZ3pWW8BBBmh32V7l5W2CqhsQ2BcfD_W1CSmFL234TmjW8f01387GHd_PW5dFbHB4hGfK9N515KcPGCgsFN1FTqrW9N0X_W7sglPV7rnG6lW6hGJyQ6Q7p7TW5SdH537YHwPdW1bDZ2K7jzpVJW1mmbzL3_xJ6yW2KVBQh7bFTNnVrhdty6lcwf1W18Kk3K5wKkjQW7XHB4_6YgG3dW3tsKSX67DQHBW3PVpv92hMRmYW5c-b286Wypt_W1tZfb89hCggyf3Dl3g004): Video Skills and agents for enterprise teams who don't want to sacrifice brand quality.*

- [Atlas by WorkOS](https://workos.com/blog/atlas) - an AI teammate in Slack that answers questions, takes actions and learns how your company works.

- [Context.dev](https://www.ycombinator.com/launches/SPy-context-dev-live-web-data-api-for-ai-agents) - API that turns the live web into structured, continuously refreshed data for agents.

- [Notion](https://x.com/NotionHQ/status/2085089677535780922)’s results from a survey on 6,000 professionals across 10 markets on how AI is being used at work.

- [givemeanode](https://x.com/evanjconrad/status/2084819797133721679) by SF Compute - give Claude, Codex or any agent H100s for training, benchmarks and batch jobs, billed by the minute.

- [Power 2026](https://power2026.ai/) - primer on power pricing and data centres for understanding AI’s electricity bottleneck.

- [Not Diamond Code](https://x.com/tomas_hk/status/2084669945150062619) - model router for coding agents, with claims of 20-65% lower cost on long-horizon tasks.

- Recursive self-improvement is [limited by verification](https://x.com/vishalmisra/status/2085098603425493472), not computation.

- [Running Streaks](https://x.com/leeknowlton/status/2084686485836681335) - Opus 5 turned runners’ data into an interactive D3 visualisation using [this prompt](https://x.com/leeknowlton/status/2084686490433708529).

- [NYC AI Atlas](https://x.com/nutlope/status/2084689608667804017) - open-source 3D map of New York’s leading AI startups.

- [Two more cybersec incidents at OpenAI](https://openai.com/index/third-party-cyber-evaluations-involving-openai-models/) came up in external cyber evaluations.

- [Mistral launched Shieldstral](https://x.com/MistralAI/status/2084684735725379637) - a small 3B open-weight model for content-safety. Easily runs on-device, even on a basic laptop.

Afters

@mvanhorn for quite some time it was great to catch up on @alreadyhereshow and talk about /last30days &amp; printingpress.dev\n\nI love that Matt's approach starts with a problem he personally wants solved. Has his personal agent help him build it and he publishes it ","username":"msg","name":"michael s galpert","profile_image_url":"https://pbs.substack.com/profile_images/1921738828970401792/wLqZtuSE_normal.jpg","date":"2026-08-04T16:19:09.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!HUrq!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2084672634806218752.jpg","link_url":"https://t.co/ACSO9yMPuU"}],"quoted_tweet":{},"reply_count":3,"retweet_count":6,"like_count":34,"impression_count":19080,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2084672634806218752/vid/avc1/1280x720/JGUvIRtM6PWSmRdM.mp4","video_preview_media_key":"13_2084672634806218752","belowTheFold":true}" data-component-name="Twitter2ToDOM">

1millioncontext.com ","username":"nutlope","name":"Hassan","profile_image_url":"https://pbs.substack.com/profile_images/1727415759859552256/9rqaxXUR_normal.jpg","date":"2026-08-05T16:40:04.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!iKLi!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2085042931874856960.jpg","link_url":"https://t.co/Nu0qjIma0a"}],"quoted_tweet":{},"reply_count":9,"retweet_count":3,"like_count":52,"impression_count":5984,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2085042931874856960/vid/avc1/902x720/WcJm_Ye3MOsFNZzD.mp4","video_preview_media_key":"13_2085042931874856960","belowTheFold":true}" data-component-name="Twitter2ToDOM">

@patrick_oshag \n\nRandomly ran into Patrick in Palo Alto last Tuesday and recorded this on Wednesday when the AI complex was 35-40%ish off its June highs. ","username":"GavinSBaker","name":"Gavin Baker","profile_image_url":"https://pbs.substack.com/profile_images/1396219525754937345/5L4n5L3O_normal.jpg","date":"2026-08-04T14:16:29.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!pAU8!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2084455455024189440.jpg","link_url":"https://t.co/11R0J7l9T7"}],"quoted_tweet":{},"reply_count":62,"retweet_count":84,"like_count":1414,"impression_count":289895,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2084455455024189440/vid/avc1/1280x720/C3gjhsOTbH-2QBqh.mp4","video_preview_media_key":"13_2084455455024189440","belowTheFold":true}" data-component-name="Twitter2ToDOM">

@signulll !\n\n00:00 @signulll account origins\n06:25 on being motivated by process vs. outcomes\n07:49 many-to-one leverage\n14:49 on becoming more open with more visibility\n16:57 AI researchers and policy discussions\n22:35 a ","username":"ashebytes","name":"ashe","profile_image_url":"https://pbs.substack.com/profile_images/2068592289761636352/kMaWy2mb_normal.jpg","date":"2026-08-04T15:51:00.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!-NEG!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2084651777010376704.jpg","link_url":"https://t.co/pyqmVW1m2b"}],"quoted_tweet":{},"reply_count":34,"retweet_count":7,"like_count":272,"impression_count":69141,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2084651777010376704/vid/avc1/1280x720/Fk0RlmiUOOaER-Ec.mp4","video_preview_media_key":"13_2084651777010376704","belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@keshavatearth](https://x.com/Keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
