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