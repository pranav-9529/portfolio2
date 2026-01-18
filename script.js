const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // 👈 shows first visible section

const computer = document.querySelector(".computer");
const mobile = document.querySelector(".mobile");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Smooth parallax movement
    computer.style.transform = `translateY(${scrollY * 0.15}px)`;
    mobile.style.transform = `translateY(${-scrollY * 0.2}px)`;
});

function openProject(title, description) {
    document.getElementById("projectTitle").innerText = title;
    document.getElementById("projectDescription").innerText = description;
    document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}
