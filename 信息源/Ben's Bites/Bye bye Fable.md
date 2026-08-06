# Bye bye Fable

> 数据源：Ben's Bites
> RSS：[打开源文件](https://bensbites.com/feed)

> 发布时间：Tue, 16 Jun 2026 13:01:05 GMT　|　原文：[打开链接](https://www.bensbites.com/p/bye-bye-fable)

------

Hey folks,

Fable went from “new best model” to “not available” in about 3 days.

Anthropic launched [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) on June 9. Fable was the Mythos-class model for general use but with guardrails. Mythos is Anthropic’s new model only available to select companies because they say it’s a cybersecurity risk.

Then on June 12, Anthropic posted that the US government got spooked by a jailbreak found by Fable (which Anthropic claims that other models like GPT-5.5 can also find). The US govt. [suspended access to Fable 5](https://www.anthropic.com/news/fable-mythos-access) and Mythos 5 for all foreign nationals, inside or outside the US, including foreign Anthropic employees.

So Anthropic’s answer was basically: we can’t do that cleanly, so we’re turning it off for everyone.

Worth reading:

- [The government’s side,](https://x.com/DavidSacks/status/2065853007619588171) via David Sacks.

- [Armin’s “Americans only” post](https://lucumr.pocoo.org/2026/6/13/americans-only/) - if a model is apparently too dangerous, why is the boundary nationality?

- Anthropic is [losing the mandate of heaven](https://x.com/haridigresses/status/2065574450183963134)

But I really like this part from shadcn’s post -

treat intelligence as borrowed. Use the best model while you have it to make durable plans, specs and implementation notes, then execute later with something cheaper or something you control. - [shadcn](https://x.com/shadcn/status/2065826989769163068)

Worth reading Simon’s review describing Fable as [relentlessly proactive](https://x.com/simonw/status/2065216774992515342).

Anyway, bye bye Fable, I guess.

Ben’s Bites is brought to you by [Working Smarter](https://bit.ly/4aEbT8Q) from Dropbox

Modern work can be frustrating and chaotic—if you don’t have the right tools. From context engineering to multimodal search, Dropbox engineers share how they’re building AI that actually understands you, so you can focus on the work that matters most. [Listen now](https://bit.ly/4aEbT8Q).

Headlines

- [Software Factory](https://x.com/matanSF/status/2066578088184680920) - [Factory 2.0](https://x.com/FactoryAI/status/2066588050617249904) launched and there’s been a lot of chatter recently about building ‘software factories’ - ie build the machine to build the machine, or more simply, create the systems, infrastructure and workflows to produce software with agents. Factory’s co-founder [Matan was on the 20VC](https://www.youtube.com/watch?v=lgo_QbgV198) which is worth a watch.

- [Ramp SWE-Bench](https://labs.ramp.com/swebench): coding benchmark created from real engineering problems inside Ramp. Fable 5 > GPT-5.5 ~ Opus 4.7 > Opus 4.8, but each increment in performance comes with a 1.5x the cost.

- Vercel has a new tool, [drop.new](https://drop.new) - It lets you just upload a folder, a zip or a file, and it deploys that as a website or an app. Clearly a way to sidestep GitHub.

- OpenAI now lets you save your Codex [rate limits reset](https://x.com/OpenAI/status/2065225362544726371). You can then use it anytime in the next 30 days.

- The Information just reported that [DeepSeek has raised $7.4B](https://www.theinformation.com/articles/deepseek-closes-record-7-billion-plus-funding-unusual-deal-structure), valuing it at more than $50B. It’s their first funding round, and the CEO himself is the biggest check (~40% of the total funding).

- AI chips keep getting faster, but the infrastructure developers rely on hasn’t kept up. In this piece, Runpod (aka the AI Developer Cloud) explores why the real bottleneck may be the stack around the hardware & what a developer-first approach to AI infrastructure looks like: [https://fandf.co/4vQDUT4](https://fandf.co/4vQDUT4)*

[Subscribe now](https://www.bensbites.com/subscribe?)

My feed

- [Extend CLI](https://github.com/extend-hq/extend-cli) - Give your agent the ability to parse and extract an entire corpus of documents.

- [Efecto](https://efecto.app/) - design tool with code under the hood so that agents can use the same canvas as you.

- [Figma’s Chrome extension](https://chromewebstore.google.com/detail/figma/fkmaohpngenfoccdgceedjkfhkdcohmg?pli=1) now lets you copy/paste websites into editable Figma layers.

- A guide to mastering [Codex on Mobile](https://x.com/Dimillian/status/2066082395107758564) for your engineering work.

- It’s a mistake to call oneself a “[non-technical founder](https://x.com/paulg/status/2066145325056680089)”

- Making a [human → 10,000 agents “org”](https://x.com/leerob/status/2065469795529588940) work with recursive agent systems.

- [Fusion API by OpenRouter](https://openrouter.ai/docs/guides/features/plugins/fusion)- Get multiple models to work on your tasks with a judge model to decide the final answers.

- How I [work with coding agents](https://www.youtube.com/watch?v=DPgJjRdQWrg) like a caveman.

- [React security doctor](https://github.com/millionco/react-doctor) - Fix security exploits in your React app.

- [Sonic-3.5 and Ink-2](https://www.cartesia.ai/launch) - New text to speech and speech to text models from Cartesia.

- [A frontier without an ecosystem is not stable](https://x.com/satyanadella/status/2066182223213293753). - Satya Nadella

- [Castform](https://castform.com/blog/beta-launch/) - bring your data and train open-source models on them without worrying about how to make GPUs work.

- [How Fable was probably built](https://x.com/Rafa_Schwinger/status/2066230802439180447).

Afters@mvanhorn, a non-technical founder who has contributed to 100+ open source projects and reached 44K+ GitHub stars despite not ","username":"petergyang","name":"Peter Yang","profile_image_url":"https://pbs.substack.com/profile_images/1454103621516206083/_klMwpkk_normal.jpg","date":"2026-06-14T14:15:21.000Z","photos":[{"img_url":"https://substackcdn.com/image/fetch/$s_!zIPE!,w_1028,c_limit,f_auto,q_auto:best,fl_progressive:steep/l_play_button_usfui2,w_88,e_colorize:0/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F__ss-rehost__tw-video-preview-13_2066162494859804672.jpg","link_url":"https://t.co/5ZerdHoPQB"}],"quoted_tweet":{},"reply_count":25,"retweet_count":35,"like_count":321,"impression_count":81344,"expanded_url":null,"video_url":"https://video.twimg.com/amplify_video/2066162494859804672/vid/avc1/1280x720/BfcIoOLf1ToI_W-V.mp4?tag=14","video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

@salesforce to acquire @fin_ai for ~$3.6B. The transaction is expected to close in the fourth quarter of Salesforce’s fiscal year 2027.\n\nFin started as Intercom 15 years ago. We changed our name to cap our transformation ","username":"eoghan","name":"Eoghan McCabe","profile_image_url":"https://pbs.substack.com/profile_images/1761540577563377664/V4PXTjtC_normal.jpg","date":"2026-06-15T12:02:37.000Z","photos":[{"img_url":"https://pbs.substack.com/media/HK2kW82aEAAP4UH.jpg","link_url":"https://t.co/ghD3xGld55"},{"img_url":"https://pbs.substack.com/media/HK2kXrdbwAAVYsY.jpg","link_url":"https://t.co/ghD3xGld55"}],"quoted_tweet":{},"reply_count":563,"retweet_count":202,"like_count":4103,"impression_count":989665,"expanded_url":null,"video_url":null,"video_preview_media_key":null,"belowTheFold":true}" data-component-name="Twitter2ToDOM">

[Share Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- Find me on [X](https://x.com/bentossell/), [Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/), or [YouTube](https://www.youtube.com/@bentossell694)

- Read [about me](https://bensbites.substack.com/about) and Ben’s Bites

- 📷 thumbnail via [@sdmat123](https://x.com/sdmat123/status/2065634463418343487)

* sponsors who make this newsletter possible :)Wanna partner with us for the next quarter? Email us at [shanice@bensbites.com](mailto:shanice@bensbites.com) or [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
