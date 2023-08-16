document
  .getElementById("discount-input")
  .addEventListener("keyup", function () {
    const button = document.getElementById("btn-discount");
    const inputField = document.getElementById("discount-input");
    const inputValue = inputField.value;
    if (inputValue === "DISC30") {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "true");
    }
  });

document.getElementById("btn-discount").addEventListener("click", function () {
  const price = getElementAmmountById("price");
  const discountAmmount = price * 0.3;
  const newPrice = price - discountAmmount;
  const priceText = document.getElementById("price-text");
  priceText.classList.remove("text-[#9223D0]");
  priceText.classList.add("text-[#333343]");
  priceText.classList.add("line-through");
  setElementValueById("discount", newPrice);
  const discountText = document.getElementById("discount-text");
  discountText.classList.remove("hidden");
  discountText.classList.add("text-[#9223D0]");
  const button = event.target;
  button.disabled = true;
  const inputField = document.getElementById("discount-input");
  inputField.value = "";
  inputField.setAttribute("disabled", "true");
});
