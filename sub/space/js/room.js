$(function () {
  $("#reservation-btn").click(function () {
    $(location).attr('href', 'http://luvw11.dothome.co.kr/portfolio/GOYOHWA/sub/reservation/reserve.html');
  })
});


// 캐러셀
window.onload = function () {
  // 화면 크기 체크
  if (window.innerWidth < 768) {
    function auto() {
      $(".carousel").stop().animate({ left: "-100%" }, 500, function () {
        $(".carousel").append($(".carousel .slides:first-child")).css({ left: 0 });
      });
    }

    const timer = setInterval(auto, 3000);

    $(".slide-box").on("mouseover", function () {
      clearInterval(timer);
    });
    
    $(".slide-box").on("mouseout", function () {
      setInterval(auto, 3000);
    });
  } else if (window.innerWidth >= 768) {
    var carousel = $(".carousel"),
      items = $(".item"),
      currdeg = 0,
      intervalId = null,
      rotationInProgress = false;

    var mouseDownX = 0;
    var mouseUpX = 0;

    $(".carousel").on("mousedown", function (event) {
      mouseDownX = event.pageX;
      stopRotation();
    });

    $(".carousel").on("mousemove", function (event) {
      if (mouseDownX !== 0) {
        mouseUpX = event.pageX;
      }
    });

    $(".carousel").on("mouseup", function (event) {
      if (mouseDownX !== 0) {
        handleSwipe();
      }
      mouseDownX = 0;
      mouseUpX = 0;
      startRotation();
    });

    function handleSwipe() {
      var swipeThreshold = 50;

      if (mouseUpX - mouseDownX > swipeThreshold) {
        rotate({ data: { d: "p" } });
      } else if (mouseDownX - mouseUpX > swipeThreshold) {
        rotate({ data: { d: "n" } });
      }
    }

    function rotate(e) {
      if (rotationInProgress) {
        return;
      }

      rotationInProgress = true;

      if (e.data.d == "n") {
        currdeg = currdeg - 60;
      }
      if (e.data.d == "p") {
        currdeg = currdeg + 60;
      }

      carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
      });

      items.css({
        "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
        "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
        "-o-transform": "rotateY(" + (-currdeg) + "deg)",
        "transform": "rotateY(" + (-currdeg) + "deg)"
      });

      setTimeout(function () {
        rotationInProgress = false;
      }, 1000);
    }

    function startRotation() {
      if (intervalId === null) {
        intervalId = setInterval(function () {
          rotate({ data: { d: "n" } });
        }, 2000);
      }
    }

    function stopRotation() {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    startRotation();

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        stopRotation();
      } else if (document.visibilityState === "visible") {
        startRotation();
      }
    });
  }
};



//책
$(document).ready(function () {
  let $scrollContainer = $(".scroll");
  let $items = $scrollContainer.find("li");
  let itemWidth = $items.first().outerWidth(true);
  let scrollSpeed = 500;
  let pauseTime = 2000;
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(function () {
      let currentScroll = $scrollContainer.scrollLeft();

      if (currentScroll + itemWidth >= $scrollContainer[0].scrollWidth - $scrollContainer[0].clientWidth) {
        $scrollContainer.animate({ scrollLeft: 0 }, scrollSpeed);
      } else {
        $scrollContainer.animate({ scrollLeft: currentScroll + itemWidth }, scrollSpeed);
      }
    }, pauseTime + scrollSpeed);
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  startAutoScroll();

  $scrollContainer.on("mouseenter", function () {
    stopAutoScroll();
  });

  $scrollContainer.on("mouseleave", function () {
    startAutoScroll();
  });
});



//버튼
$(function () {
  let selectedNum = null; // 현재 선택된 num을 저장할 변수
  for (let i = 1; i <= 6; i++) {
    $(`.num-${i}`).on("mouseover", function () {
      $(`.plan-point > .num-${i}`).css("opacity", "1");
      $(`.num-space-name > .num-${i}`).css("opacity", "1");
    });

    $(`.num-${i}`).on("mouseout", function () {
      if (selectedNum !== i) { // 현재 선택된 num이 아닐 경우에만 opacity를 변경
        $(`.plan-point > .num-${i}`).css("opacity", "0.6");
        $(`.num-space-name > .num-${i}`).css("opacity", "0.6");
      }
    });
    $(`.num-${i}`).on("click", function () {
      if (selectedNum === i) {
        // 이미 선택된 num을 클릭한 경우 해제
        selectedNum = null;
        $(`.plan-point > .num-${i}`).css("opacity", "0.6");
        $(`.num-space-name > .num-${i}`).css("opacity", "0.6");
      } else {
        // 새로운 num을 클릭한 경우
        if (selectedNum !== null) {
          // 이전에 선택된 num이 있을 경우 해제
          $(`.plan-point > .num-${selectedNum}`).css("opacity", "0.6");
          $(`.num-space-name > .num-${selectedNum}`).css("opacity", "0.6");
        }
        // 새로운 num을 선택
        selectedNum = i;
        $(`.plan-point > .num-${i}`).css("opacity", "1");
        $(`.num-space-name > .num-${i}`).css("opacity", "1");
      }
    });
  }
});


//마지막 세션 이미지 확대
const imgContainers = document.querySelectorAll('.img-container');

imgContainers.forEach(container => {
  const img = container.querySelector('img');

  container.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { clientWidth, clientHeight } = img;

    const x = (offsetX / container.clientWidth) * 100;
    const y = (offsetY / container.clientHeight) * 100;

    img.style.transform = `scale(1.3) translate(-${x}%, -${y}%)`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)'; // 마우스가 나가면 원래 크기로
  });
});



// 스크롤 애니메이션 
$(document).ready(function () {
  // 스크롤 이벤트
  $(window).scroll(function () {

    var scrollTop = $(this).scrollTop();

    $('.inside-the-room-img').each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
      }
    });

    $('.notification-book').each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateY(-100px)' });
      }
    });
    $('.notification-room').each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
      }
    });
    $('.room-other').each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateX(100px)' });
      }
    });
  });
  // 초기 상태 설정
  $('.inside-the-room-img').css({ 'opacity': 0, 'transform': 'translateY(100px)' });
  $('.notification-book').css({ 'opacity': 0, 'transform': 'translateY(-100px)' });
  $('.notification-room').css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
  $('.room-other').css({ 'opacity': 0, 'transform': 'translateX(100px)' });
});