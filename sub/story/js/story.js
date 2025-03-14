$(function() {
    if ($(window).width() <= 360 ) { // 모바일
        $('.main-img').hide();
    }
    if ($(window).width() >= 1440) { // PC 버전
        $('.title-intro').hide();
    } else { // 모바일 버전
        $('.title-intro').show();
    }
    
    $(window).ready(function() {
        if ($(window).width() <= 360 ) { // 모바일
            $('.main-img').fadeIn(1000);
            $('.logo1').addClass('lf-ani');
            $('.title-intro').addClass('rt-ani');
        } else { // PC버전 
            $('.main-img').delay(300).addClass('img-ani');
        }
    });

    

    const text = "고\n요\n화\n브\n랜\n드\n스\n토\n리";
    const $typingTextElement = $('#typing-text');
    let index = 0;
    let typingStarted = false; // 타이핑이 시작되었는지 여부를 추적

    function type() {
        if (index < text.length) {
            $typingTextElement.append(text.charAt(index));
            index++;
            setTimeout(type, 150); // 타이핑 속도 조절
        }
    }

    function checkScroll() {
        const logo2ScrollTop = $('.logo2').offset().top; // 타이핑 텍스트의 위치
        const windowScrollTop = $(window).scrollTop(); // 현재 스크롤 위치

        // 스크롤 위치가 타이핑 텍스트의 위치와 같을때
        if (windowScrollTop <= logo2ScrollTop && !typingStarted) {
            typingStarted = true; // 타이핑 시작 플래그 설정
            type(); // 타이핑 시작
            if (typingStarted) { // 타이핑 이벤트가 실행중이면
                $('.title-intro').fadeIn(1000);
                $('.logo2').css('opacity',1);
                
            }
        }

        const part1Scrolltop = $('.part1').offset().top;

        if (windowScrollTop >= part1Scrolltop - 100) {
            $('.part2').addClass('ani');
        } else {
            $('.part2').removeClass('ani');
        }

        if (windowScrollTop >= part1Scrolltop - 400) {
            $('.part2-2').addClass('anime');
        } else {
            $('.part2-2').removeClass('anime');
        }
        console.log('part1Scrolltop:', part1Scrolltop, 'windowScrollTop:', windowScrollTop);
    }

    $(window).on('scroll', checkScroll); // 스크롤 이벤트 리스너 추가
});