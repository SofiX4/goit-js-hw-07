const inputName = document.querySelector("#name-input");
const yourName = document.querySelector("#name-output");

inputName.addEventListener("input", handlerName);

function handlerName(event) {
  const name = event.target.value.trim();

  if (name === "") {
    yourName.textContent = "Anonymous";
  } else {
    yourName.textContent = name;
  }
}
