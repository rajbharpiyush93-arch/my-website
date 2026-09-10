/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");


    if (isLight) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});


/* ===============================
   TYPING ANIMATION
================================ */

const words = [

    "Web Developer",
    "Python Learner",
    "Programmer",
    "Computer Science Student",
    "Cybersecurity Learner"

];


const typingElement =
    document.getElementById("typing");


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) return;


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex === words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 55 : 100
    );

}


typeEffect();


/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(
        function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add("active");

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* ===============================
   SCROLL TO TOP
================================ */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
                .value.trim();


        const email =
            document.getElementById("email")
                .value.trim();


        const message =
            document.getElementById("message")
                .value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill all fields.";

            formMessage.style.color =
                "#ff6b6b";

            return;

        }


        formMessage.textContent =
            "Message submitted successfully! ✅";


        formMessage.style.color =
            "#00d9ff";


        contactForm.reset();

    }
);


/* ===============================
   CURRENT YEAR
================================ */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();