# LGBT Q&A: What Data Are Companies in the UK Collecting When Verifying My Age?

> 数据源：EFF 数字权利动态
> RSS：[打开源文件](https://www.eff.org/rss/updates.xml)

> 作者：Paige Collings　|　发布时间：Tue, 30 Jun 2026 08:08:47 +0000　|　分类：Privacy　|　原文：[打开链接](https://www.eff.org/deeplinks/2026/06/lgbt-qa-what-data-are-companies-uk-collecting-when-verifying-my-age)

------

<div class="field field--name-body field--type-text-with-summary field--label-hidden"><div class="field__items"><div class="field__item even"><p><b></b></p>

<p><span>This Pride, we’re answering all your digital rights questions in season two of our initiative, </span><a href="https://www.eff.org/deeplinks/2026/06/lgbt-qa-were-back-season-2"><span>LGBT Q&amp;A</span></a><span>. </span></p>

<p><b><i>You Asked:</i></b><i><span> I live in the UK, and we have age verification now on a bunch of websites (including Reddit) and now on iPhones. Can you explain what sort of data companies are actually collecting when they check for age and whether there are any real threats to my safety? </span></i></p>

<p><b><i>EFF’s Answer: </i></b><span>Age verification is a </span><a href="https://www.eff.org/issues/age-verification"><span>process</span></a><span> where a website or service checks your age to determine whether a user is over a certain age, in the UK this age is 18. </span></p>

<p><span>As of </span><a href="https://www.eff.org/deeplinks/2025/08/no-uks-online-safety-act-doesnt-make-children-safer-online"><span>July 2025</span></a><span>, all platforms in the UK that host content considered by the UK government and the country’s telecommunications regulator Ofcom to be </span><a href="https://www.eff.org/deeplinks/2025/08/blocking-access-harmful-content-will-not-protect-children-online-no-matter-how"><span>harmful</span></a><span> are legally obligated to check that their users are over the age of 18. If not, users cannot access the content. </span></p>

<p><span>There are various </span><a href="https://www.eff.org/pages/age-verification-systems-are-surveillance-systems#main-content"><span>privacy implications for data sharing</span></a><span> with age verification. Unfortunately, because services may use different methods to verify users’ ages, you’ll usually have to do a little digging to learn how each provider you have verifies their users, and consider </span><a href="https://www.eff.org/pages/use-guide-navigating-age-assurance"><span>what information might be harmful</span></a><span> to your personal safety: </span></p>

<ul>

<li><b>The data itself:</b><span> What info does each method require users to disclose?</span></li>

<li><b>Access: </b><span>Who can see the data during the course of the verification process? Does anything other than the age result leave your phone or device? Is the provider told your date of birth, or just if you’re over 18? Which third party services see the information you send?</span></li>

<li><b>Retention: </b><span>Who will hold onto that data after the verification process, and for how long? Sometimes it’s deleted immediately. Sometimes it hangs around forever, waiting for a data breach.</span></li>

<li><b>Audits:</b><span> How sure are we that the provider’s stated claims around data access and retention will happen in practice? For example, are there external audits confirming that data is not accidentally leaked to another site along the way? Ideally these will be in-depth, security-focused audits by specialized auditors like </span><a href="https://www.nccgroup.com/technical-assurance/"><span>NCC Group</span></a><span> or </span><a href="https://www.trailofbits.com/services/software-assurance/"><span>Trail of Bits</span></a><span>, instead of audits that merely certify adherence to standards. </span></li>

<li><b>Visibility:</b><span> Who will be aware that you’re attempting to verify your age, and will a third party provider know which platform you’re trying to verify for? Will they hang onto that data to build a profile of you?</span></li>

</ul>

<p><span>Last year, Ofcom </span><a href="https://www.ofcom.org.uk/online-safety/protecting-children/age-checks-for-online-safety--what-you-need-to-know-as-a-user"><span>outlined</span></a><span> a number of methods for online services and platforms to check users' ages. Let's look at some methods in more detail. </span></p>

<p><b><i>Facial Age Estimation </i></b></p>

<p><span>First up we have </span><a href="https://www.eff.org/deeplinks/2025/10/age-verification-estimation-assurance-oh-my-guide-terminology"><span>facial age estimation</span></a><span>, where you show your face via photo or video, and a technology provided by a company like </span><a href="https://www.yoti.com/blog/facial-age-estimation-faq-frequently-asked-questions/"><span>Yoti</span></a><span> or Persona analyses it to estimate your age. Most of these third-party verification services upload your photo to their servers during this process. Yoti </span><a href="https://www.yoti.com/blog/effective-facial-age-estimation-a-privacy-preserving-approach-to-age-assurance/"><span>claims</span></a><span> that “as soon as an age has been estimated, the facial image is immediately and permanently deleted.” </span></p>

<p><span>You might not want to use facial age estimation if you’re worried about a current picture of your face accidentally leaking—for example, if elements in the background of your selfie might reveal your current location. Some services like </span><a href="https://www.k-id.com/facial-age-estimation"><span>k-ID</span></a><span> and </span><a href="https://docs.privateid.com/age"><span>Private ID</span></a><span> will analyse your face directly on the device, so only the age result will leave your phone. </span></p>

<p><span>If you do choose (or are forced to) use the face check system, be sure to snap your selfie without anything in the background that you'd be concerned with identifying your location or embarrassing you, in case the image leaks.</span><span> </span></p>

<p><b><i>Photo-ID Matching</i></b></p>

<p><span>Photo-ID matching checks whether your photo matches a document that confirms your identity, such as a </span><a href="https://www.ofcom.org.uk/online-safety/protecting-children/implementing-the-online-safety-act-protecting-children"><span>driving license or passport</span></a><span>. This is usually considered the most sensitive, since your ID has quite a bit of information on you. For example, if you upload an image of a document that shows your face and age, and an image of yourself at the same time, these are compared to confirm they match. Like with facial age estimation services, you’ll usually be sent to a third-party provider, such as Yoti or Incode. You’d hope that they’d delete the data immediately, but that’s not always the case. Incode for example </span><a href="https://incode.com/privacy-policy/#data-security"><span>doesn’t automatically delete the data</span></a><span> you give it once the process is complete; though if you’re reaching them through TikTok, TikTok does </span><a href="https://support.tiktok.com/en/safety-hc/account-and-user-safety/minimum-age-appeals-on-tiktok"><span>claim</span></a> <a href="https://support.tiktok.com/en/safety-hc/account-and-user-safety/underage-appeals-on-tiktok"><span>to</span></a><span> “start the process to delete the information you submitted,” which should include telling Incode to delete your data once the process is done. </span></p>

<p><span>If you want to be sure, you can </span><a href="https://developer.incode.com/docs/incode-verify-identity-deletion-process#/"><span>ask Incode to delete that data yourself</span></a><span>. But you’re relying on a service you don’t generally have a choice about doing the right thing, and we’ve already seen how that can fail. A previous system that </span><a href="https://www.biometricupdate.com/202510/discord-partners-manual-age-verification-data-breach-includes-selfies"><span>Discord</span></a><span> used to verify age had you send a picture to their general help forum, where all of the IDs sat around forever, until they got exposed in a massive data breach. Discord no longer uses that system to verify users’ ages. So, it might be fine, but unless you look into the exact company and all their practices, it’s hard to know. You can check out EFF’s guide for </span><a href="https://www.eff.org/pages/use-guide-navigating-age-assurance"><span>a few of the major platforms</span></a><span>. </span></p>

<p><b><i>Open Banking</i></b></p>

<p><span>Next is open banking, where you give permission for the age-check service to securely access information from your bank about whether you are over 18. The age-check service then confirms this with the </span><a href="https://www.ofcom.org.uk/online-safety/protecting-children/implementing-the-online-safety-act-protecting-children"><span>online service</span></a><span>. The user's full date of birth is not shared. </span><a href="https://support.google.com/accounts/answer/10071085#zippy=%2Cuse-a-credit-card-for-age-verification"><span>Credit card</span></a><span> age checks are also used for pornography services, where you provide your credit card details and a payment processor checks if the card is valid. As you must be over 18 to obtain a credit card in the UK, this shows you are over 18 and can therefore access a service.</span></p>

<p><b><i>Email Verification </i></b></p>

<p><span>Email-based age estimation is also quite prevalent, where users </span><a href="https://support.google.com/accounts/answer/10071085#zippy=%2Cuse-a-credit-card-for-age-verification%2Cuse-an-email-address-for-age-verification"><span>provide an email address</span></a><span>, and a third party technology analyses other online services where it has been used—such as banking or utility providers—to estimate your age. That third party will aggregate some data on you in the process, but the only new information they’ll find out is that you want to verify your age using a particular email address.  </span></p>

<p><b><i>Mobile Operator Checks</i></b></p>

<p>Mobile network operator age checks give your permission for an age-check service to confirm whether or not your mobile phone number has age filters applied to it. If there are no restrictions, this confirms you are over 18. </p>

<h3><b>There is no perfect, privacy protecting verification service</b></h3>

<p><span>Unfortunately, none of these verification options are perfect in terms of protecting information, especially when this is compounded by the additional risks that LGBTQ+ people face with data sharing. The data can reveal someone’s sexual orientation, gender identity, or HIV status that </span><a href="https://www.nytimes.com/2023/06/22/us/politics/anti-lgbtq-report-adl-glaad.html"><span>can be used</span></a><span> by employers, governments, family members, scammers, or bad actors to inflict harassment, discrimination, arrest, or violence. </span></p>

<p><span>There is still no widely available way to verify age online without compromising privacy—but even if there were, broad restrictions on social media will inevitably limit access to lawful speech, and valuable online communities, and arts and culture. These are just a few of the reasons that EFF is against age-gating mandates and is working to </span><a href="http://v"><span>stop and overturn them</span></a><span> in the UK and around the world.</span></p>

</div></div></div>
