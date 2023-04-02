const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라, 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다.",
    author: "켄러",
  },
  {
    quote:
      "절대 어제를 후회하지 마라, 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "제임스 오펜하임",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라 그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
  {
    quote: "고통이 남기고 난 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 실현할 때가 온다.",
    author: "괴테",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
