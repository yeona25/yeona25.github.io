<?php
	if(!isset($_POST['user_id']) || // id와 패스워드를 입력했는지 체크
	!isset($_POST['user_pw'])) exit;

	$user_id = $_POST['user_id']; // 입력한 id와  패스워드 변수에 대입
	$user_pw = $_POST['user_pw'];
	$pw_check = $_POST['pw_check'];

	$members = array( // id를 기준으로 패스워드와 이름이 있음.
		'goyohwa123'=>array('pw'=>'12345', // 'goyohwa'는 인덱스 
		'name'=>'고요화'),
		'2team'=>array('pw'=>'56789', 
		'name'=>'2조 화이팅!')
	);

	if(isset($members[$user_id]) &&  // id가 있고,
	$members[$user_id]['pw'] == $user_pw && 
    $members[$user_id]['pw'] == $pw_check) { // id가 가진 패스워드가 입력받은 패스워드와 일치하면,
		echo '{"user_id":"'.$user_id.'", 
		"user_name": "'.$members[$user_id]['name'].'"}'; // id와 이름을 되돌려 줌(echo)
	}
?>