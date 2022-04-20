const $body = document.querySelector('body');

function checkWidth() {
  const width = window.innerWidth;
  console.log(width);
  if (width > 800) {
    $body.classList.add('largestSize');
  } else if (width > 600) {
    $body.classList.remove('largestSize');
    $body.classList.add('middleSize');
  } else {
    $body.classList.remove('middleSize');
    $body.classList.remove('largestSize');
  }
}

window.addEventListener('resize', checkWidth);
