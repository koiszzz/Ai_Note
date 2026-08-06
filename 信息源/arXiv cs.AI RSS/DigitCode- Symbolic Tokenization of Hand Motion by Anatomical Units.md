# DigitCode: Symbolic Tokenization of Hand Motion by Anatomical Units

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Haoyu Gu, Haotian Lu, Jingrun Du, Xiao-Ping Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.03127)

------

arXiv:2608.03127v1 Announce Type: cross

Abstract: Hand motion carries the finest-grained information in human activity, yet the representations behind hand generation, understanding, and robot learning are overwhelmingly continuous--joint angles or MANO parameters. These are accurate but unstructured: a finger cannot be indexed or edited as a symbol, and nothing marks a pose as anatomically valid. Discrete symbolic representations supply exactly this structure, and Hand Labanotation (HL) has shown they are feasible for the hand, writing motion as a T x 40 grid of one fixed direction symbol per bone. Building on this grid, we ask the question underneath it: the anatomical unit a symbol should span--bone, finger, or whole hand. DigitCode answers it by adapting, grouping, and layering HL's alphabet along the hand's unit hierarchy within one code, cutting the symbolic representation's quantization error by three quarters. The lever is the unit, not the quantizer family: at a fixed unit, training-free and learned strong quantizers are interchangeable on reconstruction, while moving down the anatomical hierarchy is what shifts accuracy. The hierarchy also tracks what downstream tasks need. Because a finger is a genuine, enumerable unit, one per-finger token doubles as a training-free, editable handle for jobs a continuous representation cannot address--repairing malformed generated hands, and retargeting them onto robots. We release HandTok, a reproducible testbed, so hand tokenizers can be compared unit-for-unit. Project page: https://digitcode-demo.github.io.
