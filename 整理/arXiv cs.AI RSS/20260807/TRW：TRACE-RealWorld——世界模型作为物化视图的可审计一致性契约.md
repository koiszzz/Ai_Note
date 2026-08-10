---
published: 2026-08-07
title: "TRW：TRACE-RealWorld——世界模型作为物化视图的可审计一致性契约"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TRW- TRACE-RealWorld---An Auditable Consistency Contract for World Models as Materialized Views.md"
source_note: "[[信息源/arXiv cs.AI RSS/TRW- TRACE-RealWorld---An Auditable Consistency Contract for World Models as Materialized Views]]"
source_sha256: 7287fe8f1ac398832aad2ec9f4b921eb8400cc198428bb255ddba32915f24b95
original_url: "https://arxiv.org/abs/2607.21910"
processed: 2026-08-07
language: zh-CN
---

# TRW：TRACE-RealWorld——世界模型作为物化视图的可审计一致性契约

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Edward Y. Chang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.21910)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TRW- TRACE-RealWorld---An Auditable Consistency Contract for World Models as Materialized Views|查看原始文件]]

## 摘要

- 世界模型让智能体对照预测物理状态规划，但该状态漂移；重新观察昂贵且延迟，修复可能失败；呈现 TRACE-RealWorld（TRW），据其所知首个世界模型承诺级一致性契约。
- TRW 将预测状态视为物化视图，物理承诺视为授权可过期的读取；类型化、校准声明指定后果条件新鲜度与定价验证；自适应刷新将双卡尔曼同步推广为在证据可能改变决策时咨询世界；依赖范围 SagaLLM 补偿修复授权后失效的可逆承诺。
- 事件对齐风险 oracle 与恢复活性假设下，证明同步与补偿单独不足，而其组合给出条件一致性保证；否则论证产生违规的可审计分解为具名债务。
- 在真实地理上的搜索与救援模拟器 Flood-SAR 实现 TRW，冻结工作点在留出种子上测试六个预注册问题：自适应刷新减少陈旧执行但不支配固定刷新的成本、覆盖或救援结果；局部化修复相对全局恢复每任务减少 9.56 单位修复工作、恢复延迟 80.7 秒；观察残余违规差异为零但不建立等价；检测覆盖 0.83-0.89，97 次调用恢复中 10 次任务结束不完整；战役将实证松弛作为敏感性输入而非免除定理假设或提供同步人口证明；精确回放重建争议调度。
- TRW 使世界模型成为可审计预测接口而非自我验证真理源。

## 正文

世界模型让智能体对照预测的物理状态进行规划，但该状态会漂移；重新观察成本高昂且延迟，而修复可能失败。我们呈现 TRACE-RealWorld（TRW），据我们所知第一个世界模型的承诺级（commitment-level）一致性契约。TRW 将预测状态视为一个物化视图（materialized view），将物理承诺视为一个授权可以过期的读取（read）。类型化、校准的声明指定后果条件的新鲜度与定价的验证。自适应刷新（adaptive refresh）将双卡尔曼同步推广为在证据可能改变决策时咨询世界；依赖范围的 SagaLLM 补偿（compensation）修复授权后失效的可逆承诺。在一个事件对齐的风险 oracle 与恢复活性假设下，我们证明同步与补偿单独不足，而其组合给出一个条件一致性保证。否则，该论证产生一个将违规分解为具名债务的可审计分解。我们在 Flood-SAR 中实现 TRW，一个在真实地理上的搜索与救援模拟器，并在冻结工作点、留出种子上测试六个预注册问题。自适应刷新减少了陈旧执行，但不在成本、覆盖或救援结果上支配固定刷新。局部化修复相对全局恢复每任务减少 9.56 单位的修复工作与 80.7 秒的恢复延迟；观察到的残余违规差异为零，但不建立等价。检测覆盖 0.83-0.89，97 次调用的恢复中 10 次在任务结束时仍不完整。该战役将经验松弛作为敏感性输入对待，而非免除定理的假设或提供同时人口证书。精确回放重建了一个争议的调度。TRW 因此使世界模型成为一个可审计的预测接口，而非自我验证的真理源。

## 关键词

#世界模型 #一致性契约 #可审计性 #物化视图
