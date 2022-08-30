let img;
let imgGray;
let imgRed;
let imgRainbow;
let isGray = false;
let isRed = false;
let isRainbow = false;
let imgCanvas = document.getElementById("can");
let context = imgCanvas.getContext("2d");

function loadImage() {
    let file = document.getElementById("img-file");
    img = new SimpleImage(file);
    imgGray = new SimpleImage(file);
    imgRed = new SimpleImage(file);
    imgRainbow = new SimpleImage(file);
    img.drawTo(imgCanvas)
}

function makeGray() {
    if (imageIsLoaded(imgGray)) {
        if (isGray) {
            buttonUsed();
        }
        clearCanvas();
        for (let pixel of img.values()) {
            let avgColor = getAvgColor(pixel);
            pixel.setRed(avgColor);
            pixel.setGreen(avgColor);
            pixel.setBlue(avgColor);
        }
        img.drawTo(imgCanvas);
        isGray = true;
    }
}

function makeRed() {
    if (imageIsLoaded(imgRed)) {
        if (isRed) {
            buttonUsed();
        }
        clearCanvas();
        for (let pixel of imgRed.values()) {
            let avgColor = getAvgColor(pixel);
            let rgb = getRedSegment(avgColor);
            pixel.setRed(rgb[0]);
            pixel.setGreen(rgb[1]);
            pixel.setBlue(rgb[2]);
        }
        imgRed.drawTo(imgCanvas);
        isRed = true;
    }
}

function makeRainbow() {
    if (imageIsLoaded(imgRainbow)) {
        if (isRainbow) {
            buttonUsed();
        }
        clearCanvas();
        let imgHeight = imgRainbow.getHeight();
        let imgSegment = parseInt(imgHeight) / 7;
        for (let pixel of imgRainbow.values()) {
            let avgColor = getAvgColor(pixel);
            let rgb;
            let y = pixel.getY();
            if (y >= 6 * imgSegment) {
                rgb = getVioletSegment(avgColor);
            } else if (y >= 5 * imgSegment) {
                rgb = getIndigoSegment(avgColor);
            } else if (y >= 4 * imgSegment) {
                rgb = getBlueSegment(avgColor);
            } else if (y >= 3 * imgSegment) {
                rgb = getGreenSegment(avgColor);
            } else if (y >= 2 * imgSegment) {
                rgb = getYellowSegment(avgColor);
            } else if (y >= imgSegment) {
                rgb = getOrangeSegment(avgColor);
            } else {
                rgb = getRedSegment(avgColor);
            }
            pixel.setRed(rgb[0]);
            pixel.setGreen(rgb[1]);
            pixel.setBlue(rgb[2]);
        }
        imgRainbow.drawTo(imgCanvas);
        isRainbow = true;
    }
}

function getAvgColor(pixel) {
    return (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
}

function resetImage() {
    if (imageIsLoaded(img)) {
        clearCanvas();
        loadImage();
        isGray = false;
        isRed = false;
        isRainbow = false;
    }
}

function clearCanvas() {
    context.clearRect(0, 0, imgCanvas.width, imgCanvas.height);
    isGray = false;
    isRed = false;
    isRainbow = false;
}

function imageIsLoaded(image) {
    if (image === null || ! image.complete()) {
        alert("image is not loaded!")
        return false
    }
    return true
}

function buttonUsed() {
    alert("button has been already used")
}

function getRedSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = Math.round(2 * avgColor);
        green = 0;
        blue = 0;
    } else {
        red = 255;
        green = Math.round(2 * avgColor - 255);
        blue = Math.round(2 * avgColor - 255);
    }
    return [red, green, blue];
}

function getOrangeSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = Math.round(2 * avgColor);
        green = Math.round(.8 * avgColor);
        blue = 0;
    } else {
        red = 255;
        green = Math.round(1.2 * avgColor - 51);
        blue =  Math.round(2 * avgColor - 255);
    }
    return [red, green, blue];
}

function getYellowSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = Math.round(2 * avgColor);
        green = Math.round(2 * avgColor);
        blue = 0;
    } else {
        red = 255;
        green = 255;
        blue = Math.round(2 * avgColor - 255);
    }
    return [red, green, blue];
}

function getGreenSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = 0;
        green = Math.round(2 * avgColor);
        blue = 0;
    } else {
        red = Math.round(2 * avgColor - 255);
        green = 255;
        blue = Math.round(2 * avgColor - 255);
    }
    return [red, green, blue];
}

function getBlueSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = 0;
        green = 0;
        blue = Math.round(2 * avgColor);
    } else {
        red = Math.round(2 * avgColor-255);
        green =Math.round(2 * avgColor-255);
        blue = 255;
    }
    return [red, green, blue];
}

function getIndigoSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = Math.round(.8 * avgColor);
        green = 0;
        blue = Math.round(2 * avgColor);
    } else {
        red = Math.round(1.2 * avgColor - 51);
        green = Math.round(2 * avgColor - 255);
        blue = 255;
    }
    return [red, green, blue];
}

function getVioletSegment(avgColor) {
    let red;
    let green;
    let blue;
    if (avgColor < 128) {
        red = Math.round(1.6 * avgColor);
        green = 0;
        blue = Math.round(1.6 * avgColor);
    } else {
        red = Math.round(0.4 * avgColor + 153);
        green = Math.round(2 * avgColor - 255);
        blue = Math.round(0.4 * avgColor + 153);
    }
    return [red, green, blue];
}