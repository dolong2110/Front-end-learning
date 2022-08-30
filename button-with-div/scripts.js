// function click2() {
//     alert('clicked button with js function');
// }

function click() {
    let message = "Press a button!\nEither OK or Cancel.";
    if (confirm(message) === true) {
        message = "You pressed OK!";
    } else {
        message = "Are you sure you want to cancel?";
    }
    document.getElementById("demo").innerHTML = message;
}

function changeColor() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");
    divElement1.className = "blueback";
    divElement2.className = "orangeback";
}

function changeText() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");
    divElement1.innerHTML = "Erste";
    divElement2.innerHTML = "Zweite";
}