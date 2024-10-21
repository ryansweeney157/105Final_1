let initialList = []
function askForListItems() {
    let interval = Number(prompt("How many items do you want to add?"));
    while (isNaN(interval)) {
        interval = Number(prompt("How many items do you want to add?"));
    }
    for (let i = 0; i < interval; i++) {
        let item = prompt("What item do you want to add?");
        initialList.push(item.toUpperCase());
        console.log(item + " added.");
    }
}
askForListItems()