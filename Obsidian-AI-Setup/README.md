# Obsidian × Codex AI 学习库

## 安装

1. 将本目录中的 Markdown 文件复制到你的 Obsidian Vault 根目录。
2. 将 `scripts/Fetch-AiFeeds.ps1` 复制到 Vault 的 `scripts` 目录。
3. 编辑脚本顶部的 `$VaultPath`，填入你的 Vault 绝对路径。
4. 在 PowerShell 中运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\Fetch-AiFeeds.ps1
```

5. 在 Obsidian 中打开 `AI 学习首页.md`。

## 与 Codex 的连接方式

在后续对话中把你的 Vault 路径告诉 Codex，并说“更新 AI 收件箱”或“整理今天的 AI 资料”。Codex 可以读取和写入 Markdown 文件，并按首页中的规则整理笔记。

推荐节奏：每天抓取一次，每周由 Codex 将收件箱内容整理成概念笔记、论文笔记和工具笔记。

## 可选增强

安装 Obsidian 社区插件 Dataview 后，首页可以自动显示待处理资料。若不安装，普通 Markdown 链接仍然可用。
