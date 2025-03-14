<?php
// 게시글 데이터를 PHP 배열로 생성
$posts = [
    ['id' => 8, 'category' => '공지', 'title' => '2025년 새해맞이 겨울 프로모션 안내', 'date' => '2024-01-06'],
    ['id' => 7, 'category' => '', 'title' => '고요화 개인정보처리방침 개정안내', 'date' => '2024-01-05'],
    ['id' => 6, 'category' => '', 'title' => '2024년 12월 이벤트', 'date' => '2024-12-01'],
    ['id' => 5, 'category' => '', 'title' => '고요화 개인정보처리방침 개정안내', 'date' => '2024-11-31'],
    ['id' => 4, 'category' => '', 'title' => '체크인 시간변경 안내', 'date' => '2024-11-24'],
    ['id' => 3, 'category' => '', 'title' => '고요화 개인정보처리방침 개정안내', 'date' => '2024-10-21'],
    ['id' => 2, 'category' => '', 'title' => '객실 취소 규정 변경 안내', 'date' => '2024-10-20'],
    ['id' => 1, 'category' => '', 'title' => '고요화 개인정보처리방침 개정안내', 'date' => '2024-10-03'],
];

// 검색 기능: 사용자가 입력한 검색어를 기준으로 필터링
$searchQuery = isset($_GET['search']) ? $_GET['search'] : '';

if ($searchQuery) {
    // 검색어가 있을 경우, 제목에 해당 검색어가 포함된 게시글만 필터링
    $posts = array_filter($posts, function($post) use ($searchQuery) {
        return stripos($post['title'], $searchQuery) !== false;
    });
}
?>