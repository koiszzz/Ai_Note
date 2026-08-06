# The case for a cooldown: Why Dependabot now waits before issuing version updates

> 数据源：GitHub Blog
> RSS：[打开源文件](https://github.blog/feed/)

> 作者：Carlin Cherry　|　发布时间：Thu, 23 Jul 2026 16:00:00 +0000　|　分类：Security　|　原文：[打开链接](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/)

------

In September 2025, an attacker phished the credentials of a single npm maintainer and published booby-trapped versions of chalk, debug, and around a dozen other packages that are together downloaded more than 2 billion times a week. The code rewrote cryptocurrency wallet addresses inside any browser app that loaded it. The poisoned versions were live for roughly two hours before the community caught them and npm pulled them.

Two hours is a fast response. However, it is also more than enough time for an automated update tool to see the new version, open a pull request, and put it in front of your team, because version update tooling is built to grab the newest release the moment it lands.

That pattern sits behind a growing share of supply chain attacks. The malicious code rides in on a brand-new release, is published to a public registry, and gets pulled into build pipelines within minutes, before a human or a scanner has even looked at it.

A cooldown changes that math. Waiting a few days before adopting a new release gives maintainers, security researchers, and automated scanners time to spot a malicious version and get it pulled before it ever reaches your pull requests.

For non-security version bumps, Dependabot now waits at least three days after a release is published before opening a pull request. The cooldown configuration option in the dependabot.yml still controls the behavior, though, so you can choose a different cooldown parameter that fits your project.

## Two kinds of Dependabot updates

Dependabot is GitHub’s built-in tool for keeping dependencies secure and up-to-date, and it does two distinct jobs:

- [Security updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates) respond to a known vulnerability: when an advisory is published for a package you use, Dependabot issues an alert and opens a pull request to move you to the patched version.

- [Version updates](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates) keep your dependencies current as new releases come out, regardless of your current version’s health.

The new three-day cooldown default applies only to version updates. Security updates still open right away, since a delay there would hold back a fix for a flaw that is already public. Everything in this article is about version updates, where the goal is staying current, and the risk is adopting a release before it has been vetted.

## Case studies and GitHub Advisory Database data

When attackers compromise a popular package, the poisoned version tends to have a short lifespan. It gets published, spreads through whatever installs it, and gets caught, usually within hours. The previous example was live for only two hours. Other widely used packages have followed the same arc, with compromised builds of [Solana web3.js](https://github.com/advisories/GHSA-jcxm-7wvp-g6p5), [Axios](https://github.com/advisories/GHSA-fw8c-xr5c-95f9), and [ua-parser-js](https://github.com/advisories/GHSA-pjwm-rvh2-c87w) each caught within a few hours of publication.

More generally, GitHub sees this pattern directly through the [GitHub Advisory Database](https://github.com/advisories?query=type%3Amalware+ecosystem%3Anpm), which catalogs open source security advisories across ecosystems. In the year ending May 2026, the database published more than 6,500 npm malware advisories, up from roughly 6,200 the year before, which adds up to approximately 18 newly cataloged malicious npm packages every day. A cooldown keeps you out of that opening window and lets a release accumulate some scrutiny before it reaches you.

## Why three days

Published malware targeting popular packages tends to get caught fast. A [review of 21 widely reported supply chain incidents](https://daniakash.com/posts/simplest-supply-chain-defense/) between 2018 and 2026 found the same pattern: malicious versions of axios, Solana web3.js, ua-parser-js, and Ledger Connect Kit were each pulled within hours of publication, and a cooldown could have filtered out the majority of these short-lived publishes before anyone installed them.

Three days as the default balances two goals: it pushes you past the window where most of these attacks live, and it doesn’t hold your dependencies back longer than necessary.

Other community members have also landed on a three-day cooldown (though some go even longer), so this default behavior keeps Dependabot consistent as developers move between tools.

You can always set a longer or shorter window with Dependabot’s cooldown configuration option.

## Defense in depth

A cooldown is built for a specific pattern: a malicious version that ships, spreads, and gets caught quickly. It does little against attacks that play a longer game, including backdoors planted in releases and left dormant, maintainer sabotage, or a compromised build system. The point of the default is to remove a common and time-sensitive path, not to stand in for the rest of your defenses.

Because a cooldown only addresses the fast-moving case, it should be one layer among several. Some additional steps to take include pinning dependencies with lockfiles, disabling install scripts in CI where you can, scoping the tokens in your build pipelines, and reviewing updates before they merge.

If you’d like to customize your delay for highly trusted internal packages versus public registries, check out the [documentation on configuring Dependabot.](https://docs.github.com/en/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file) Or see the [Dependabot configuration options reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown) for the full set of cooldown parameters.

## Where we go from here

This is one step among several we are taking to harden the software supply chain for everyone who builds on GitHub. It’s on by default, so you don’t have to change anything to activate it. You can also tune it to fit your workflow.

Tell us how it performs in the [Dependabot community discussions](https://github.com/dependabot/dependabot-core/discussions/15368).

The post [The case for a cooldown: Why Dependabot now waits before issuing version updates](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/) appeared first on [The GitHub Blog](https://github.blog).
