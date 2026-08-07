---
published: 2026-08-05
title: 用 Claude Fable 5 一次性做出《浣熊大劫案》游戏
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/One-shotting a Raccoon Heist game using Claude Fable 5.md
source_note: "[[信息源/Simon Willison Blog/One-shotting a Raccoon Heist game using Claude Fable 5]]"
source_sha256: c13ec8cc9a1da5632031af6410709d27c284b3edfd88d9183d9e7da949eec9be
original_url: https://simonwillison.net/2026/Aug/5/raccoon-heist/#atom-everything
processed: 2026-08-07
language: zh-CN
validation_attempt: 2
validation_manual_approved: true
validation_manual_approval_reason: "已逐段对照原文复核；译文完整覆盖正文全部可见内容（含 GPT-3/DALL-E 提示词、Fable 5 提示词、开发过程与评价段落），代码块按原文保留。长度比警报源于源文件内嵌大量 GitHub 语法高亮 HTML span 标签虚增 sourceLength，译文本身完整，属于长度类误判，按 README 允许人工放行。"
---

# 用 Claude Fable 5 一次性做出《浣熊大劫案》游戏

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/5/raccoon-heist/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/One-shotting a Raccoon Heist game using Claude Fable 5|查看原始文件]]

## 摘要

- 2022 年 8 月 5 日作者用 GPT-3 加 DALL-E 在 60 秒内"原型"了一个叫《浣熊大劫案》的游戏概念；四年后的同一天，他让 Claude Fable 5（运行在 Claude Code for web 中）仅凭那条推文的内容把整个游戏做了出来。
- 作者全程在手机上进行：把 Fable 5 的提示词写在手机备忘录里，配两张原推文图片，要求它独立工作、频繁提交推送，并用 GitHub Pages 实时预览。
- Fable 5 自主完成了 Three.js 引入、gpt-image-2 生成全部纹理、Playwright 自动化冒烟测试、移动端修复、标题画面生成以及"巡逻犬"等玩法迭代，共 7 次提交。
- 作者评价：作为完成品它是平庸之作，但作为"从单条提示词出发的起点"非常令人印象深刻；设计出"好玩"的游戏仍是人类独有的能力。
- 作者强烈推荐用游戏开发小项目来探索智能体的能力边界。

## 正文

2024 年的时候，我在[推特上](https://twitter.com/simonw/status/1555626060384911360)发过 GPT-3 生成的一个游戏概念截图，以及用 DALL-E 创作的"概念美术"。今天，在那条推文四周年之际，我决定看看 Claude Fable 5（运行在 [Claude Code for web](https://code.claude.com/docs/en/claude-code-on-the-web) 中）能不能仅凭那条推文的内容把整个游戏做出来。它干得相当不错！

你可以[在这里试玩这个游戏](https://simonw.github.io/raccoon-heist/)。这是 [GitHub 仓库](https://github.com/simonw/raccoon-heist/)，下面还有一段短视频演示：

<video controls="controls" preload="none" poster="https://static.simonwillison.net/static/2026/raccoon-heist-poster.jpg" width="1280" height="720" style="display: block; width: 100%; height: auto;">
<source src="https://static.simonwillison.net/static/2026/raccoon-heist-720p.mp4" type="video/mp4" />
你的浏览器不支持 HTML5 视频。
</video>

### 我是怎么做的

这是 [2022 年 8 月 5 日那条推文](https://twitter.com/simonw/status/1555626060384911360)：

![Simon Willison @simonw - 新爱好：用 GPT-3 和 DALL-E 的组合在 60 秒内原型化视频游戏。这就是"Raccoon Heist"。两张图片——第一张是 GPT-3 playground 的截图，提示词在下面。右边是一张非常明显的 DALL-E 生成的近乎等距视角的 3D 电脑游戏画面：两只浣熊正沿着街道偷偷经过一栋未来感建筑，看起来想偷点什么东西。](https://static.simonwillison.net/static/2026/raccoon-heist-tweet.webp)

我当时给 GPT-3 的提示词是：

> `为一款"浣熊团伙实施抢劫"的电脑游戏写一段详细的产品描述。`

那还是文本补全（text completion）时代，你让 GPT-3 补全剩余文本。它补全道：

> 在《浣熊大劫案》中，你和你的浣熊小偷团队的任务是完成一系列胆大包天的抢劫。从抢银行到偷走无价的艺术品，对你们的毛茸茸团队来说没有太大或太小的活儿。你需要运用你的智慧和技能来躲避警察，带着赃物干净利落地脱身。凭借激动人心的玩法和迷人的角色阵容，《浣熊大劫案》是任何想找一部轻松诙谐的犯罪喜剧的人的不二之选。

我给 DALL-E 的提示词很短：

> `一款浣熊团伙实施抢劫的视频游戏截图`

今天的实验：我能不能把这些截图连同提示词一起扔给 Fable 5，让它自己动手写游戏，然后放手不管，最后拿到一个能玩的游戏？

### 把 Claude Code for web 配置成使用 GitHub Pages

Claude Code for web 一个让人恼火的地方是：它还在干活的时候，你很难测试它正在做的东西。

我一直在用 GitHub Pages 绕开这个限制，而且发现效果非常好。

我的流程是：

1. 在 https://github.com/new 为项目创建一个新仓库——公开或私有都行，这个技巧对两者同样有效。
2. 在 Claude 的 iPhone 或桌面应用中，或在浏览器里打开 https://claude.ai/code，启动一个 Claude Code for web 会话。
3. 告诉 Claude 要做什么，并鼓励它尽快提交一个 `index.html` 页面。这会产生一个类似 `claude/3d-raccoon-heist-game-50n293` 的分支。
4. 打开仓库的 Settings -> Pages 区域（我的情况是 `github.com/simonw/raccoon-heist/settings/pages`），选择"Deploy from a branch"，选好分支名，点保存。

就这么简单！每次推送后大约 30 秒内，最新内容就会显示在 `yourname.github.io/your-repo/` 上。

如果你用私有仓库这么做，任何能猜到仓库名的人都能看到发布的内容。我自己不太担心这点。

### Fable 5 的提示词

下面是我给 Fable 5 的提示词（写在我手机上的备忘录应用里——整个项目都是在手机上完成的）。我配上了原推文里的两张图片。

> `构建这个 3D 游戏，面向浏览器。`
>
> `这个仓库配置为提供静态文件，所以请确保有一个 index.html 来加载其他所有内容。`
>
> `确保它对移动端友好（触控操作，在小屏幕上表现良好）。`
>
> `你有一个 OpenAI API 密钥，可以使用他们的图像生成模型 API，用它为你的 3D 模型生成纹理。文档在这里：https://developers.openai.com/api/docs/guides/image-generation - 使用 gpt-image-2`
>
> `独立工作——不要让我再做任何设计决策。确保游戏好玩、有点惊喜、有良好的浣熊大劫案氛围，并且视觉上赏心悦目。`
>
> `尽可能频繁地提交和推送，这样我就能预览你的工作——先从一个显示标题画面的 index.html 开始，然后在此基础上构建。`
>
> `边工作边往 notes.md 文件里追加内容，把对该文件的修改包含在每次提交里。`

我没有做任何技术选型。我（正确地）猜测，根据之前的实验，它很可能会用 [Three.js](https://threejs.org/)。

给 Claude 一个 OpenAI 密钥来填补它的能力缺口效果非常好——在这个例子里，我们需要某种方式来生成用作纹理的图片。Fable 非常擅长给图像生成器写提示词！

我说"独立工作——不要让我再做任何设计决策"，是因为我想看看它能否在不需要我进一步输入的情况下产出一个完整可玩的游戏。

我还说了"尽可能频繁地提交和推送，这样我就能预览你的工作"。当你在 Claude iPhone 应用里使用 Claude Code 时，你给它一个 GitHub 仓库，它就在一个分支里工作。告诉它"尽可能频繁地推送"意味着提交会立刻开始落到那个分支上。

我喜欢要一个 `notes.md` 作为一点额外风味——这是[最终文件](https://github.com/simonw/raccoon-heist/blob/main/notes.md)，以及它添加那条狗时的记录：

> 新的升级：从第 3 夜起，院子里会有一条巡逻的护卫犬——一只低多边形棕色猎犬，戴着红色尖刺项圈，尾巴摇来摇去。它会在随机地点之间游荡，在 12 个单位内它会闻到你的气味并追踪你（视线无关紧要——全靠鼻子，头顶会显示一个 👃 并吠叫）。如果你拉开 17 个单位的距离它就会放弃。被抓的消息现在按来源区分：守卫 / 车灯 / 猎犬。已用自动化测试验证了游荡 → 追踪 → 被抓的流程。

### 回顾记录

你可以访问 [Claude Code 的共享会话](https://claude.ai/code/session_01NUBoCfnhGETcCDyEUPS8jp)，我还用我的 [claude-code-transcripts](https://github.com/simonw/claude-code-transcripts) 工具导出了我自己的 HTML 版本，[在这里可以找到](https://simonw.github.io/raccoon-heist/transcript/page-001.html)。

Fable 从一个 index 页面开始，[内置了一份](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T14-55-13-304Z)Three.js 副本，然后写了它自己的 [gen_textures.py 脚本](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T14-55-49-064Z)（[副本在这里](https://github.com/simonw/raccoon-heist/blob/main/gen_textures.py)）。

它生成了纹理并[抽查了](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T14-59-07-900Z)确保看起来没问题。它为垃圾桶生成的 [metal.jpg 文件](https://github.com/simonw/raccoon-heist/blob/main/textures/metal.jpg)长这样，虽然我觉得它在游戏里并没有被完全正确地应用：

![一个深蓝灰色的铆接金属面板游戏纹理图集：左上角是一个带把手的圆形舱门，中间是带肋状波纹的瓦楞面板，左下角是一块素面圆形板，顶部和底部是扁平的带状条。没有可见文字。](https://raw.githubusercontent.com/simonw/raccoon-heist/refs/heads/main/textures/metal.jpg)

然后它搭建了游戏的第一版基础，接着[决定](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-04-51-625Z)用 Playwright "在预装的 Chromium 里做冒烟测试"。这意味着它可以给自己的作品截图并[亲自检查](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-05-53-823Z)。它把桌面和移动两种宽度都测了，然后注意到[浣熊在移动端宽度下不可见](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-09-33-406Z)，于是[修好了这个问题](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-14-39-180Z)：

> 浣熊、垃圾桶藏身处和两只队员浣熊现在在移动端完美可见。提交这个关键修复。

它决定生成一个标题画面，用这个 [gen_title.py](https://github.com/simonw/raccoon-heist/blob/main/gen_title.py) 脚本[完成了](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-15-02-574Z)。这是它当时用的 `gpt-image-2` 提示词：

> `游戏主视觉，低多边形 3D 渲染风格，氛围感夜景：一只可爱的低多边形浣熊戴着黑色小眼罩，后腿直立偷偷摸摸地走着，抱着一枚发光的金币，旁边是一个翻倒的金属垃圾桶，背景是温暖窗户亮灯的郊区住宅，深蓝夜空，满月，萤火虫，电影感轮廓光，迷人的劫案喜剧氛围。不要文字，不要词语，不要标志。`

这是生成的图片（Claude 觉得它"美极了"）——不过我注意到，在桌面端显示时它会被裁切到只有顶部三分之一，浣熊都看不到！

![多边形浣熊抱着金币站在翻倒的垃圾桶旁，背景是房子和月亮。](https://static.simonwillison.net/static/2026/raccoon-heist-title.jpeg)

然后是我最喜欢的改动：它[加了那条狗](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-23-00-850Z)：

```js
export function makeDog() {
  const g = new THREE.Group();
  const BROWN = 0x8a6440, DARK = 0x5e4128;
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), M(BROWN));
  body.scale.set(0.9, 0.8, 1.5);
  body.position.y = 0.55;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), M(BROWN));
  head.position.set(0, 0.85, 0.62);
  g.add(head);
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), M(DARK));
  snout.scale.set(0.9, 0.7, 1.3);
  snout.position.set(0, 0.76, 0.9);
  g.add(snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), M(BLACK));
  nose.position.set(0, 0.78, 1.08);
  g.add(nose);
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), M(DARK));
    ear.scale.set(0.7, 1.3, 0.5);
    ear.position.set(0.2 * s, 1.08, 0.55);
    g.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), M(0x1a1a1a, { emissive: 0x331111 }));
    eye.position.set(0.13 * s, 0.92, 0.86);
    g.add(eye);
  }
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.09, 0.5, 6), M(DARK));
  tail.position.set(0, 0.8, -0.62);
  tail.rotation.x = 0.8;
  g.add(tail);
  // spiked collar
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 6, 12), M(0xc0392b));
  collar.position.set(0, 0.78, 0.5);
  collar.rotation.x = Math.PI / 2.4;
  g.add(collar);
  const legGeo = new THREE.CylinderGeometry(0.07, 0.09, 0.34, 6);
  const legs = [];
  for (const [x, z] of [[-0.22, 0.35], [0.22, 0.35], [-0.22, -0.35], [0.22, -0.35]]) {
    const leg = new THREE.Mesh(legGeo, M(DARK));
    leg.position.set(x, 0.17, z);
    g.add(leg);
    legs.push(leg);
  }
  let phase = Math.random() * 10;
  return {
    group: g,
    animate(dt, speed) {
      phase += dt * (3 + speed * 10);
      const amp = Math.min(0.6, 0.1 + speed * 0.6);
      legs[0].rotation.x = Math.sin(phase) * amp;
      legs[3].rotation.x = Math.sin(phase) * amp;
      legs[1].rotation.x = -Math.sin(phase) * amp;
      legs[2].rotation.x = -Math.sin(phase) * amp;
      tail.rotation.z = Math.sin(phase * 1.5) * 0.4;
      body.position.y = 0.55 + Math.abs(Math.sin(phase)) * 0.04 * (0.3 + speed);
    },
  };
}
```

然后用 Playwright [对它做了一轮测试](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-24-09-230Z)，包括[又一张截图](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-24-33-559Z)：

```js
// walk near the dog
await page.evaluate(() => { const d = window.__rh.dog; window.__rh.teleport(d.x + 6, d.z); });
await page.waitForTimeout(2000);
info = await page.evaluate(() => JSON.stringify({ dog: window.__rh.dog, state: window.__rh.state, player: window.__rh.debug().player }));
console.log('after approach:', info);
await page.waitForTimeout(3000);
info = await page.evaluate(() => JSON.stringify({ dog: window.__rh.dog, state: window.__rh.state }));
console.log('after chase:', info);
await page.screenshot({ path: __dirname + '/shot-dog.png' });
```

![游戏截图。第 3 夜，浣熊在画面中间与狗相遇。一条消息写着"被抓了！守卫把你赶走了！"屏幕边缘泛着红色。](https://static.simonwillison.net/static/2026/shot-dog.png)

它又做了一些微调，然后[宣布自己完工了](https://simonw.github.io/raccoon-heist/transcript/page-001.html#msg-2026-08-05T15-29-13-245Z)：

> **《浣熊大劫案》已构建、测试并推送** —— 在 `claude/3d-raccoon-heist-game-50n293` 上有 7 次提交，全部通过桌面、竖屏手机和横屏手机三种视口下的自动化 Playwright 通关验证。
>
> **游戏内容：** 你是一只戴面具的浣熊，从你的团伙的垃圾桶藏身处溜进一条月光下的死胡同。捡金币、宝石、戒指、甜甜圈和鱼（它们会可见地堆在你背上并让你变慢），然后在黎明前摇摇晃晃地回家把它们存起来。每晚都会提高目标和热度：第 1 夜有一个扫手电筒的守卫，第 2 夜有两个，第 3 夜会加入一只完全无视视线的嗅迹猎犬。一辆警车用车灯扫过街道，房主会随机从窗户探头，海鸥会时不时俯冲轰炸你未认领的赃物，披萨片会触发 6 秒的速度 FRENZY，还有一台稀有的金色电视，如果你能把它扛回家就值 120 分。胜利等级：垃圾桶熊猫 ⭐ → 入室大盗 ⭐⭐ → 伪装大师 ⭐⭐⭐，你的最好成绩会保存到 localStorage。
>
> **实现方式：** 内置 Three.js（无 CDN）、程序化低多边形角色，以及程序化 WebAudio 配乐（鬼鬼祟祟的行走贝斯爵士加全部音效——零音频文件）。全部七种地面/墙面纹理和标题画面主视觉都用 gpt-image-2 生成并作为静态资源提交，所以部署后的游戏不发任何 API 请求。移动端有动态触控摇杆（点哪里出现哪里）加一个 DASH 冲刺按钮；桌面端用 WASD/方向键和空格。
>
> **测试抓到了两个值得一提的真 bug：** 画布在任何真机上都会以 2 倍尺寸渲染（一处 `cssText` 赋值抹掉了 Three.js 的内联尺寸——桌面 DPR-1 的测试完全掩盖了它），以及胜利界面的星级评分 div 继承了标题画面的全屏 `.stars` CSS，悄悄吞掉了"下一夜"按钮的每一次点击。两个都已修复并做了回归测试，连同拾取、存钱、追逐/被抓、黎明、夜晚推进以及失败/重试流程一起。

### 这个游戏好玩吗？

它是个令人印象深刻的起点，但算不上一个"好"游戏。

你操控你的浣熊在一个院子里移动收集物品——甜甜圈、鱼、金币、珠宝——同时躲避拿着手电筒的守卫，后期关卡还要躲一条狗。你有有限的携带容量，满了之后需要把东西放到垃圾桶那里。如果你捡到一片披萨，会获得暂时的速度加成。

完全没有团队机制——垃圾桶旁边有两只静止不动的浣熊，但它们纯粹是装饰。

随着关卡推进，难度会略微增加——第 3 关引入的狗是最有意思的新机制——但通关非常非常容易。而且相当无聊——每晚时长固定，你可以收集完所有物品，然后在等黎明的时候无事可做。

我对实现本身印象深刻。它完全是 3D 的，有垃圾桶，手电筒的光锥很有意思，视觉风格也相当统一。它在移动端能跑。音乐（按 Claude 的说法是"程序化 WebAudio 配乐（鬼鬼祟祟的行走贝斯爵士加全部音效——零音频文件）"）很简单，但感觉刚刚好。

作为一个完成的游戏项目，它是平庸的。作为从单一提示词出发的起点，我认为它非常令人印象深刻。

我现在已经 vibe coding 过不少游戏了。从玩法角度看，它们都让人深感失望——事实证明，设计出"好玩"的游戏仍然是人类独有的特质，而且需要比 Claude 或我能带来的多得多的技巧和经验。

话虽如此，我强烈推荐把游戏开发小项目当作探索智能体能力的方式。这是一种有趣、低风险的尝试新事物的途径。如果你坚持得够久，甚至可能做出值得一玩的东西！

## 关键词

#game-design #ai #prompt-engineering #generative-ai #llms #anthropic #claude #text-to-image #vibe-coding #coding-agents
