function addTask () {
    let input = document.getElementById("input");
    // get current text from input field
    let newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask !== "") {
        // create new HTML list item
        let item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
            '<input type="button" class="important" onClick="important(this.parentNode)" value="!"/> ' +
            newTask;
        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        // remove the input string and add new one
        input.value = ""
        input.placeholder = "enter next task ..."
    }
}

// change styling used for given item
function markDone (item) {
    item.className = "finished";
}

function remove (item) {
    // remove item completely from document
    if (item.className === 'finished') {
        item.remove();
    }
}

function important(item) {
    item.className = "important";
}

function doAbout() {
    let content = document.getElementById("about")
    content.className = "yellowbackground"
    content.innerHTML = "Author is Long"
}

function clearAbout() {
    let about = document.getElementById("about")
    about.innerHTML = ""
}