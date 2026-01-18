/* ===============================
   Reveal on Scroll
================================ */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target); // reveal once
            }
        });
    },
    {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px"
    }
);

revealElements.forEach(el => revealObserver.observe(el));



/* ===============================
   Floating Parallax Images
================================ */
const computer = document.querySelector(".computer");
const mobile = document.querySelector(".mobile");

let lastScrollY = 0;
let ticking = false;

function handleParallax() {
    const scrollY = lastScrollY;

    if (computer) {
        computer.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
    if (mobile) {
        mobile.style.transform = `translateY(${-scrollY * 0.2}px)`;
    }

    ticking = false;
}

window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(handleParallax);
        ticking = true;
    }
});


/* ===============================
   Project Modal Logic
================================ */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("projectTitle");
const modalDesc = document.getElementById("projectDescription");

function openProject(title, description) {
    modalTitle.textContent = title;
    modalDesc.textContent = description;

    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // lock background scroll
}

function closeProject() {
    modal.classList.remove("show");
    document.body.style.overflow = ""; // unlock scroll
}

/* Close modal on outside click */
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeProject();
    }
});

/* Close modal on ESC key */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeProject();
    }
});


/* ===============================
   Responsive Hero and Projects for Mobile
================================ */
function handleResize() {
    const heroLayout = document.querySelector(".hero-layout");
    const projectsGrid = document.querySelector(".projects-grid");

    if (window.innerWidth <= 768) {
        // Stack hero vertically
        if (heroLayout) heroLayout.style.flexDirection = "column";

        // Stack project cards
        if (projectsGrid) projectsGrid.style.gridTemplateColumns = "1fr";
    } else {
        if (heroLayout) heroLayout.style.flexDirection = "row";
        if (projectsGrid) projectsGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(230px, 1fr))";
    }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
