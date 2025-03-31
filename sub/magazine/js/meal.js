$(function() {
    $(document).ready(function() {

        var urlParams = new URLSearchParams(window.location.search);
        var selectedMenu = urlParams.get('meal');

        if (selectedMenu === '1') {
            $('#meal1').click();
        } else if (selectedMenu === '2') {
            $('#meal2').click();
        } else if (selectedMenu === '3') {
            $('#meal3').click();
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
        $('.img-list > li:first').stop().fadeIn();

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
        $('.img-list > li:eq(1)').stop().fadeIn();

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
        $('.img-list > li:eq(2)').stop().fadeIn();

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
        $('.img-list > li:eq(3)').stop().fadeIn();

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
        $('.img-list > li:last').stop().fadeIn();

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


    $("#meal1").on("click", function() {
        //sub-menu버튼 선택됨
        $(".sub-list > li > a")
        .css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });
        $("#meal1").css({
            "background-color": "#1c1814"
        });
        $("#meal1 > p").css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/meal_img1_1.jpg").attr("alt", "웰빙황토우렁이쌈밥1");
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/meal_img1_2.jpg").attr("alt", "웰빙황토우렁이쌈밥2");
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/meal_img1_3.jpg").attr("alt", "웰빙황토우렁이쌈밥3");
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/meal_img1_4.jpg").attr("alt", "웰빙황토우렁이쌈밥4");
        $(".intro .img-list li:last > img").attr("src", "./images/meal_img1_5.jpg").attr("alt", "웰빙황토우렁이쌈밥5");


        //텍스트 바꾸기
        $(".intro > #place-title").text("웰빙황토우렁이쌈밥");
        $(".intro .text-list > li:first > p").text("경북 경주시 현곡면 용담로 847");
        $(".intro .text-list > li:eq(1) > p").text("11:00 - 19:00 (매주 목요일 정기 휴무)");
        $(".intro .text-list > li:eq(2) > p").text("차로 19분 소요 (11km)");
        $(".intro .text-list > li:last > p").html(`국내산 우렁이를 사용한 쌈밥과 무침회<br>국산 쌈채소가 나오는 세트메뉴`);

        // 플레이스 버튼 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/Fw7iLyDC");
    });


    $("#meal2").on("click", function() {
        //sub-menu버튼 선택됨
        $(".sub-list > li > a")
        .css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });

        $("#meal2").css({
            "background-color": "#1c1814"
        });
        $("#meal2 > p").css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/meal_img2_1.jpg").attr("alt", "보불어탕명가1");
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/meal_img2_2.jpg").attr("alt", "보불어탕명가2");
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/meal_img2_3.jpg").attr("alt", "보불어탕명가3");
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/meal_img2_4.jpg").attr("alt", "보불어탕명가4");
        $(".intro .img-list li:last > img").attr("src", "./images/meal_img2_5.jpg").attr("alt", "보불어탕명가5");

        //텍스트 바꾸기
        $(".intro > #place-title").text("보불어탕명가");
        $(".intro .text-list > li:first > p").text("경북 경주시 보불로 174-17");
        $(".intro .text-list > li:eq(1) > p").html("10:00 - 20:00<br>(브레이크 타임 15:00 - 16:30)<br>정기휴무 매주 일/월요일");
        $(".intro .text-list > li:eq(2) > p").text("차로 18분 소요 (13km)");
        $(".intro .text-list > li:last > p").html("얼큰한 어탕을 활용한 수제비와 칼국수<br>포장 가능");

        //네이버 플레이스 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/xQe2Hjg3");
    });


    $("#meal3").on("click", function() {
        //sub-menu 버튼 선택
        $(".sub-list > li > a").css({
            "background": "transparent"
        });
        $(".sub-list > li > a > p")
        .css({
            "color": "#1c1814"
        });

        $("#meal3")
        .css({
            "background-color": "#1c1814"
        });
        $("#meal3 > p")
        .css({
            "color": "#fff"
        });

        //이미지 슬라이드 첫번째 이미지 버튼 선택해두기
        $('.btn-container > #btn1').click();

        //사진 바꾸기
        $(".intro .img-list li:first > img").attr("src", "./images/meal_img3_1.jpg").attr("alt", "피자옥1");
        $(".intro .img-list li:eq(1) > img").attr("src", "./images/meal_img3_2.jpg").attr("alt", "피자옥2");
        $(".intro .img-list li:eq(2) > img").attr("src", "./images/meal_img3_3.jpg").attr("alt", "피자옥3");
        $(".intro .img-list li:eq(3) > img").attr("src", "./images/meal_img_3_4.jpg").attr("alt", "피자옥4");
        $(".intro .img-list li:last > img").attr("src", "./images/meal_img3_5.jpg").attr("alt", "피자옥5");

        //텍스트 바꾸기
        $(".intro > #place-title").text("피자옥");
        $(".intro .text-list > li:first > p").text("경북 경주시 손효자길 1 1층");
        $(".intro .text-list > li:eq(1) > p")
        .html("11:30 - 21:15<br>(브레이크 타임 15:15-17:00)<br>공휴일 및 주말은 브레이크타임 없이 운영");
        $(".intro .text-list > li:eq(2) > p").text("도보로 26분, 차로 8분 (2km)");
        $(".intro .text-list > li:last > p").html(`화덕에서 직접 굽는 수제 피자 <br> 발효종을 사용한 찰진 식감의 도우`);

        //네이버 플레이스 링크 변경하기
        $(".naver-place-btn > button").val("https://naver.me/x9BN62sq");
    });
});