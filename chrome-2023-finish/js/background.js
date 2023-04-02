const todoBar = document.querySelector(".todo-bar");

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

todoBar.appendChild(bgImage); //append는 가장 뒤 prepend는 가장 앞
