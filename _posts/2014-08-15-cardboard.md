---
title: A few days with google cardboard
layout: posts
excerpt: <img src="/img/postpics/cardboard.png" class="display_picture"/>
---

# The future is now

Said my friend (artist, non tech) as he got back from [SIGGRAPH](http://www.siggraph.org/)
in vancouver. He brought me back a google cardboard that they were handing out 
for free because he knew that I might like to play around with it. So far I can
see why it generated so much hype. I can't believe how amazing and clever it is.

![My Cardboard]({{site.url}}/img/postpics/mycardboard.jpg)

And of course I couldn't resist the temptation to develop something for it.

The first thing I tried when I put on the google cardboard was to try to blink to
click. after all there is a front facing camera. Surely google would have figured
out how to use this for a simple eye tracker. Alas it didn't work. It turns out that
this was something that Google was interested in implimenting along with an 
eye tracker but it was to difficult to get the optics working for any android phone
with their front facing cameras anywhere. I'm still convinced that with a longish 
convex mirror it should be completely possible.

After gluing a small mirror into the cardboard to let the front facing camera on
my nexus 4 see my eye, I began to play around. I first thought I would make a simple
android app to see if I could detect blinks but then [This](http://vr.chromeexperiments.com).
You can make cardboard apps for the web. This interested me because I have been
meaning to get a bit more experience in with javascript.

Thanks to HTML5 you can access the cameras on a device straigt from the web using
[getUserMedia()](https://developer.mozilla.org/en-US/docs/NavigatorUserMedia.getUserMedia).
Along with [jsFeat](http://inspirit.github.io/jsfeat/) for computer vision, I hoped
to get something working.

This has proved a bit more difficult than I previously envisioned but is still
a work in progress. Below is a link to something I've been working on just to 
get the interface worked out: the world around you filtered into line drawings using 
jsFeat

[Link]({{site.url}}/experiments/blink.html)

![The Experiment]({{site.url}}/img/postpics/myscreen.png)
