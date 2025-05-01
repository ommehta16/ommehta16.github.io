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
        `"a motivated junior who's interested in CS"`,
        `a fellow human!`,
        `a "studious" student suspiciously standing still`,
        `[spook]`,
        `(why's he in so many clubs)`,
        `a <i>very</i> cooked junior who decided to take 9 APs (😭)</p>`,
    ];
    const curr = Math.floor(Math.random() * flavorOptions.length);
    if (flavorOptions[curr][0] == "(") document.getElementById("gramer").innerText = "";
    else document.getElementById("gramer").innerText = ",";

    if (flavorOptions[curr] == "[spook]") {
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

addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.style.transform = "translate(0px,0px)";
        document.body.style.opacity = 1;
    }, 100);
});