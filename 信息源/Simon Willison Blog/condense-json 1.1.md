# condense-json 1.1

> 数据源：Simon Willison Blog
> Atom：[打开源文件](https://simonwillison.net/atom/everything/)

> 发布时间：2026-08-03T04:56:26+00:00　|　原文：[打开链接](https://simonwillison.net/2026/Aug/3/condense-json/#atom-everything)

------

<p><strong>Release:</strong> <a href="https://github.com/simonw/condense-json/releases/tag/1.1">condense-json 1.1</a></p>

<p>After shipping <a href="https://simonwillison.net/2026/Aug/2/condense-json/">condense-json 1.0</a> I started integrating it into LLM, and found there were some desirable new features already:</p>

<blockquote>

<ul>

<li>Replacements object can now include values other than strings. These will be identified and used as structural replacements by <code>condense_json()</code> and <code>uncondense_json()</code>. <a href="https://github.com/simonw/condense-json/pull/8">#8</a></li>

<li>Objects can be used as the basis for merge operations. <code>condense_json()</code> will identify if there are objects that are a close match and will store instructions for keys to update or delete. <code>uncondense_json()</code> can then apply these merges.</li>

</ul>

</blockquote>

<p>I also added <a href="https://github.com/simonw/condense-json/blob/1.1/tests/test_properties.py">some round-trip tests</a> using the <a href="https://hypothesis.readthedocs.io/">Hypothesis</a> property-based Python testing library.</p>

<p>Tags: <a href="https://simonwillison.net/tags/json">json</a></p>
