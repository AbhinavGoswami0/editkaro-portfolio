const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
/* PORTFOLIO FILTER */

const filterButtons = document.querySelectorAll(".filter-buttons button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(.9)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);

            }

        });

    });

});
/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            if (current < target) {

                current += increment;

                counter.textContent = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{
    counterObserver.observe(counter);
});
//  SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
/* ACTIVE NAVIGATION*/

const sections = document.querySelectorAll("section");
const navItemsActive = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItemsActive.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {

        link.classList.add("active");

    }

});

});
/* BACK TO TOP*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});