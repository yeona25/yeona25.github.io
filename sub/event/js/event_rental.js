
$(document).ready(function () {
  let currentIndex = 0; // 현재 슬라이드 인덱스
  const slides = $('.first li'); // 슬라이드 요소
  const totalSlides = slides.length; // 총 슬라이드 수

  // 좌측 버튼 클릭 시
  $('.lt-btn').click(function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1; // 인덱스 감소
    updateSlide(); // 슬라이드 업데이트
  });

  // 우측 버튼 클릭 시
  $('.gt-btn').click(function () {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0; // 인덱스 증가
    updateSlide(); // 슬라이드 업데이트
  });

  // 슬라이드 업데이트 
  function updateSlide() {
    const slideWidth = $('.slide').width(); // 슬라이드의 너비
    $('.first').css('transform', 'translateX(' + (-slideWidth * currentIndex) + 'px)'); // 슬라이드 이동
  }
});


function auto() { // 자동으로 움직임
  $(".first").stop().animate({ left: "-1420px" }, 500, function () {
    $(".first").append($(".first li:first-child")).css({ left: 0 });
  });
}

const timer = setInterval(auto, 4000);


// 이미지 1,2,3,4 모달 (img-2)
$(function () {
  $(".second li > a").click(function (e) {
    e.preventDefault();
    $(this).next().fadeIn();
  });
  $(".second-modal").click(function () {
    $(this).fadeOut();
  });
});



$('.flex-box, .rental-step').each(function () {
  $(this).css({
    'opacity': 0,
    'transform': 'translateY(20px)' // 아래로 이동
  });
});

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(window).height();

  // 각 요소에 대해 스크롤 위치를 확인
  $('.flex-box, .rental-step').each(function () {
    var elementOffset = $(this).offset().top;

    // 요소가 화면에 보일 때 애니메이션 실행
    if (scrollTop + windowHeight > elementOffset) {
      $(this).addClass('visible'); // visible 클래스를 추가하여 애니메이션 실행
    }
  });
});



$(window).scroll(function () {

  let scrollTop = $(this).scrollTop();
  $(`.rental-info`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    }
  });

  $(`.rental-ex > .ex-1`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });
  $(`.rental-ex > .ex-2`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });
});

$(`.rental-info`).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
$(`.rental-ex > .ex-1`).css({ 'opacity': 0, 'transform': 'translateX(-50px)' });
$(`.rental-ex > .ex-2`).css({ 'opacity': 0, 'transform': 'translateX(50px)' });

