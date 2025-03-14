$(function() {
    $(document).ready(function() {
        var urlParams = new URLSearchParams(window.location.search);
        var selectedMenu = urlParams.get('tour');

        if (selectedMenu === '1') {
            $('#tour1').click();
        } else if (selectedMenu === '2') {
            $('#tour2').click();
        } else if (selectedMenu === '3') {
            $('#tour3').click();
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


    $("#tour1").on("click", function() {
        //sub-menu버튼 선택됨
        $(".sub-list > li > a")
        .css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });
        $("#tour1").css({
            "background-color": "#1c1814"
        });
        $("#tour1 > p").css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/tour_img1_2.jpg").attr("alt", "동궁과월지1")
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/tour_img1_3.jpg").attr("alt", "동궁과월지2")
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/tour_img1_4.jpg").attr("alt", "동궁과월지3")
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/cafe_img1_5.jpg").attr("alt", "동궁과월지4")


        //텍스트 바꾸기
        $(".intro > #place-title").text("동궁과 월지");
        $(".intro .text-list > li:first > p").text("경북 경주시 원화로 102 안압지");
        $(".intro .text-list > li:eq(1) > p").text("09:00 - 22:00 (입장 21:30 마감)");
        $(".intro .text-list > li:eq(2) > p").text("도보로 15분, 차로 3분 소요 (1.6km)");
        $(".intro .text-list > li:last > p").html(`통일신라의 별궁이 자리했던 궁궐터 <br> 달이 비치는 연못 야경이 유명`);

        // 플레이스 버튼 링크 변경하기
        $(".naver-place-btn > button").val("hhttps://naver.me/5FmSoI8P");
    });


    $("#tour2").on("click", function() {
        //sub-menu버튼 선택됨
        $(".sub-list > li > a")
        .css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });

        $("#tour2").css({
            "background-color": "#1c1814"
        });
        $("#tour2 > p").css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/tour_img2_2.jpg").attr("alt", "첨성대1")
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/tour_img2_3.jpg").attr("alt", "첨성대2")
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/tour_img2_4.jpg").attr("alt", "첨성대3")
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/tour_img2_5.jpg").attr("alt", "첨성대4")

        //텍스트 바꾸기
        $(".intro > #place-title").text("첨성대");
        $(".intro .text-list > li:first > p").text("경북 경주시 인왕동 839-1");
        $(".intro .text-list > li:eq(1) > p").html("없음");
        $(".intro .text-list > li:eq(2) > p").text("도보로 약 16분, 차로 약 5분 (2.3km)");
        $(".intro .text-list > li:last > p").html("신라의 천문관측소 <br> 9월부터 가을철 물든 핑크뮬리가 유명");

        //네이버 플레이스 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/GJTiv7JT");
    });


    $("#tour3").on("click", function() {
        //sub-menu 버튼 선택
        $(".sub-list > li > a").css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });

        $("#tour3")
        .css({
            "background-color": "#1c1814"
        });
        $("#tour3 > p")
        .css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/tour_img3_2.jpg").attr("alt", "신라왕경숲1")
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/tour_img3_3.jpg").attr("alt", "신라왕경숲2")
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/tour_img3_4.JPG").attr("alt", "신라왕경숲3")
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/tour_img3_5.png").attr("alt", "신라왕경숲4")

        //텍스트 바꾸기
        $(".intro > #place-title").text("신라왕경숲");
        $(".intro .text-list > li:first > p").text("경북 경주시 구황동");
        $(".intro .text-list > li:eq(1) > p")
        .html("없음");
        $(".intro .text-list > li:eq(2) > p").text("차로 5분(2.8km)");
        $(".intro .text-list > li:last > p").html(`3-4월 피어난 벚꽃으로 유명<br>경주 내 최대 숲공간으로 도심 속 녹음을 즐길 수 있음`);

        //네이버 플레이스 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/F3TiM6DT");
    });
});