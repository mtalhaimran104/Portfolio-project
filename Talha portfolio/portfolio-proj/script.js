
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-links li");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const revealSections = () => {
    const triggerPoint = window.innerHeight - 120;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

navItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.animation = `navItemFade 0.55s ease forwards ${index * 0.08 + 0.2}s`;
});