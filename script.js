
// =================================
// 01. SCROLL REVEAL
// =================================

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
});


document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


// =================================
// 02. ACTIVE NAVIGATION
// =================================

const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}, {
    threshold: 0,
    rootMargin: "-35% 0px -55% 0px"
});


sections.forEach(section => {

    sectionObserver.observe(section);

});


// =================================
// 03. MOBILE NAVIGATION
// =================================

const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".nav-links");


// Open and close menu

menuToggle.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// Close menu when pressing Escape

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navigation.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
