let add = document.getElementById("shop-btn");
let input = document.getElementById("shopping");
let list = document.getElementById("items-list");

function addItem () {  
   if (input.value === "") {
  return;
   }
  let newItem = document.createElement("li");
  newItem.textContent = input.value;
  let suppBtn = document.createElement("button");
  suppBtn.textContent = "supprimer";
  newItem.appendChild(suppBtn);
  list.appendChild(newItem);
  input.value = "";
  suppBtn.addEventListener("click", () => {
  newItem.remove();
});
}
add.addEventListener("click", () => {
addItem();
});