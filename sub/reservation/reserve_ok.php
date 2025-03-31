<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 체크인, 체크아웃 날짜 및 인원 수를 받아옵니다.
    // 체크인 날짜
    $check_in_year = $_POST['check_in_year']; // 체크인 연도
    $check_in_month = $_POST['check_in_month']; // 체크인 월
    $check_in_day = $_POST['check_in_day']; // 체크인 일
    $check_in_date = "$check_in_year-$check_in_month-$check_in_day"; // 체크인 날짜 포맷

    // 체크아웃 날짜
    $check_out_year = $_POST['check_out_year']; // 체크아웃 연도
    $check_out_month = $_POST['check_out_month']; // 체크아웃 월
    $check_out_day = $_POST['check_out_day']; // 체크아웃 일
    $check_out_date = "$check_out_year-$check_out_month-$check_out_day"; // 체크아웃 날짜 포맷

    // 성인 수, 아동수 받아오기
    $adult_count = $_POST['adult_count']; // 성인 수
    $kid_count = $_POST['kid_count']; // 아동 수

    // 입력값 검증
    if (empty($check_in_date) || empty($check_out_date) || !is_numeric($adult_count) || !is_numeric($kid_count)) {
        echo json_encode(array("status" => "error", "message" => "모든 필드를 올바르게 입력해주세요."),JSON_UNESCAPED_UNICODE);
        exit;
    }

    // 성인과 아동의 수가 2 이상인지 확인
    if ($adult_count + $kid_count >= 2) {
        // 체크인/체크아웃 날짜를 DateTime 객체로 변환
        $check_in_day = (int)date('d', strtotime($check_in_date));
        $check_out_day = (int)date('d', strtotime($check_out_date));

        // 예약 불가능한 날짜 확인
        if (in_array($check_in_day, [5, 15, 25]) || in_array($check_out_day, [5, 15, 25])) { 
            echo json_encode(array(
                "status" => "error",
                "message" => "선택하신 날짜는 예약이 불가능합니다."
            ), JSON_UNESCAPED_UNICODE);
            exit;
        }

        // 성함/ 휴대폰 번호 / 이메일 주소 저장 
        $name = isset($_POST['name']) ? $_POST['name'] : '';
        $phone_num = isset($_POST['phon-num']) ? $_POST['phon-num'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';

        // 입력값 유효성 검사
        if (empty($name) || empty($phone_num) || empty($email)) {
            echo json_encode(array("status" => "error", "message" => "모든 필드를 입력해 주세요."), JSON_UNESCAPED_UNICODE);
            exit;
        }

        // 결제일시 
        $payment_date = date('Y-m-d H:i:s');

        // 성공적으로 저장된 경우
        echo json_encode(array(
            "status" => "success",
            "name" => $name,
            "phone_num" => $phone_num,
            "check_in" => $check_in_date,
            "check_out" => $check_out_date,
            "payment_date" => $payment_date,
            "message" => "예약이 성공적으로 완료되었습니다." // 예약 성공 메시지 
        ), JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(array(
            "status" => "error",
            "message" => "성인과 아동의 수가 2 이상이어야 합니다."
        ), JSON_UNESCAPED_UNICODE);
    }
}
?>
