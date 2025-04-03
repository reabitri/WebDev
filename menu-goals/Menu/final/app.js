const menu = [
  {
    id: 1,
    title: "fluffy pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Golden pancakes stacked high, served with a chilled copper mug and freegan energy.`,
  },
  {
    id: 2,
    title: "double patty special",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `A bold stack of juicy patties with denim style, mumblecore attitude, and spicy gochujang flair.`,
  },
  {
    id: 3,
    title: "mega milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `A towering shake bursting with retro vibes, street art swirls, and organic indulgence.`,
  },
  {
    id: 4,
    title: "farmhouse delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Pork belly goodness with a touch of shabby chic and artisanal breakfast charm.`,
  },
  {
    id: 5,
    title: "egg blast",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `A crunchy, creamy egg sandwich inspired by 90s pop-ups and slow food brilliance.`,
  },
  {
    id: 6,
    title: "oreo fantasy",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Crushed Oreos swirled into creamy craft shake heaven — ethically chilled and utterly dreamy.`,
  },
  {
    id: 7,
    title: "crispy bacon roll",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `A crispy treat layered with normcore brunch vibes and a hint of cloud bread magic.`,
  },
  {
    id: 8,
    title: "retro roadside",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Vintage food truck flavor meets squid ink spice in this truly classic bite.`,
  },
  {
    id: 9,
    title: "cozy shake",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Smooth, nostalgic, and full of character — a shake made for those quiet, chill days.`,
  },
  {
    id: 10,
    title: "grilled bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `Savory steak with a smoky edge, wrapped in modern rustic flavors and slow-cooked soul.`,
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
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
  }).join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        return menuItem.category === category;
      });

      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
