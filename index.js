const addFiller = () => {
    const a = document.getElementsByClassName("addfiller");

    for (const item of a) {
        for (let i = 0; i < 8; i++) item.innerHTML += `
        <li>
            <h3>title</h3>
            <p>
                FILLER TEXT
            </p>
        </li>`;
    }
}

const flavorBox = document.getElementById("flavortext");
const addFlavorText = () => {
    const flavorOptions = [
        `"a motivated junior who's interested in Computer Science"`,
        `a fellow human!`,
        `a "studious" student suspiciously standing still`,
        `(spook)`,
        `a D1 procrastinator and mediocre achiever`,
        `a <i>very</i> cooked junior who decided to take 9 APs (😭)`,
    ];
    const curr = Math.floor(Math.random() * flavorOptions.length);
    if (flavorOptions[curr][0] == "(") document.getElementById("gramer").innerText = "";
    else document.getElementById("gramer").innerText = ",";

    if (flavorOptions[curr] == "(spook)") {
        spook();
        return;
    }
    flavorBox.innerHTML = flavorOptions[curr];
}

const spook = () => {
    const spookInner = "he's in your home";

    let expanded = "";
    for (let i = 0; i < spookInner.length; i++) {
        const c = spookInner[i];
        if (c == " ") expanded += " ";
        else expanded += `<span class="spooky" style="animation-delay:${Math.sin(i * 0.2)}s;">${c}</span>`;
    }
    flavorBox.innerHTML = "(" + expanded + ")";
}


addFiller();
addFlavorText();

let selfieID = 0;

document.getElementById("img-container").addEventListener("mousedown", () => {
    document.getElementById("img-container").className = "self" + (selfieID + 1) + " blurred";
    selfieID = (selfieID + 1) % 4;
});

const changePFP = () => {
    if (document.getElementById("img-container").className == "self" + (selfieID + 1)) return;
    document.getElementById("img-container").className = "self" + (selfieID + 1) + " blurred";
    setTimeout(() => {
        document.getElementById("img-container").className = "self" + (selfieID + 1);
    }, 100)
}

document.getElementById("img-container").addEventListener("mouseup", changePFP)
document.getElementById("img-container").addEventListener("mouseleave", changePFP)

document.addEventListener("DOMContentLoaded", () => { setTimeout(() => document.body.classList.add("show"), 100) });


const infoBox = document.getElementById("info-box");


/** 
 * @param {string} name 
 * @param {HTMLElement} el
*/
const changeInfoContent = (name, el) => {
    for (const tmp of ["crc", "cpt", "bsa", "winners", "esp"]) infoBox.classList.remove(tmp);
    const active = el.getAttribute("selected");
    document.querySelectorAll("li.info-show").forEach(el => el.removeAttribute("selected"))
    console.log(active);
    if (active == null) {
        el.setAttribute("selected", "");
        infoBox.classList.add(name);
    }
}

const infoShows = document.getElementsByClassName("info-show");
for (const el of infoShows) {
    const name = el.getAttribute("name");
    el.addEventListener("click", () => {
        changeInfoContent(name, el);
    });
}