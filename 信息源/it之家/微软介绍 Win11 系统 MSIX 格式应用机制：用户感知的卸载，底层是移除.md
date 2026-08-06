# 微软介绍 Win11 系统 MSIX 格式应用机制：用户感知的卸载，底层是移除

> 数据源：it之家
> RSS：[打开源文件](https://www.ithome.com/rss/)

> 发布时间：Wed, 05 Aug 2026 05:40:44 GMT　|　原文：[打开链接](https://www.ithome.com/0/985/906.htm)

------

<p data-vmark="ca9e">IT之家 8 月 5 日消息，微软昨日（8 月 4 日）发布博文，指出在 Windows 11 系统中通过 MSIX 格式安装的应用程序，<strong>在用户感知中的“卸载”（Uninstall）操作，在系统层面的底层逻辑是“移除”（Remove）。</strong></p><p data-vmark="38b2">IT之家查询公开资料，附上 Windows 系统下 MSI 和 MSIX 两种安装格式的区别</p><ul class=" list-paddingleft-2"><li><p data-vmark="be86"><span class="iNqyIf"><span class="rQesXe MPyX">MSI</span>：全称 Microsoft Installer，本质上是一个包含安装指令和文件数据的数据库，由 Windows Installer 服务直接读取并解压覆盖文件。</span></p></li><li><p data-vmark="35cc"><span class="iNqyIf"><span class="rQesXe MPyX">MSIX</span>：微软推出的现代应用包格式，整合了 MSI、AppX、App-V 等格式的优点，采用容器化虚拟技术运行应用。</span></p></li></ul><p data-vmark="7b66">MSI 格式安装的应用程序在卸载操作后，会清理安装文件、安装目录、注册表和 Runtime 相关组件等；而 MSIX 格式安装的应用程序，软件包生命周期由四个基本操作组成：</p><ul class="medium-size list-paddingleft-2"><li><p data-vmark="0e82">部署（Stage）：获取有效载荷并将其安全地放置在磁盘上</p></li><li><p data-vmark="c306">注册（Register）：将软件包与用户关联</p></li><li><p data-vmark="1ae4">注销（Deregister）：移除用户的软件包关联</p></li><li><p data-vmark="efe3">卸载（Destage）：从磁盘中移除软件包有效载荷</p></li></ul><p data-vmark="d2dc">在用户操作逻辑中，点击“卸载”按钮来删除某款应用，Windows 11 系统会调用名为 RemovePackageAsync 的 API 方法，来注销（Deregister）应用和用户的关联。只有当系统确定没有其他程序需要这些文件时，才会执行卸载（Destage）操作，也就是真正删除应用的部分。</p><p data-vmark="ab2c">例如用户卸载了应用程序 A，但同一账户上的应用程序 B 仍然引用同一个共享框架包，即使用户是计算机上的唯一用户，Windows 也不会卸载该框架。</p>
