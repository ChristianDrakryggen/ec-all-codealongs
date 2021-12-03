const cards = [
  {
    name: "Card One",
    content: "I'm a card",
  },
  {
    name: "Card Two",
    content: "I'm also a card",
    occupation: "photographer",
    hobby: "Video games",
  },
  {
    name: "Card Three",
    content: "I'm a card aswell",
    hobby: "Fishing",
  },
  {
    name: "Card Four",
    content: "I'm a card aswell too",
  },
  {
    name: "Card Five",
    content: "I'm a card also aswell",
  },
  {
    name: "Card Six",
    content: "I'm a card aswell also too",
  },
];

const cardElements = cards
  .map(
    (card, index) =>
      `<div class="card" onclick="openModal(${index})"><h2>${card.name}</h2></div>`
  )
  .join("");

document.querySelector("#cards-wrapper").innerHTML = cardElements;

/*const openModal = (index) => {
  document.querySelector("#modal-content").innerHTML = `
  <div class="modal-header">
    <span onclick="closeModal()">X</span>
  </div>
  <div class="modal-body">
    <h3>${cards[index].name}</h3>
    <p>${cards[index].content}</p>
    <p>${cards[index].occupation ? cards[index].occupation : ""}</p>
  </div>
  `;
  document.querySelector("#modal-wrapper").style.display = "flex";
};*/

const openModal = (index) => {
  for (x in cards[index]) {
    let h3 = document.createElement("H3");
    let p = document.createElement("P");
    switch (x) {
      case "name":
        h3.innerHTML = cards[index][x];
        document.querySelector("#modal-body").append(h3);
        break;
      case "content":
        p.innerHTML = cards[index][x];
        document.querySelector("#modal-body").append(p);
        break;
      default:
        p.innerHTML = `${x}: ${cards[index][x]}`;
        document.querySelector("#modal-body").append(p);
    }
  }
  document.querySelector("#modal-wrapper").style.display = "flex";
};

const closeModal = () => {
  document.querySelector("#modal-wrapper").style.display = "none";
  document.querySelector("#modal-body").innerHTML = "";
};
