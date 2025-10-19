const listEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${itemsEl.length}`);

itemsEl.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const element = item.querySelectorAll("ul li").length;

  console.log(`Category; ${title}`);
  console.log(`Elements: ${element}`);
});
