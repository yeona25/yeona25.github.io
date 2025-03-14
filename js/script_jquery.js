function slide(targetEl, direction) {
  let target = $(targetEl);
  let slideHeight = target.find('li').eq(0).height() + 16;


  target.animate({top: direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px`}, 2000, 'linear', function() {
    if (direction === 'up') {      
      $(this).find('li').eq(0).appendTo(this);
    } else {      
      $(this).find('li').last().prependTo(this);
    }
    $(this).css({top: 0});
    slide(targetEl, direction); // 재귀 호출로 애니메이션 반복
  });
}


slide('.down', 'down');
slide('.up', 'up');