const projectList = [
  {
    id: 1,
    number: "01",
    title: "Tomato – Food Delivery Application",
    description:
      "A full-stack food delivery web application designed to provide a smooth and responsive online food-ordering experience. The application allows users to explore dynamic menus, manage their shopping cart, place orders, and securely complete payments.",
    techStack: [
      "React.js",
      " Node.js ",
      " MongoDB",
      "REST APIs",
      "HTML",
      "CSS ",
      "JavaScript",
    ],
    image: "assets/projects/tomoto.png",
    liveLink: "https://tomato-food-deliver.vercel.app/",
    githubLink: "https://github.com/neerajsingh5097-rgb/food-del",
  },
  {
    id: 2,
    number: "02",
    title: "Dino-Dash – Interactive Web Game",
    description:
      "Dino-Dash is an interactive 2D web game developed with React.js, featuring smooth character movement and real-time score tracking. The project includes a scalable backend for managing player profiles and high scores, along with database integration for persistent data. I focused on creating a clean, responsive, and engaging gaming experience using modern web technologies.",
    techStack: ["HTML5", " CSS3", " JavaScript"],
    image: "assets/projects/Gogon.png",
    liveLink:
      "game: https://game-qtn5yjjoy-neerajsingh5097-rgbs-projects.vercel.app/",
    githubLink: "https://github.com/neerajsingh5097-rgb/Game",
  },

  {
    id: 3,
    number: "03",
    title: "Tic-Tac-Toe Web Game",
    description:
      "Tic-Tac-Toe is a clean, interactive web game featuring real-time player vs. player gameplay, win/draw detection, and dynamic game-state tracking. Built with modern web standards, it offers a responsive design, smooth animations, and a sleek, modern UI for an enjoyable user experience across desktop and mobile devices.",
    techStack: ["HTML5", " CSS3", " JavaScript"],
    image: "assets/projects/Tic-ac-Toe GAme.png",
    liveLink:
      "game:https://tic-tac-toe-beta-five-94.vercel.app/",
    githubLink: "https://github.com/neerajsingh5097-rgb/Tic-Tac-Toe.git",
  },
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
            ${projectContent?.description}
            </p>
            <div class="tech-stack">
                ${projectContent?.techStack
                  ?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                  })
                  .join(",")}
            </div>       
            <hr />
            <div class="links">
              <a href="${projectContent?.liveLink}">
                  <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="${projectContent?.githubLink}">
                  <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div class="carousel">
            <img 
                src="${projectContent?.image}" 
                alt="${projectContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${
                previousDisabled ? "disabled-btn" : ""
              }'>
                <i class="fa-solid fa-angle-left"></i>
              </a>
              <a href="#" id="next" class='${
                nextDisabled ? "disabled-btn" : ""
              }'>
                <i class="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
  `;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);
