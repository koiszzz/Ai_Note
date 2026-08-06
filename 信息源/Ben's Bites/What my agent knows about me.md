# What my agent knows about me

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Tue, 04 Aug 2026 13:10:31 GMT　|　原文：[打开链接](https://www.bensbites.com/p/what-my-agent-knows-about-me)

------

Hey folks,

I wasn’t prepared for AI hard-hitting truths this morning but I tested this:

In the link, you download the file ‘reflection engine’ which is just a very big prompt basically. Upload the file to your agent and ask:

Please evaluate the attached markdown file and complete all tasks.

I tested it with Fable High and Sol Max, and Sol produced the better report. It was more coherent (agents are speaking more gobbledy goop these days) and nailed connections. Fable’s was harder to read.

I’m going to share some of my report here, because we’re friends - we read and we don’t judge.

So yeah, there was a lot in here and now I’m having a 40+ question ‘grill-me’ session with my agent to address it all and come up with a plan 😅.

I actually found it really telling and helpful. I do have all my therapy transcripts and all sorts of ‘memories’ (read: text in files) that it combed through to produce this.

I recommend you give it a whirl.

Ben’s Bites is brought to you by [Nutrient](https://www.nutrient.io/api/data-extraction-api/?utm_campaign=data-extraction-api-2026-Q3&utm_source=bensbites&utm_medium=sponsoring&utm_content=primary08042026)

AI hallucinating? Your document parser is probably dropping fields.

With Nutrient, send any document and get back a JSON schema. Every field returns a bounding box, a confidence score, and a match label, including an honest not_found when values can’t be grounded. 5,000 credits a month, [try for free](https://www.nutrient.io/api/data-extraction-api/?utm_campaign=data-extraction-api-2026-Q3&utm_source=bensbites&utm_medium=sponsoring&utm_content=primary08042026).

### Headlines

[OpenAI reduced the price of GPT-5.6 Luna by 80%](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) and Terra by 20%. Luna at max thinking effort now scores roughly the same as GPT-5.4 xhigh, the best possible model about four months ago, but at only 8% the cost.

That’s 10-12x more work (or play) you can do if you stick to 5.6 Luna with a little bit of Terra and Sol usage here and there.

In a few tasks I used Luna Max and found its great if it’s not building-related work ie chatting, research, reading/writing files for day to day stuff but I had to tap in Sol High to clean up some mess Luna made on a little chrome extension I made yesterday.

In the meantime, [OpenAI also teased their new major model - Astra](https://openai.com/index/ten-advances-in-mathematics/). They released solutions for 10 long-standing problems in maths and theoretical computer science, all found by Astra. And yes, it’s maths, not math.

Google launched [Gemini Robotics 2](https://deepmind.google/models/gemini-robotics/), one AI system designed to work across everything from robot arms to full humanoids.

It has one model that turns vision and instructions into movement, another for planning complex tasks, and an on-device version. Google says it can control a humanoid’s whole body, handle delicate tasks and coordinate multiple robots.

More models to pay attention to:

- [DeepSeek V4 Flash](https://api-docs.deepseek.com/quick_start/pricing/) costs $0.14/$0.28 per million input/output tokens—less than Luna’s $0.20/$1.20—with a 1M-token context window.

- [Qwen3.8-Max](https://qwen.ai/blog?id=qwen3.8) is a 2.4T model that Qwen says comes close to frontier performance for coding and professional work at $2/$6. Its weights, plus those of a smaller 27B model, are coming next week.

- [Inkling-Small](https://thinkingmachines.ai/news/inkling-small/) is open-weight already. It activates 12B of its 276B parameters, and Thinking Machines says it matches or beats the roughly four-times-larger Inkling on many benchmarks.

- [MiniMax H3](https://x.com/krea_ai/status/2083014535481598410) - a new video model that Krea says matches Seedance’s features for less; open weights are promised soon.

- [P-Image-Ideogram](https://x.com/ideogram_ai/status/2082839902207779024) - four image-generation quality modes, native 1K/2K output and prices starting at $0.003 per image.

[Subscribe now](https://www.bensbites.com/subscribe?)

### My Feed

- [Ben](https://x.com/BenSabic), who worked with us a couple of years ago & is now at Vercel, built this [marketing team template for agents](https://github.com/vercel-labs/marketing-team-eve-template) - bring work to a team lead and it delegates the work to a team of marketing agents built with Eve (Vercel’s agent framework).

- YC open-sourced a [customisable multi-agent harness](https://x.com/ycombinator/status/2083243960684908768) it uses across accounting, legal, events and engineering. Here’s the [repo](https://github.com/yc-software/qm). Vercel also built an [internal agent](https://x.com/rauchg/status/2084042561690456157) called “@v” for finance, comms, docs, marketing, engineering and business analytics.

- [ChatGPT desktop app](https://x.com/OpenAIDevs/status/2083288643310133716) has a new sidebar view - press the bell-like icon, and you can view all conversations that need your attention quickly. Although I don’t understand it at all… I thought it would sort based on recency but it’s not? [![图片](https://substackcdn.com/image/fetch/$s_!fLG5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fac505dc2-ff94-4be8-9535-8650e0f90cae_383x491.png)](https://substackcdn.com/image/fetch/$s_!fLG5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fac505dc2-ff94-4be8-9535-8650e0f90cae_383x491.png)

- [GenOffice](https://x.com/genspark_ai/status/2084221525327319363) - free, open-source AI office suite for Mac and PC, built it in a week using $10,000 of tokens.

- [The next five years](https://next-five-years.vercel.app/) - Patrick Collison’s short survey on how AI will change wages, productivity and the wider economy.

- [Conductor Cloud](https://x.com/charlieholtz/status/2082974209438044211) - multiplayer cloud workspaces for Claude Code, Codex, Cursor and OpenCode that keep running after you shut the laptop.

- [The human side of AI](https://x.com/jonnym1ller/status/2084349496247624034) - taste, fried attention, frozen competence and why more automation can create more human work.

- [Cloudflare Computer](https://github.com/cloudflare/computer) - open-source virtual filesystem and execution runtime for agents, with container, shell and JavaScript backends on Workers.

- [Devtools must be open source](https://blog.exe.dev/devtools-must-be-open-source).

- [The harness is in the app](https://www.youtube.com/watch?v=mWk_ZY4ib1U) - build the agent loop into the product, instead of adding it from outside.

- [The session you cannot take with you](https://earendil.com/posts/session-portability/) - a five-part test for whether an agent session is actually yours: inspect, export, replay, audit and delete.

- [How Monologue rebuilt its site](https://x.com/naveennaidu_m/status/2084326689107300717) with Codex within a week.

- [Comp AI’s CRM](https://x.com/lewiscarhart/status/2083610805069611230) - open-source, agent-first CRM with durable research agents; MIT licensed.

- [FutureSearch](https://futuresearch.ai/) - ask for forecasts, including “if I do X, will Y happen?”; its superhuman accuracy claims come from the company. ([launch](https://x.com/dschwarz26/status/2084314959065059499))

- [remote-agent-browser](https://remote-agent-browser.dev/) - browser-control API for agents with managed cloud sandboxes and no local Chromium install.

AftersYou should go and buy my buddy Jack’s new book - he’s a phenomenal writer and thinker. His angle on anything is always something I look forward to reading. (It’s not only for your twenties…)

amzn.to/4w8LkAL","username":"Jack_Raines","name":"Jack Raines","profile_image_url":"https://pbs.substack.com/profile_images/2020253173034954752/l7B6KGok_normal.jpg","date":"2026-08-04T13:00:00.000Z","photos":[{"img_url":"https://pbs.substack.com/media/HO2OpD8WcAAdTs-.jpg","link_url":"https://t.co/kefhdOgS4z"}],"quoted_tweet":{"full_text":"Some news: I wrote a book!\n\nFor the last few years, I've obsessed over the idea of \"opportunity costs,\" particularly with how to make the most of each stage of life before it's gone. From that obsession came Young Money. Pre-order here (and more below):\n\nhttps://t.co/vrumFRxJFi","username":"Jack_Raines","name":"Jack Raines","profile_image_url":"https://pbs.substack.com/profile_images/2020253173034954752/l7B6KGok_normal.jpg"},"reply_count":1,"retweet_count":0,"like_count":10,"impression_count":329,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

@mattshumer_’s Gauntlet Loop - 84,100 lines of code\n\nIncludes remakes of 4 beloved maps:\n0:00 - Rust\n0:40 - Highrise\n0:57 - Nuketown\n1:26 - Terminal\n\nSolo &amp; multiplayer (w/ ","username":"0xRishi","name":"Rishi","profile_image_url":"https://pbs.substack.com/profile_images/2048821961590263808/c5SOIM8n_normal.jpg","date":"2026-08-03T16:55:20.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!C_g9!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2084321739077771264.jpg","link_url":"https://t.co/dPaz4GTSNm"}],"quoted_tweet":{},"reply_count":45,"retweet_count":48,"like_count":531,"impression_count":216533,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2084321739077771264/vid/avc1/1280x720/s-yTqHnQshAuDPY6.mp4","video_preview_media_key":"13_2084321739077771264","belowTheFold":true}" data-component-name="Twitter2ToDOM">

@tldraw as it watches your whiteboard and responds live as you sketch are you even experiencing Summer 2026 workflow psychosis? ","username":"sheherenow_","name":"jem is looking for a job","profile_image_url":"https://pbs.substack.com/profile_images/2049591920872329216/j8mbQ8nz_normal.jpg","date":"2026-07-31T04:17:17.000Z","photos":[{"img_url":"https://pbs.substack.com/media/HOh1rkEaIAAK4mg.jpg","link_url":"https://t.co/4QqMRH1k43"}],"quoted_tweet":{},"reply_count":5,"retweet_count":2,"like_count":39,"impression_count":1232,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@keshavatearth](https://x.com/Keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
