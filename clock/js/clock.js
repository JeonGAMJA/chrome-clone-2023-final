const clock = document.querySelector("h2#clock");

//interval = 한 함수를 특정시간마다 호출
//setInterval(함수 , 호출주기ms)
//setInterval(sayHello, 5000);
//Timeout = 입력한 시간만큼 대기 후 함수 호출
//setTimeout(함수 , 기다릴시간ms)

function getClock() {
  const christmas = new Date("2023-12-25");
  const today = new Date();

  const dDay = christmas - today;

  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dDay / (1000 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);
  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);
