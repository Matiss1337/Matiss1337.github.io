function moveToAboutMe() {
  aboutMe.scrollIntoView({behavior: 'smooth'})
}
function moveToProjects() {
  projects.scrollIntoView({behavior: 'smooth'})
}
function moveToForm() {
  form.scrollIntoView({behavior: 'smooth'})
}

const aboutMe = document.getElementById("aboutMe")
const aboutMeButton = document.getElementById("aboutMeButton")
const projects = document.getElementById("projects")
const projectsButton = document.getElementById("projectstButton")
const form = document.getElementById("contactForm")
const formButton = document.getElementById("contactButton")

aboutMeButton.addEventListener("click", moveToAboutMe);
projectsButton.addEventListener("click", moveToProjects);
formButton.addEventListener("click", moveToForm);




const react = document.getElementById("react");
const javascript = document.getElementById("javascript");



react.addEventListener("mouseenter", () =>
  projects.classList.add("hover-react")
);
react.addEventListener("mouseleave", () =>
  projects.classList.remove("hover-react")
);


javascript.addEventListener("mouseenter", () =>
  projects.classList.add("hover-javascript")
);
javascript.addEventListener("mouseleave", () =>
  projects.classList.remove("hover-javascript")
);