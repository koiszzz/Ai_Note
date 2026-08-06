# 基于苹果 WebKit 的浏览器被披露安全风险，恐泄露 iOS / macOS 用户网络信息

> 数据源：it之家
> RSS：[打开源文件](https://www.ithome.com/rss/)

> 发布时间：Wed, 05 Aug 2026 02:51:39 GMT　|　原文：[打开链接](https://www.ithome.com/0/985/850.htm)

------

<p data-vmark="196d">IT之家 8 月 5 日消息，网络安全博客 Mysk 昨日（8 月 4 日）发布博文，披露称在 iOS 和 macOS 系统中，基于 WebKit 引擎的浏览器存在 DNS 预取、通行密钥验证与 WebTransport 三个漏洞，<strong>被黑客利用可泄露用户网络信息。</strong></p><p data-vmark="6f44">研究人员 Talal Haj Bakry 与 Tommy Mysk 在报告中指出，基于 WebKit 的浏览器可以通过 <span class="link-text-start-with-http">WKWebsiteDataStore.proxyConfigurations</span>，把网页流量转发至代理服务器。</p><p data-vmark="35eb">根据苹果设计规范，网页发起的所有网络连接都应经过代理，网站只能看到代理服务器的 IP 地址。但研究人员发现，WebKit 的 3 项功能会绕过应用配置的代理，直接从设备发起网络请求：</p><ul class=" list-paddingleft-2"><li><p data-vmark="8d09">DNS prefetching：通过设备的常规 DNS 路径解析域名，泄露用户真实 DNS 服务器。iOS 自 iOS 26.0 起支持该功能。</p></li><li><p data-vmark="7a77">WebAuthn Related Origin Requests：由操作系统凭据服务直接获取验证文件，暴露设备真实 IP 地址。该功能于 iOS 18.0 引入。</p></li><li><p data-vmark="8e57">WebTransport：建立绕过代理的 HTTP/3 连接，暴露设备真实 IP 地址。该功能随 iOS 26.4 公开发布。</p></li></ul><p data-vmark="dfbb">这些泄露路径可能绕过代理或 iCloud Private Relay，暴露用户的真实 IP 地址，或让域名查询走向常规 DNS 路径。</p><p style="text-align: center;" data-vmark="8b62"><img src="https://img.ithome.com/newsuploadfiles/2026/8/88773da3-fc66-4123-8bb3-8a0875215038.png?x-bce-process=image/format,f_auto" w="1206" h="2123" data-weibo="0" data-vmark="ee6d" class="no-alt-img"></p><p data-vmark="1aa4"><span class="referenceTitle">IT之家附上参考地址</span></p><ul class="custom_reference list-paddingleft-1"><li class="list-undefined list-reference-paddingleft"><p data-vmark="f9a8"><a href="https://mysk.blog/2026/08/04/webkit-proxy-icloud-private-relay-ip-leak/" target="_blank">IP and DNS Leaks in WebKit Affecting Proxy Browsers and Apple iCloud Private Relay</a></p></li></ul>
