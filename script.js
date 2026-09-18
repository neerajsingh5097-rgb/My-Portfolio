const toggle = document.getElementById("menu-toggle");

if (toggle && toggle.checked) {
  document.body.classList.add("no-scroll");
} else {
  document.body.classList.remove("no-scroll");
}

const words = [
"Web Developer",
"Frontend Developer",
"React Developer",
"JavaScript Developer",
"Full Stack Developer",
"Problem Solver",
"Quick Learner",
"Team Player",
];
// isme getElement ke help se typing-span accesses krta he
const typingText = document.getElementById("typing-span");

// kitne time show krna he jo word he i am ke bad
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex == currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");

    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (link.dataset.tab === "services") {
      const serviceList = [
        {
          id: 1,
          icon: "fa-solid fa-code",
          text: "Frontend Web Development",
          para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and MERN stack.",
        },
        {
          id: 2,
          icon: "fa-brands fa-react",
          text: "React & Next.js Development",
          para: "I develop interactive web applications using React.js and Next.js, creating reusable components and responsive, mobile-first interfaces with modern frontend technologies.",
        },
        {
          id: 3,
          icon: "fa-regular fa-plane-departure",
          text: "Full-Stack Web Development",
          para: "I develop feature-rich applications with functionality such as authentication, shopping carts, order management, dynamic menus, payment integration, and order history, based on my full-stack project experience.",
        },
        {
          id: 4,
          icon: "fa-solid fa-cheese",
          text: "Food Services & Web Applications",
          para: "Offering expert advice and solutions for tech projects, helping individuals and startups with project planning and stack decisions.",
        },
        {
          id: 5,
          icon: "fa-solid fa-user-secret",
          text: "Responsive UI Development",
          para: "I create mobile-first, cross-browser compatible interfaces using HTML, CSS, Tailwind CSS, React.js, and modern UI development practices.",
        },
        {
          id: 6,
          icon: "fa-solid fa-robot",
          text: "AI-Assisted Development & Debugging",
          para: "I use AI-assisted development tools such as ChatGPT and GitHub Copilot to improve productivity, accelerate debugging, and support efficient development workflows.",
        },
          {
          id: 7,
          icon: "fa-solid fa-laptop-code",
          text: "Project Development & Support",
          para: "I provide end-to-end development support, from project planning and coding to debugging and deployment, with a focus on clean, maintainable, and practical solutions.",
        },
      ];

      const services = document.getElementsByClassName("service-list");

      const innerContent = serviceList
        .map((l) => {
          return `
          <div class="box">
              <div class="head-icons">
                <i class="ph ${l?.icon}"></i>

                <span>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>

              <h3>${l?.text}</h3>
              <span id="spacer"></span>
              <p>
                ${l?.para}
              </p>
          </div>
          `;
        })
        .join("");

      Array.from(services).forEach((ele) => {
        ele.innerHTML = innerContent;
      });
    }

    toggle.checked = false;
  });
});