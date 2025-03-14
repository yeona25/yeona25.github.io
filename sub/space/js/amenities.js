$(document).ready(function () {
    // 스크롤 이벤트
    $(window).scroll(function () {
        // 각 요소의 위치를 가져옵니다.
        var scrollTop = $(this).scrollTop();

        // 자쿠지 애니메이션 (왼쪽에서 오른쪽)
        $('.amenities-zakuzi').each(function () {
            var offsetTop = $(this).offset().top;
            if (scrollTop + $(window).height() > offsetTop) {
                $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
            } else {
                $(this).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
            }
        });

        // 불멍 애니메이션 (오른쪽에서 왼쪽)
        $('.amenities-fire').each(function () {
            var offsetTop = $(this).offset().top;
            if (scrollTop + $(window).height() > offsetTop) {
                $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
            } else {
                $(this).css({ 'opacity': 0, 'transform': 'translateX(100px)' });
            }
        });

        // 정원 애니메이션 (왼쪽에서 오른쪽)
        $('.amenities-garden').each(function () {
            var offsetTop = $(this).offset().top;
            if (scrollTop + $(window).height() > offsetTop) {
                $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
            } else {
                $(this).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
            }
        });

        $('.amenities-other').each(function () {
            var offsetTop = $(this).offset().top;
            if (scrollTop + $(window).height() > offsetTop) {
                $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
            } else {
                $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
            }
        });
    });

    // 초기 상태 설정
    $('.amenities-zakuzi, .amenities-garden').css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
    $('.amenities-fire').css({ 'opacity': 0, 'transform': 'translateX(100px)' });

    $('.amenities-other').css({ 'opacity': 0, 'transform': 'translateY(-100px)' });
});