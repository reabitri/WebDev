const menu = [
  {
    id: 1,
    title: "fluffy pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Golden pancakes stacked tall with a splash of cold brew and hipster morning vibes.`,
  },
  {
    id: 2,
    title: "double cheeser",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Savory beef layers with raw denim crunch and gochujang fire — Marfa-approved.`,
  },
  {
    id: 3,
    title: "monster shake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Vintage chillwave in a cup. Packed with nostalgia, organic swirls, and triple flavor blast.`,
  },
  {
    id: 4,
    title: "sunrise delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `A rustic plate of savory bacon and toast with a Shoreditch-style truffaut twist.`,
  },
  {
    id: 5,
    title: "egg fury",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Bold eggs, pickled style — straight out of a foodie's 90s Pinterest board.`,
  },
  {
    id: 6,
    title: "choco crunch dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Heirloom cacao meets Oreo chaos in this edgy, ethically creamy dessert shake.`,
  },
  {
    id: 7,
    title: "morning bacon roll",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Sizzling bacon rolled in cloud bread comfort with single-origin roast energy.`,
  },
  {
    id: 8,
    title: "grilled stack",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Smashed patties, squid layers, and a touch of truffaut — for the inner street chef.`,
  },
  {
    id: 9,
    title: "late-night buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Edgy sweetness with crucifix cool — microdosed for your midnight synth sessions.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
