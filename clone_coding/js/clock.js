const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  //let hours = String(date.getHours()).padStart(2, '0');
  let hours = `${
    date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  } `;
  let minutes = String(date.getMinutes()).padStart(2, '0'); // 이렇게 해도 됨
  let seconds = `${
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  } `;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
