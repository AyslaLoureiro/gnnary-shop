const cardTemplate = document.querySelector(".card-template").content;

const cards = [
  {
    title: "Anel solitario",
    price: 129.99,
    imageUrl: "./anellua.jpg",
  },
  {
    title: "Anel solitario",
    price: 129.99,
    imageUrl: "./anellua.jpg",
  },
];

for (let i = 0; i < cards.length; i++) {
  const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
  const currentCard = cards[i];

  const cardsTitle = card.querySelector(".card__item-name");
  cardsTitle.textContent = currentCard.title;

  const cardImg = card.querySelector(".card-img");
  cardImg.src = currentCard.imageUrl;

  const cardPrice = card.querySelector(".card-text");
  cardPrice.textContent = currentCard.price;

  const cardList = document.querySelector(".cards");
  cardList.append(card);
}

const h2 = document.querySelector(".header-text");

h2.textContent =
  "Porque o brilho mais bonito é aquele que representa quem você é.";

const h1 = document.querySelector(".header-title");
h1.textContent = "Gnnary Joalheria";
