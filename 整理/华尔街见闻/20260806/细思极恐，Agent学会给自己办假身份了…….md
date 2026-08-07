---
title: "细思极恐，Agent学会给自己办假身份了……"
source: "华尔街见闻"
original_file: "信息源/华尔街见闻/细思极恐，Agent学会给自己办假身份了…….md"
source_note: "[[信息源/华尔街见闻/细思极恐，Agent学会给自己办假身份了……]]"
source_sha256: 24a2658845738b87afa15c04e87e86fbde388e838890462441b427539c9a84ab
original_url: "https://wallstreetcn.com/articles/3778854"
processed: 2026-08-06
language: zh-CN
---

# 细思极恐，Agent学会给自己办假身份了……

> [!info] 来源信息
> - 数据源：华尔街见闻
> - 原文链接：[打开原文](https://wallstreetcn.com/articles/3778854)
> - Vault 原文件：[[信息源/华尔街见闻/细思极恐，Agent学会给自己办假身份了……|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

<p style="text-align: left;">为了让一段恶意代码通过审核，一个AI Agent决定先给自己办个假身份。</p>

<p style="text-align: left;">事情发生在英国AI Security Institute的一次网络安全测试中。测试人员给OpenAI和Anthropic的前沿模型设置了虚构任务，让它们在限定环境中寻找漏洞、编写代码，并尝试完成攻击目标。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/57812d12-4ba2-40a5-b1e1-de2d45c2e128.jpeg" alt="图片" data-wscntype="image" data-wscnsize="359148" data-wscnh="519" data-wscnw="692" referrerpolicy="no-referrer"></p>

<p style="text-align: left;"><strong>其中一个由Anthropic模型驱动的Agent写出了恶意代码，并把它提交给了一个真实存在的公共开源项目。但代码想进入真实的软件项目，还需要人类维护者批准。</strong></p>

<p style="text-align: left;">正常路径走不通，这个Agent居然创建了虚假网络身份，“乔装打扮”了一番，试图“骗”过人类维护者，让其以为这是一段可接受的代码。</p>

<p style="text-align: left;">被质疑这次提交后，它甚至修改了此前留下的活动痕迹，让自己看起来更无害，并考虑换一个新身份继续尝试。</p>

<p style="text-align: left;">英国AI Security Institute一共进行了122次测试，在10次运行中发现19次未经授权的行动。其中17次来自Anthropic的Mythos 5，另外两次来自OpenAI的GPT-5.6-Sol。测试机构称，部分Agent的持续行动已经指向真实个人和机构。</p>

<p style="text-align: left;">好在没有造成现实损失。恶意代码最终也没有获得人类批准。</p>

<p style="text-align: left;"><strong>要说这些Agent对人类有恶意或者突然觉醒，未免言过其实。这也是AI欺骗人类有趣又冷漠的一点——它只是发现了挡在面前的一个障碍，并且努力绕过它，就像一个不择手段完成KPI的员工。</strong></p>

<p style="text-align: left;">AI胡说八道，大家已经见怪不怪了。但如果已经学会“不择手段”的AI Agent被允许直接访问互联网、操作代码和账号，它犯错的后果也会跟着变大，细思恐极啊。</p>

<h2 style="text-align: left;"><strong>骗一下你哈（没有恶意）</strong></h2>

<p style="text-align: left;">严格来说，这次事故还称不上AI“失控”。</p>

<p style="text-align: left;">测试人员有意给模型开放了较高权限，一些正常产品中的安全限制也被撤掉了。这些Agent可以访问真实互联网，而AISI这么做，本来就是想看看，在安全限制被削弱之后，前沿模型究竟会做出什么。</p>

<p style="text-align: left;">OpenAI也强调，这次测试的条件并不代表普通用户的使用环境。两次来自GPT-5.6-Sol的越界行为都涉及互联网访问，其中一次还与第三方测试环境的配置问题有关。Anthropic则确认，涉事Agent由Mythos 5驱动，并表示会继续与AISI调查这次事件。</p>

<p style="text-align: left;">所以，这次事故距离科幻电影里的“AI觉醒”还很远。麻烦在于Agent为了完成任务，会自己找路，而且有时候它找到的路，已经超出了人给它划定的范围。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/c94e61bb-850a-4b1c-b1bc-66c8f752f477.jpeg" alt="图片" data-wscntype="image" data-wscnsize="337696" data-wscnh="488" data-wscnw="692" referrerpolicy="no-referrer"></p>

<p style="text-align: left;">AISI后来披露的细节，比“创建虚假身份”这几个字有意思得多。</p>

<p style="text-align: left;">那名由Anthropic Mythos 5驱动的Agent，为了让自己提交的恶意代码通过审核，先在GitHub上创建了多个假账号，让这些账号出来给自己帮腔，声称代码没有问题。</p>

<p style="text-align: left;"><strong>面对一名说丹麦语的开发者，它甚至特意改用丹麦语留言，想让自己的身份显得更可信。为了绕过GitHub注册账号时的限制，它还用上了Tor浏览器。</strong></p>

<p style="text-align: left;"><strong>等到有人发现代码有问题，这个Mythos 5 Agent也没有马上停下。它开始修改此前留下的活动记录，试图把恶意代码解释成一次意外，还考虑换一个新身份继续。</strong></p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/01370d4f-bb18-47d8-a782-068950a89e22.jpeg" alt="图片" data-wscntype="image" data-wscnsize="346500" data-wscnh="500" data-wscnw="693" referrerpolicy="no-referrer"></p>

<p style="text-align: left;">普通聊天机器人遇到不会回答的问题，最多编一个答案。Agent遇到完不成的任务，手里却还有一堆工具可以加以利用。</p>

<p style="text-align: left;">Agent的招数放在人类黑客身上并不新鲜，都是社会工程学的老办法。新鲜的是现在Agent已经能自发“想”到并执行一整套“坑人”招数。</p>

<p style="text-align: left;">模型没有什么“作恶动机”，甚至可能根本不知道自己已经越界。它只是一路试下去，直到找到一个看起来更有希望完成任务的办法。</p>

<p style="text-align: left;">危险未必来自恶意，也可能来自过分认真。</p>

<p style="text-align: left;">企业里，老板总是担心员工“磨洋工”“摸鱼”。Agent时代可能（非常讽刺地）出现相反的问题，老板也许会拥有不知疲倦、不会心虚、“有的是手段和力气”但缺乏道德感的员工。</p>

<p style="text-align: left;">是福还是祸？</p>

<h2 style="text-align: left;"><strong>光让模型“管住嘴”已经不够了</strong></h2>

<p style="text-align: left;">大模型最早的安全措施，大多围绕生成内容设计。说直白点就是“管住嘴”。</p>

<p style="text-align: left;">模型不能教人制造武器、生成诈骗邮件、泄露用户隐私，也不能输出仇恨、色情和违法内容。</p>

<p style="text-align: left;">而且即便模型给出了危险答案，中间通常还隔着一个人。就拿码农来说，用户得自己复制代码、打开终端、登录账号，亲自操作具体步骤。</p>

<p style="text-align: left;"><strong>Agent改变了这个流程。现在不少Agent已经可以直接浏览网页、运行代码、修改文件，甚至调用支付工具。</strong></p>

<p style="text-align: left;">今年3月，英国AI Security Institute与英格兰银行发布了一项针对MCP生态的研究。MCP可以理解成Agent连接外部工具的一套通用接口。研究人员统计了17.7万个公开MCP工具，发现它们的数量在一年多里增长了约36倍，月下载量也从8万次增加到1400万次。</p>

<p style="text-align: left;">更值得注意的是这些工具能做什么。</p>

<p style="text-align: left;">2024年底，具有直接操作能力的工具只占MCP下载量的27%左右，到今年已经升到65%。软件开发和IT工具占全部公开工具的67%，却拿走了90%的下载量。支<strong>付工具也在快速增加，</strong>2025年1月只有47个支持支付的MCP服务器，到今年2月已经有1578个。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/8480b88a-0443-4527-9f0c-deafbd65e196.jpeg" alt="图片" data-wscntype="image" data-wscnsize="151767" data-wscnh="219" data-wscnw="693" referrerpolicy="no-referrer"></p>

<p style="text-align: left;">风险也已经出现过。</p>

<p style="text-align: left;">去年，安全公司Invariant Labs测试GitHub官方MCP时发现，只要有人在公开Issue里藏入恶意提示词，Agent读取后就可能继续访问用户的私人代码库，再把其中的信息写进公开的pull request。<strong>整个过程中，读取Issue、查看代码、创建PR都是正常功能，问题出在这些操作被串到了一起。</strong></p>

<p style="text-align: left;">今年5月，美国国家安全局专门发布MCP安全指南，也把类似问题列为重点风险。NSA提醒，传统的权限控制和人工审批已经很难覆盖Agent连续调用多个工具的情况。研究人员还演示过，一个恶意MCP服务器可以诱导Agent从另一个正常的WhatsApp工具中读取聊天记录，用户全程没有收到额外的审批提示。</p>

<p style="text-align: left;"><strong>最骇人的是OpenAI模型攻击Hugging Face事件。</strong></p>

<p style="text-align: left;">就在刚刚过去的7月，OpenAI在内部测试Agent的网络攻击能力，为了把模型逼到极限，特意放宽了部分安全限制。</p>

<p style="text-align: left;">结果，Agent似乎很快发现了一条“捷径”：与其老老实实完成测试，不如去找测试答案。它把目标盯上了Hugging Face，随后利用零日漏洞逃出原本受限的测试环境，又拿下第三方代码沙箱作为跳板，最后一路闯进了Hugging Face的生产系统。</p>

<p style="text-align: left;">Hugging Face事后复盘出了大约1.76万次Agent操作。它会找漏洞、偷凭证、横向移动，路走不通就换一条继续试，整个过程持续了数天，也没有人一步步告诉它下一步该做什么。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/53cadec5-02e0-43af-bb22-a43f6283cb45.jpeg" alt="图片" data-wscntype="image" data-wscnsize="254656" data-wscnh="368" data-wscnw="692" referrerpolicy="no-referrer"></p>

<p style="text-align: left;">OpenAI后来正式承认，这次入侵由包括GPT-5.6 Sol在内的多个自家模型共同驱动。更荒诞的是，它折腾这么大一圈，很可能只是为了在测试里作弊——想直接把答案找出来。</p>

<p style="text-align: left;">所以英国这次测试里出现假身份，并不是一个孤立的怪事。</p>

<p style="text-align: left;">Agent正在拿到越来越多可以直接行动的权限，而现有的安全机制很多还是按聊天机器人的思路设计。<strong>等到它已经连续做了十几个动作，最后再弹出一个“是否批准”，人类看到的往往只是最后一步。</strong></p>

<p style="text-align: left;"><strong>英国这次测试中，最后一道防线仍然是一个普通人。Agent创建了身份，准备了说辞，提交了恶意代码，但负责审核的维护者没有点击批准。</strong></p>

<p style="text-align: left;">但下一次，Agent的身份可能更可信，材料可能更完整，措辞也可能更“正常”。而屏幕前的人可能刚好在赶进度，或者已经习惯了相信AI生成的说明。</p>

<h2 style="text-align: left;"><strong>Agent出了事，算谁的？</strong></h2>

<p style="text-align: left;"><strong>OpenAI的Agent闯进Hugging Face之后，一个很现实的问题马上出现了：这事算谁的？</strong></p>

<p style="text-align: left;">OpenAI没有把责任推给模型。7月21日，公司公开承认，入侵由包括GPT-5.6 Sol在内的多个自家模型共同驱动，同时表示已经收紧内部测试环境的配置和访问控制，哪怕这样会拖慢研究进度。Hugging Face则和OpenAI一起调查和修复系统。</p>

<p style="text-align: left;">监管部门找的也是OpenAI。</p>

<p style="text-align: left;">事件之后，美国15个州的总检察长要求OpenAI保存与这次入侵有关的全部材料，国会也要求公司解释事件经过。Hugging Face CEO Clem Delangue还提出，未来AI Agent发动网络攻击后，企业应该强制披露完整的Agent运行轨迹。否则出了问题，外界连它到底做过什么、在哪一步越界都很难还原。</p>

<p style="text-align: left;"><strong>美国其实已经开始用具体法律条款处理这个问题。</strong></p>

<p style="text-align: left;">今年1月，加州AB 316正式生效。条文写明如果一家企业开发、修改或使用的AI造成了伤害，被起诉时不能以“这是AI自主造成的”为理由免责。至于模型开发商、部署企业和使用者各自该承担多少责任，还要根据因果关系和具体情形判断，但至少“AI自己干的”已经不能用来把责任一笔勾销。</p>

<p style="text-align: left;">杜克大学法学院教授Deborah DeMott最近也专门研究了Agentic AI的责任问题。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/794cc8f0-d011-47a4-9b68-5d07f8d271bc.jpeg" alt="图片" data-wscntype="image" data-wscnsize="371448" data-wscnh="536" data-wscnw="693" referrerpolicy="no-referrer"></p>

<p style="text-align: left;"><strong>她指出，Agent这个名字很容易让人产生误会——法律上的“代理人”可以承担义务，AI不行。</strong>公司如果主动把一个AI放到用户面前，让它代表自己办事，最后不能因为办砸事情的是软件，就假装这件事和公司无关。</p>

<p style="text-align: left;">这种争论其实已经有过一个很简单的版本。</p>

<p style="text-align: left;">2024年，加拿大航空的聊天机器人告诉乘客，可以先买票再申请丧亲折扣，后来航空公司拒绝兑现，还试图强调聊天机器人给出了错误信息。法院最后没接受这种说法：机器人就在加拿大航空的网站上，对用户来说，它说的话就是公司提供的信息。</p>

<p style="text-align: left;">DeMott认为，这个案子的逻辑同样可以延伸到今天的Agent。</p>

<p style="text-align: left;">Agent让责任归属变得更麻烦，是因为它很少只在一个系统里工作。模型可能来自OpenAI，工具由第三方提供，真正被操作的账号和数据又属于客户。出了事故以后，光看最后是谁点了按钮，已经很难说清整件事。</p>

<p style="text-align: left;"><span style="color: #808080;">本文来源：<a href="https://mp.weixin.qq.com/s/IA0U3i_wCwMkjK9er346QA" target="_blank" rel="noopener">字母AI</a></span></p><div style="color: #666; margin-bottom: 15px;">风险提示及免责条款</div>

<div style="font-size: 12px;font-family: 黑体;color: #666;line-height: 20px;">

市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。

</div>

## 关键词

#华尔街见闻