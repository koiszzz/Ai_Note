---
title: "CRLite：Firefox 中快速、私密且全面的证书吊销检查"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/CRLite- Fast, private, and comprehensive certificate revocation checking in Firefox.md"
source_note: "[[信息源/Mozilla Hacks/CRLite- Fast, private, and comprehensive certificate revocation checking in Firefox.]]"
source_sha256: aee39d98a53168342e36dfaabf0f32e6bd43864767f67989696ee78ea89e38bf
original_url: "https://hacks.mozilla.org/2025/08/crlite-fast-private-and-comprehensive-certificate-revocation-checking-in-firefox/"
published: 2025-08-19
processed: 2026-08-05
language: zh-CN
---

# CRLite：Firefox 中快速、私密且全面的证书吊销检查

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：John Schanck
> - 发布时间：2025-08-19
> - 原文链接：[打开原文](https://hacks.mozilla.org/2025/08/crlite-fast-private-and-comprehensive-certificate-revocation-checking-in-firefox/)
> - Vault 原文件：[[信息源/Mozilla Hacks/CRLite- Fast, private, and comprehensive certificate revocation checking in Firefox.|查看原始文件]]

## 摘要

- Firefox 现为首个也是唯一部署快速全面证书吊销检查的浏览器，且不向任何人（甚至 Mozilla）泄露浏览活动。
- 背景：每天签发数千万 TLS 服务器证书；证书最长有效 398 天，但可在生命周期任意点被吊销；吊销证书构成严重安全风险。
- 识别吊销证书的两种基本方式：实时询问权威机构（OCSP），或维护频繁更新的吊销列表；CRLite 首次让后者可行——周期性下载 Certificate Transparency 日志中所有已吊销证书的紧凑编码，本地存储、每 12 小时更新、每次新 TLS 连接私密查询。
- 隐私与性能：Firefox 137 起对桌面版用户启用；此前 OCSP 是隐私泄露（向服务器透露将访问的域名，且经未加密 HTTP 泄露给所有路径观察者）；CA 不再被要求支持 OCSP，部分大型 CA 已宣布停用；Firefox 142 将禁用在域验证证书上使用 OCSP；OCSP 请求中位阻塞 TLS 握手 100ms，禁用有性能收益。
- 带宽：CRLite 用户日均下载约 300 kB 吊销数据（每 45 天 4 MB 快照加其间"增量更新"）；Mozilla 根库约三千条活动 CRL 合计 300 MB，CRLite 把同样动态集合编码为每日 300 kB——比每日 CRL 下载带宽效率高一千倍；对比 Chrome CRLSets（600 kB、约含 1% 吊销），CRLite 用一半带宽、两倍更新频率、包含全部吊销。
- 包含全部吊销对安全至关重要：今天无法可靠区分安全关键与管理性吊销；约一半吊销无原因码，有原因码时也常含混。
- 最先进黑名单技术：早期 CRLite 设计用"多级 Bloom 过滤器级联"，带宽需求不可行；解决带宽问题的新数据结构"Clubcard"成员资格测试用"分区两级 Ribbon 过滤器级联"，2020 年实验、Nightly/Beta/1% Release 部署，IEEE S&P 2025 论文与 RWC 2025 演讲。
- 未来改进：新 Clubcard 分区策略压缩批量吊销事件、支持 HTTP 压缩字典传输、倡导更短证书有效期；Clubcard 库、CRLite 实例化与后端免费开放。

## 正文

以下是文章全文翻译。

Firefox 现为首个也是唯一部署快速且全面的证书吊销检查的浏览器，且不会向任何人（甚至 Mozilla）泄露你的浏览活动。每天签发数千万 TLS 服务器证书以保护浏览器与网站间通信。这些证书是普遍加密的基石与我们对 Web 愿景的关键部分。虽然证书最长可有效 398 天，也可在其生命周期任意点被吊销。已吊销证书构成严重安全风险，不应被信任认证服务器。识别已吊销证书很难，因为信息需要从证书签发者流向每个浏览器。基本有两种处理方式：浏览器需实时询问权威机构遇到的每个证书，或维护频繁更新的已吊销证书列表。Firefox 的新机制 CRLite 首次使后者可行。有了 CRLite，Firefox 周期性下载 Certificate Transparency 日志中出现的所有已吊销证书集合的紧凑编码。Firefox 本地存储该编码、每 12 小时更新、每次创建新 TLS 连接时私密查询。你可能听说过"吊销已坏"或"吊销不管用"。很长一段时间 Web 困于该领域安全、隐私与可靠性间的糟糕权衡。那不再是事实。我们从 Firefox 137 起对全部桌面版（Windows、Linux、MacOS）用户启用 CRLite，并看到它使吊销检查功能化、可靠且高性能。我们希望在更受约束的其他环境中复制成功。

**更好的隐私与性能。** 137 版之前，Firefox 用在线证书状态协议（OCSP）实时询问权威机构吊销状态。证书颁发机构不再被要求支持 OCSP，一些大型 CA 已宣布停用 OCSP 服务的意向。原因有多重，最主要是 OCSP 是隐私泄露：用户询问 OCSP 服务器证书时，向服务器透露将访问某域名；且 OCSP 请求通常经未加密 HTTP 发出，信息也泄露给所有路径观察者。对 CRLite 实现的健壮性、准确性与性能建立信心后，我们将在 Firefox 142 禁用在域验证证书上的 OCSP。封堵 OCSP 隐私泄露补充了我们经 HTTPS-First、DNS over HTTPS 与 Encrypted Client Hello 加密互联网一切的努力。禁用 OCSP 还有性能收益：我们发现 OCSP 请求中位阻塞 TLS 握手 100ms。随 CRLite 推出我们看到 TLS 握手时间显著改善。

**CRLite 的带宽需求。** 使用 CRLite 的用户平均每天下载 300 kB 吊销数据：每 45 天一个 4 MB 快照加其间一系列"增量更新"。（快照与增量更新确切大小逐日波动，可在仪表板探索真实数据。）为感受 CRLite 工件多紧凑，与证书吊销列表（CRL）比较：CRL 是标识单个签发者已吊销证书的序列号列表。Mozilla 根库中的 CA 已向 Common CA Database 披露约三千条活动 CRL。总计约 300 MB，保持最新副本的唯一方式是定期重新下载。CRLite 把同一动态已吊销证书集合编码为每日 300 kB。换言之，CRLite 比每日 CRL 下载带宽效率高一千倍。当然没有浏览器每日下载全部 CRL。更有意义的比较可考虑 Chrome 的 CRLSets：每日交付给 Chrome 用户的手选吊销集。近期 CRLSets 约 600 kB、约含全部吊销的 1%（四百万中的三万五千）。Firefox 的 CRLite 实现用一半带宽、两倍更新频率、包含全部吊销。包含全部吊销对安全至关重要，因为今天没有可靠方式区分安全关键吊销与管理性吊销。约一半吊销无指定原因码，其中一些可能因证书所有者不愿强调的安全担忧；使用原因码时也常以不清晰映射安全风险的方式使用。此环境中唯一安全方法就是检查全部吊销，CRLite 使这成为可能。

**最先进黑名单技术。** 你可能记得 2020 年我们关于 CRLite 实验的系列博文。这些实验后我们成功部署到 Nightly、Beta 与 1% Release 用户。但早期 CRLite 设计的带宽需求证明不可行。我们通过开发新数据结构——"Clubcard"成员资格测试——解决带宽问题。原始 CRLite 设计用"多级 Bloom 过滤器级联"，基于 Clubcard 的 CRLite 用"分区两级 Ribbon 过滤器级联"。"两级级联"思想由 Mike Hamburg 在 RWC 2022 提出，"分区"是我们自己的创新，在 IEEE S&P 2025 论文与 RWC 2025 演讲展示。

**未来改进。** 我们正让 CRLite 更带宽高效：开发新 Clubcard 分区策略更高效压缩批量吊销事件；集成 HTTP 压缩字典传输支持进一步压缩增量更新；成功倡导更短证书有效期，减少需编码任何给定吊销的 CRLite 工件数量。随这些增强，我们期望 CRLite 带宽需求未来几年下行，即使 TLS 生态继续增长。我们的 Clubcard 黑名单库、Clubcards for CRLite 实例化与 CRLite 后端免费供任何人使用。我们希望为 Firefox 构建快速私密全面吊销检查的成功鼓励其他软件厂商采用此技术。

## 关键词

#CRLite #证书吊销 #TLS #隐私 #Firefox
