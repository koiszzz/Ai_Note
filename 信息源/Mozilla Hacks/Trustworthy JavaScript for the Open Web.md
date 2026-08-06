# Trustworthy JavaScript for the Open Web

> 数据源：Mozilla Hacks
> RSS：[打开源文件](https://hacks.mozilla.org/feed/)

> 作者：Firefox Security Team　|　发布时间：Tue, 05 May 2026 15:49:11 +0000　|　分类：Firefox　|　原文：[打开链接](https://hacks.mozilla.org/2026/05/trustworthy-javascript-for-the-open-web/)

------

The open web is a critical platform for applications that handle highly sensitive data, from private communications to financial transactions and medical records. Traditionally, servers are trusted to deliver the appropriate code and resources for their web applications to browsers, who then provide a secure and isolated environment for their execution. In some circumstances, this trust model falls short.

Consider a browser-based messaging application, like Signal or WhatsApp, which uses end-to-end encryption. The browser depends on the server to provide a trustworthy javascript implementation of the app; which ensures the user’s messages and cryptographic keys are suitably protected. A malicious or compromised server could selectively serve modified code to some users, undermining their security with little risk of detection. This challenges the basic premise of end-to-end encryption: that a misbehaving server should not be able to compromise user security.

## Towards Verifiable Security on the Web

For web applications to be trustworthy in the presence of malicious servers, two properties are essential:

- Integrity: The code executed by the user matches what the developer committed to in a manifest.

- Transparency: These manifests are publicly logged and can be independently audited.

[Web Application Integrity, Consistency and Transparency (WAICT)](https://github.com/waict-wg) brings these properties to the web platform.

![图片](https://hacks.mozilla.org/wp-content/uploads/2026/05/waict_2_blogpost-500x163.png)

WAICT allows websites to cryptographically bind their client-side code to a manifest and commit that manifest to a publicly auditable log. Sites which need this stronger trust model can then opt in to WAICT enforcement. If an opted-in site delivers code that has not been publicly logged, the browser rejects it and attacks that were previously invisible become observable and attributable. This ensures that the code delivered to user’s machines is consistent with the publicly available code which security researchers can inspect.

Bringing Integrity and Transparency to the Open Web

We are collaborating with partners across the ecosystem – including Cloudflare, the Freedom of the Press Foundation and Meta – to ensure the deployment model is practical, secure, and as simple as possible. You can learn more about WAICT in our [joint talk](https://www.youtube.com/watch?v=tCLGt0L174c) at [Real World Cryptography 2026](https://rwc.iacr.org/).

An early prototype of WAICT is available behind a pref in [Firefox Nightly](https://firefox.com/nightly) to help validate the approach in real-world scenarios. You can test drive the prototype on [https://waict.dev/](https://waict.dev/) – including an end-to-end encrypted video calling app secured by WAICT. The implementation is a work in progress, not a finished solution, but it provides a concrete foundation for iteration and standardization. We’re developing the [specifications](https://github.com/waict-wg) in the open and welcome early feedback.

WAICT marks an important step toward making strong, verifiable application security a first-class property of the open web.

With special thanks to Anna Weine, Benjamin Beurdouche, Christoph Kerschbaumer, Dennis Jackson, Frederik Braun, and Tom Schuster.

The post [Trustworthy JavaScript for the Open Web](https://hacks.mozilla.org/2026/05/trustworthy-javascript-for-the-open-web/) appeared first on [Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org).
