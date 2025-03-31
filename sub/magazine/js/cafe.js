$(function() {
    $(document).ready(function() {
        var urlParams = new URLSearchParams(window.location.search);
        var selectedMenu = urlParams.get('cafe');

        if (selectedMenu === '1') {
            $('#cafe1').click();
        } else if (selectedMenu === '2') {
            $('#cafe2').click();
        } else if (selectedMenu === '3') {
            $('#cafe3').click();
        }

        // 메뉴 클릭 시 스크롤 이동
        $('.sub-list > li > a').on('click', function(e) {
            e.preventDefault();
        // 선택된 메뉴에 따라 스크롤 위치 조정
        $('html, body').animate({
            scrollTop: $('.place-intro h3').offset().top-100
        }, 1000); // 0은 애니메이션 없이 즉시 이동
        });
    });

    $(".naver-place-btn > button").on("click", function() {
        window.open(this.value, "name", "_blank");
    }).on("mouseover", function() {
        $(this).css({
            "background-color": "#4EBB7F",
            "color": "#fff"
        });
    }).on("mouseout", function() {
        $(this).css({
            "background-color": "transparent",
            "color": "#4EBB7F"
        })
    })

    //이미지 슬라이드
    $('.btn-container > #btn1').on("click", function() {
        $('.img-list > li').stop().fadeOut();
        $('.img-list > li:first').stop().fadeIn(500);

        $(".btn-container > span")
        .stop().animate({
            width: "14px", 
            height: "14px"
        });
        $(".btn-container > span").css({
            "background-color": "#A79277"
        });
        $(this)
        .stop().animate({
            width: "50px",
            height: "14px",
        }, 300);
        $(this).css({
            "background-color": "#1c1814"
        });
        
    });
    $('.btn-container > #btn2').on("click", function() {
        $('.img-list > li').stop().fadeOut();
        $('.img-list > li:eq(1)').stop().fadeIn(500);

        $(".btn-container > span")
        .stop().animate({
            width: "14px", 
            height: "14px"
        });
        $(".btn-container > span").css({
            "background-color": "#A79277"
        });
        $(this)
        .stop().animate({
            width: "50px",
            height: "14px",
        }, 300);
        $(this).css({
            "background-color": "#1c1814"
        });
    });
    $('.btn-container > #btn3').on("click", function() {
        $('.img-list > li').stop().fadeOut();
        $('.img-list > li:eq(2)').stop().fadeIn(500);

        $(".btn-container > span")
        .stop().animate({
            width: "14px", 
            height: "14px"
        });
        $(".btn-container > span").css({
            "background-color": "#A79277"
        });
        $(this)
        .stop().animate({
            width: "50px",
            height: "14px",
        }, 300);
        $(this).css({
            "background-color": "#1c1814"
        });
    });
    $('.btn-container > #btn4').on("click", function() {
        $('.img-list > li').stop().fadeOut();
        $('.img-list > li:eq(3)').stop().fadeIn(500);

        $(".btn-container > span")
        .stop().animate({
            width: "14px", 
            height: "14px"
        });
        $(".btn-container > span").css({
            "background-color": "#A79277"
        });
        $(this)
        .stop().animate({
            width: "50px",
            height: "14px",
        }, 300);
        $(this).css({
            "background-color": "#1c1814"
        });
    });
    $('.btn-container > #btn5').on("click", function() {
        $('.img-list > li').stop().fadeOut();
        $('.img-list > li:last').stop().fadeIn(500);

        $(".btn-container > span")
        .stop().animate({
            width: "14px", 
            height: "14px"
        });
        $(".btn-container > span").css({
            "background-color": "#A79277"
        });
        $(this)
        .stop().animate({
            width: "50px",
            height: "14px",
        }, 300);
        $(this).css({
            "background-color": "#1c1814"
        });
    });


    $("#cafe1").on("click", function() {
        //sub-menu버튼 선택됨
        $(".sub-list > li > a")
        .css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });
        $("#cafe1").css({
            "background-color": "#1c1814"
        });
        $("#cafe1 > p").css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/cafe_img1_1.jpg").attr("alt", "소소풍경베이커리1")
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/cafe_img1_2.jpg").attr("alt", "소소풍경베이커리2")
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/cafe_img1_3.jpg").attr("alt", "소소풍경베이커리3")
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/cafe_img1_4.jpg").attr("alt", "소소풍경베이커리4")
        $(".intro .img-list li:last > img").attr("src", "./images/cafe_img1_5.jpg").attr("alt", "소소풍경베이커리5")


        //텍스트 바꾸기
        $(".intro > #place-title").text("소소풍경 베이커리");
        $(".intro .text-list > li:first > p").text("경북 경주시 양정로 51");
        $(".intro .text-list > li:eq(1) > p").text("08:00 - 21:30 (연중 무휴)");
        $(".intro .text-list > li:eq(2) > p").text("도보로 3분, 차로 1분 소요 (200m)");
        $(".intro .text-list > li:last > p").html(`천연 발효종을 사용하여 반죽한 빵<br>다양한 베이커리와 계절별 시즌 메뉴`);

        // 플레이스 버튼 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/5LHcfXCi");
    });


    $("#cafe2").on("click", function() {
        //sub-menu버튼 선택됨
        $(".sub-list > li > a")
        .css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });

        $("#cafe2").css({
            "background-color": "#1c1814"
        });
        $("#cafe2 > p").css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/cafe_img2_1.jpeg").attr("alt", "커피명가보스케1")
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/cafe_img2_2.jpg").attr("alt", "커피명가보스케2")
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/cafe_img2_3.jpg").attr("alt", "커피명가보스케3")
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/cafe_img2_4.jpg").attr("alt", "커피명가보스케4")
        $(".intro .img-list li:last > img").attr("src", "./images/cafe_img2_5.jpg").attr("alt", "커피명가보스케5")

        //텍스트 바꾸기
        $(".intro > #place-title").text("커피명가 보스케");
        $(".intro .text-list > li:first > p").text("경북 경주시 현곡면 용담로 477-57");
        $(".intro .text-list > li:eq(1) > p").html("10:00 - 20:00 <br> 라스트 오더 21:00");
        $(".intro .text-list > li:eq(2) > p").text("차로 17분(9.1km)");
        $(".intro .text-list > li:last > p").html("넓은 정원 공간과 주차장<br>다양한 시그니처메뉴 판매<br>음료부터 베이커리, 양식 메뉴 판매");

        //네이버 플레이스 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/GV2tpSPw");
    });


    $("#cafe3").on("click", function() {
        //sub-menu 버튼 선택
        $(".sub-list > li > a").css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });

        $("#cafe3")
        .css({
            "background-color": "#1c1814"
        });
        $("#cafe3 > p")
        .css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/cafe_img3_1.jpg").attr("alt", "르씨엘1")
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/cafe_img3_2.jpg").attr("alt", "르씨엘2")
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/cafe_img3_3.jpg").attr("alt", "르씨엘3")
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/cafe_img3_4.jpg").attr("alt", "르씨엘4")
        $(".intro .img-list li:last > img").attr("src", "./images/cafe_img3_5.jpg").attr("alt", "르씨엘5")

        //텍스트 바꾸기
        $(".intro > #place-title").text("르씨엘");
        $(".intro .text-list > li:first > p").text("경북 경주시 석장동 1174");
        $(".intro .text-list > li:eq(1) > p")
        .html("10:00 - 20:00");
        $(".intro .text-list > li:eq(2) > p").text("차로 11분 (5.4km)");
        $(".intro .text-list > li:last > p").html(`대형 카페로 다인원 수용 가능 <br> 대형 주차장 <br> 르씨엘 라떼, 샹들리에 에이드 등 시그니처 메뉴 판매`);

        //네이버 플레이스 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/FJbYBKlM");
    });
});