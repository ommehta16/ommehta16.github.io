// @ts-check

function hydrateProjects() {
	/** @type {HTMLDivElement|null} */
	const projectsContainer = document.querySelector("section#projects div.projects-list");
	if (!projectsContainer) return;

	const projects = Array.from(projectsContainer.children).filter(el => el.classList.contains("project"));
	
	projects.forEach(el => el.addEventListener("click", e => {
		if (!e.target) return;
		// @ts-ignore
		if (Array.from(el.querySelectorAll("div.links, div.links *")).includes(e.target)) return;
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

function hydrateSwitchModeButton() {
	const switchModeButton = document.querySelector("button.switch-color-mode");
	if (!switchModeButton) return;

	switchModeButton.addEventListener("click", () => {
		document.documentElement.classList.toggle("dark");
	})
}

hydrateSwitchModeButton();

function hydrateSeeMoreProjectsButton() {
	const seeMoreButton = document.querySelector('.expand-projects');
	if (!seeMoreButton) return;
	seeMoreButton.addEventListener("click", () => {
		const projectsList = document.querySelector("div.projects-list");
		if (!projectsList) return;

		projectsList.classList.toggle("expanded");
		const projectsText = seeMoreButton.querySelector("i:not(.arrow)");
		if (!projectsText) return;

		projectsText.innerHTML = projectsList.classList.contains("expanded") ? "See less projects" : "See more projects";

		updateGrid();
	});
}

hydrateSeeMoreProjectsButton();

function updateGrid() {
	/** @type {HTMLElement|null} */
	const container = document.querySelector(".projects-list");
	if (!container) return;

	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const width = container.clientWidth;
	console.log(width, rem);
	let minBoxWidth = 270;
	if (width < 600) minBoxWidth = 220;
	const numCols = Math.trunc((width + rem) / (minBoxWidth + rem));
	// min width is 250
	// gap is 1rem
	container.style.setProperty("--cols", `${numCols}`);
}

document.addEventListener("DOMContentLoaded", updateGrid);
window.addEventListener("resize", updateGrid);

function hydratePFP() {
	const pfpContainer = document.querySelector("#hero div.img-container");
	if (!pfpContainer) return;

	for (const imgName of ["1.jpeg", "3.jpeg", "4.jpeg"]) {
		pfpContainer.innerHTML += `<img src="static/me/${imgName}" />`
	}

	pfpContainer.addEventListener("click", () => {
		console.log("You should do something here to like move the pfp ok cool sounds good!");
	})
}

// hydratePFP();