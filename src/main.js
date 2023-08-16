function getElementAmmountById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementValue = elementField.innerText;
  const elementAmmount = parseInt(elementValue);
  return elementAmmount;
}
function setElementValueById(elementId, newValue) {
  const elementField = document.getElementById(elementId);
  elementField.innerText = newValue;
}
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
});
