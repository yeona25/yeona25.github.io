function auto() {
  $("#main-slide").stop().animate({ left: "-100%" }, 500, function () {
    $("#main-slide").append($("#main-slide .slide-it:first-child")).css({ left: 0 })
  })
}
const timer = setInterval(auto, 3000);
$(".main-slide-box").on("mouseover", function () {
  clearInterval(timer);
});
$(".main-slide-box").on("mouseout", function () {
  setInterval(auto, 0);
});


//사진 업다운슬라이드
window.onload = function () {
  var swiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 4000,
    allowTouchMove: false,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 4000,
    allowTouchMove: false,
  });
}

//버튼 링크
$(function () {
  $("#show-room").click(function () {
    $(location).attr('href', 'http://luvw11.dothome.co.kr/portfolio/GOYOHWA/sub/space/space_room.html');
  })
  $("#room-reservation").click(function () {
    $(location).attr('href', 'http://luvw11.dothome.co.kr/portfolio/GOYOHWA/sub/reservation/reserve.html');
  })

  $(".space-rental img").click(function () {
    $(this).css('z-index', '2');
  })

  $("#event-inquiry-btn").click(function () {
    $(location).attr('href', 'https://yexql.channel.io/home');
  })

  $(".space-rental img").click(function () {
    $(this).css("z-index", '20');
    $(".event-txt").css()
  })
});



// 스크롤 이벤트
var windowWidth = $(window).width();
var tabletSize = 768; // 타블렛 사이즈 기준 (예: 768px)
var desktopSize = 1024; // 데스크탑 사이즈 기준 (예: 1024px)

// 초기 상태 설정
if (windowWidth > tabletSize) {
  $(`.img-box`).css({ 'opacity': 0, 'transform': 'translateX(100px)' });
  $(`.logo-txt-box`).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
}
$(`.slides`).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
$(`.display-txt`).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
$(`#event`).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
$(`.banner`).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
$(`.slide-banner`).css({ 'opacity': 0, 'transform': 'translateX(100px)' });


$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  // 타블렛 사이즈 미만에서는 .brand-intro, .logo-txt-box 애니메이션 제거
  if (windowWidth >= tabletSize) {
    $(`.img-box`).each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
      }
    });

    $(`.logo-txt-box`).each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
      }
    });
  }

  // 모든 화면 크기에서 적용되는 애니메이션
  $(`.slides`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });

  $(`.display-txt`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });

  $(`#event`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    }
  });

  $(`.banner`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });

  $(`.slide-banner`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });
});

//열림의 터 
$(document).ready(function () {
  // 초기 상태 설정: 요가 이미지가 위에 있고, 요가 텍스트가 보이도록 설정
  $(".yoga").css("z-index", "2"); // 수정: 기본적으로 요가가 위에 있도록 설정
  $(".space-rental").css("z-index", "1"); // 수정: 기본적으로 대관이 아래에 있도록 설정
  $(".event-txt-yoga").show();
  $(".event-txt-rental").hide();

  // 대관 이미지 클릭 시 실행
  $(".space-rental").click(function () {
    $(".space-rental").css("z-index", "3"); // 수정: space-rental이 위로 올라감
    $(".yoga").css("z-index", "1"); // 수정: yoga는 아래로 내려감

    $(".event-txt-yoga").fadeOut(100, function () { // 수정: 부드러운 텍스트 전환
      $(".event-txt-rental").fadeIn(100);
    });
  });

  // 요가 이미지 클릭 시 실행
  $(".yoga").click(function () {
    $(".yoga").css("z-index", "3"); // 수정: yoga가 위로 올라감
    $(".space-rental").css("z-index", "1"); // 수정: space-rental은 아래로 내려감

    $(".event-txt-rental").fadeOut(100, function () { // 수정: 부드러운 텍스트 전환
      $(".event-txt-yoga").fadeIn(100);
    });
  });
});



// 배너
$(window).on('scroll', function () {
  const $txtScrollAni = $('.txt-scroll-ani');
  const rect = $txtScrollAni[0].getBoundingClientRect();

  // 뷰포트에 텍스트가 들어왔을 때
  if (rect.top < $(window).height() && rect.bottom > 0) {
    $txtScrollAni.addClass('visible');
  } else {
    $txtScrollAni.removeClass('visible'); // 스크롤을 올리면 다시 숨김
  }
});

//배너 슬라이드
$(document).ready(function () {
  const $bannerList = $(".banner-img-list");
  const slideWidth = 25;
  let currentX = 0; 

  function moveSlide() {
    currentX -= 0.2; // 조금씩 왼쪽으로 이동
    $bannerList.css("transform", `translateX(${currentX}%)`);

    if (Math.abs(currentX) >= 100) {
      currentX = 0;
      $bannerList.css("transform", `translateX(${currentX}%)`);
    }

    requestAnimationFrame(moveSlide);
  }

  moveSlide();
});
