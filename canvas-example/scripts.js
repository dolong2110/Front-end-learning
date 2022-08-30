function doColor() {
    let canvas = document.getElementById("can");
    let colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
}

function doSquare() {
    let sliderinput = document.getElementById("slr");
    let len = sliderinput.value;
    let canvas = document.getElementById("can");
    let context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(10,10,len,len);
    context.fillRect(parseInt(len)+20,10,len,len);
    context.fillRect(len*3,10,len,len);
}




