# Instruction-Conditioned Exploration for Reinforcement Learning with Self-Distillation to an Unconditioned Policy

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jim Dilkes, Vahid Yazdanpanah, Sebastian Stein　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.02087)

------

arXiv:2608.02087v2 Announce Type: replace-cross

Abstract: Post-training Large Language Models (LLMs) with Reinforcement Learning (RL) has become an important tool for improving model capabilities, but the LLM action-space structure introduces challenges distinct from classical RL, with implications for inducing exploration. New methods are required that leverage the broad knowledge and flexibility of pre-trained LLMs to deliberately generate diverse experience at training time. We propose Instruction-Conditioned Exploration (ICE), which appends one of a small fixed set of instructions to task prompts during training, using the same set for every problem, increasing the coverage of behaviours attempted. To facilitate ICE, we combine RL on the instruction-conditioned policy with self-distillation of its correct rollouts into the unconditioned test-time policy. ICE with this objective improves Qwen3-1.7B held-out pass@1 performance at 4K response length on mathematical reasoning tasks by $5.0\%$ relative to training with DAPO, with improvement persisting at a longer 8K context. The improvement does not appear for Qwen3-4B at 4K, where the instructions do not expand base-model coverage.
