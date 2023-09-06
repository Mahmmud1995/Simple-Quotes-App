// document.getElementById("quote").innerHTML =`"The best revenge is massive success."`;
// document.getElementById("author").innerHTML =`--Frank Sinatra`;

var quotesArr = [
  { quote: "'So many books, so little time.'", author: "--Frank Zappa" },
  {
    quote: "'A room without books is like a body without a soul.'",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote:
      "'Resentment is like drinking poison and waiting for your enemies to die.'",
    author: "--Nelson Mandela",
  },
  {
    quote:
      "'It's not what happens to you, but how you react to it that matters.'",
    author: "--Epictetus",
  },
];
function quoteChanger() {
  var num = Math.floor(Math.random() * quotesArr.length);
  document.getElementById("quote").innerHTML = quotesArr[num].quote;
  document.getElementById("author").innerHTML = quotesArr[num].author;
}
