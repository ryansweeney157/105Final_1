
document.getElementById('addItem').addEventListener('click', function() {
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        addItem(itemValue, 'groceryList');
        itemInput.value = '';
    }
});

function addItem(item, listId) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.textContent = item;

    const moveItem = document.createElement('button');
    moveItem.classList.add('moveItem');
    moveItem.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
    moveItem.addEventListener('click', function() {
        list.removeChild(listItem);
        addItem(item, 'purchasedList');
    });

    listItem.appendChild(moveItem);
    list.appendChild(listItem);
}
 