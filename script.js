const wave = document.getElementById("wave");

// change the "title" attribute of the wave element periodically with multiple values

let i = 0;
let titles = ["Yo!", "Hello!", "Hi!", "Hey!", "Hola!", "Meow!", "👋"]
setInterval(() => {
  wave.setAttribute("title", titles[i]);
  i = (i + 1) % titles.length;
}, 1000);