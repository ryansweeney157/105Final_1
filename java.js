
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
    listItem.addEventListener('click', strike);


    const moveItem = document.createElement('button');
    moveItem.classList.add('moveItem');
    moveItem.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
    moveItem.addEventListener('click', function() {
        list.removeChild(listItem);
        if (listId === 'groceryList') {
        addItem(item, 'purchasedList');
        }
        else {
            addItem(item, 'groceryList')
        }
    });

    listItem.appendChild(moveItem);
    list.appendChild(listItem);
}
 
function strike() {
    let listStrike = this; 
    if (listStrike.classList.contains("crossout")) {
        listStrike.classList.remove("crossout");
    } else {
        listStrike.classList.add("crossout");
    }
}
