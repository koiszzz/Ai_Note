# 卸载后会重装：微软 Win11 静默推送 OneDrive Photos，附隐藏快捷方式脚本

> 数据源：it之家
> RSS：[打开源文件](https://www.ithome.com/rss/)

> 发布时间：Wed, 05 Aug 2026 03:14:21 GMT　|　原文：[打开链接](https://www.ithome.com/0/985/858.htm)

------

<p data-vmark="8731">IT之家 8 月 5 日消息，科技媒体 Windows Latest 昨日（8 月 4 日）发布博文，<strong>分享了一段脚本，用于删除 OneDrive Photos 的快捷方式。</strong></p><p data-vmark="ed71">该媒体指出 OneDrive Photos 有别于传统的 Microsoft Store 或 MSIX 程序包的形式安装，在现有的 Microsoft OneDrive 安装文件夹中以 <span class="link-text-start-with-http">OneDrive.App.exe</span> 的形式安装。</p><p style="text-align: center;" data-vmark="e30c"><img src="https://img.ithome.com/newsuploadfiles/2026/8/fbfb93b4-7610-4879-98ec-10114edafea5.jpg?x-bce-process=image/format,f_auto" w="1231" h="582" alt="OneDrive Photos and OneDrive apps" data-weibo="0" data-vmark="0a67" class="no-alt-img"></p><p data-vmark="19cc">IT之家此前报道，微软通过 Windows Update，或者适用于 Windows 的 OneDrive 应用程序，<a href="https://www.ithome.com/0/983/037.htm" target="_blank">静默推广名为 OneDrive Photos 的照片应用程序。</a></p><p style="text-align: center;" data-vmark="6172"><img src="https://img.ithome.com/newsuploadfiles/2026/8/5655285a-8389-41e5-91c4-b4fd085aefcc.jpg?x-bce-process=image/format,f_auto" w="696" h="403" alt="OneDrive Photos app" data-weibo="1" data-vmark="50ca" class="no-alt-img"></p><p data-vmark="4e2b">根据该媒体后续报道，即便用户强制卸载 OneDrive Photos 应用程序，<strong>在安装 OneDrive 应用的设备上，微软后续会重新下载并安装。</strong></p><p style="text-align: center;" data-vmark="f858"><img src="https://img.ithome.com/newsuploadfiles/2026/8/8e0e20c2-7904-4e66-ba30-e12d2d3bd173.jpg?x-bce-process=image/format,f_auto" w="1440" h="1016" alt="OneDrive Photos app for Windows" data-weibo="2" data-vmark="1350" class="no-alt-img"></p><p data-vmark="8583">而目前暂未找到不彻底卸载 OneDrive 的情况下卸载 OneDrive Photos 应用程序，也没有办法通过 Microsoft Store 策略或者 Windows 11 组策略方式卸载，<strong>现有最佳解决方案是通过脚本，卸载快捷方式，避免其在你的电脑上显示。</strong></p><p data-vmark="5b35">IT之家附上相关脚本内容如下：</p><pre>&lt;#

Safely&nbsp;removes&nbsp;OneDrive&nbsp;Photos&nbsp;shortcuts&nbsp;only.

Does&nbsp;not&nbsp;delete&nbsp;OneDrive.App.exe&nbsp;or&nbsp;OneDrive.exe.

Exit&nbsp;0&nbsp;=&nbsp;success

Exit&nbsp;1&nbsp;=&nbsp;one&nbsp;or&nbsp;more&nbsp;shortcuts&nbsp;could&nbsp;not&nbsp;be&nbsp;removed

#&gt;

$ShortcutName&nbsp;=&nbsp;"OneDrive&nbsp;Photos.lnk"

$Failed&nbsp;=&nbsp;$false

$Paths&nbsp;=&nbsp;@(

"$env:ProgramData\Microsoft\Windows\Start&nbsp;Menu\Programs\$ShortcutName",

"$env:PUBLIC\Desktop\$ShortcutName"

)

Get-ChildItem&nbsp;"$env:SystemDrive\Users"&nbsp;-Directory&nbsp;-ErrorAction&nbsp;SilentlyContinue&nbsp;|

Where-Object&nbsp;{&nbsp;$_.Name&nbsp;-notin&nbsp;@("Public",&nbsp;"Default",&nbsp;"Default&nbsp;User",&nbsp;"All&nbsp;Users")&nbsp;}&nbsp;|

ForEach-Object&nbsp;{

$Paths&nbsp;+=&nbsp;"$($_.FullName)\AppData\Roaming\Microsoft\Windows\Start&nbsp;Menu\Programs\$ShortcutName"

$Paths&nbsp;+=&nbsp;"$($_.FullName)\Desktop\$ShortcutName"

}

foreach&nbsp;($Path&nbsp;in&nbsp;$Paths)&nbsp;{

if&nbsp;(Test-Path&nbsp;-LiteralPath&nbsp;$Path)&nbsp;{

try&nbsp;{

Remove-Item&nbsp;-LiteralPath&nbsp;$Path&nbsp;-Force&nbsp;-ErrorAction&nbsp;Stop

Write-Output&nbsp;"Removed:&nbsp;$Path"

}

catch&nbsp;{

Write-Output&nbsp;"Failed&nbsp;to&nbsp;remove:&nbsp;$Path"

$Failed&nbsp;=&nbsp;$true

}

}

}

if&nbsp;($Failed)&nbsp;{

exit&nbsp;1

}

exit&nbsp;0</pre><p data-vmark="2497">该行为自然引发了很多用户的不满，一位愤怒的 IT 管理员表示：</p><blockquote><p data-vmark="5a84">微软真是一意孤行。我们用 Intune 管理着数百台电脑，所有电脑的开始菜单里都出现了新的 OneDrive Photos 选项。他们到底要犯多少错误才能明白，我们不希望组织内部到处都是乱七八糟的应用程序？</p><p data-vmark="8ba3">这个应用无法兼容 Entra 账户。而且，如果不彻底卸载 OneDrive，就无法移除它。</p><p data-vmark="c950">除非微软想让我们放弃 OneDrive，而这只是个诱饵，否则我不明白为什么要强制没有微软服务协议（MSA）的电脑安装它。</p></blockquote>
