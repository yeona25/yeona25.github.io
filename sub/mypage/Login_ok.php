<?php
	if(!isset($_POST['user_id']) ||
	!isset($_POST['user_pw'])) exit;

	$user_id = $_POST['user_id'];
	$user_pw = $_POST['user_pw'];

	$members = array(
		'goyohwa123'=>array('pw'=>'12345',
		'name'=>'고요화'),
		'2team'=>array('pw'=>'56789', 
		'name'=>'2조 화이팅!')
	);

	if(isset($members[$user_id]) &&
	$members[$user_id]['pw'] == $user_pw) {
		echo '{"user_id":"'.$user_id.'", 
		"user_name": "'.$members[$user_id]['name'].'"}';
	}
?>