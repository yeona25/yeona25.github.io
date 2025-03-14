$(function(){

    // 폼 체크 박스 - 객실 이용 수칙 - 클릭 이벤트
    $(".form-check-box:first").click(function() {  // 클래스를 두개 줘서 적용해 보기,,, 휘....
    $(".form-check-box:first").toggleClass("click");
    $(".notice-list:first").slideToggle();
    console.log($(".form-check-box:first").hasClass("click"));
    });

    // 폼 체크 박스 - 환불 방침 - 클릭 이벤트
    $(".form-check-box:last").click(function() {
        $(".form-check-box:last").toggleClass("click");
        // console.log($(".form-check-box:last").hasClass("click"));

        $(".notice-list:last").slideToggle();
    });


    //체크 박스 확인 
    $("#input-complet").on("click", function() {
        const frm = $('form[name="reserve-info-form"]');
        
        // 객실 이용 수칙 체크
        if (!frm.find('input[name="rule1"]').is(':checked')) {
            alert("객실 이용 수칙에 동의하세요!");
            frm.find('input[name="rule1"]').focus();
            return false; // 필수! 클릭 후 페이지를 넘기지 않기 위해 사용
        }
        // 환불 방침 체크
        if (!frm.find('input[name="rule2"]').is(':checked')) {
            alert("환불 방침에 동의하세요!");
            frm.find('input[name="rule2"]').focus();
            return false; 
        }
        // 전체 선택 폼의 체크 여부
        if (frm.find('input[name="rule1"]').is(':checked') &&  frm.find('input[name="rule2"]').is(':checked')) { 
            frm.find('input[type="checkbox"]').prop('checked', true);
        } else {
            frm.find('input[type="checkbox"]').prop('checked', false);
        }
    });
});