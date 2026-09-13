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
/* =================================
   LOGIN PAGE
================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    const passwordInput =
        document.getElementById("loginPassword");

    const showPassword =
        document.getElementById("showPassword");

    const loginMessage =
        document.getElementById("loginMessage");

    const loginBtn =
        document.getElementById("loginBtn");

    const loginBtnText =
        document.getElementById("loginBtnText");


    /* Show / Hide password */

    showPassword.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type ===
                "password"
            ) {

                passwordInput.type =
                    "text";

                showPassword.textContent =
                    "🙈";

            } else {

                passwordInput.type =
                    "password";

                showPassword.textContent =
                    "👁";

            }

        }
    );


    /* Login */

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();


            const password =
                passwordInput.value;


            if (!email || !password) {

                loginMessage.textContent =
                    "Please enter email and password.";

                loginMessage.style.color =
                    "#ff6b6b";

                return;

            }


            /* Loading */

            loginBtn.classList.add("loading");

            loginBtnText.textContent =
                "Signing In...";


            setTimeout(
                function () {

                    loginBtn.classList.remove(
                        "loading"
                    );

                    loginBtnText.textContent =
                        "Sign In";


                    loginMessage.textContent =
                        "Demo login successful! ✅";


                    loginMessage.style.color =
                        "#00d9ff";


                },
                1200
            );

        }
    );


    /* Forgot password */

    const forgotPassword =
        document.getElementById(
            "forgotPassword"
        );


    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            loginMessage.textContent =
                "Password recovery will be available after backend setup.";

            loginMessage.style.color =
                "#00d9ff";

        }
    );


    /* Create account */

    const signupLink =
        document.getElementById(
            "signupLink"
        );


    signupLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            loginMessage.textContent =
                "Signup page will be added next.";

            loginMessage.style.color =
                "#00d9ff";

        }
    );

}
