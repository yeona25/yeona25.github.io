$(function() {
    const $frm = $("#login-form");
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
                        "font-size": "50px",
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
});
