# AI 学习首页

## 工作流

1. 新资料先进入 [[AI 收件箱]]。
2. 读完后，将有价值的内容整理成独立笔记。
3. 独立笔记底部加入相关 `[[双向链接]]`。
4. 每周清理一次收件箱。

## 导航

- [[AI 收件箱]]
- [[AI 信息源]]
- [[机器学习 Index]]
- [[大语言模型 Index]]
- [[AI 工具 Index]]

## 今日关注

```dataview
TABLE source AS 来源, published AS 发布日期, status AS 状态
FROM "AI 收件箱"
WHERE status = "待阅读"
SORT published DESC
LIMIT 20
```

## 给 Codex 的整理规则

- 保留原文链接和来源。
- 区分“事实、原文观点、我的判断”。
- 不把营销文案直接当作结论。
- 论文、API 文档、官方公告优先级高于二手解读。
- 不重复创建同主题笔记，优先补充已有笔记。
