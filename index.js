const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("slider-value");

let waitUntil = 0;

const a = (slider, display, cssvar) => {
    display.innerText = slider.value;
    document.documentElement.style.setProperty(cssvar, slider.value);
}

document.getElementById("slider").addEventListener("input", a.bind(false, document.getElementById("slider"), document.getElementById("slider-value"), "--weight"));
document.getElementById("slider1").addEventListener("input", a.bind(false, document.getElementById("slider1"), document.getElementById("slider-value1"), "--wdth"));

valueDisplay.innerText = slider.value;

a(document.getElementById("slider"), document.getElementById("slider-value"), "--weight");
a(document.getElementById("slider1"), document.getElementById("slider-value1"), "--wdth");

