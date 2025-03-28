$(function() {
    const $frm = $("#membership-form");
    $frm.on("submit", function(e) {
        e.preventDefault();

        const userData1 = $frm.serialize(); // 폼에 입력한 데이터를 쿼리 스트링 형식으로 변환

        $.ajax({
            type: "POST",
            url: $frm.attr("action"), 
            data: userData1,  // 사용자가 입력한 값을 보냄.
            success: function(res) {  // 파라미터 res에는 ehco로 되돌려 받은 id, name이 들어감
                const jsonString = '{"@key": "value"}'; // @ 기호가 포함된 JSON 문자열
                try {
                    // HTML 엔티티 변환
                    res = res.replace(/&amp;gt;/g, '>').replace(/&amp;amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                    const parsedObject = JSON.parse(jsonString);
                    console.log(parsedObject); // { '@key': 'value' }
                    
                    const jsonData = JSON.parse(res); // 되돌려 받은 데이터를 오브젝트 형식으로 변환
                    const message = `${jsonData.user_name} (${jsonData.user_id})님 반갑습니다!`;
                    $("main").html(message).css({
                        "font-size": "40px",
                        "padding": "50px",
                        "color": "white"
                    });
                } catch (error) {
                    console.error("JSON 파싱 오류:", error);
                    alert('서버 응답이 유효한 JSON이 아닙니다.');
                };
            }
        });
    });

    // 개인정보, 약관 체크 확인
    //체크 박스 확인 
    $("#join-btn").on("click", function() {
        const frm = $('form[name="membership-form"]');
        
        // 개인정보 체크
        if (!frm.find('input[name="info-agree"]').is(':checked')) {
            alert("개인정보보호 처리방침에 동의하세요!");
            frm.find('input[name="info-agree"]').focus();
            return false; // 필수! 클릭 후 페이지를 넘기지 않기 위해 사용
        }
        // 이용약관 체크
        if (!frm.find('input[name="rule-agree"]').is(':checked')) {
            alert("이용 약관에 동의하세요!");
            frm.find('input[name="rule-agree"]').focus();
            return false; 
        }
        // 전체 선택 폼의 체크 여부
        if (frm.find('input[name="info-agree"]').is(':checked') &&  frm.find('input[name="rule-agree"]').is(':checked')) { 
            frm.find('input[type="checkbox"]').prop('checked', true);
        } else {
            frm.find('input[type="checkbox"]').prop('checked', false);
        }
    });

    // 개인정보, 이용약관 모달창
    $('label[for="info-agree"] > .info-chk').click(function() {
        $(".membership-form").hide();
        $("html").css("overflow", "hidden"); // 모달창이 떴을때 스크롤 금지
        $('input[name="info-agree"]').next().show();

        $(".close").click(function() {
        $(".membership-form").show();
        $("html").css("overflow", "auto"); // 모달창이 떴을때 스크롤 가능
        $('input[name="info-agree"]').next().hide();
        });
    });

    $('label[for="rule-agree"] > .info-chk').click(function() {
        $(".membership-form").hide();
        $("html").css("overflow", "hidden"); // 모달창이 떴을때 스크롤 금지
        $('input[name="rule-agree"]').next().show();

        $(".close").click(function() {
        $(".membership-form").show();
        $("html").css("overflow", "auto"); // 모달창이 떴을때 스크롤 가능
        $('input[name="rule-agree"]').next().hide();
        });
    });
});