$(function () {

  $("#inquiry-btn").click(function () {
    $(location).attr('href', 'https://yexql.channel.io/home');
  })
});

// $(document).ready(function () {
//   // 모든 step 요소를 초기 상태로 설정
//   $('.step').each(function (index) {
//     $(this).css({
//       'opacity': 0,
//       'transform': 'translateY(20px)' // 아래로 이동
//     });
//   });

//   $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop();
//     var windowHeight = $(window).height();

//     $('.step').each(function (index) {
//       var elementOffset = $(this).offset().top;

//       // 요소가 화면에 보일 때 애니메이션 실행
//       if (scrollTop + windowHeight > elementOffset) {
//         $(this).css({
//           'opacity': 1,
//           'transform': 'translateY(0)' // 원래 위치로 이동
//         });
//       }
//     });

//     $('.arrow').each(function (index) {
//       var elementOffset = $(this).offset().top;

//       // 요소가 화면에 보일 때 애니메이션 실행
//       if (scrollTop + windowHeight > elementOffset) {
//         $(this).css({
//           'opacity': 1,
//           'transform': 'translateX(0)' // 원래 위치로 이동
//         });
//       }
//     });
//   });
// });

// 스크롤 이벤트
$(window).scroll(function () {

  let scrollTop = $(this).scrollTop();

  $(`.yoga-img`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    }
  });
  $(`.yoga-info`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });
  $(`.yoga-tuition h4`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });
  $(`.yoga-tuition table`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    }
  });

  $(`.reservation-step h4`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });
  $(`.reservation-step ul`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }
  });

  $(`.instructor-inquiry-fixed`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    }z
  });

});

// 초기 상태 설정
$(`.yoga-info`).css({ 'opacity': 0, 'transform': 'translateX(-50px)' });
$(`.yoga-tuition h4`).css({ 'opacity': 0, 'transform': 'translateY(-50px)' });
$(`.yoga-tuition table`).css({ 'opacity': 0, 'transform': 'translateY(50px)' });
$(`.reservation-step h4`).css({ 'opacity': 0, 'transform': 'translateY(50px)' });
$(`.reservation-step ul`).css({ 'opacity': 0, 'transform': 'translateY(50px)' });
$(`.instructor-inquiry-fixed`).css({ 'opacity': 0, 'transform': 'translateY(50px)' });

