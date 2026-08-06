---
published: 2026-08-05
title: "奖励通道中的暗室：稠密预测奖励使 GRPO 训练的 LLM 智能体崩溃——决定成败的是通道而非内容"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/The Dark Room in the Reward Channel- Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- an.md"
source_note: "[[信息源/arXiv cs.LG RSS/The Dark Room in the Reward Channel- Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- an.]]"
source_sha256: 6b4c07e37c7bbef44534fd97ce6024c80f7a9619fec8af30c7ed4716f288fb75
original_url: "https://arxiv.org/abs/2607.21273"
processed: 2026-08-05
language: zh-CN
---

# 奖励通道中的暗室：稠密预测奖励使 GRPO 训练的 LLM 智能体崩溃——决定成败的是通道而非内容

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yu Wang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.21273)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/The Dark Room in the Reward Channel- Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- an.|查看原始文件]]

## 摘要

- 稠密逐步监督是稀疏奖励长视界 LLM 智能体的标准补救：奖励策略预测其下一观测，在基于势的形状下看起来可证明安全；已发表预测奖励与辅助损失变体既报告成功也报告不稳定，本文提供受控说明：74 个预注册臂在 ALFWorld、WebShop、合成 POMDP 与 Qwen3-1.7B/4B/8B 上剖析一个固定预测信号在 GRPO 下的行为，只改变投递机制。
- (1) 每个在未触动 std 归一化下维持该差分形式奖励的运行（无过滤、动态采样或解耦缓解）都崩溃：跨规模、系数、组大小与分组的 11 次运行（有界合成环境改为停滞）；ALFWorld 运行以吸收状态结束（预测准确率→1.0，成功率→0）：优化器建造"暗室"。代数只有一行：在全失败组中 z 评分抵消整形系数；只移除 std 归一化即恢复基线相当水平。
- (2) 信号的危险由其组内方差轨迹决定，加上可破解性作为第二轴；它追溯预测每个奖励通道崩溃，并经受预注册前瞻测试。
- (3) 相同信号作为教师强制的辅助损失在 4B 的 ALFWorld 上无害，但增益不是信号的：无内容安慰剂作为一个类别在匹配种子下匹配或击败黄金（s0: 78.8 对 68.6；s42: 67.9 对 57.9）；辅助更新才是正则化器。
- (4) 8B 下配方变得双稳：黄金全权重锁住三个种子中的两个；每个无内容或减重臂保持健康。
- 没有 ALFWorld 或 WebShop 奖励通道变体可测量地击败其匹配归一化基线，没有黄金信号可测量地优于其无内容安慰剂：投递通道而非内容决定成败；哪个通道安全取决于情境。

## 正文

论文编号：arXiv:2607.21273v2（更新类型：replace）。以下为摘要全文翻译。

稠密逐步监督是稀疏奖励长视界 LLM 智能体的标准补救：奖励策略预测其下一个观测，这在基于势的形状下看起来可证明安全。已发表的预测奖励与辅助损失变体既报告成功也报告不稳定；我们提供受控说明：74 个预注册臂在 ALFWorld、WebShop、一个合成 POMDP 与 Qwen3-1.7B/4B/8B 上剖析一个固定的预测信号在 GRPO 下的行为，只改变投递机制。(1) 每一个在未触动 std 归一化下维持这种差分形式奖励的运行（无过滤、动态采样或解耦缓解）都会崩溃：跨规模、系数、组大小与分组的 11 次运行（有界合成环境停滞而不是崩溃）；ALFWorld 运行以吸收状态结束（预测准确率→1.0，成功率→0）：优化器建造了"暗室"。代数只有一行：在全失败组中，z 评分抵消了整形系数；只移除 std 归一化就恢复基线相当水平。(2) 一个信号的危险由其组内方差轨迹设定，可破解性作为第二轴；它追溯预测了每一次奖励通道崩溃，并经受住了预注册的前瞻测试。(3) 同一个信号作为教师强制的辅助损失在 4B 的 ALFWorld 上是无害的，但增益不是该信号的：无内容安慰剂作为一个类别在匹配种子下匹配或击败黄金（s0: 78.8 对 68.6；s42: 67.9 对 57.9）；辅助更新才是正则化器。(4) 在 8B 时配方变得双稳：黄金全权重锁住三个种子中的两个；每个无内容或减重臂保持健康。没有 ALFWorld 或 WebShop 奖励通道变体可测量地击败其匹配归一化基线，也没有黄金信号可测量地优于其无内容安慰剂：投递通道而非内容决定成败；哪个通道安全是情境依赖的。

## 关键词

#GRPO #稠密奖励 #LLM智能体 #奖励工程 #崩溃
