function strike() {
    if (listItem.contains("crossout")) {
        listItem.classList.remove("crossout");
    } else {
        listItem.classList.add("crossout");
    }
}