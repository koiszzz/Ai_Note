---
published: 2026-08-07
title: "Ben 的一次真实智能体会话实录"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Ben's session.md"
source_note: "[[信息源/Ben's Bites/Ben's session]]"
source_sha256: 9107a55ac0efa75ce57f5e28e83df9e1a52cd915727772962c51e532ed7ebcac
original_url: "https://www.bensbites.com/p/bens-session"
processed: 2026-08-07
language: zh-CN
---

# Ben 的一次真实智能体会话实录

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://www.bensbites.com/p/bens-session)
> - Vault 原文件：[[信息源/Ben's Bites/Ben's session|查看原始文件]]

## 摘要

- 作者尝试新做法：用一封邮件完整复盘自己一次真实的智能体（agent）会话，边讲边解释发生了什么。
- 任务本身很简单——给 Google Calendar 做一个“拖动时间块自动填入预约表单”的 Chrome 扩展，但作者从 1 小时 15 分钟的调试拉锯中总结了大量与智能体协作的教训。
- 关键教训：说“build it”之前先读智能体的计划；把重要信息写进文件（上下文压缩不会清除文件）；一开始就让智能体安装、测试并迭代；迭代调试用更大模型；明确告诉智能体保留关键学习成果。
- 作者认为问题不在智能体——它从一张截图和一句提示就做出了可用的扩展，还能操控 Chrome 自测、从录屏中诊断 bug——而在于他自己如何引导（steering）智能体。

## 正文

大家好 :)

我在尝试一个新东西——这封邮件会完整走一遍我的一次真实智能体会话，我会一路解释正在发生什么。我做的事或任务本身不重要，我在观察的是：如何更有效地使用智能体。

你可能会学到一两个技巧，我发现这有助于巩固我自己的学习。

请评论告诉我你的看法：有用吗？有什么不清楚的吗？想看到别的东西吗？

[立即订阅](https://www.bensbites.com/subscribe?)

### 我当时想做的事

我在 Google Calendar 里设置一个可预约的预约链接，发现你没法直接在日历网格上拖动时间段，只能在一个笨拙的表单里逐个输入日期和时间范围，这让我很烦。我想要一个能让我直接在周视图上拖动时间块、并让表单自动更新的东西。

[![图片](https://substackcdn.com/image/fetch/$s_!gjkK!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50aea313-764c-496e-8d8f-a160441c7eb0_3164x1946.png)](https://substackcdn.com/image/fetch/$s_!gjkK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50aea313-764c-496e-8d8f-a160441c7eb0_3164x1946.png)

我其实可以让智能体用计算机操作（computer use）来设置链接，而不是装一个扩展……

于是我打开了 ChatGPT（我用的是 Codex 模式，但“Work”或 Claude Cowork 等也都可以）。我想测试 Luna 的 Max 推理，因为它的价格已经降了 80%，而且大家都在说它非常好用。

[![图片](https://substackcdn.com/image/fetch/$s_!zPv_!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0932b992-b74a-474b-9aac-44ea40c95d61_4695x2200.png)](https://substackcdn.com/image/fetch/$s_!zPv_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0932b992-b74a-474b-9aac-44ea40c95d61_4695x2200.png)

我承认，这不是最好的提示词。

但它足以让智能体理解我想要什么，从而去探索各种方案。再加上一张截图，它就知道我在说的是哪个界面。

这启动了“智能体循环”（agent loop）。智能体先思考该做什么（Google Calendar 能做什么），然后通过工具（这里是网络搜索）收集解决任务的上下文。

它读过的网页现在都在上下文窗口里。我没看那些网页，所以我完全不知道它找到了什么信息、信息是否真实。它读到的所有文本现在都在它的“记忆”里。

想象一下 20 个网站被读进去，里面可能有错误或相互矛盾的信息误导智能体。这就是为什么你听到那么多关于上下文（context）的讨论。它很重要，而且你希望里面装满尽可能好的信息。

[![图片](https://substackcdn.com/image/fetch/$s_!mHJE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa77e0483-66db-477c-b8e7-e78d705e026d_4640x3909.png)](https://substackcdn.com/image/fetch/$s_!mHJE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa77e0483-66db-477c-b8e7-e78d705e026d_4640x3909.png)

智能体通常要为一项任务跑很多轮循环。它们天生就是“主动型选手”，所以需要有人“照看”。

它们会不断循环、收集更多上下文，直到拿到完成任务所需的一切。对于我那“了不起”的提示词，55 秒和 2 次网络搜索就够了。

[![图片](https://substackcdn.com/image/fetch/$s_!FeYj!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec3dc548-234a-4afe-b14c-1bbec33d8e19_4484x4772.png)](https://substackcdn.com/image/fetch/$s_!FeYj!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec3dc548-234a-4afe-b14c-1bbec33d8e19_4484x4772.png)

### 开始构建

智能体带着一个小计划回来了。我像往常一样只是扫了一眼（这让我付出了代价……）。

我忽略了一个点：它不是我想让扩展工作的方式——它应该在拖动时间块时自动在表单里创建时间段，而不是手动点击同步。

我本该来回问清楚事情会怎么运作，也许先画几个线框图，在上面批注反馈。

但我没有。

我只说了“build it”……

[![图片](https://substackcdn.com/image/fetch/$s_!Q3Jr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0054ad0b-e68f-406a-9301-938be647d845_4719x3261.png)](https://substackcdn.com/image/fetch/$s_!Q3Jr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0054ad0b-e68f-406a-9301-938be647d845_4719x3261.png)

它跑完自己的循环，然后就“建好了”！

哈，并没有。

我当时的第一个念头是：

- 我不应该需要自己安装

- 如果没安装，智能体就不可能做过真机测试

- 我为什么要说“build it”？！

智能体在循环任务时本来可以用的工具，尤其是计算机操作（Computer use）和浏览器操作（Browser use）。它本可以自己安装，并在我的真实日历页面上实时测试。

它没有，所以我就知道会有坑。

我安装之后试着拖动时间段，结果表单同步不工作（意料之中）。

我本该说类似这样的话：

“把它建好。把扩展安装到 Chrome 里，打开一个 Google Calendar 预约表单，做端到端测试。测多天/多周、合并选择，检查表单是否正确更新。迭代并持续测试直到它能用。”

那会给我省下时间和 token……

我经历了自己的“挫败升级”流程。

- 一开始我把遇到的问题打出来。

- 14 分钟后问题还在。我进入第二阶段——语音碎碎念加一张截图。

- 又过了 61（！！）分钟问题还在。我进入第三阶段——录屏并配语音讲解，用光标指向出问题的时刻。智能体可以逐帧拆解视频并转录，从而精确定位你在讲什么。

[![图片](https://substackcdn.com/image/fetch/$s_!IuEC!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F011147d0-0c96-4e73-9df6-1c83774d2921_3156x1381.png)](https://substackcdn.com/image/fetch/$s_!IuEC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F011147d0-0c96-4e73-9df6-1c83774d2921_3156x1381.png)

每一轮对话，上下文都会变得更满。发完第一轮问题后，它终于开始真的用 Chrome 测试了，谢天谢地。

[![图片](https://substackcdn.com/image/fetch/$s_!THi5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F924745a9-0fef-4a65-973c-5b083d12c359_4048x3779.png)](https://substackcdn.com/image/fetch/$s_!THi5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F924745a9-0fef-4a65-973c-5b083d12c359_4048x3779.png)

但从它的思考过程看，它没有完整测试，因为它不想覆盖我的“工作”页面——可那个页面正是要让它随便用的，这可是测试这东西能不能正常工作的关键。

于是第二轮修复时，我发了一段语音碎碎念并加了一张截图。这次我加上了它应该检查的事项和应该做的测试。

[![图片](https://substackcdn.com/image/fetch/$s_!zade!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a38f656-c471-4628-9216-fe98c5b604b9_3474x3258.png)](https://substackcdn.com/image/fetch/$s_!zade!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a38f656-c471-4628-9216-fe98c5b604b9_3474x3258.png)

这就是智能体在考虑任务是否完成时用到的那层“验证层”（verification layer）。智能体自己提出的所有测试都无问题通过 = 扩展可用。

给智能体布置任务时，你应该想清楚“完成”的标准是什么。对一个网站来说，可以是所有内容排版良好、有间距、符合你的设计体系、移动端可用。对邮件分拣来说，可以是收件箱里所有邮件都打上了标签并移到了正确文件夹。

验证是我仍在练习的部分，因为我很多任务不是代码任务。

开发任务在这点上更简单——智能体会检查“代码是否成功运行”（也就是代码能不能用）。

你也可以让智能体帮你一起制定验证标准……

[![图片](https://substackcdn.com/image/fetch/$s_!UPPI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc2f89e7d-9d4f-45c7-97db-729ebe0f6155_2131x1079.png)](https://substackcdn.com/image/fetch/$s_!UPPI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc2f89e7d-9d4f-45c7-97db-729ebe0f6155_2131x1079.png)

智能体整整循环了一个小时（！！）……我本该意识到不对劲，但我以为它只是特别仔细 😅。

原来那一轮里上下文窗口触顶了 3 次。

[![图片](https://substackcdn.com/image/fetch/$s_!oiwi!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b37e582-8d8e-4900-a800-2248d1be67b9_2343x897.png)](https://substackcdn.com/image/fetch/$s_!oiwi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b37e582-8d8e-4900-a800-2248d1be67b9_2343x897.png)

当上下文窗口满了（约 25 万 token），它会总结一切，但会保留一些东西，比如你的消息和系统提示（智能体预置的指令）。

在那一个小时里，智能体一直在大量测试，并发现了不少有助于正确测试扩展的信息。

但接着上下文压缩（compaction）把它从上下文里抹掉了，于是它只能重新学，一遍又一遍。

这里用更大的模型也许有帮助——它能更容易识别压缩时哪些信息值得保留。不同的智能体 harness 压缩上下文的方式也各不相同。大多数时候我不担心这个，但这是个例子：我本该说“测试时，把你的方法和学到的记下来”之类的话，让下一轮上下文能接上。

如果内容很重要且在上下文窗口里，就把它写进文件！文件在压缩时不会被清除，只有会话里的内容会被清除。

我还从智能体的思考中发现，它花了不少时间（和 token）在测试旧版本的 Chrome 扩展——它把每个新版本都存成了单独的文件夹。什么鬼。

这时我把模型换成了 Sol 的高推理模式。Luna Max 处理日常任务、搜索之类的不错，但对我这里的代码和测试来说效果不好。是我的问题吗？

我达到了挫败升级的第三级，所以加了屏幕录制。

[![图片](https://substackcdn.com/image/fetch/$s_!uSw7!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10cc65d3-cf93-4958-84eb-e883c86d3cd0_1984x2263.png)](https://substackcdn.com/image/fetch/$s_!uSw7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F10cc65d3-cf93-4958-84eb-e883c86d3cd0_1984x2263.png)

为了清理旧版本，我还在任务中途补发了一条消息。

大多数智能体在设置里都有这个功能。我经常发完一条提示后，又想着最好赶紧补一些额外信息或另一个请求。这会让你在智能体已经工作的时候把提示发过去，从而引导它。

[![图片](https://substackcdn.com/image/fetch/$s_!dT2z!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5cea161-3fee-46ae-8e6e-81c5bcf12884_817x110.png)](https://substackcdn.com/image/fetch/$s_!dT2z!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5cea161-3fee-46ae-8e6e-81c5bcf12884_817x110.png)

13 分钟后完成了。它的工作方式和我想要的分毫不差。好样的，Sol！

[![图片](https://substackcdn.com/image/fetch/$s_!f44A!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F26761a27-8936-40c6-8cb9-bd00bcb14789_1643x1875.png)](https://substackcdn.com/image/fetch/$s_!f44A!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F26761a27-8936-40c6-8cb9-bd00bcb14789_1643x1875.png)

所以扩展能用，也实用。我可能一个月用两次。但我的流程并不好——里面有很多值得下次会话记住的提醒。

Bug 是不可避免的，对每个人都是。你只需要思考如何为智能体提供最好的上下文，让它自己找到修法。

我本该做的：

- 在说“build it”之前，先读智能体的小计划

- 一开始就把细节讲清楚，而不是把它当成 bug 去发现

- 从一开始就让智能体在 Chrome 里安装、测试并迭代

- 迭代式调试循环用更大的模型

- 对压缩要明确：告诉智能体保留关键学习成果

- 检查智能体编辑和运行的确实是同一个文件

这些没有一条是在说智能体差。智能体其实非常能干——它从一张截图和一句两词提示就做出了可用的 Chrome 扩展，它操控 Chrome 测试自己的作品，还从屏幕录制里诊断出了 bug。

低效出在我如何引导它。多出来的每一个小时、浪费的每一个 token，都来自我（或没有）对“该告诉智能体什么、什么时候告诉”所做的决定。

下面是它生成的演示视频：

你喜欢这类文章吗？留言告诉我吧 😊

### 幕后

这篇文章是这样拼出来的 😂

[![图片](https://substackcdn.com/image/fetch/$s_!TqKX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08472ae1-66a4-4396-9950-26a11155d23c_1662x1460.png)](https://substackcdn.com/image/fetch/$s_!TqKX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08472ae1-66a4-4396-9950-26a11155d23c_1662x1460.png)

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites

## 关键词

#智能体 #上下文工程 #Chrome扩展 #提示词技巧 #Ben's-Bites
