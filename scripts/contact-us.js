const items = [
  {
    title: "Fine Meat Kebabs",
    image:
      "https://avada.website/country-butcher/wp-content/uploads/sites/154/2021/01/fine-meat-kebabs-400x300.jpg",
    article: "#",
  },
  {
    title: "The Best Ground Beef",
    image:
      "https://avada.website/country-butcher/wp-content/uploads/sites/154/2021/01/best-ground-beef-400x300.jpg",
    article: "#",
  },
  {
    title: "Fresh Milk",
    image:
      "https://avada.website/country-butcher/wp-content/uploads/sites/154/2021/01/fresh-milk-400x300.jpg",
    article: "#",
  },
  {
    title: "Free Range Chicken",
    image:
      "https://avada.website/country-butcher/wp-content/uploads/sites/154/2021/01/organic-free-range-chicken-400x300.jpg",
    article: "#",
  },
  {
    title: "Free Range Cattle Farming",
    image:
      "https://avada.website/country-butcher/wp-content/uploads/sites/154/2021/01/cattle-farming-400x300.jpg",
    article: "#",
  },
  {
    title: "The Finest Sirloin Steaks",
    image:
      "https://avada.website/country-butcher/wp-content/uploads/sites/154/2021/01/sirloin-steak-400x300.jpg",
    article: "#",
  },
];
let currentIndex = 0;
const rotator = document.querySelector(".items-wrapper");
const displayItem = document.createElement("div");
displayItem.className = "item dynamic";
rotator.innerHTML = "";
rotator.appendChild(displayItem);

function updateItem() {
  const { title, image, article } = items[currentIndex];

  displayItem.innerHTML = `
      <div class="image-wrapper">
        <img src="${image}" alt="${title}" />
      </div>
      <h3 class="title">${title}</h3>
      <a href="${article}">READ MORE</a>
    `;

  currentIndex = (currentIndex + 1) % items.length;
}
updateItem();
setInterval(updateItem, 3000);
