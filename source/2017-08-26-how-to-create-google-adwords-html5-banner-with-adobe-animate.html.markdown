---
title: Create animated HTML5 banner
date: 2017-08-26 20:46 UTC
tags: Tutorial, Flash, Adobe Animate, HTML5, Google Adwords, Banners
hero: /images/blog/html5-banner.gif
thumbnail: /images/blog/thumbnail.jpg
blurb: Using Adobe Animate CC to create html5 banner for adwords
---
Using Adobe Animate CC to create html5 banner for adwords

... or rather, to be accurate: How to compile a Flash file for a HTML5 Google Adwords Display Banner using Adobe Animate CC.

<blockquote>Kindly note that this guide is only relevant AFTER you've animated your banner - it's just some steps on how to tweak the code so that Google Adwords would accept them!</blockquote>


_<a href="#html5-banner-tutorial">Click here to skip to the tutorial</a>_<br>

<h3>When working hard is a luxury</h3>
Background: I was asked to create ~35 animated HTML5 banners within a short period of time, and I had zero clue on how to get it done. I knew how to animate with Flash, sure, and I knew how to code - but an HTML5 banner? Ya. No, not.. really.

Stress level: 5/10

Adobe Animate CC (previously known as Adobe Flash) has an option to publish HTML5 banners - and obviously, with confidence, that was what I selected. Yes, 35 HTML5 file formats please. Because that made sense. Absolutely. So I did about animating all the banners as per how you would normally animate Flash banners, exported the work, checked to make sure it was working, checked again, SEND, YAY!

But once it reached the agency for publishing, all the banners were rejected (NAY!!!) because Google Adwords <a href="https://support.google.com/adwords/answer/6249073?hl=en">decided to not recognize flash formats</a> anymore. While the output was a correct .html file and a .js file, it was still flash based. So Google was like, ya. Sorry. No.

Stress level: 8/10

The only option the agency gave me was to quickly learn <a href="https://www.google.com/webdesigner/">Google Web Designer</a> and recreate all the banners within the same time frame I was given. After playing around with Google Web Designer for about 10 mins, I knew in my heart of hearts that I should've taken up accountancy and became an accountant.

<h3>Why I wish I was an accountant:</h3>

a. While I'm sure GWD is an amazing product by Google, I didn't have the luxury of time or motivation to relearn a brand new software to rush out not-crappily-done banners. In _bulk_.

b. I was more determined to make use of what I currently had rather than starting from scratch. I mean, they're... banners. Repetitive, emotionless, banners.

c. Also by now, stress level: 15/10

So I went on a massive, non-stop google search using all the keywords I could think of. Finally, _finally_, I found a sort-of solution and it's rather hacky, but hey, it WORKS. So I hope you find this step-by-step helpful!<br>
<a name="html5-banner-tutorial">&nbsp;</a>

<h3>Happiness Begins Here:</h3>


<img src="/images/blog/tutorial-html5-adwords-5.jpg" class="img-fluid img-fluid fadeIn animated" alt="Create a Google Adwords HTML5 Display Banner">

*  <a href="/blog/assets/google-adwords-html5-banner/index.html" target="_blank">Preview the animated banner</a> - make sure your adblock isn't running
*  <a href="/blog/assets/google-adwords-html5-banner.zip">Download resource files</a> (includes .fla + .html + .js)

**Softwares used:**

* Adobe Animate CC
* <a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a> (or any other text editor, to code. Recently I've been using <a href="https://atom.io/" target="_blank">Atom</a>)

**1. On Adobe Animate CC**

* When you're starting on your banner, make sure `HTML5 Canvas` is selected.
<img src="/images/blog/tutorial-html5-adwords-1.gif" class="img-fluid fadeIn animated">
* Once you've finished animating your banner, go to: `File > Publish Settings`.
* Click on the `Advanced` tab, and under `Advanced Javascript Options`,  uncheck `Hosted Libraries`.
* Click on the `Spritesheet` tab, and uncheck `Combine image assets into one spritesheets`. <br>
	<img src="/images/blog/tutorial-html5-adwords-2.gif" class="img-fluid fadeIn animated"><br>
* Click `OK`.
* Hit `CMD + Enter` on your keyboard, or go to `File > Publish`.

**2. File Structure**

1. Open your banner folder and delete the `libs` folder if you have it (it should only contain a `createjs.js` file - it's ok to delete it because we will link it from [Google](https://support.google.com/richmedia/answer/6307288?hl=en){:target="_blank"} instead).
2. In your folder you should only have a `.html` and a `.js` file, and images if your banner contains images (.png, .jpeg, .gif).

**3. In your HTML file**

1. Open up your `.html` file in your text editor.
2. Under the `<head>` tag, find:

	* `<meta name="authoring-tool" content="Adobe_Animate_cc">`
	* **Replace it with**: `<meta name="ad.size" content="width=300,height=600">`
	* Take note of `width=300` and `height=600` - you'll need to **replace it with your own** width and height variables

3. Find this:
`<script src="libs/createjs-2015.11.26.min.js"></script>`

	* **Replace it with <a href="https://support.google.com/richmedia/answer/6307288?hl=en" target="_blank">Google's createjs</a>**:
	`<script src="https://s0.2mdn.net/ads/studio/cached_libs/createjs_2015.
	11.26_54e1c3722102182bb133912ad4442e19_min.js"></script>`

4. Next, add the **<a href="https://support.google.com/richmedia/answer/2672517?hl=en-GB" target="_blank">exit API</a>** under the `<head>` tag as well:

	* `<script type="text/javascript" src="https://tpc.googlesyndication.com/
	pagead/gadgets/html5/api/exitapi.js"></script>`

5. In your `<script>`, remove the `?` and the bunch of numbers that follows it:

	* `<script src="300x600.js?192381293801"></script>`

		* To clarify, my file is called `300x600.js` because I saved my flash file as `300x600.fla`. If you named your file `banner.fla`, for example, your `.js` file will be labelled as `banner.js`.

	So that it looks something like this:

	* `<script src="300x600.js"></script>`
6. Now to make the entire banner clickable: in your `<body>`, find the `<canvas>` tag and add this **before** it:

	 * `<div class="button" onclick="ExitApi.exit()">`

	And remember to add a closed div after the `</canvas>` tag:

	* `</div>`

7. Add a `cursor: pointer;` inside the style tag within the `<canvas>`, so that on hover you get the standard mickey mouse hand to indicate that it's clickable. Your code should now look something like this:

	* `<div class="button" onclick="ExitApi.exit()"><canvas id="canvas" width="300" height="600" style="display: block; background-color:rgba(255, 255, 255, 1.00); cursor: pointer"></canvas></div>`

8. And you're done! If you open up your `.html` file in your browser, you should be able to click on your ad and get this screenshot:
	<img src="/images/blog/tutorial-html5-adwords-3.gif" class="img-fluid fadeIn animated">

<h3 style="margin-bottom:35px;">Troubleshooting</h3>

1. **I added a `stop();` on the last frame in Flash, and yet it keeps looping!**

	* Go to `File > Publish Settings` and make sure `Loop Timeline` is unchecked.

2. **When I previewed the banner in my browser, it showed nothing.**

	* Make sure your adblocker is paused if you're using one - that's one of the likely culprits in ...blocking your ad.

3. **My clickthrough doesn't seem to work..**

	* One of the things to check is that the `create.js` / `exitAPI` URL is in one line. Because the link is so long, sometimes part of the link goes to the next line and that breaks the URL!

<h3 style="margin-bottom:35px;">Useful Links that helped me greatly</h3>
* <a href="https://support.google.com/adwords/answer/1722096" target="_blank">Google Adwords requirements</a>
* <a href="https://forums.adobe.com/thread/2137605" target="_blank">Adobe discussion forum</a>
* <a href="https://www.youtube.com/watch?v=K_gi4SZRxps" target="_blank">Video on creating the ad</a>
* <a href="https://h5validator.appspot.com/adwords/asset" target="_blank">Assets validator</a>
* <a href="https://support.google.com/adwords/answer/6335681?hl=en" target="_blank">Click through issues</a>

<h3>Conclusion</h3>
Banners are OK. If all else fails, don't stop googling.
