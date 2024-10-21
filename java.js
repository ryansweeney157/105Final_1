document.getElementById('addItem').addEventListener('click', function() {
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if(itemValue){
        addItem(itemValue);
        itemInput.value = '';
    }
})

function addItem(item) {
    const list = document.getElementById('grocery-list')
    const listItem = document.createElement('li');
    listItem.textContent = item;
    
    const removeItem = document.createElement('button')
    removeItem.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    removeItem.classList.add('removeItem');
    removeItem.addEventListener('click', function() {
        list.removeChild(listItem);
    });
    listItem.appendChild(removeItem);
    list.appendChild(listItem);

    const strikeItem = document.createElement('button')
    strikeItem = 

}
