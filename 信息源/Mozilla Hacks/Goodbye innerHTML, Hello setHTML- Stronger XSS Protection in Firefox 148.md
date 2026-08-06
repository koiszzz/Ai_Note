# Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148

> 数据源：Mozilla Hacks
> RSS：[打开源文件](https://hacks.mozilla.org/feed/)

> 作者：Tom Schuster　|　发布时间：Tue, 24 Feb 2026 13:00:02 +0000　|　分类：Featured Article　|　原文：[打开链接](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)

------

[Cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS) remains one of the most prevalent vulnerabilities on the web. The new standardized [Sanitizer API](https://wicg.github.io/sanitizer-api/) provides a straightforward way for web developers to sanitize untrusted HTML before inserting it into the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). Firefox 148 is the first browser to ship this standardized security enhancing API, advancing a safer web for everyone. We expect other browsers to follow soon.

An XSS vulnerability arises when a website inadvertently lets attackers inject arbitrary HTML or JavaScript through user-generated content. With this attack, an attacker could monitor and manipulate user interactions and continually steal user data for as long as the vulnerability remains exploitable. XSS has a long history of being notoriously difficult to prevent and has ranked among [the top three web vulnerabilities](https://nvd.nist.gov/general/visualizations/vulnerability-visualizations/cwe-over-time) (CWE-79) for nearly a decade.

[![图片](https://hacks.mozilla.org/wp-content/uploads/2026/02/sanitizer-diagram-optimized-2.svg)](https://hacks.mozilla.org/wp-content/uploads/2026/02/sanitizer-diagram-optimized-2.svg)Firefox has been deeply involved in solutions for XSS from the beginning, starting with spearheading the [Content-Security-Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) standard in 2009. CSP allows websites to restrict which resources (scripts, styles, images, etc.) the browser can load and execute, providing a strong line of defense against XSS. Despite a steady stream of improvements and ongoing maintenance, [CSP did not gain sufficient adoption](https://almanac.httparchive.org/en/2024/security#content-security-policy) to protect the long tail of the web as it requires significant architectural changes for existing web sites and continuous review by security experts.

The [Sanitizer API](https://wicg.github.io/sanitizer-api/) is designed to help fill that gap by providing a standardized way to turn malicious HTML into harmless HTML — in other words, to sanitize it. The setHTML( ) method integrates sanitization directly into HTML insertion, providing safety by default. Here is an example of sanitizing a simple unsafe HTML:

document.body.setHTML(`<h1>Hello my name is <img src="x"

onclick="alert('XSS')">`);

This sanitization will allow the HTML <h1> element while removing the embedded <img> element and its onclick attribute, thereby eliminating the XSS attack resulting in the following safe HTML:

<h1>Hello my name is</h1>

Developers can opt into stronger XSS protections with minimal code changes by replacing error-prone [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) assignments with [setHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML). If the [default configuration](https://wicg.github.io/sanitizer-api/#built-in-safe-default-configuration) of setHTML( ) is too strict (or not strict enough) for a given use case, developers can provide a [custom configuration](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML#options) that defines which HTML elements and attributes should be kept or removed. To experiment with the Sanitizer API before introducing it on a web page, we recommend exploring the [Sanitizer API playground](https://sanitizer-api.dev/).

For even stronger protections, the Sanitizer API can be combined with [Trusted Types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API), which centralize control over HTML parsing and injection. Once setHTML( ) is adopted, sites can enable Trusted Types enforcement more easily, often without requiring complex custom policies. A strict policy can allow setHTML( ) while blocking other unsafe HTML insertion methods, helping prevent future XSS regressions.

The Sanitizer API enables an easy replacement of innerHTML assignments with setHTML( ) in existing code, introducing a new safer default to protect users from XSS attacks on the web. Firefox 148 supports the Sanitizer API as well as Trusted Types, which creates a safer web experience. Adopting these standards will allow all developers to prevent XSS without the need for a dedicated security team or significant implementation changes.

Image credits for the illustration above: [Website, by Desi Ratna](https://thenounproject.com/icon/website-8288559/); [Person, by Made by Made](https://thenounproject.com/icon/person-7955970/); [Hacker by Andy Horvath](https://thenounproject.com/icon/hacker-8192186/).

The post [Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/) appeared first on [Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org).
