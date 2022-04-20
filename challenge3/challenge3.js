const title = document.querySelector('h2');

const getDay = () => {
  const christmas = new Date('2022-12-25T00:00:00+0900');

  const now = new Date();

  const distance = christmas.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, '0');
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, '0');
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    '0'
  );
  title.innerText = `Time Until Christmas Eve 
${day}d ${hours}h ${minutes}m ${seconds}s`;
};

getDay();
setInterval(getDay, 1000);

// https://velog.io/@dev-hannahk/js-d-day 참고
