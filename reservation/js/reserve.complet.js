$(function() {
    $('#infoForm').on('submit', function(event) {
        event.preventDefault(); // 기본 제출 이벤트 방지

        $.ajax({
            type: 'POST',
            url: 'reserve_ok.php', // PHP 파일 경로
            data: $(this).serialize(), 
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    // 휴대폰 번호 중간을 ****로 표기
                    var maskedPhone = response.phone_num.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
                    
                    // HTML 요소에 데이터 삽입
                    $('.name').text(response.name);
                    $('.tel-num').text(maskedPhone);
                    $('.chk-date').text(response.check_in + ' ~ ' + response.check_out);
                    $('.pay-date').text(response.payment_date);
                } else {
                    $('#result').html(response.message);
                }
            },
            error: function() {
                $('#result').html('서버 오류가 발생했습니다.');
            }
        });
    });

    // 특정 위치 (.more)의 위치로 화면이 스크롤되면 애니메이션이 적용되도록 설정
    const enjoyScrollTop = $('.enjoy').offset().top;

    $(window).scroll(function() {
        if ($(this).scrollTop() <= enjoyScrollTop) {
            $('.enjoy').addClass('ani');
        } else {
            $('.enjoy').removeClass('ani');
        }
    });
});
