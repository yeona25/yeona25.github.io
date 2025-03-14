// contents-menu 클릭 시 해당 위치로 이동
$(document).ready(function () {
    $(".contents-menu li a").on("click", function (event) {
        event.preventDefault();

        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});


// answer 답변 슬라이드
$(document).ready(function () {
    $(".question0 li > a").click(function () {
        const bc = $(this).data("bg");
        $(".question0 li > a").removeClass();
        $(".answer").slideUp(300);

        if ($(this).next().css("display") == "block") {
            $(this).removeClass().next().slideUp(300);
            $(this).removeClass(bc); //.next().slideDown(300);
        } else {
            $(this).addClass(bc).next().slideDown(300);
        }
    });
});


