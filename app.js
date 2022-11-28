function moveToAboutMe() {
  aboutMe.scrollIntoView({behavior: 'smooth'})
}
function moveToProjects() {
  projectHover.scrollIntoView({behavior: 'smooth'})
}
function moveToForm() {
  form.scrollIntoView({behavior: 'smooth'})
}

function toggleDark() {
document.documentElement.style.setProperty('--main-color', '#d90429');
document.documentElement.style.setProperty('--secondary-color', '#bc4749');
document.documentElement.style.setProperty('--third-color', '#3d405b');
document.documentElement.style.setProperty('--fourth-color', '#fdfffc');
sun.style.display = "inline";
moon.style.display = "none";
}

function toggleLight() {
document.documentElement.style.setProperty('--main-color', '#d90429');
document.documentElement.style.setProperty('--secondary-color', '#f5cac3');
document.documentElement.style.setProperty('--third-color', '#fdfffc');
document.documentElement.style.setProperty('--fourth-color', 'black');
moon.style.display = "inline";
sun.style.display = "none";
}

const aboutMe = document.getElementById("aboutMe")
const aboutMeButton = document.getElementById("aboutMeButton")
const projects = document.getElementById("projects")
const projectsButton = document.getElementById("projectstButton")
const projectHover = document.getElementById("project-hover")
const form = document.getElementById("contactForm")
const formButton = document.getElementById("contactButton")
const sun = document.getElementById("sun")
const moon = document.getElementById("moon")



aboutMeButton.addEventListener("click", moveToAboutMe);
projectsButton.addEventListener("click", moveToProjects);
formButton.addEventListener("click", moveToForm);
sun.addEventListener("click", toggleLight);
moon.addEventListener("click", toggleDark);




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

console.log("Hi, im Matt, I love web development.")


