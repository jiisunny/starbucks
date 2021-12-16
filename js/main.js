// top nav 상단 search 영역
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  //Logic..
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  //Logic..
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 우측 배지 영역
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      dispaly: 'none'
    });
    // ToTop 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0  // 원래 위치로
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // ToTop 버튼 숨기기!
    gsap.to(toTopEl, .2, { // 애니메이션 지속시간 0.2s
      x: 100  // 오른쪽으로 100px
    });
  }
}, 300));
// 300ms = 0.3초
// lodash가 제공하는 throttle 함수를 통해 0.3초 단위로 부하를 줘서 함수가 계속 실행되는것을 방지한다.
// _.throttle(함수, 시간)


// to-top 버튼을 누르면 상단으로 올라가는 효과 적용
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// visual 이미지 효과
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 초 순서대로 요소들이 나타난다.
    opacity: 1
  });
});


// NOTICE SWIPER
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // 자동재생
  autoplay: true,
  // 반복재생
  loop: true
});


// PROMOTION SWIPER
new Swiper('.promotion .swiper-container', {
  // 스와이퍼 기본값이기 때문에 입력할 필요 없음
  // direction: 'horizontal'
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //5초에 한번씩 이미지가 슬라이드 된다
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이드 버튼
  }
});


// AWARDS SWIPER
new Swiper('.awards .swiper-container', {
  // 스와이퍼 기본값이기 때문에 입력할 필요 없음
  // direction: 'horizontal'
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// 프로모션 toggle 기능
const promotionEl = document.querySelector('.promotion'); // .promotion 영역을 찾아서 promotionEl 변수에 할당
const promotionToggleBtn = document.querySelector('.toggle-promotion'); // .toggle-promotion 영역을 찾아서 promotionToggleBtn 변수에 할당
let isHidePromotion = false; // promotion 영역이 숨겨졌니? = false(아니요)
promotionToggleBtn.addEventListener('click', function () { // promotionToggleBtn을 클릭하면 함수실행
  isHidePromotion = !isHidePromotion // ! 뒤쪽의 값이 반대가 되게 만든다 (true가 되게 만든다)
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide'); // 화면에 안보이게 처리한다
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide'); // 화면에 보이게 처리한다
  }
});


// youtube floating images
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, // y축으로 얼마나 움직이는 애니메이션인지 설정
      repeat: -1, // 무한반복 Use -1 to repeat infinitely
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생하는 것
      ease: Power1.easeInOut, // https://greensock.com/docs/v2/Easing
      delay: random(0, delay) // 얼마 후에 애니메이션이 재생되는지 설정
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// Scroll Magic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 감시하는 요소가 뷰포트에 위치하는 값 (뷰포트 시작점이 0 끝점이 1)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 메소드체이닝
});


// This Year 설정
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021, 올해 년도가 나온다