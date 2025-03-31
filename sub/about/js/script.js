function searchTable() {
  // 검색어를 가져옵니다
  let input = document.getElementById('search-input');
  let filter = input.value.toLowerCase(); // 소문자로 변환하여 대소문자 구분 없이 검색
  let table = document.getElementById('table');
  let rows = table.getElementsByTagName('tr');
  let visibleCount = 0;  // 표시된 게시물 개수

  // 각 행을 순차적으로 확인하며 검색어와 일치하는 내용이 있는지 체크
  for (let i = 1; i < rows.length; i++) { // 첫 번째 행은 헤더이므로 1부터 시작
    let cells = rows[i].getElementsByTagName('td');
    let found = false;

    // 각 셀의 텍스트를 확인
    for (let j = 0; j < cells.length; j++) {
      let cell = cells[j];
      if (cell) {
        if (cell.innerText.toLowerCase().indexOf(filter) > -1) {
          found = true; // 검색어가 해당 셀에 있으면 표시
          break;
        }
      }
    }

    // 검색어가 해당 행의 내용에 없으면 그 행을 숨깁니다
    if (found) {
      rows[i].style.display = '';
      visibleCount++; // 일치하는 게시물이 있으면 표시
    } else {
      rows[i].style.display = 'none';
    }
  }

  // 동적으로 게시물 개수 업데이트
  document.getElementById('post-count').textContent = visibleCount;
}
