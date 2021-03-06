[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](https://app.netlify.com/sites/wonderful-morse-63f91e/deploys)

# Starbucks βοΈ π₯―

μ€νλ²μ€ λλ© νμ΄μ§(ννμ΄μ§) μ€μ΅ μμ 

[master λΈλμΉλ‘ μ΄λ](https://github.com/jiisunny/starbucks)

[signin λΈλμΉλ‘ μ΄λ](https://github.com/jiisunny/starbucks/tree/signin)

[μ€νλ²μ€ ννμ΄μ§(DEMO+signin)](https://wonderful-morse-63f91e.netlify.app/)

![μ€νλ²μ€](https://raw.githubusercontent.com/jiisunny/starbucks/master/_assets/main_screenshot.png)

## λ¬Έμ μΈμ½λ©(Character Encoding) μ€μ 

λ¬Έμκ° μΈμ½λ© λλ λ°©μμ μ€μ νλ€.

```html
<meta charset="UTF-8"/>
```
- `UTF-8` : μ΄μ±, μ€μ±, μ’μ±μΌλ‘ κ΅¬λΆνμ¬ λ¬Έμλ₯Ό μμ±(κΆμ₯)
- `EUC-KR` : νλμ μμ±λ κΈμλ₯Ό μΈμ

## λ·°ν¬νΈ(Viewport) λ λλ§ λ°©μ μ€μ 

μΉνμ΄μ§κ° νλ©΄(Viewport)μ ννλλ λ°©μμ μ€μ νλ€.<br />
λͺ¨λ°μΌ νκ²½μμ μ μ© λλ€.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width` : νλ©΄μ κ°λ‘ λλΉλ₯Ό κ° λλ°μ΄μ€(Device)μ κ°λ‘ λλΉμ λμΌνκ² μ μ©
- `initial-scale=1.0` : νλ©΄μ μ΄κΈ° νλ©΄ λ°°μ¨(νλ μ λ)μ μ€μ 
- `user-scalable=no` : μ¬μ©μκ° λλ°μ΄μ€ νλ©΄μ νλ(`yes`)/μΆμ(`no`)ν  μ μλμ§ μ€μ 
- `maximum-scale=1` : μ¬μ©μκ° νλ©΄μ νλν  μ μλ μ΅λκ°
- `minimum-scale=1`: μ¬μ©μκ° νλ©΄μ μΆμν  μ μλ μ΅μκ°

## μ€ν κ·Έλν(The Open Graph protocol)

μΉνμ΄μ§κ° μμ λ―Έλμ΄(νμ΄μ€λΆ, μΉ΄μΉ΄μ€ν‘ λ±)λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ νλ€.

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/jiisunny/starbucks/master/_assets/kakao_opengraph_example.png)

[λ λ§μ μ€ν κ·Έλν μμ± λ³΄κΈ°](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="μ€νλ²μ€λ μΈκ³μμ κ°μ₯ ν° λ€κ΅­μ  μ»€νΌ μ λ¬Έμ μΌλ‘, 64κ°κ΅­μμ μ΄ 23,187κ°μ λ§€μ μ μ΄μνκ³  μμ΅λλ€." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- `og:type`: νμ΄μ§μ μ ν(E.g, `website`, `video.movie`)
- `og:site_name`: μν μ¬μ΄νΈμ μ΄λ¦
- `og:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- `og:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- `og:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- `og:url`: νμ΄μ§ μ£Όμ(URL)

## νΈμν° μΉ΄λ(Twitter Cards)

μΉνμ΄μ§κ° μμ λ―Έλμ΄(νΈμν°)λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ νλ€.

[λ λ§μ νΈμν° μΉ΄λ λ³΄κΈ°](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="μ€νλ²μ€λ μΈκ³μμ κ°μ₯ ν° λ€κ΅­μ  μ»€νΌ μ λ¬Έμ μΌλ‘, 64κ°κ΅­μμ μ΄ 23,187κ°μ λ§€μ μ μ΄μνκ³  μμ΅λλ€." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

- `twitter:card`: νμ΄μ§(μΉ΄λ)μ μ ν(E.g. `summary`, `player`)
- `twitter:site`: μν μ¬μ΄νΈμ μ΄λ¦
- `twitter:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- `twitter:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- `twitter:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- `twitter:url`: νμ΄μ§ μ£Όμ(URL)

## Favicon(νλΉμ½, favorites icon)

μΉνμ΄μ§λ₯Ό λνλ΄λ μμ΄μ½, μΉνμ΄μ§μ λ‘κ³ λ₯Ό μ€μ νλ€.<br/>
λλΆλΆμ κ²½μ° λ£¨νΈ κ²½λ‘μ `favicon.ico` νμΌμ μμΉνλ©΄ μλμΌλ‘ λ‘λ©νκΈ° λλ¬Έμ `<link />`λ₯Ό μμ±ν  νμκ° μλ€. `favicon.png` νμΌμ μ¬μ©νλ €λ©΄ λ€μκ³Ό κ°μ΄ `<link />`λ₯Ό μμ±ν΄μΌνλ€.

> νλΉμ½ μ΄λ―Έμ§λ λ£¨νΈ κ²½λ‘μ μμ΄μΌ νλ€

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) λλ 32 x 32 λλ 16 x 16
- `favicon.png` 500 x 500 (px)

<img src="https://raw.githubusercontent.com/jiisunny/starbucks/master/favicon.png" alt="Starbucks" width="16" /><br />
<img src="https://raw.githubusercontent.com/jiisunny/starbucks/master/favicon.png" alt="Starbucks" width="200" />

### .ico νμΌ μ μ

μ΄λ―Έμ§λ₯Ό μλ‘λνλ©΄ μμ½κ² `.ico` νμΌμ μ μν  μ μλ€.

[iconifier.net](https://iconifier.net/)

## Reset.css

κ° λΈλΌμ°μ μ κΈ°λ³Έ μ€νμΌμ μ΄κΈ°ν ν  μ μλ css νμΌ λ§ν¬

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## Google Fonts

νμ΄μ§μμ μ¬μ©ν  'λλκ³ λ' ν°νΈλ₯Ό μ§μ νλ€.

> μ¬μ© μ μ ν°νΈ λΌμ΄μΌμ€λ₯Ό κΌ­ νμΈν΄μΌ νλ€.

[Google Fonts](https://fonts.google.com/)μμ κ³ λ₯Έ ν°νΈ νμΌμ κ°μ Έμ¨λ€.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

νμ΄μ§μ ν°νΈλ₯Ό μ μ©(CSS μμ)νλ€.

```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```

## Google Material Icons

[κ΅¬κΈμμ μ κ³΅νλ Material Icons](https://material.io/resources/icons/?style=baseline)μ λ¬΄λ£λ‘ μ¬μ©ν  μ μμ΅λλ€.

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

λ€μκ³Ό κ°μ΄ μ¬μ©ν  μ μλ€.

```html
<div class="material-icons">upload</div>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)μ μλ°μ€ν¬λ¦½νΈλ‘ μ μ΄νλ νμλΌμΈ κΈ°λ°μ μ λλ©μ΄μ λΌμ΄λΈλ¬λ¦¬μ΄λ€.<br />
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)μ μ€μ½λ‘€ μ λλ©μ΄μμ μ§μνλ GSAP νλ¬κ·ΈμΈμ΄λ€.

> μ½κ² μ¬μ©ν  μ μλ€λ μ₯μ μ΄ μλ€.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to() μ¬μ©λ²](https://greensock.com/docs/v3/GSAP/gsap.to())<br />
[GSAP Easing](https://greensock.com/docs/v2/Easing)

```js
gsap.to(μμ, μκ°, μ΅μ)
// λλ
TweenMax.to(μμ, μκ°, μ΅μ)
```

```js
gsap.to(window, .7, {
  scrollTo: 0
});
```

## Swiper

[Swiper](https://swiperjs.com/)λ νλμ¨μ΄ κ°μ μ νκ³Ό μ¬λ¬ κΈ°λ³Έ λμμ κ°μΆ νλμ μΈ μ¬λΌμ΄λ λΌμ΄λΈλ¬λ¦¬μ΄λ€.

[Getting Started With Swiper](https://swiperjs.com/get-started)

> Swiper 6λ²μ μ μ¬μ©ν΄ μμν¨.

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)(μ΅μ)μ νμΈ ν  μ μλ€.

```js
new Swiper(μμ, μ΅μ);
```

```js
new Swiper('.swiper-container', {
  direction: 'vertical', // μμ§ μ¬λΌμ΄λ
  autoplay: true, // μλ μ¬μ μ¬λΆ
  loop: true // λ°λ³΅ μ¬μ μ¬λΆ
});
```

## YouTube API

![μ€νλ²μ€ YouTube μμ](https://raw.githubusercontent.com/jiisunny/starbucks/master/_assets/main_youtube_screenshot.png)

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)λ₯Ό ν΅ν΄ YouTube λμμμ μ μ΄ν  μ μλ€.

YouTube μμμ΄ μΆλ ₯λ  μμΉμ μμλ₯Ό μ§μ (μμ±)νλ€.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` ν¨μ μ΄λ¦μ Youtube IFrame Player APIμμ μ¬μ©νλ μ΄λ¦μ΄κΈ° λλ¬Έμ λ€λ₯΄κ² μ§μ νλ©΄ λμνμ§ μλλ€.<br />
ν¨μλ μ μ­(Global) λ±λ‘ν΄μΌ νλ€.

[νλ μ΄μ΄ λ§€κ°λ³μ(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)μμ λ λ§μ μ΅μμ νμΈ ν  μ μλ€.

```js
// Youtube IFrame APIλ₯Ό λΉλκΈ°λ‘ λ‘λν©λλ€.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // μ¬μν  μ νλΈ μμ ID
    playerVars: {
      autoplay: true, // μλ μ¬μ μ λ¬΄
      loop: true, // λ°λ³΅ μ¬μ μ λ¬΄
      playlist: 'An6LvWQuj_8' // λ°λ³΅ μ¬μν  μ νλΈ μμ ID λͺ©λ‘
    },
    events: {
      // μμμ΄ μ€λΉλμμ λ,
      onReady: function (event) {
        event.target.mute(); // μμκ±°!
      }
    }
  });
}
```
> videoIdλ YouTube μμμ λ§ν¬ λ watch?v= λ€μ κ°μ λ³΅μ¬νλ©΄λλ€.

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)μ μ€ν¬λ‘€κ³Ό μμμ μνΈ μμ©μ μν μλ°μ€ν¬λ¦½νΈ λΌμ΄λΈλ¬λ¦¬μ΄λ€.<br />
λνμ μΌλ‘ μ΄λ€ μμκ° νμ¬ νλ©΄μ λ³΄μ΄λ μνμΈμ§λ₯Ό νμΈν  λ μ¬μ©νλ€.

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
new ScrollMagic
  .Scene({ // κ°μν  μ₯λ©΄(Scene)μ μΆκ°
    triggerElement: spyEl, // λ³΄μ¬μ§ μ¬λΆλ₯Ό κ°μν  μμλ₯Ό μ§μ 
    triggerHook: .8 // νλ©΄μ 80% μ§μ μμ λ³΄μ¬μ§ μ¬λΆ κ°μ
  })
  .setClassToggle(spyEl, 'show') // μμκ° νλ©΄μ λ³΄μ΄λ©΄ show ν΄λμ€ μΆκ°
  .addTo(new ScrollMagic.Controller()) // μ»¨νΈλ‘€λ¬μ μ₯λ©΄μ ν λΉ(νμ!)
```

## Lodash

[Lodash](https://lodash.com/)λ λ€μν μ νΈλ¦¬ν° κΈ°λ₯μ μ κ³΅νλ μλ°μ€ν¬λ¦½νΈ λΌμ΄λΈλ¬λ¦¬μ΄λ€.

[Lodash API](https://lodash.com/docs/4.17.15) <br />
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

## JS Strict Mode

JavaScriptλ₯Ό 'μκ²© λͺ¨λ'λ‘ μ¬μ©νλ€.<br />
νμΌ νΉμ ν¨μμ μ΅μλ¨μ μμ±ν΄μΌ νλ€.

```javascript
'use strict';
```

> 'Strict Mode'λ ECMAScript 5 λ²μ μ μλ μλ‘μ΄ κΈ°λ₯μΌλ‘, νλ‘κ·Έλ¨ λλ ν¨μλ₯Ό μκ²©ν μ΄μ© μ½νμ€νΈ μμμ μ€νμν¬ μ μκ² νλ€. μ΄ μκ²©ν μ½νμ€νΈλ λͺκ°μ§ μ‘μλ€μ μ€νν  μ μλλ‘ ν΄λ©°, μ’ λ λ§μ μμΈλ₯Ό λ°μμν¨λ€.

### μκ²© λͺ¨λμ μ₯μ 

- μΌλ°μ μΈ μ½λ© μ€μμμ μμΈ μ²λ¦¬
- μμ νμ§ μμ μ‘μμ λν μμΈ μ²λ¦¬ (ex: μ μ­ κ°μ²΄λ‘ μ κ·Ό)
- νΌλμ€λ½κ±°λ μ λλ‘ κ³ λ €λμ§ μλ κΈ°λ₯λ€μ λΉνμ±ν

## λλ€ν μ«μλ₯Ό μμ±νλ ν¨μ

```js
// λ²μ λλ€ ν¨μ(μμμ  2μλ¦¬κΉμ§)
function random(min, max) {
  // `.toFixed()`λ₯Ό ν΅ν΄ λ°νλ λ¬Έμ λ°μ΄ν°λ₯Ό,
  // `parseFloat()`μ ν΅ν΄ μμμ μ κ°μ§λ μ«μ λ°μ΄ν°λ‘ λ³ν
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
```