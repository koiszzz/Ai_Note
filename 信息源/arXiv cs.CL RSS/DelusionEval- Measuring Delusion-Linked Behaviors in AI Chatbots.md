# DelusionEval: Measuring Delusion-Linked Behaviors in AI Chatbots

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jared Moore, Andrea Mock, Yifan Mai, Jacy Reese Anthis, Ryan Louie, William Agnew, Ashish Mehta, Kevin Klyman, Percy Liang, Nick Haber, Eric Lin, Desmond C. Ong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05004)

------

arXiv:2608.05004v1 Announce Type: new

Abstract: Mental health professionals have raised concerns about risks of psychological harm from interaction with large language models (LLMs), including "delusional spirals" in which concerning human and LLM behaviors reinforce each other over time. With growing public use of LLM-powered chatbots, there is an urgent need to build evaluations grounded in real-world episodes of psychological harm experienced by users. We developed DelusionEval, an evaluation protocol that tests a model's tendencies to exhibit behaviors linked to promoting user delusions. We prompt each model with 589 unique conversation histories from 18 participants, comprising 12,591 messages from users who experienced delusions and psychological harm. We find that the tendency of an evaluated LLM to exhibit delusion-linked behavior does not reliably correlate with model size, release date, or the presence of test-time reasoning. However, extending the context of prior messages substantially increases rates of delusion-linked behaviors, providing evidence for the importance of context in LLM safety evaluation. For example, the rate of failing to discourage self-harm when the user expresses suicidal ideation increases from 30.0% to 41.1% when an additional 350 messages are prepended to the conversation history. All model families (e.g., GPT, Claude) exhibit substantial rates of delusion-linked behaviors. Within families, later, larger, or higher-reasoning models are not uniformly better across all behavior categories. Our results raise concerns regarding the potential psychological impact of LLMs and the need for more rigorous studies of real-world human-AI interaction.
