# datasette-agent 0.4a0

> 数据源：Simon Willison Blog
> Atom：[打开源文件](https://simonwillison.net/atom/everything/)

> 发布时间：2026-07-31T14:14:23+00:00　|　原文：[打开链接](https://simonwillison.net/2026/Jul/31/datasette-agent/#atom-everything)

------

<p><strong>Release:</strong> <a href="https://github.com/datasette/datasette-agent/releases/tag/0.4a0">datasette-agent 0.4a0</a></p>

<blockquote>

<ul>

<li>New <code>await context.browser_task()</code> mechanism allowing agent tools to run code directly in the user's browser. <a href="https://github.com/datasette/datasette-agent/pull/33">#33</a></li>

</ul>

</blockquote>

<p>This is an exciting new capability: it makes it easy for Datasette Agent plugins to provide tools that execute custom JavaScript <em>in the user's browser</em>.</p>

<p>I used this to add a debug loop to Datasette Apps in <a href="https://simonwillison.net/2026/Aug/1/datasette-apps/">datasette-apps 0.2a0</a>.</p>

<p>Tags: <a href="https://simonwillison.net/tags/datasette">datasette</a>, <a href="https://simonwillison.net/tags/llm-tool-use">llm-tool-use</a>, <a href="https://simonwillison.net/tags/datasette-agent">datasette-agent</a></p>
