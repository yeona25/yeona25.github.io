$(function () {
    const textH3 = "How about this?";
    const textStrong = "\"경주에서 무엇을 하면 좋을까요?\"";
    let indexH3 = 0;
    let indexStrong = 0;

    $('.intro > p').hide();
    function startAnimation() {
        $('.intro  p').addClass('animation'); // 애니메이션 클래스 추가
        $('.intro  p').fadeIn(); // 요소를 서서히 나타나게 함

        function applyAnimations() {
            if ($(window).width() <= 360) { // 모바일
                $('.meals .collage li:first').addClass('lf-to-rt-ani');
                $('.meals .collage li:first').next().addClass('rt-to-lf-ani');
                $('.meals .collage li:first').next().next().addClass('rt-to-lf-ani');
            } else { // 데스크탑
                $('.meals .collage li:first').addClass('lf-to-rt-ani');
                $('.meals .collage li:first').next().addClass('rt-to-lf-ani');
                $('.meals .collage li:first').next().next().addClass('dw-to-up-ani');
            }
        }

        // 애니메이션 적용
        setTimeout(applyAnimations, 30);

        // 리사이즈 이벤트 추가
        $(window).resize(function () {
            applyAnimations();
        });
    }

    $(window).scroll(function () {  // 스크롤 이벤트 
        const windowScrollTop = $(window).scrollTop();
        const mealsScrollTop = $('.meals').offset().top;
        const cafeScrollTop = $('.cafe').offset().top;
        const tourScrollTop = $('.tour').offset().top;

        if (windowScrollTop >= mealsScrollTop - 100) {  // 밀스 부분 
            if ($(window).width() <= 360) { // 모바일
                $('.meals .collage li:first').addClass('lf-to-rt-ani');
                $('.meals .collage li:first').next().addClass('rt-to-lf-ani');
                $('.meals .collage li:first').next().next().addClass('rt-to-lf-ani');
            } else { // 데스크탑
                $('.meals .collage li:first').addClass('lf-to-rt-ani');
                $('.meals .collage li:first').next().addClass('rt-to-lf-ani');
                $('.meals .collage li:first').next().next().addClass('dw-to-up-ani');
            }
        } else {
            // 스크롤이 cafeScrollTop보다 위로 올라가면 클래스 제거
            $('.meals .collage li:first').removeClass('lf-to-rt-ani');
            $('.meals .collage li:first').next().removeClass('rt-to-lf-ani');
            $('.meals .collage li:first').next().next().removeClass('rt-to-lf-ani');

            // 데스크탑의 경우 dw-to-up-ani 클래스도 제거
            if ($(window).width() > 360) {
                $('.meals .collage li:first').next().next().removeClass('dw-to-up-ani');
            }
        }

        if (windowScrollTop >= cafeScrollTop - 100) {  // 카페 부분 
            console.log('cafeScrollTop:', cafeScrollTop, 'windowScrollTop:', windowScrollTop);

            if ($(window).width() <= 360) { // 모바일
                $('.cafe .collage li:first').addClass('lf-to-rt-ani');
                $('.cafe .collage li:first').next().addClass('rt-to-lf-ani');
                $('.cafe .collage li:first').next().next().addClass('rt-to-lf-ani');
            } else { // 데스크탑
                $('.cafe .collage li:first').addClass('lf-to-rt-ani');
                $('.cafe .collage li:first').next().addClass('dw-to-up-ani');
                $('.cafe .collage li:first').next().next().addClass('rt-to-lf-ani');
            }
        } else {
            // 스크롤이 cafeScrollTop보다 위로 올라가면 클래스 제거
            $('.cafe .collage li:first').removeClass('lf-to-rt-ani');
            $('.cafe .collage li:first').next().removeClass('rt-to-lf-ani');
            $('.cafe .collage li:first').next().next().removeClass('rt-to-lf-ani');

            // 데스크탑의 경우 dw-to-up-ani 클래스도 제거
            if ($(window).width() > 360) {
                $('.cafe .collage li:first').next().removeClass('dw-to-up-ani');
            }
        }

        if (windowScrollTop >= tourScrollTop - 100) {  // 투어 부분 
            if ($(window).width() <= 360) { // 모바일
                $('.tour .collage li:first').addClass('lf-to-rt-ani');
                $('.tour .collage li:first').next().addClass('rt-to-lf-ani');
                $('.tour .collage li:first').next().next().addClass('rt-to-lf-ani');
            } else { // 데스크탑
                $('.tour .collage li:first').addClass('lf-to-rt-ani');
                $('.tour .collage li:first').next().addClass('dw-to-up-ani');
                $('.tour .collage li:first').next().next().addClass('dw-to-up-ani');
            }
        } else {
            // 스크롤이 cafeScrollTop보다 위로 올라가면 클래스 제거
            $('.tour .collage li:first').removeClass('lf-to-rt-ani');
            $('.tour .collage li:first').next().removeClass('rt-to-lf-ani');
            $('.tour .collage li:first').next().next().removeClass('rt-to-lf-ani');

            // 데스크탑의 경우 dw-to-up-ani 클래스도 제거
            if ($(window).width() > 360) {
                $('.tour .collage li:first').next().removeClass('dw-to-up-ani');
                $('.tour .collage li:first').next().next().removeClass('dw-to-up-ani');
            }
        }
    });

    function typeTextH3() {
        if (indexH3 < textH3.length) {
            $('#typing-h3').append(textH3.charAt(indexH3));
            indexH3++;
            setTimeout(typeTextH3, 30); // ms 간격으로 타이핑
        } else {
            typeTextStrong(); // H3 타이핑이 끝나면 Strong 타이핑 시작
        }
    }

    function typeTextStrong() {
        if (indexStrong < textStrong.length) {
            $('#typing-strong').append(textStrong.charAt(indexStrong));
            indexStrong++;
            setTimeout(typeTextStrong, 30); // ms 간격으로 타이핑
        } else {  // 타이핑이 끝난 후 P의 애니메이션 실행
            startAnimation();
        }
    }

    $(document).ready(function () {
        setTimeout(typeTextH3, 400); // 1초 후에 H3 타이핑 시작
    });


});



// 스크롤 애니메이션 
$(window).scroll(function () {

    var scrollTop = $(this).scrollTop();

    $('.meals').each(function () {
        var offsetTop = $(this).offset().top;
        if (scrollTop + $(window).height() > offsetTop) {
            $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
        } else {
            $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
        }
    });

    $('.cafe').each(function () {
        var offsetTop = $(this).offset().top;
        if (scrollTop + $(window).height() > offsetTop) {
            $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
        } else {
            $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
        }
    });

    $('.tour').each(function () {
        var offsetTop = $(this).offset().top;
        if (scrollTop + $(window).height() > offsetTop) {
            $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
        } else {
            $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
        }
    });

});
// 초기 상태 설정
$('.meals').css({ 'opacity': 0, 'transform': 'translateY(100px)' });
$('.cafe').css({ 'opacity': 0, 'transform': 'translateY(-100px)' });
$('.tour').css({ 'opacity': 0, 'transform': 'translateY(-100px)' });