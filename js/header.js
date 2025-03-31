

$(function () {
  $("#btn-open").click(function () {
    $("#main-menu-mypage")
      .css({ // {}안에 속성:값인데 {}가 여러개 배치돼 형식 잘못 됨.
        right: 0,
      });
  });
  $("#btn-close").click(function () {
    $("#main-menu-mypage").css({
      right: "-100vw", // ★- 100% -> -100vw으로 수정 
    });
  });
})

$(document).ready(function () {
  // 기본적으로 모든 서브메뉴 숨김
  $(".submenu").hide();

  // 메뉴 버튼 클릭 시 사이드 메뉴 열기
  $("#btn-open").click(function () {
    $("#main-menu-mypage").css({ right: 0 });
  });

  // 닫기 버튼 클릭 시 사이드 메뉴 닫기
  $("#btn-close").click(function () {
    $("#main-menu-mypage").css({ right: "-100vw" });
  });

  // `.main-menu-a` 클릭 이벤트 처리
  $('.main-menu-a').click(function (e) {
    var $submenu = $(this).next('.submenu'); // 현재 클릭한 메뉴의 서브메뉴 선택

    if ($submenu.length > 0) { // 서브메뉴가 있는 경우
      e.preventDefault(); // 기본 링크 이동 방지 (서브메뉴가 있는 경우만)
      
      if ($submenu.is(":visible")) {
        $submenu.stop(true, true).slideUp();
      } else {
        $(".submenu").stop(true, true).slideUp(); // 다른 서브메뉴 닫기
        $submenu.stop(true, true).slideDown(); // 현재 서브메뉴 열기
      }
    }
    // 서브메뉴가 없는 경우에는 기본 a 태그 동작 (페이지 이동)
  });

  // 메뉴 외부를 클릭하면 서브메뉴 닫기
  $(document).click(function (e) {
    if (!$(e.target).closest("#menu-box").length) {
      $(".submenu").stop(true, true).slideUp();
    }
  });
});





// $(document).ready(function () {
//   // 기본적으로 모든 서브메뉴 숨김
//   $(".submenu").hide();

//   // 메뉴 버튼 클릭 시 사이드 메뉴 열기
//   $("#btn-open").click(function () {
//     $("#main-menu-mypage").css({ right: 0 });
//   });

//   // 닫기 버튼 클릭 시 사이드 메뉴 닫기
//   $("#btn-close").click(function () {
//     $("#main-menu-mypage").css({ right: "-100vw" });
//   });

//   // 클릭 시 서브메뉴 열고 닫기 (토글 방식)
//   $('#menu-box > nav > .gnb > li > a').click(function (e) {
//     e.preventDefault(); // 기본 동작 방지

//     var $submenu = $(this).next('.submenu'); // 현재 클릭한 메뉴의 서브메뉴 선택

//     if ($submenu.is(":visible")) {
//       // 현재 서브메뉴가 열려 있으면 닫기
//       $submenu.stop(true, true).slideUp();
//     } else {
//       // 모든 서브메뉴 닫기
//       $(".submenu").stop(true, true).slideUp();

//       // 현재 서브메뉴 열기
//       $submenu.stop(true, true).slideDown();
//     }

//     e.stopPropagation(); // 이벤트 버블링 방지 (부모 요소까지 이벤트 전달되지 않도록)
//   });

//   // 메뉴 외부를 클릭하면 서브메뉴 닫기
//   $(document).click(function (e) {
//     if (!$(e.target).closest("#menu-box").length) {
//       $(".submenu").stop(true, true).slideUp();
//     }
//   });
// });
