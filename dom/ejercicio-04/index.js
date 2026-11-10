const button = document.querySelector("#btnToClick");
button.addEventListener("click", (event) => {
  console.log(event);
});

const focusInput = document.querySelector(".focus");
focusInput.addEventListener("focus", () => {
  console.log(focusInput.value);
});

const valueInput = document.querySelector(".value");
valueInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
