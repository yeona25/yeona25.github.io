$(function() {
    
function Watch() {
let today = new Date();
// console.log(today);

let $nowYear = today.getFullYear();
let $nowMonth = today.getMonth();
let $nowDate = today.getDate();

let $todayYear = $(".calendal-wrapper > .Year > .today-year");  // 년도 
let $preYear = $todayYear.prev();
let $nextYear = $todayYear.next();

$todayYear.val($nowYear);
$preYear.val($nowYear - 1);
$nextYear.val($nowYear + 1);

let $todayMon = $(".calendal-wrapper > .Mon > .today-mon");  // 월
let $preMon = $todayMon.prev();
let $nextMon = $todayMon.next();

$todayMon.val(($nowMonth + 1).toString().padStart(2, '0'))
$preMon.val(($nowMonth).toString().padStart(2, '0'))
$nextMon.val(($nowMonth + 2).toString().padStart(2, '0'))


let $todayDate = $(".calendal-wrapper > .Date > .today-date");  // 일자
let $preDate = $todayDate.prev();
let $nextDate = $todayDate.next();

$todayDate.val($nowDate.toString().padStart(2, '0'));
$preDate.val(($nowDate - 1).toString().padStart(2, '0'));
$nextDate.val(($nowDate + 1).toString().padStart(2, '0'));

// 체크인/체크아웃 버튼 클릭 전에는 오늘 년도와 날짜가 들어옴 
$("span").filter(".year-Date").text($nowYear);
$("span").filter(".mon-Date").text(($nowMonth +1).toString().padStart(2, '0'));
$("span").filter(".date-Date").text(($nowDate).toString().padStart(2, '0'));


// 체크인 달력 
// 년도 클릭 이벤트
let $todateY;
$(".cal1 .pre-year").on("click wheel", function(e) {
    e.preventDefault();
    $nowYear--;

    $todateY=$(".cal1 .today-year").val($nowYear);
    $(".cal1 .pre-year").val($nowYear - 1);
    $(".cal1 .next-year").val($nowYear + 1);

    $(".val1 > .year-Date").text($todateY.val());
});

$(".cal1 .next-year").on("click wheel", function(e) {
    e.preventDefault();
    $nowYear++;

    $todateY=$(".cal1 .today-year").val($nowYear);
    $(".cal1 .pre-year").val($nowYear - 1);
    $(".cal1 .next-year").val($nowYear + 1);
    $(".val1 > .year-Date").text($todateY.val());
});

// 월 클릭 이벤트

// $preMon에 클릭 이벤트 추가
$(".cal1 .pre-mon").on("click wheel", function(e) {
    e.preventDefault();
    // 현재 월 값 가져오기
    let currentPreMon = parseInt($(".cal1 .pre-mon").val());
    let currentTodayMon = parseInt($(".cal1 .today-mon").val());
    let currentNextMon = parseInt($(".cal1 .next-mon").val());
    // console.log(currentTodayYear);

    // 월 값을 1씩 줄이기
    if (currentPreMon > 1) {
        $(".cal1 .pre-mon").val((currentPreMon - 1).toString().padStart(2, '0'));
        $(".cal1 .today-mon").val((currentTodayMon - 1).toString().padStart(2, '0'));
        $(".cal1 .next-mon").val((currentNextMon - 1).toString().padStart(2, '0'));
    } else {
        // 1에서 줄어들면 12로 이동
        $(".cal1 .pre-mon").val('12');
        $(".cal1 .today-mon").val((currentTodayMon - 1).toString().padStart(2, '0'));
        $(".cal1 .next-mon").val((currentNextMon - 1).toString().padStart(2, '0'));
    }

    if (currentTodayMon === 1) {
        $nowYear--; // 1월에서 줄어들면 년도 감소 
        // console.log($nowYear);
        $todateY=$(".cal1 .today-year").val($nowYear);
        $(".cal1 .pre-year").val($nowYear - 1);
        $(".cal1 .next-year").val($nowYear + 1);
        $(".val1 > .year-Date").text($nowYear);
    }
    
    // 현재 월이 1로 줄어들면 12로 이동
    if (currentTodayMon === 1) {
        $(".cal1 .today-mon").val('12');
    }
    
    // 다음 월이 1로 줄어들면 12로 이동
    if (currentNextMon === 1) {
        $nextMon.val('12');
    }
    $(".val1 > .mon-Date").text($(".cal1 .today-mon").val());
});

// $nextMon에 클릭 이벤트 추가
$(".cal1 .next-mon").on("click wheel", function(e) {
    e.preventDefault();
    // 현재 월 값 가져오기
    let currentPreMon = parseInt($(".cal1 .pre-mon").val());
    let currentTodayMon = parseInt($(".cal1 .today-mon").val());
    let currentNextMon = parseInt($(".cal1 .next-mon").val());

    // 월 값을 1씩 늘리기
    if (currentPreMon < 12) {
        $(".cal1 .pre-mon").val((currentPreMon + 1).toString().padStart(2, '0'));
        $(".cal1 .today-mon").val((currentTodayMon + 1).toString().padStart(2, '0'));
        $(".cal1 .next-mon").val((currentNextMon + 1).toString().padStart(2, '0'));
    } else {
        // 12에서 늘어나면 1로 이동
        $(".cal1 .pre-mon").val('01');
        $(".cal1 .today-mon").val((currentTodayMon + 1).toString().padStart(2, '0'));
        $(".cal1 .next-mon").val((currentNextMon + 1).toString().padStart(2, '0'));
        $(".val1 > .mon-Date").text($nowYear);
    }

    if (currentTodayMon === 12) {
        $nowYear++; //  12월에서 늘어나면 년도 증가 
        // console.log($nowYear);
        $todateY=$(".cal1 .today-year").val($nowYear);
        $(".cal1 .pre-year").val($nowYear - 1);
        $(".cal1 .next-year").val($nowYear + 1);
        $(".val1 > .year-Date").text($nowYear);
    }

    // 현재 월이 1로 줄어들면 12로 이동
    if (currentTodayMon === 12) {
        $(".cal1 .today-mon").val('01');
    }
    
    // 다음 월이 1로 줄어들면 12로 이동
    if (currentNextMon === 12) {
        $(".cal1 .next-mon").val('01');
    }
    $(".val1 > .mon-Date").text($(".cal1 .today-mon").val());
});


// 일자 클릭 이벤트 // 미완성...


// $preDate클릭시 이벤트 
$(".cal1 .pre-date").on("click wheel", function(e) {
    e.preventDefault();
    const delta = e.deltaY; // 휠 이벤트의 변화량
    // 변화량을 조절하여 속도를 느리게 함
    const slowDelta = delta * 10; //  곱하여 속도 감소

    // 현재 날짜 값 가져오기
    let currentPreDate = parseInt($(".cal1 .pre-date").val());
    let currentTodayDate = parseInt($(".cal1 .today-date").val());
    let currentNextDate = parseInt($(".cal1 .next-date").val());

    // 현재월의 마지막 날짜 가져오기
    let lastDate = new Date($nowYear, $nowMonth + 1, 0).getDate();
    let firstDate = new Date($nowYear,$nowMonth, 1).getDate();  // 달의 첫번째 일자 1일
    
    // 1에서 줄어들면 이전 달의 마지막 날짜로 이동
    if (currentPreDate <= 1) { // 이전달($nowMonth)
        lastDate = new Date($nowYear, $nowMonth -1, 0).getDate();
        $(".cal1 .pre-date").val(lastDate.toString().padStart(2, '0'));
    } else {
        $(".cal1 .pre-date").val((currentPreDate - 1).toString().padStart(2, '0'));
    }
    
    if (currentNextDate <= 1) { // 다음달 ($nowMonth+2)
        $(".cal1 .next-date").val(lastDate.toString().padStart(2, '0'));
    } else {
        $(".cal1 .next-date").val((currentNextDate - 1).toString().padStart(2, '0'));
    }

    if (currentTodayDate <= 1) { // 현재달 ($nowMonth+1)
        lastDate = new Date($nowYear, $nowMonth - 1, 0).getDate();
        $(".cal1 .today-date").val(lastDate.toString().padStart(2, '0'));

    //월과 년 감소 로직 추가
    if ($nowMonth === 0) { // 1월인 경우
        $nowMonth = 11; // 12월로 변경
        $nowYear--; // 년도 감소
    } else {
        $nowMonth--; // 이전 월로 변경
    }

    // $nextMon값 설정
    if ($nowMonth === 0) { // 1월인 경우
        $(".cal1 .next-mon").val((2).toString().padStart(2, '0')); // 다음 달은 2월
    } else if ($nowMonth === 11) { // 12월인 경우
        $(".cal1 .next-mon").val((1).toString().padStart(2, '0')); // 다음 달은 1월
    } else if ($nowMonth === 10) { // 11월인 경우
        $(".cal1 .next-mon").val((12).toString().padStart(2, '0')); // 다음 달은 12월
    } else {
        $(".cal1 .next-mon").val(($nowMonth + 2).toString().padStart(2, '0')); // 일반적인 경우
    }

    // 월과 년도 업데이트
    $(".cal1 .today-mon").val(($nowMonth + 1).toString().padStart(2, '0'));
    $(".cal1 .pre-mon").val(($nowMonth === 0 ? 12 : $nowMonth).toString().padStart(2, '0'));
    
    // 년도 업데이트
    $(".cal1 .today-year").val($nowYear);
    $(".cal1 .pre-year").val($nowYear - 1);
    $(".cal1 .next-year").val($nowYear + 1);

    } else {
        $(".cal1 .today-date").val((currentTodayDate - 1).toString().padStart(2, '0'));
    }
    console.log(lastDate);
    
    // span 업데이트
    $(".val1 > .year-Date").text($nowYear);
    $(".val1 > .mon-Date").text(($nowMonth + 1).toString().padStart(2, '0'));

    // span 업데이트
    $(".val1 > .date-Date").text($(".cal1 .today-date").val());
});


// $nextDate 클릭 시 이벤트 
$(".cal1 .next-date").on("click wheel", function(e) {
    e.preventDefault();
    const delta = e.deltaY; // 휠 이벤트의 변화량
    // 변화량을 조절하여 속도를 느리게 함
    const slowDelta = delta * 10; // 곱하여 속도 감소

    // 현재 날짜 값 가져오기
    let currentNextDate = parseInt($(".cal1 .next-date").val());
    let currentTodayDate = parseInt($(".cal1 .today-date").val());
    let currentPreDate = parseInt($(".cal1 .pre-date").val());

    // 현재월의 마지막 날짜 가져오기
    let lastDate = new Date($nowYear, $nowMonth + 1, 0).getDate();
    let firstDate = new Date($nowYear, $nowMonth, 1).getDate();  // 달의 첫번째 일자 1일

    // 이전 날짜 업데이트
    let lastMonDate = new Date($nowYear, $nowMonth, 0).getDate(); // 이전 달의 마지막 날짜
    if (currentPreDate >= lastMonDate) { // 이전달($nowMonth)의 마지막 날짜를 초과할 경우
        // 이전 달의 마지막 날짜를 가져오기
        $(".cal1 .pre-date").val(firstDate.toString().padStart(2, '0')); // 이전 달의 마지막 날로 설정
    } else {
        $(".cal1 .pre-date").val((currentPreDate + 1).toString().padStart(2, '0')); // 1씩 증가
    }

    // 현재 날짜 업데이트
    if (currentTodayDate >= lastDate) { // 현재달 ($nowMonth+1)의 마지막 날짜를 초과할 경우
        $(".cal1 .today-date").val(firstDate.toString().padStart(2, '0')); // 현재 달의 첫 번째 날로 설정
        // $todayDate가 1로 증가할 때 $todayMon도 증가
        if (currentTodayDate === lastDate) { // 현재 날짜가 마지막 날일 때
            if ($nowMonth === 11) { // 12월인 경우
                $nowMonth = 0; // 1월로 변경
                $nowYear++; // 년도 증가
            } else {
                $nowMonth++; // 다음 월로 변경
            }
        }
    } else {
        $(".cal1 .today-date").val((currentTodayDate + 1).toString().padStart(2, '0')); // 1씩 증가
    }

    // 다음 달의 날짜 증가 로직
    if (currentNextDate >= lastDate) { // 다음달($nowMonth+2)의 마지막 날짜를 초과할 경우
        $(".cal1 .next-date").val(firstDate.toString().padStart(2, '0')); // 다음 달의 첫 번째 날로 설정
    } else {
        $(".cal1 .next-date").val((currentNextDate + 1).toString().padStart(2, '0')); // 1씩 증가
    }

    // 월과 년도 업데이트
    $(".cal1 .today-mon").val(($nowMonth + 1).toString().padStart(2, '0'));
    $(".cal1 .pre-mon").val(($nowMonth === 0 ? 12 : $nowMonth).toString().padStart(2, '0'));
    $(".cal1 .next-mon").val(($nowMonth + 2 > 12 ? 1 : $nowMonth + 2 ).toString().padStart(2, '0')); // 일반적인 경우

    // 년도 업데이트
    $(".cal1 .today-year").val($nowYear);
    $(".cal1 .pre-year").val($nowYear - 1);
    $(".cal1 .next-year").val($nowYear + 1);

    // span 업데이트
    $(".val1 > .year-Date").text($nowYear);
    $(".val1 > .mon-Date").text(($nowMonth + 1).toString().padStart(2, '0'));
    $(".val1 > .date-Date").text($(".cal1 .today-date").val());
});



// 체크아웃 달력 
// 년도 클릭 이벤트

$(".cal2 .pre-year").on("click wheel", function(e) {
    e.preventDefault();
    $nowYear--;

    $todateY=$(".cal2 .today-year").val($nowYear);
    $(".cal2 .pre-year").val($nowYear - 1);
    $(".cal2 .next-year").val($nowYear + 1);

    $(".val2 > .year-Date").text($todateY.val());
});

$(".cal2 .next-year").on("click wheel", function(e) {
    e.preventDefault();
    $nowYear++;

    $todateY=$(".cal2 .today-year").val($nowYear);
    $(".cal2 .pre-year").val($nowYear - 1);
    $(".cal2 .next-year").val($nowYear + 1);
    $(".val2 > .year-Date").text($todateY.val());
});

// 월 클릭 이벤트

// $preMon에 클릭 이벤트 추가
$(".cal2 .pre-mon").on("click wheel", function(e) {
    e.preventDefault();
    // 현재 월 값 가져오기
    let currentPreMon = parseInt($(".cal2 .pre-mon").val());
    let currentTodayMon = parseInt($(".cal2 .today-mon").val());
    let currentNextMon = parseInt($(".cal2 .next-mon").val());
    // console.log(currentTodayYear);

    // 월 값을 1씩 줄이기
    if (currentPreMon > 1) {
        $(".cal2 .pre-mon").val((currentPreMon - 1).toString().padStart(2, '0'));
        $(".cal2 .today-mon").val((currentTodayMon - 1).toString().padStart(2, '0'));
        $(".cal2 .next-mon").val((currentNextMon - 1).toString().padStart(2, '0'));
    } else {
        // 1에서 줄어들면 12로 이동
        $(".cal2 .pre-mon").val('12');
        $(".cal2 .today-mon").val((currentTodayMon - 1).toString().padStart(2, '0'));
        $(".cal2 .next-mon").val((currentNextMon - 1).toString().padStart(2, '0'));
    }

    if (currentTodayMon === 1) {
        $nowYear--; // 1월에서 줄어들면 년도 감소 
        // console.log($nowYear);
        $todateY=$(".cal2 .today-year").val($nowYear);
        $(".cal2 .pre-year").val($nowYear - 1);
        $(".cal2 .next-year").val($nowYear + 1);
        $(".val2 > .year-Date").text($nowYear);
    }
    
    // 현재 월이 1로 줄어들면 12로 이동
    if (currentTodayMon === 1) {
        $(".cal2 .today-mon").val('12');
    }
    
    // 다음 월이 1로 줄어들면 12로 이동
    if (currentNextMon === 1) {
        $nextMon.val('12');
    }
    $(".val2 > .mon-Date").text($(".cal2 .today-mon").val());
});

// $nextMon에 클릭 이벤트 추가
$(".cal2 .next-mon").on("click wheel", function(e) {
    e.preventDefault();
    // 현재 월 값 가져오기
    let currentPreMon = parseInt($(".cal2 .pre-mon").val());
    let currentTodayMon = parseInt($(".cal2 .today-mon").val());
    let currentNextMon = parseInt($(".cal2 .next-mon").val());

    // 월 값을 1씩 늘리기
    if (currentPreMon < 12) {
        $(".cal2 .pre-mon").val((currentPreMon + 1).toString().padStart(2, '0'));
        $(".cal2 .today-mon").val((currentTodayMon + 1).toString().padStart(2, '0'));
        $(".cal2 .next-mon").val((currentNextMon + 1).toString().padStart(2, '0'));
    } else {
        // 12에서 늘어나면 1로 이동
        $(".cal2 .pre-mon").val('01');
        $(".cal2 .today-mon").val((currentTodayMon + 1).toString().padStart(2, '0'));
        $(".cal2 .next-mon").val((currentNextMon + 1).toString().padStart(2, '0'));
        $(".val2 > .mon-Date").text($nowYear);
    }

    if (currentTodayMon === 12) {
        $nowYear++; //  12월에서 늘어나면 년도 증가 
        // console.log($nowYear);
        $todateY=$(".cal2 .today-year").val($nowYear);
        $(".cal2 .pre-year").val($nowYear - 1);
        $(".cal2 .next-year").val($nowYear + 1);
        $(".val2 > .year-Date").text($nowYear);
    }

    // 현재 월이 1로 줄어들면 12로 이동
    if (currentTodayMon === 12) {
        $(".cal2 .today-mon").val('01');
    }
    
    // 다음 월이 1로 줄어들면 12로 이동
    if (currentNextMon === 12) {
        $(".cal2 .next-mon").val('01');
    }
    $(".val2 > .mon-Date").text($(".cal2 .today-mon").val());
});


// 일자 클릭 이벤트 // 미완성...


// $preDate클릭시 이벤트 
$(".cal2 .pre-date").on("click wheel", function(e) {
    e.preventDefault();
    const delta = e.deltaY; // 휠 이벤트의 변화량
    // 변화량을 조절하여 속도를 느리게 함
    const slowDelta = delta * 10; //  곱하여 속도 감소

    // 현재 날짜 값 가져오기
    let currentPreDate = parseInt($(".cal2 .pre-date").val());
    let currentTodayDate = parseInt($(".cal2 .today-date").val());
    let currentNextDate = parseInt($(".cal2 .next-date").val());

    // 현재월의 마지막 날짜 가져오기
    let lastDate = new Date($nowYear, $nowMonth + 1, 0).getDate();
    let firstDate = new Date($nowYear,$nowMonth, 1).getDate();  // 달의 첫번째 일자 1일
    
    // 1에서 줄어들면 이전 달의 마지막 날짜로 이동
    if (currentPreDate <= 1) { // 이전달($nowMonth)
        lastDate = new Date($nowYear, $nowMonth -1, 0).getDate();
        $(".cal2 .pre-date").val(lastDate.toString().padStart(2, '0'));
    } else {
        $(".cal2 .pre-date").val((currentPreDate - 1).toString().padStart(2, '0'));
    }
    
    if (currentNextDate <= 1) { // 다음달 ($nowMonth+2)
        $(".cal2 .next-date").val(lastDate.toString().padStart(2, '0'));
    } else {
        $(".cal2 .next-date").val((currentNextDate - 1).toString().padStart(2, '0'));
    }

    if (currentTodayDate <= 1) { // 현재달 ($nowMonth+1)
        lastDate = new Date($nowYear, $nowMonth - 1, 0).getDate();
        $(".cal2 .today-date").val(lastDate.toString().padStart(2, '0'));

    //월과 년 감소 로직 추가
    if ($nowMonth === 0) { // 1월인 경우
        $nowMonth = 11; // 12월로 변경
        $nowYear--; // 년도 감소
    } else {
        $nowMonth--; // 이전 월로 변경
    }

    // $nextMon값 설정
    if ($nowMonth === 0) { // 1월인 경우
        $(".cal2 .next-mon").val((2).toString().padStart(2, '0')); // 다음 달은 2월
    } else if ($nowMonth === 11) { // 12월인 경우
        $(".cal2 .next-mon").val((1).toString().padStart(2, '0')); // 다음 달은 1월
    } else if ($nowMonth === 10) { // 11월인 경우
        $(".cal2 .next-mon").val((12).toString().padStart(2, '0')); // 다음 달은 12월
    } else {
        $(".cal2 .next-mon").val(($nowMonth + 2).toString().padStart(2, '0')); // 일반적인 경우
    }

    // 월과 년도 업데이트
    $(".cal2 .today-mon").val(($nowMonth + 1).toString().padStart(2, '0'));
    $(".cal2 .pre-mon").val(($nowMonth === 0 ? 12 : $nowMonth).toString().padStart(2, '0'));
    
    // 년도 업데이트
    $(".cal2 .today-year").val($nowYear);
    $(".cal2 .pre-year").val($nowYear - 1);
    $(".cal2 .next-year").val($nowYear + 1);

    } else {
        $(".cal2 .today-date").val((currentTodayDate - 1).toString().padStart(2, '0'));
    }
    console.log(lastDate);
    
    // span 업데이트
    $(".val2 > .year-Date").text($nowYear);
    $(".val2 > .mon-Date").text(($nowMonth + 1).toString().padStart(2, '0'));

    // span 업데이트
    $(".val2 > .date-Date").text($(".cal2 .today-date").val());
});


// $nextDate 클릭 시 이벤트 
$(".cal2 .next-date").on("click wheel", function(e) {
    e.preventDefault();
    const delta = e.deltaY; // 휠 이벤트의 변화량
    // 변화량을 조절하여 속도를 느리게 함
    const slowDelta = delta * 10; // 곱하여 속도 감소

    // 현재 날짜 값 가져오기
    let currentNextDate = parseInt($(".cal2 .next-date").val());
    let currentTodayDate = parseInt($(".cal2 .today-date").val());
    let currentPreDate = parseInt($(".cal2 .pre-date").val());

    // 현재월의 마지막 날짜 가져오기
    let lastDate = new Date($nowYear, $nowMonth + 1, 0).getDate();
    let firstDate = new Date($nowYear, $nowMonth, 1).getDate();  // 달의 첫번째 일자 1일

    // 이전 날짜 업데이트
    let lastMonDate = new Date($nowYear, $nowMonth, 0).getDate(); // 이전 달의 마지막 날짜
    if (currentPreDate >= lastMonDate) { // 이전달($nowMonth)의 마지막 날짜를 초과할 경우
        // 이전 달의 마지막 날짜를 가져오기
        $(".cal2 .pre-date").val(firstDate.toString().padStart(2, '0')); // 이전 달의 마지막 날로 설정
    } else {
        $(".cal2 .pre-date").val((currentPreDate + 1).toString().padStart(2, '0')); // 1씩 증가
    }

    // 현재 날짜 업데이트
    if (currentTodayDate >= lastDate) { // 현재달 ($nowMonth+1)의 마지막 날짜를 초과할 경우
        $(".cal2 .today-date").val(firstDate.toString().padStart(2, '0')); // 현재 달의 첫 번째 날로 설정
        // $todayDate가 1로 증가할 때 $todayMon도 증가
        if (currentTodayDate === lastDate) { // 현재 날짜가 마지막 날일 때
            if ($nowMonth === 11) { // 12월인 경우
                $nowMonth = 0; // 1월로 변경
                $nowYear++; // 년도 증가
            } else {
                $nowMonth++; // 다음 월로 변경
            }
        }
    } else {
        $(".cal2 .today-date").val((currentTodayDate + 1).toString().padStart(2, '0')); // 1씩 증가
    }

    // 다음 달의 날짜 증가 로직
    if (currentNextDate >= lastDate) { // 다음달($nowMonth+2)의 마지막 날짜를 초과할 경우
        $(".cal2 .next-date").val(firstDate.toString().padStart(2, '0')); // 다음 달의 첫 번째 날로 설정
    } else {
        $(".cal2 .next-date").val((currentNextDate + 1).toString().padStart(2, '0')); // 1씩 증가
    }

    // 월과 년도 업데이트
    $(".cal2 .today-mon").val(($nowMonth + 1).toString().padStart(2, '0'));
    $(".cal2 .pre-mon").val(($nowMonth === 0 ? 12 : $nowMonth).toString().padStart(2, '0'));
    $(".cal2 .next-mon").val(($nowMonth + 2 > 12 ? 1 : $nowMonth + 2 ).toString().padStart(2, '0')); // 일반적인 경우

    // 년도 업데이트
    $(".cal2 .today-year").val($nowYear);
    $(".cal2 .pre-year").val($nowYear - 1);
    $(".cal2 .next-year").val($nowYear + 1);

    // span 업데이트
    $(".val2 > .year-Date").text($nowYear);
    $(".val2 > .mon-Date").text(($nowMonth + 1).toString().padStart(2, '0'));
    $(".val2 > .date-Date").text($(".cal2 .today-date").val());
});

    // 모바일 스와이프 이벤트 

    // 스와이프 이벤트를 위한 변수
    let startX, startY;

    // 년도 업데이트 함수
    function updateYear(container, year) {
        $(container + " .today-year").val(year);
        $(container + " .pre-year").val(year - 1);
        $(container + " .next-year").val(year + 1);
        $(container + " .year-Date").text(year);
    }

    // 월 업데이트 함수
    function updateMonth(container, month) {
        $(container + " .today-mon").val((month + 1).toString().padStart(2, '0'));
        $(container + " .mon-Date").text((month + 1).toString().padStart(2, '0'));
    }

    // 일 업데이트 함수
    function updateDate(container, date) {
        $(container + " .today-date").val(date.toString().padStart(2, '0'));
        $(container + " .date-Date").text(date.toString().padStart(2, '0'));
    }
    
    // 체크인 박스 스와이프 이벤트
    function setupSwipeEvents(container) {
        let nowYear = $nowYear;
        let nowMonth = $nowMonth;
        let nowDate = $nowDate;

        // 터치 시작 이벤트
        $(container + " .year-date-container").on("touchstart", function(e) {
            startX = e.originalEvent.touches[0].clientX;
            startY = e.originalEvent.touches[0].clientY;
        });

        // 터치 종료 이벤트
        $(container + " .year-date-container").on("touchend", function(e) {
            let endX = e.originalEvent.changedTouches[0].clientX;
            let endY = e.originalEvent.changedTouches[0].clientY;

            let diffX = endX - startX;
            let diffY = endY - startY;

            // 수직 스와이프 감지 (년도를 변경하지 않음)
            if (Math.abs(diffY) > Math.abs(diffX)) {
                // 년도 변경 이벤트는 제거됨
            }
        });

        // 월 스와이프
        $(container + " .mon-date-container").on("touchstart", function(e) {
            startX = e.originalEvent.touches[0].clientX;
            startY = e.originalEvent.touches[0].clientY;
        });

        $(container + " .mon-date-container").on("touchend", function(e) {
            let endX = e.originalEvent.changedTouches[0].clientX;
            let endY = e.originalEvent.changedTouches[0].clientY;

            let diffX = endX - startX;
            let diffY = endY - startY;

            if (Math.abs(diffY) > Math.abs(diffX)) {
                if (diffY > 0) {
                    // 이전 월
                    nowMonth--;
                    if (nowMonth < 0) {
                        nowMonth = 11;
                        nowYear--;
                    }
                    updateMonth(container, nowMonth);
                } else {
                    // 다음 월
                    nowMonth++;
                    if (nowMonth > 11) {
                        nowMonth = 0;
                        nowYear++;
                    }
                    updateMonth(container, nowMonth);
                }
            }
        });

        // 일자 스와이프
        $(container + " .date-date-container").on("touchstart", function(e) {
            startX = e.originalEvent.touches[0].clientX;
            startY = e.originalEvent.touches[0].clientY;
        });

        $(container + " .date-date-container").on("touchend", function(e) {
            let endX = e.originalEvent.changedTouches[0].clientX;
            let endY = e.originalEvent.changedTouches[0].clientY;

            let diffX = endX - startX;
            let diffY = endY - startY;

            if (Math.abs(diffY) > Math.abs(diffX)) {
                if (diffY > 0) {
                    // 이전 날짜
                    nowDate--;
                    if (nowDate < 1) {
                        nowMonth--;
                        if (nowMonth < 0) {
                            nowMonth = 11;
                            nowYear--;
                        }
                        nowDate = new Date(nowYear, nowMonth + 1, 0).getDate();
                    }
                    updateDate(container, nowDate);
                } else {
                    // 다음 날짜
                    nowDate++;
                    if (nowDate > new Date(nowYear, nowMonth + 1, 0).getDate()) {
                        nowDate = 1;
                        nowMonth++;
                        if (nowMonth > 11) {
                            nowMonth = 0;
                            nowYear++;
                        }
                    }
                    updateDate(container, nowDate);
                }
            }
        });
    }

    // 체크인 및 체크아웃 박스에 대해 스와이프 이벤트 설정
    setupSwipeEvents('.cal1'); // 체크인 박스
    setupSwipeEvents('.cal2'); // 체크아웃 박스

    // 초기값 설정
    updateYear('.cal1', $nowYear);
    updateMonth('.cal1', $nowMonth);
    updateDate('.cal1', $nowDate);

    updateYear('.cal2', $nowYear);
    updateMonth('.cal2', $nowMonth);
    updateDate('.cal2', $nowDate);
}
Watch();


// 체크인, 체크아웃 버튼 클릭
$(".schedule > .calendal-wrapper").hide(); 
$(".check-in-btn, .check-out-btn").click(function() {
$(".check-in-btn, .check-out-btn").toggleClass("click");
$(".schedule > .calendal-wrapper").slideToggle();
});

// 투숙 인원 선택 버튼 클릭 
$(".people-num-notice").hide();  
$(".people-num-btn").click(function() {
$(this).toggleClass("click");
$(".people-num-notice").slideToggle();
});


// 투숙 인원 선택 -,+ 버튼 이벤트 
// 어덜트 선택
let i = 2;
// 마이너스 버튼 이벤트
$(".num-choice > .minus1").on("click", function(e){
    e.preventDefault();
    i--;
    $(".adult").val([i]);
    $(".adult-num").text($(".adult").val());

    if (i <0) {
        alert("1명 이상 선택해 주세요!");
        i =1;
        $(".adult").val([i]);
        $(".adult-num").text($(".adult").val());

    }
});
// 플러스 버튼 이벤트 
$(".num-choice > .plus1").on("click", function(e){
    e.preventDefault();
    i++;
    $(".adult").val([i]);
    $(".adult-num").text($(".adult").val());

}); 



// 키드 선택
let j = 0;
// 마이너스 버튼 이벤트
$(".num-choice > .minus2").on("click", function(e){
    e.preventDefault();
    j--;
    $(".kid").val([j]);
    $(".kid-num").text($(".kid").val());

    if (j <0) {
        alert("1명 이상 선택해 주세요!");
        j =1;
        $(".kid").val([j]);
        $(".kid-num").text($(".kid").val());
    }
});
// 플러스 버튼 이벤트 
$(".num-choice > .plus2").on("click", function(e){
    e.preventDefault();
    j++;
    $(".kid").val([j]);
    $(".kid-num").text($(".kid").val());
});

// 폼태그 서브밋 이벤트

$('#reserve-form').on('submit', function(e) {
    e.preventDefault();

    // 체크인, 체크아웃, 인원 수 업데이트
    const checkInYear = $('.cal1 .today-year').val();
    const checkInMonth = $('.cal1 .today-mon').val();
    const checkInDate = $('.cal1 .today-date').val();
    const checkOutYear = $('.cal2 .today-year').val();
    const checkOutMonth = $('.cal2 .today-mon').val();
    const checkOutDate = $('.cal2 .today-date').val();
    const adultCount = $('.adult').val();
    const kidCount = $('.kid').val();

    // 체크인, 체크아웃, 인원 수 입력값 업데이트
    $('input[name="chkin"]').val(`${checkInYear}년 ${checkInMonth}월 ${checkInDate}일`);
    $('input[name="chkout"]').val(`${checkOutYear}년 ${checkOutMonth}월 ${checkOutDate}일`);
    $('input[name="people-num"]').val(`성인: ${adultCount}명, 아동: ${kidCount}명`);

    // 예약 정보 박스 보이기
    $('.modal').show();
    // $('.reserve-check-box').show();


    // 예약 정보 박스 닫기/숨기기
    $('.modal .reserve-complet-btn').on("click", function() {
        // $('.reserve-check-box').hide();
        $('.modal').hide();
    });
});


$(".reserve-complet-btn").click(function () {
    $(location).attr('href', './reserve_notice.html');
})


// function submitForm() {
//     // 체크인 날짜 값 설정
//     $('#check_in_year').val($('.val1 .year-Date').text());
//     $('#check_in_month').val($('.val1 .mon-Date').text());
//     $('#check_in_day').val($('.val1 .date-Date').text());

//     // 체크아웃 날짜 값 설정
//     $('#check_out_year').val($('.val2 .year-Date').text());
//     $('#check_out_month').val($('.val2 .mon-Date').text());
//     $('#check_out_day').val($('.val2 .date-Date').text());

//     // 성인 수 및 아동 수 값 설정
//     $('#adult_count').val($('.adult-num').text());
//     $('#kid_count').val($('.kid-num').text());

//     // 폼 제출
//     $('#reserve-form').submit();
// }


// $('#reserve-form').on('submit', function(e) {
//     e.preventDefault(); // 기본 폼 제출 방지
//     submitForm();

//     $.post('./reserve_ok.php', $(this).serialize(), function(response) {
//         const data = JSON.parse(response);
        
//         // 예약 가능 여부에 따라 메시지 표시
//         if (data.status === "success") {
//             $('.check-ok-box').show(); // 예약 가능 메시지 표시
//             $('.check-not-ok-box').hide(); // 예약 불가능 메시지 숨김
//         } else {
//             $('.check-not-ok-box').show(); // 예약 불가능 메시지 표시
//             $('.check-ok-box').hide(); // 예약 가능 메시지 숨김
//         }
//     });
// });

});
