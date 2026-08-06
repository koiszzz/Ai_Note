# Hey Siri, meet AI

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Tue, 09 Jun 2026 13:02:18 GMT　|　原文：[打开链接](https://www.bensbites.com/p/hey-siri-meet-ai)

------

Hey folks,

A lot of chatter about loops on X recently. And it’s a topic I’ve been toying with. My interpretation from [what Peter posted](https://x.com/steipete/status/2063697162748260627) is:

Agents are loops, you give it a task, it looks at it with the context it has, uses tools to gather more and gives you an output when it thinks the task is done.

But mimicking those parts into a bigger system so your agents can run more autonomously, longer and on harder chunks of work is what I think ‘designing the loop’ is talking about.

So you want to design a bigger task up front, like a plan.md file with a bunch of tasks, new features to implement, etc. A way for those tasks to be deemed ‘complete, and verified’ - ie. does the report contain all 10 points from the plan, does the UI have all the features working correctly, do all the tests pass. And then prompting itself to go back to the plan.md file and pick up the next one.

I’ve been toying with it for this reference manual - I’m making lots of interactive components, so I’ve tried designing all the component pieces first and then building a workflow to compose those together into the interactive.

But also this is why a ton of people bring skills into their workflows. Do the planning skill, then split tasks with a PRD skill, then research skill for each feature, then building skill, then review skill, then testing skill.

It’s all designing text instructions for an agent to follow, making sure it can access any tools it needs to do the tasks.

Further reading:

- [Loop Engineering](https://x.com/addyosmani/status/2064127981161959567) by Addy Osmani

- [WTF is a loop](https://x.com/mvanhorn/status/2063865685558903149?s=20) by Matt Van Horn (although AI-sloppy)

Ben’s Bites is brought to you by [Smallest AI](https://smallest.ai/?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime9june)

Smallest AI Voice Agents gives you production-ready infrastructure to run inbound & outbound campaigns at scale, powered by its in-house realtime latency STT & TTS and enterprise-grade telephony. Enterprises trust it to handle millions of minutes. See what it can do for yours - [book a demo](https://smallest.ai/book-a-demo?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime9june)!

Headlines

- Apple finally has a dedicated AI product, [Siri AI](https://www.apple.com/in/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/). Imagine about a year-old ChatGPT - with great dictation, image analysis and some interaction with external apps like Messages and Maps. Not bad *if* it works. The new Siri AI uses a mix of local and cloud models (some based on Gemini), all under the [AFM 3 model family](https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models). These models also power [other “AI features”](https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/) embedded inside apps. I’m keeping an eye out for the one that vibe-codes Safari extensions and Apple Shortcuts using plain English.

- [ChatGPT’s memory system](https://openai.com/index/chatgpt-memory-dreaming/) runs a background process to save memories that you can see and edit. They are calling the latest iteration Dreaming v3, which has better recall, follows your long-term preferences more closely and corrects itself as time passes.

- [New blogpost from Anthropic](https://www.anthropic.com/institute/recursive-self-improvement) claims that developers are writing 8x more code (with Claude’s help) than they were in 2025, and it is now helping train the next versions of Claude. Hence, they advocate for an “option” to pause AI development if the need arises.

- [OpenAI shared three goals](https://openai.com/index/built-to-benefit-everyone-our-plan/) for its next phase: build an automated AI researcher, accelerate the economy and give everyone on Earth a personal AGI. They’ve also [filed a confidential S-1](https://openai.com/index/openai-submits-confidential-s-1/) while claiming no urgency for an IPO.

- [NotebookLM’s core chat](https://blog.google/innovation-and-ai/products/notebooklm/better-research-notebooklm/) is getting upgraded from the old RAG system to an agent-like system (Antigravity harness). Each notebook gets a cloud computer to run code for analysing the files that you’ve uploaded with the latest Gemini 3.5 models.

- Your Oura ring scores sleep. Your Apple Watch tracks your heart. Workera Ambient does the same for your career: always-on, capability capture from the work that's already happening. Your data, your choice. [Learn more from Workera's CEO](https://www.linkedin.com/pulse/oura-ring-your-career-kian-katanforoosh-hlexc/) and [join the waitlist](https://www.workera.ai/platform/ai-agent/ambient/join-waitlist?tab=individuals&utm_source=Email&utm_medium=email&utm_campaign=ai-agent-launch&utm_term=Ben%27sBites&utm_content=Ben%27sBites).*

[Subscribe now](https://www.bensbites.com/subscribe?)

My feed

- [Cursor’s Canvas](https://cursor.com/docs/agent/tools/canvas) lets users spin up internal apps, dashboards and reports that are shareable with others. Another entry in the “Claude Artifacts but 2026” feature from all the coding agents.

- Can Claude become a [chemist](https://www.anthropic.com/research/making-claude-a-chemist)? What about powering [agents for biology](https://www.anthropic.com/research/agents-in-biology)?

- [Firecrawl Workflows](https://github.com/firecrawl/firecrawl-workflows) - installable skills for repeatable web tasks (like deep research, SEO audits and more).

- [Eloquent](https://developers.google.com/edge/eloquent) - Local transcription app from Google (uses Gemma).

- [FrontierCode](https://cognition.ai/blog/frontier-code) - coding eval to test whether code is actually maintainable rather than just passing tests.

- A guide to [using /goal in Codex](https://x.com/dkundel/status/2062650378089594955).

- [Fin Voice 2](https://fin.ai/voice) - natural, fast and intelligent customer support over the phone.

- [Raindrop 2.0](https://x.com/benhylak/status/2062605176784187457) - catches a production failure, hands it to your coding agent to fix, and turns it into an eval so it can't recur.

- Cognition is guaranteeing up to [$10M in credits if Devin underdelivers](https://devin.ai/guarantee) on an annual enterprise contract.

- [skills.sh](https://vercel.com/changelog/the-skills-sh-api-is-now-available) by Vercel now has an API for querying its collection of 600k+ skills.

- [Upstash Agent Analytics](https://x.com/upstash/status/2062588002635825628) - 3 lines of code to track AI/agent traffic to your website.

- [Spiral by Every](https://writewithspiral.com/) - writing partner for humans and agents with stylometry, CLI, MCP/API, team styles.

- Google is making its [budget AI plan even cheaper](https://x.com/vikaskansalHQ/status/2064029977709084963) ($7.99/mo to $4.99/mo) while offering 2x the storage space.

Afters

@conductor_build CEO and co-founder @charlieholtz takes us into the details of how he sets up his workflow for coding and managing AI agents.\n\n00:00 – Building Conductor With Conductor\n 01:05 – Managing a Team of Coding Agents ","username":"ycombinator","name":"Y Combinator","profile_image_url":"https://pbs.substack.com/profile_images/1623777064821358592/9CApQWXe_normal.png","date":"2026-06-04T15:14:50.000Z","photos":[{"img_url":"https://substackcdn.com/image/upload/w_1028,c_limit,q_auto:best/l_twitter_play_button_rvaygk,w_88/whywzqgga1ovxss2dqds","link_url":"https://t.co/wOAX9nouWd"}],"quoted_tweet":{},"reply_count":61,"retweet_count":58,"like_count":778,"impression_count":151442,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2062551831235215360/vid/avc1/1280x720/NMLdRyn0MC5WO_wi.mp4","video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail by [@keshavatearth](https://www.x.com/keshavatearth)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
