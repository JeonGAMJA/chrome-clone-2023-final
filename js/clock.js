const clock = document.querySelector("#clock");

//interval = 한 함수를 특정시간마다 호출
//setInterval(함수 , 호출주기ms)
//setInterval(sayHello, 5000);
//Timeout = 입력한 시간만큼 대기 후 함수 호출
//setTimeout(함수 , 기다릴시간ms)

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
