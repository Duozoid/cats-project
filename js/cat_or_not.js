const cats = ["cat", "Cat", "kitty", "tiger", "irbis", "snow leopard", "lion", "ocelot", "caracal", "black-footed cat", "serval","puma","cheetah","margarita","blackfooted","black-footed","pallas","pallas cat","leopardus","ocelot","domestic cat","yagouaroundi",];

function isCat(word) {
  return cats.includes(word);
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the user input.
  const word = event.target.word.value;

  // Check if the word is in the database.
  if (isCat(word)) {
    alert("Yep, this is a cat!");
  } else {
    alert("Nope, this is not a cat!");
  }
});