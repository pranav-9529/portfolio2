/* ===============================
   Reveal on Scroll (Step-by-Step)
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
        threshold: 0.2,          // element visible 20%
        rootMargin: "0px 0px -80px 0px" // reveal slightly before center
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
    document.body.style.overflow = "";
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
