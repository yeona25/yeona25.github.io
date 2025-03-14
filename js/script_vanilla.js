function slide(targetEl, direction) {


  const target = document.querySelector(targetEl);
  const firstLi = target.querySelector('li');
  const slideHeight = firstLi.offsetHeight + 16;


  // Prepare the animation effect.
  const animation = target.animate([
    { top: direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px` }
  ], {
    duration: 5000,
    easing: 'linear'
  });


  // When the animation is finished, rearrange items and reset.
  animation.onfinish = () => {
    if (direction === 'up') {
      target.appendChild(firstLi);
    } else {
      const lastLi = target.querySelector('li:last-child');
      target.insertBefore(lastLi, target.firstChild);
    }
    slide(targetEl, direction);
  };
}


// Start the animations.
slide('.down', 'down');
slide('.up', 'up');