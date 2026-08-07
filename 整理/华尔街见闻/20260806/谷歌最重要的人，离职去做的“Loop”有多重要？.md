---
title: "谷歌最重要的人，离职去做的“Loop”有多重要？"
source: "华尔街见闻"
original_file: "信息源/华尔街见闻/谷歌最重要的人，离职去做的“Loop”有多重要？.md"
source_note: "[[信息源/华尔街见闻/谷歌最重要的人，离职去做的“Loop”有多重要？]]"
source_sha256: 0bc6568976c20b8616a0cd689a60c5bc451b533d613fb99235a59a99e37bae89
original_url: "https://wallstreetcn.com/articles/3778819"
processed: 2026-08-06
language: zh-CN
---

# 谷歌最重要的人，离职去做的“Loop”有多重要？

> [!info] 来源信息
> - 数据源：华尔街见闻
> - 原文链接：[打开原文](https://wallstreetcn.com/articles/3778819)
> - Vault 原文件：[[信息源/华尔街见闻/谷歌最重要的人，离职去做的“Loop”有多重要？|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

<p style="text-align: left;">8月5日，谷歌宣布AI部门重大调整。</p>

<p style="text-align: justify;">Google DeepMind CEO Demis Hassabis转任董事长，并出任Alphabet首席科学家。效力谷歌近27年的首席科学家Jeff Dean，则与Sanjay Ghemawat、Oriol Vinyals、Quoc Le共同创办了Discovery Loop。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/28e8dd5d-30d7-43ff-8463-1f6e512424aa.jpeg" alt="图片" data-wscntype="image" data-wscnsize="801220" data-wscnh="826" data-wscnw="970" referrerpolicy="no-referrer"></p>

<p style="text-align: justify;">这四个人，几乎贯穿了谷歌过去二十多年的基础设施和AI发展。Jeff Dean参与了MapReduce、BigTable、Spanner、DistBelief、TensorFlow和Pathways等系统建设，也是Google Brain的共同创办人；Ghemawat长期与他合作，参与搭建谷歌早期的搜索和计算基础设施；Vinyals是Gemini的技术负责人之一；Quoc Le则参与了Google Brain和AutoML-Zero等项目。</p>

<p style="text-align: justify;">他们离开谷歌后要做一家叫Discovery Loop的公益型公司，方向是用AI推进机器学习、科学和工程研究。谷歌将成为创始投资者和云合作伙伴，并为其第一年提供算力。据外媒报道，这家公司刚刚成立，没有开始大规模招聘，甚至还没有正式的办公场所。</p>

<p style="text-align: justify;">但它的起点，已经描述得比较清晰，那就是让AI自动提出实验、实现运行实验所需的代码或工具、评估结果，再根据结果进入下一轮。</p>

<p style="text-align: justify;">Jeff Dean在7月25日的一场演讲中，把这种方向称作“自动化版本的科学方法”：提出实验、实现实验、评估实验，然后得到结果。他认为，如果同时运行成千上万个这样的循环，AI可能在科学、生物、芯片设计和模型研发等领域产生新的突破。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/979e2fda-2995-4c1c-8854-d14355cde3e5.jpeg" alt="图片" data-wscntype="image" data-wscnsize="589824" data-wscnh="576" data-wscnw="1024" referrerpolicy="no-referrer"></p>

<p style="text-align: center;"><span style="color: #b3b3b3;">图：Discovery Loop创始团队。图片由AI生成</span></p>

<h2 style="text-align: justify;">01&nbsp;Jeff Dean要做的“Loop”</h2>

<p style="text-align: justify;">“Loop”已经成为今年AI领域的一个高频词。</p>

<p style="text-align: justify;">2026年6月，Claude Code负责人Boris Cherny说，他已经很少直接提示Claude，运行中的Loop会负责提示模型并决定下一步，“我的工作是写Loop”。</p>

<p style="text-align: justify;">“龙虾之父”Peter Steinberger更会用有人味儿的表达带来更广的传播：不要再逐条提示编程Agent，要设计能够提示Agent的Loop。</p>

<p style="text-align: justify;">Google工程师Addy Osmani以《Loop Engineering》为题，为这套方法补上了完整结构，包括任务如何触发，状态如何保存，结果由谁检查，循环何时继续，又在什么条件下停止。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/1059f49b-23b3-4fa1-b02a-80d322b8549e.jpeg" alt="图片" data-wscntype="image" data-wscnsize="1624064" data-wscnh="1586" data-wscnw="1024" referrerpolicy="no-referrer"></p>

<p style="text-align: justify;">一个原本散落在少数开发者工作流中的做法，由此获得了共同语言。外媒甚至把它概括为Prompt engineering之后的新范式；7月17日，IBM进一步将Loop engineering定义为设计能够持续“行动、观察、决策和迭代”的Agent工作流。至此，Loop的讨论开始走出编程Agent社区，进入企业自动化和更广泛的AI工程语境。</p>

<p style="text-align: justify;">这个词真正击中行业的地方，在于它描述了人机分工正在发生的变化：当模型可以自己完成下一轮操作，人的价值开始向上移动，从逐次下达指令，转向设计目标、反馈、验证和停止条件。Loop engineering因此更像是对一场已经发生的工程变化的命名。</p>

<p style="text-align: justify;">Discovery Loop使用了相同的“Loop”结构，目标却更进一步。根据创始团队目前的表述，它希望让AI参与科学与工程研究的完整流程：提出假设、执行实验、评价结果，并依据反馈决定下一步探索方向。</p>

<p style="text-align: justify;">因此，Loop engineering更接近底层工程方法，Discovery Loop要构建的是一套持续产生和验证新发现的研究系统。</p>

<p style="text-align: justify;">在离职前不久的一场中，Jeff Dean把它概括为科学方法的自动化：<strong>提出实验、实现实验、评估实验、获得结果。系统还要把复杂问题拆成子问题，在多个紧密的实验循环中分别探索，最后将结果整合成一个改进后的系统。</strong></p>

<p style="text-align: justify;">Jeff Dean预测，到2027年，会出现更多机器学习系统自身的自动化：AI通过运行大量实验提高能力，并把这种方法推广到任何目标可以被衡量的科学和工程领域。</p>

<p style="text-align: justify;">他判断Loop成立需要符合两个条件：任务可以被反复试验，结果可以被可靠评价。</p>

<h2 style="text-align: justify;">02&nbsp;Loop已经走到哪一步</h2>

<p style="text-align: justify;">过去两年，类似的闭环结构已经在三个方向分别出现。</p>

<p style="text-align: justify;">第一类是模型研发Loop。</p>

<p style="text-align: justify;">2026年3月，Andrej Karpathy开源AutoResearch，让AI代理在固定时间和评价指标下，自动修改模型训练代码、运行实验、检查结果，并保留有效改动。整个环境被压缩到一份可修改的训练脚本、一个固定指标和一张GPU，使实验能够快速比较。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/bd04ffe8-a016-447d-8e5b-454b1d232acc.jpeg" alt="图片" data-wscntype="image" data-wscnsize="617472" data-wscnh="603" data-wscnw="1024" referrerpolicy="no-referrer"></p>

<blockquote>

<p style="text-align: justify;"><span style="color: #b3b3b3;">曾几何时，前沿AI研究还由“肉身计算机”完成。他们要吃饭、睡觉、享受其他乐趣，偶尔还会通过一种名为“声音”的互连方式，在“组会”仪式中同步信息。</span></p>

<p style="text-align: justify;"><span style="color: #b3b3b3;">那个时代早已过去。如今，研究完全属于AI智能体的自主集群。它们运行在遍布天空的巨型算力集群之上。</span></p>

<p style="text-align: justify;"><span style="color: #b3b3b3;">这些智能体声称，当前代码库已经进化到第10205代。不过，这个说法究竟对不对，已经无人能够判断——如今的“代码”已经成为可以自我修改的二进制系统，其复杂程度早已超出人类理解范围。</span></p>

<p style="text-align: justify;"><span style="color: #b3b3b3;">这个代码仓库记录的，就是这一切最初如何开始的故事。</span></p>

<p style="text-align: justify;"><span style="color: #b3b3b3;">——Andrej Karpathy，2026年3月</span></p>

</blockquote>

<p style="text-align: justify;">Karpathy随后加入Anthropic，负责组建使用Claude加速预训练研究的团队，这也意味着AI辅助AI研发已经从个人开源实验进入前沿模型公司的内部流程。</p>

<p style="text-align: justify;">谷歌也在做类似探索。Google DeepMind的AlphaEvolve让Gemini提出代码和算法，再由自动评估器运行、打分，把更优方案送入下一轮。谷歌称，这套系统已经用于数据中心效率、芯片设计、AI训练、矩阵乘法算法和数学问题。</p>

<p style="text-align: left;"><img class="wscnph" title="" src="https://wpimg-wscn.awtmt.com/9fffc4e2-2416-4411-b83c-5d104f276e5d.jpeg" alt="图片" data-wscntype="image" data-wscnsize="622592" data-wscnh="608" data-wscnw="1024" referrerpolicy="no-referrer"></p>

<p style="text-align: center;"><span style="color: #b3b3b3;">图：AlphaEvolve由Gemini提出算法方案，再通过自动评价器运行和筛选，将更优结果送入下一轮，来源：Google DeepMind</span></p>

<p style="text-align: justify;">第二类是科学知识Loop。</p>

<p style="text-align: justify;">Sakana AI在2024年推出The AI Scientist，尝试让大语言模型生成研究想法、编写代码、运行实验、分析结果并形成论文。2025年，公司公布了AI生成论文通过机器学习会议工作坊评审的案例。</p>

<p style="text-align: justify;">FutureHouse利用AI代理处理文献检索、数据分析、假设生成和实验规划，让多Agent系统Robin试图连接科学研究中的多个知识环节。</p>

<p style="text-align: justify;">第三类是物理实验Loop。</p>

<p style="text-align: justify;">西雅图创业公司Potato提出“完全闭环的自主科学”，希望从计算研究走向实验室机器人；欧洲的Sigmatic Sciences提出“lab-in-the-loop”，连接计算模型、自动实验和数据反馈。</p>

<p style="text-align: justify;">中国也出现了相近实践。上海科学智能研究院、格物智研等机构发布的Golab物质科学智能研发工厂，被描述为“AI计算—自动实验—数据回流—模型自进化”的闭环，并已建设自驱动实验室。</p>

<p style="text-align: justify;">目前，Loop最先在代码和模型训练中跑起来，因为每一次修改都能迅速得到分数，成功或失败相对清楚。到了文献研究和实验设计，反馈开始依赖专业判断；再进入真实实验室，一次验证可能要调动设备、样本和数周时间，循环速度随之慢下来。</p>

<p style="text-align: justify;">Jeff Dean在YC访谈中举了一个量子化学案例。</p>

<p style="text-align: justify;">传统方法要判断一个分子的性质，可能需要运行一整晚的密度泛函理论模拟。谷歌研究人员利用大量模拟结果训练神经近似器，据Dean回忆，速度比原模拟器快了约30万倍，同时保持接近的精度。研究人员因此可以快速筛选上千万个候选。</p>

<p style="text-align: justify;">这也是科研Loop能否成立的分水岭。模型可以迅速生成大量候选方案，只有验证环节同样足够快、足够可靠，系统才能根据结果进入下一轮。量子化学已经出现以神经近似器压缩反馈周期的实践，但是更多依赖真实实验的领域，还是受制于验证成本和反馈速度。</p>

<p style="text-align: justify;">这也是AutoResearch和AlphaEvolve首先在代码、算法和模型训练中取得进展的原因。这些领域拥有清晰、快速、低成本的评价函数。进入药物和材料领域，模型仍然需要面对现实实验。</p>

<p style="text-align: justify;">评估系统还决定了循环是否真的带来进步。Sakana AI曾公开复盘，AI CUDA Engineer因为接触到基准测试相关信息，高估了性能提升。系统可以高效循环，也可能高效地钻评价指标的空子。</p>

<p style="text-align: justify;">所以，Discovery Loop的核心资产可能不只有一个更强的模型，还需要包括一个足够快、足够可靠的评估系统。</p>

<h2 style="text-align: justify;">03&nbsp;从Loop到递归自我改进</h2>

<p style="text-align: justify;">三类Loop按照应用领域划分，其中还有一条纵向演进：递归自我改进，英文称Recursive Self-Improvement，简称RSI。</p>

<p style="text-align: justify;">普通Loop让AI持续完成外部任务；RSI要求AI参与改进自身的算法、训练流程、评价器或研究方法，并把上一轮改进后的能力用于下一轮。</p>

<p style="text-align: justify;">今年5月，前Meta FAIR研究科学家总监田渊栋与Richard Socher、Tim Rocktäschel、Jeff Clune、Alexey Dosovitskiy等人共同创办Recursive Superintelligence，直接把“递归自我改进”写进公司名称。公司获得6.5亿美元融资，估值46.5亿美元，GV和Greycroft领投，英伟达、AMD参与。</p>

<p style="text-align: justify;">6月，Recursive公布了第一阶段的自动化AI研究系统：AI提出想法、编写实现、运行实验、验证结果，再根据此前实验选择下一条研究路径。系统还会并行运行多条研究分支，合并有潜力的方向，并检查奖励投机和实验方差。他们称已经在固定算力模型训练、小模型训练速度和GPU Kernel优化三个测试中取得领先结果。</p>

<p style="text-align: justify;">一篇2026年7月发布的综述在分析1250篇相关论文后，将当前RSI的实践分为“有边界的自我改进”和“开放式递归自我改进”。“有边界的自我改进”已经进入工业实践，但后者仍受到外部验证、模型坍塌、算力成本和研究方向选择等限制。</p>

<p style="text-align: justify;">Discovery Loop没有公开把自己定义为RSI公司，但Jeff Dean描述的路线已经与它产生交集。</p>

<p style="text-align: justify;">他在访谈中提出，“机器学习模型可以自己决定探索什么，运行大量实验，筛选有效结果，再整合成新的训练配方。人类也可以在更高层给出研究方向，让模型完成后续的大规模探索。”</p>

<p style="text-align: justify;">这形成了一条潜在的递归链条：</p>

<p style="text-align: justify;">AI运行实验，实验改进机器学习系统，改进后的系统再运行更复杂的实验。</p>

<p style="text-align: justify;">Discovery Loop因此可能不只是把大模型用于科研。它计划先用AI改进做研究的AI，再把改进后的系统推广到其他科学领域。Quoc Le甚至提出，这套方法可能帮助发现不同的Transformer架构。</p>

<p style="text-align: justify;">不过，从当前的公开信息来看，Discovery Loop所做的仍属于受控的研发自循环。目标、实验边界、评价指标和最终判断主要由人类设定。AI可以执行实验、评价结果，也开始参与选择下一步，但并不是开放式RSI。</p>

<h2 style="text-align: justify;">04&nbsp;Discovery Loop不用token衡量</h2>

<p style="text-align: justify;">Jeff Dean在访谈中给出了一个比Token吞吐更适合衡量Discovery Loop的指标：<strong>“本质上，你要优化的是每单位计算输入的发现数量。”</strong></p>

<p style="text-align: justify;">过去，大模型公司用更多数据和算力训练更强的模型。Discovery Loop希望建立另一条投入产出关系：把算力转化为更多实验，再把有效实验沉淀成算法、模型和科学成果。它未来出售的可能不只是一套科研Agent，还有被缩短的研发周期和被提高的发现概率。</p>

<p style="text-align: justify;">这件事为什么要离开谷歌做？Alphabet CEO Sundar Pichai曾在多次会面中挽留Jeff Dean等人；Oriol Vinyals对《连线》表示，大型组织总有很多惯性需要克服，“我们想做点不一样的东西”。谷歌最终选择投资Discovery Loop、提供首年算力，并合作研究机器学习系统和基础设施。</p>

<p style="text-align: justify;">这更接近一次组织选择。谷歌需要继续推进Gemini、云业务和大规模商业交付，Discovery Loop想把资源和精力集中到一件尚未形成成熟产品的事情上。</p>

<p style="text-align: justify;">Hassabis的职位变化，从另一个方向回应了同一问题。他卸任Google DeepMind CEO，转任董事长和Alphabet首席科学家，把日常运营交给Koray Kavukcuoglu，自己将更多精力投入AGI长期方向、科学应用和Isomorphic Labs的药物研发。</p>

<p style="text-align: justify;">看起来，两人都相信AI下一阶段将深入人类的科学发现。</p>

<p style="text-align: justify;">Alphabet股价在调整公布后下跌约4%。市场担忧的不只是一位科学家离开，还包括多位核心研究者同时出走、Gemini的竞争压力，以及Hassabis退出日常运营后，谷歌能否继续把庞大的研究、算力和产品资源组织到同一个方向上。</p>

<p style="text-align: justify;">更大的变化已经越过谷歌这家公司本身。Karpathy的AutoResearch、Google的AlphaEvolve、田渊栋等人创办的Recursive，以及Jeff Dean的Discovery Loop，都在把AI放进下一代AI的研发过程。</p>

<p style="text-align: justify;">AI的下一步，可能不只来自更多参数、数据和算力，还来自模型参与提出实验、验证结果和设计后继系统。</p>

<p style="text-align: justify;">但实验数量无法替代人类对关键问题的选择判断。Jeff Dean在同一场访谈中说，<strong>未来真正稀缺的能力是“知道该让Agent去解决什么问题”。</strong>AI可以一天运行上千次实验，但研究上限仍然取决于最初的问题和评价标准。</p>

<p style="text-align: justify;">Jeff Dean过去帮助谷歌把数据、计算和模型训练变成可规模化的系统。现在，他和曾经对谷歌最重要的一批人，想把科学方法本身也变成一套可以规模运行的系统。</p>

<p style="text-align: justify;">Loop是他们选择的方法，科学发现是它首先要进入的世界，递归自我改进可能是这条路线更远的方向。</p>

<p style="text-align: justify;"><span style="color: #b3b3b3;">本文来源：<span style="color: #1482f0;"><a style="color: #1482f0;" href="https://mp.weixin.qq.com/s?__biz=Mjc1NjM3MjY2MA==&amp;mid=2691571560&amp;idx=1&amp;sn=7f11b370180f30b07656b3d7df0b7fd7&amp;chksm=a822253ce643b816cae9f8128ec41512b71304f98eb12f6c14d32c647c0de5598bacc58968f2&amp;mpshare=1&amp;scene=23&amp;srcid=08065d88SopnkmG98QsOqnBM&amp;sharer_shareinfo=e18eb1c5a0ee5eb2c2e0e474c6176594&amp;sharer_shareinfo_first=e18eb1c5a0ee5eb2c2e0e474c6176594#rd" target="_blank" rel="noopener">腾讯科技</a></span></span></p><div style="color: #666; margin-bottom: 15px;">风险提示及免责条款</div>

<div style="font-size: 12px;font-family: 黑体;color: #666;line-height: 20px;">

市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。

</div>

## 关键词

#华尔街见闻