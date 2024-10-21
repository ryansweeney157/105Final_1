let initialList = []
function askForListItems() {
    let interval = Number(prompt("How many items do you want to add?"));
    for (let i = 0; i < interval; i++) {
        let item = prompt("What item do you want to add?");
        initialList.push(toUpperCase(item));
        console.log(item + " added.");
    }
}