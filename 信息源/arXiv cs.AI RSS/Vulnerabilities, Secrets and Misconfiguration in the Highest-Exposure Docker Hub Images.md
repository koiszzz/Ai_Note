# Vulnerabilities, Secrets and Misconfiguration in the Highest-Exposure Docker Hub Images

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Cristhian Kapelinski, Beatriz Machado, Diego Kreutz　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02669)

------

arXiv:2608.02669v1 Announce Type: cross

Abstract: Docker Hub is the registry underneath most container deployments, and a flaw in a widely reused base image is inherited by every image built on it. Prior ecosystem-scale measurements each rely on a single detector, leaving the tool-dependence of their counts unquantified, while the studies that do compare scanners use samples of tens to hundreds of images. We present ChimangoScan, a pipeline that crawls the Docker Hub namespace (12,716,568 repositories, 663.8 billion cumulative pulls), reconstructs the image layer graph (54.4 million IS_BASE_OF edges), ranks images by an exposure score that folds an image's own pull count and those of its entire downstream subtree into one scalar, and scans the 52,895 highest-exposure repositories (84.7% of all recorded pulls) with six independent scanners, yielding 170.4 million findings. Vulnerabilities are near-universal: 96.3% of images carry a known package vulnerability, 93.4% a critical one, and 98.0% at least one CIS Docker Benchmark misconfiguration. The posture a single tool reports is largely an artifact of that tool: of 80.7 million distinct (vulnerability, package) groups, 66.8% are flagged by only one of the three vulnerability scanners and just 2.7% by all three, and the best single scanner recovers 66.9%. TruffleHog flags a secret in 76.9% of images, yet hand-labeling 1,100 random detections finds 99.7% are non-credentials. A single zlib CVE reaches images carrying 47.3% of total corpus exposure and propagates to 1.13 million distinct downstream images, but exposure does not predict how vulnerable an image is. We release the pipeline and the 283 GB dataset.
