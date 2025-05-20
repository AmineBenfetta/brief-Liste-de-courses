const input = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const itemList = document.getElementById('item-list');

function addItem() {
  const itemName = input.value.trim();

  if (itemName === "") {
    alert("Veuillez entrer un produit.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = itemName;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Supprimer';
  deleteBtn.classList.add('delete');

  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  input.value = '';
  input.focus();
}
addBtn.addEventListener('click', addItem);

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});

itemList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove();
  }
});