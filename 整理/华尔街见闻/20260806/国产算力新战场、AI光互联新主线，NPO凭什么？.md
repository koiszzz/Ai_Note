---
title: "国产算力新战场、AI光互联新主线，NPO凭什么？"
source: "华尔街见闻"
original_file: "信息源/华尔街见闻/国产算力新战场、AI光互联新主线，NPO凭什么？.md"
source_note: "[[信息源/华尔街见闻/国产算力新战场、AI光互联新主线，NPO凭什么？]]"
source_sha256: 594632281804a2616a9b3ddd99a89b89b049cc68d0022c7f55443758d58a6381
original_url: "https://wallstreetcn.com/articles/3778847"
processed: 2026-08-06
language: zh-CN
---

# 国产算力新战场、AI光互联新主线，NPO凭什么？

> [!info] 来源信息
> - 数据源：华尔街见闻
> - 原文链接：[打开原文](https://wallstreetcn.com/articles/3778847)
> - Vault 原文件：[[信息源/华尔街见闻/国产算力新战场、AI光互联新主线，NPO凭什么？|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

<p style="text-align: left;">AI算力基础设施正在迎来一场架构变革。随着大模型训练和推理规模不断扩大，AI服务器正从几十张卡的小规模集群，向数百张、数千张卡的超节点演进。<strong>简单来说，未来AI芯片不仅要“算得快”，还要“连得快”，芯片之间的数据传输效率正在成为决定算力释放的关键。</strong></p>

<p style="text-align: left;">在这一趋势下，传统可插拔光模块依赖较长电信号通道，正在逐渐逼近传输极限。“光进铜退”的趋势也正在从数据中心机柜之间，进一步深入到机柜内部、设备内部，甚至芯片附近。</p>

<p style="text-align: left;">东北证券最新研究指出，<strong>近封装光学（NPO，Near-Packaged Optics）有望成为当前阶段最具工程可行性的高速光互联方案。</strong>NPO通过将独立封装的光引擎部署在ASIC附近，在接近共封装光学（CPO）性能优势的同时，保留更高的制造良率和维护便利性。</p>

<p style="text-align: left;">相比传统可插拔方案，NPO能够显著缩短高速电通道，减少约9-11dB信号损耗，与CPO性能差距仅约3dB，但在量产和维护方面更具优势。<strong>对于产业而言，NPO相当于在“不推倒重来”的情况下，为现有AI基础设施打开了一条升级路径。</strong></p>

<p style="text-align: left;">目前，产业化进程正在加速推进。国内外企业已推出多种高密度光引擎方案，部分云厂商也开始进入试点部署阶段。由于NPO无需将光器件与AI芯片进行深度封装，更适配当前产业链成熟度，有望成为未来几年AI集群升级的重要方向。</p>

<h2 style="text-align: left;">AI竞争从“芯片性能”转向“系统效率”</h2>

<p data-start="630" data-end="701">过去几年，AI基础设施竞争更多围绕单颗芯片算力展开。但随着大模型规模快速增长，行业竞争正在从“谁的芯片更强”，转向“谁能让整个系统跑得更快”。</p>

<p data-start="703" data-end="783">长上下文、多模态模型、MoE架构以及推理阶段持续扩展，都需要大量芯片之间的数据交换。<strong data-start="745" data-end="783">一颗芯片性能再强，如果彼此之间“沟通太慢”，整体算力也无法充分发挥。</strong></p>

<p data-start="785" data-end="830">因此，<strong>AI集群的核心指标正在从峰值算力转向有效算力，即整个系统真正能够释放出来的计算能力。</strong></p>

<p data-start="832" data-end="913">超节点正成为这一趋势的重要载体。随着AI服务器从单机柜向多机柜扩展，数百甚至数千颗AI芯片需要高速互联，传统PCB、铜缆和连接器逐渐难以满足带宽、功耗和散热要求。</p>

<p data-start="915" data-end="997"><strong>相比已经广泛采用光模块的Scale-out网络，Scale-up（芯片内部及节点内部互联）目前仍大量依赖铜连接，但其带宽需求更高，正成为光互联下一轮增长的重要市场。</strong></p>

<p style="text-align: left;"><img class="wscnph" src="https://wpimg-wscn.awtmt.com/8abd2231-af23-47a0-87a1-811f2eb88370.png" data-wscntype="image" data-wscnsize="440320" data-wscnh="430" data-wscnw="1024" referrerpolicy="no-referrer"></p>

<h2 style="text-align: left;">SerDes升级逼近电互联极限，NPO时代提前到来</h2>

<p style="text-align: left;">推动NPO加速发展的核心原因，是<strong>高速SerDes技术演进带来的物理限制。</strong></p>

<p style="text-align: left;">以AI芯片互联为例，随着新一代GPU架构不断提升SerDes速率，单芯片互联带宽持续增长。从早期几十Gbps级别，到百Gbps，再到未来数百Gbps，电信号传输距离不断缩短，通道损耗快速上升。</p>

<p style="text-align: left;">在112G/lane条件下，封装级高速通道损耗已经达到较高水平；<strong>进入224G/lane时代后，传统电互联面临更严峻挑战。</strong>与此同时，可插拔光模块需要依赖较长的主机侧电通道，在高带宽交换设备中，光模块功耗占比已接近系统总功耗的一半。</p>

<p style="text-align: left;">以12.8T交换机为例，若采用32个400G可插拔光模块，单模块功耗约12W，仅光模块部分功耗就达到384W，接近交换芯片自身功耗。随着带宽继续提升，依靠DSP补偿延长电通道的方式正在逼近成本和能耗边界，架构升级已成为必然趋势。</p>

<p style="text-align: left;"><strong>简单理解，过去是“铜线不够长，用光模块补”；未来是“距离太近、速度太快，光必须直接靠近芯片”。</strong><strong><img class=" wscnph" src="https://wpimg-wscn.awtmt.com/719286cc-9d19-45c5-bad6-9515aa02dc12.png" data-wscntype="image" data-wscnh="874" data-wscnw="1070" referrerpolicy="no-referrer"></strong></p>

<h2 style="text-align: left;">NPO产业链核心：光引擎、光源与高密度连接</h2>

<p data-start="1463" data-end="1489">NPO的核心，是把光通信能力进一步搬到AI芯片附近。</p>

<p data-start="1491" data-end="1542">其中，<strong>光引擎是最核心的环节</strong>，负责完成电信号和光信号之间的转换。<strong>目前主要有硅光和VCSEL两条技术路线。</strong></p>

<p data-start="1544" data-end="1626">硅光路线具备高集成度、低损耗以及兼容半导体制造工艺等优势，更适合未来高带宽AI互联场景；VCSEL路线则凭借成本优势和短距离高速传输能力，在超短距互联中具备竞争力。</p>

<p data-start="1628" data-end="1712"><strong>随着光引擎功率不断提升，光源方案也在持续升级。</strong>外置激光源通过将激光器与高温芯片区域分离，可以降低温度、提高可靠性，并方便后续维护；内置光源则有助于进一步提高系统集成度。</p>

<p data-start="1714" data-end="1794">此外，<strong>高密度光连接也是NPO的重要组成部分。</strong>传统光模块可能只需要连接少量光纤，而NPO需要支持几十路甚至更多通道，对光纤阵列、精密制造和长期稳定性提出更高要求。</p>

<h2 style="text-align: left;">国产AI算力加速拥抱NPO</h2>

<p style="text-align: left;">从技术适配角度看，NPO与国产AI算力发展路径具有较高匹配度。</p>

<p style="text-align: left;">随着国产AI加速卡向超节点方向演进，计算规模不断扩大，对高速低延迟互联提出更高要求。<strong>相比CPO需要依赖先进封装能力，NPO能够在不改变ASIC封装体系的情况下实现光互联升级，更符合当前国内产业链的工程基础。</strong></p>

<p style="text-align: left;">目前，国内厂商正在围绕高密度光引擎、光连接、光源以及相关标准体系加快布局。<strong>部分超节点方案已开始验证NPO技术路径，未来随着AI基础设施规模化部署，NPO有望成为国产算力集群提升有效算力的重要支撑。</strong></p>

<h2 style="text-align: left;">投资逻辑：NPO带动光互联产业链全面升级</h2>

<p style="text-align: left;">随着AI基础设施进入高速互联时代，NPO有望带动整个光通信产业链升级。</p>

<p style="text-align: left;">产业链受益方向主要集中于：</p>

<p style="text-align: left;"><strong>一是光引擎环节。</strong>随着高速率光引擎需求增长，具备高速光模块、硅光平台和光电转换能力的企业有望受益。</p>

<p style="text-align: left;"><strong>二是高密度光连接环节。</strong>NPO推动光纤数量和连接密度大幅提升，MT插芯、MPO/MTP以及Fiber-to-Chip等连接技术价值量将持续提升。</p>

<p style="text-align: left;"><strong>三是FAU及微光学环节。</strong>随着光I/O密度提升，高精度光纤阵列和微纳光学器件成为关键瓶颈。</p>

<p style="text-align: left;"><strong>四是光源及上游材料环节。</strong>高功率激光器、VCSEL、磷化铟等材料需求将随光互联升级同步增长。</p>

<p style="text-align: left;"><strong>五是先进封装与光电融合环节。</strong>虽然NPO降低了对先进封装的依赖，但光电协同制造仍将成为产业升级的重要方向。</p>

<p style="text-align: left;"><strong>六是国产AI算力与交换基础设施环节。</strong>超节点规模扩大将持续拉动高速互联芯片、交换设备以及系统级解决方案需求。</p>

<p style="text-align: left;">整体来看，AI基础设施正在从“算力堆叠”进入“互联效率竞争”阶段。随着电互联逐渐逼近物理边界，NPO有望成为连接芯片、存储与网络的新型基础设施，并推动光通信产业链进入新的成长周期。</p><div style="color: #666; margin-bottom: 15px;">风险提示及免责条款</div>

<div style="font-size: 12px;font-family: 黑体;color: #666;line-height: 20px;">

市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。

</div>

## 关键词

#华尔街见闻