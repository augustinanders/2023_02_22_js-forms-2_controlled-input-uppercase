console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const lowerCase = event.target.value;
  const upperCase = lowerCase.toUpperCase();
  event.target.value = upperCase;
});
