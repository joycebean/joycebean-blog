#### Install
`bundle install`

#### run
`middleman`

#### deploy
`middleman build` ( there will be a error, don't worry)
uplaod all contents of `build` into `blog`

#### New Entry
`middleman article "My working title"`

include the following meta data at the top of the artile file. please don't include things within `()`.

```
---
title: (auto-generated no need to update)
date: (auto-generated no need to update)
tags: Tutorial, Banners
hero: /images/blog/html5-banner.gif (location of hero)
thumbnail: /images/blog/free.jpg (location of thumbnail)
blurb: awesome tutorial thanks (blurb to be shown on listing pages)
---

```
