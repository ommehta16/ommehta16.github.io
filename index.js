// @ts-check

function hydrateProjects() {
	/** @type {HTMLDivElement|null} */
	const projectsContainer = document.querySelector("section#projects div.projects-list");
	if (!projectsContainer) return;

	const projects = Array.from(projectsContainer.children).filter(el => el.classList.contains("project"));
	
	projects.forEach(el => el.addEventListener("click", e => {
		const url = el.getAttribute("data-open-url");
		if (!url) return;

		window.open(url,'_blank')?.focus();
	}))
}

hydrateProjects();

function spook() {
    const spookInner = "he's in your home".split("");
    let expanded = "";
    spookInner.forEach((c, i) => {
        expanded += (c == " " ? " " : `<span class="spooky" style="animation-delay:${Math.sin(i * 0.2)}s;">${c}</span>`);
    })
    return "(" + expanded + ")";
}

const flavorOptions = [
    `a fellow human!`,
    `I do things, I guess!`,
    spook(),
    `(it's <i>so over</i>)`,
];

function addFlavorText() {
    const curr = Math.floor(Math.random() * flavorOptions.length);
	console.log(curr);
	const gramer = document.querySelector(".gramer");
	const flavorTextContainer = document.querySelector("p.flavortext");
	if (!gramer || !flavorTextContainer) return;
	
	gramer.innerHTML = flavorOptions[curr][0] == "(" ? "" : ",";
	flavorTextContainer.innerHTML = flavorOptions[curr];
}

addFlavorText();