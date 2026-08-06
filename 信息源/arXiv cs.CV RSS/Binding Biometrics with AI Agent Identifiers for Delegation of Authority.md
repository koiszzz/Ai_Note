# Binding Biometrics with AI Agent Identifiers for Delegation of Authority

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Joseph Geo Benjamin, Anil K Jain, Karthik Nandakumar　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04292)

------

arXiv:2608.04292v1 Announce Type: new

Abstract: The proliferation of agentic artificial intelligence (AI) systems has raised serious questions about the accountability for tasks performed by AI agents. Ideally, an AI agent must not be allowed to perform critical tasks without explicit authorization by a human operator. Since biometric recognition is one of the most reliable approaches for authenticating individuals, it has the potential to enable authenticated delegation of authority to AI agents. In this work, we present a framework called BIND, which leverages ideas from the field of biometric cryptosystems, to securely bind biometric data of the human user to the AI agent identity (ID) and authority scope (task-specific constraints) at the time of agent authorization. This token/identifier can be presented by the AI agent to an Identity Auditor, who simultaneously performs biometric authentication and recovers the agent ID and scope, thereby enabling real-time user authentication and establishing a non-repudiable proof of human control and delegation of authority. We also provide a practical implementation of the proposed BIND framework based on face features extracted using standard deep neural network models. To facilitate this implementation, we propose a feature adaptation module that transforms real-valued feature embeddings into fixed-length binary representations suitable for a fuzzy commitment construct based on turbo error correcting codes. Experiments demonstrate the practical feasibility of the proposed face cryptosystem, achieving a True Match Rate of $96\%$ at zero False Match Rate and supporting $1024$-bit agent tokens.
