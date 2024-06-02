// const numInput = document.querySelector("#num-input");
// const btnGenerate = document.querySelector("#btn-generate");

// btnGenerate.addEventListener("click", generateFizz);

function generateFizz() {
  console.log(numInput.value)
  const num = numInput.value;
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      createEl("Frontend");
    } else if (i % 5 === 0) {
      createEl("Buzz");
    } else if (i % 3 === 0) {
      createEl("Fizz");
    } else {
      createEl(i);
    }
  }
}

function createEl(val) {
  const div = document.createElement("div");
  div.textContent = val;
  document.body.appendChild(div);
}