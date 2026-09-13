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

/* =========================================
   SUPABASE CONFIG
========================================= */

const SUPABASE_URL = "https://rdekemmbiqayqbpazioh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_n_W-Vj6g-KipsoJDoap4vQ_MPk8r49n";


const { createClient } = window.supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


/* =========================================
   REAL LOGIN
========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    const emailInput =
        document.getElementById("loginEmail");

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


    /* SHOW / HIDE PASSWORD */

    showPassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            showPassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";
            showPassword.textContent = "👁";

        }

    });


    /* LOGIN */

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;


        if (!email || !password) {

            loginMessage.textContent =
                "Please enter email and password.";

            loginMessage.style.color =
                "#ff6b6b";

            return;
        }


        loginBtn.disabled = true;

        loginBtnText.textContent =
            "Signing In...";

        loginMessage.textContent = "";


        try {

            const { data, error } =
                await supabaseClient.auth
                    .signInWithPassword({

                        email: email,
                        password: password

                    });


            if (error) {
                throw error;
            }


            loginMessage.textContent =
                "Login successful! Redirecting...";

            loginMessage.style.color =
                "#00d9ff";


            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 1000);


        } catch (error) {

            console.error(error);

            loginMessage.textContent =
                "Login failed. Check your email and password.";

            loginMessage.style.color =
                "#ff6b6b";


        } finally {

            loginBtn.disabled = false;

            loginBtnText.textContent =
                "Sign In";

        }

    });
   /* =========================================
   REAL SIGNUP
========================================= */

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    const emailInput =
        document.getElementById("signupEmail");

    const passwordInput =
        document.getElementById("signupPassword");

    const confirmPasswordInput =
        document.getElementById("confirmPassword");

    const showPassword =
        document.getElementById("showSignupPassword");

    const signupMessage =
        document.getElementById("signupMessage");

    const signupBtn =
        document.getElementById("signupBtn");

    const signupBtnText =
        document.getElementById("signupBtnText");


    /* SHOW / HIDE PASSWORD */

    showPassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            showPassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";

            showPassword.textContent = "👁";

        }

    });


    /* SIGNUP */

    signupForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value;

            const confirmPassword =
                confirmPasswordInput.value;


            /* CHECK PASSWORD */

            if (password !== confirmPassword) {

                signupMessage.textContent =
                    "Passwords do not match.";

                signupMessage.style.color =
                    "#ff6b6b";

                return;
            }


            if (password.length < 6) {

                signupMessage.textContent =
                    "Password must be at least 6 characters.";

                signupMessage.style.color =
                    "#ff6b6b";

                return;
            }


            signupBtn.disabled = true;

            signupBtnText.textContent =
                "Creating Account...";

            signupMessage.textContent = "";


            try {

                const { data, error } =
                    await supabaseClient.auth.signUp({

                        email: email,

                        password: password,

                        options: {

                            emailRedirectTo:
                                window.location.origin +
                                "/my-website/login.html"

                        }

                    });


                if (error) {

                    throw error;

                }


                signupMessage.textContent =
                    "Account created! Check your email to verify your account.";

                signupMessage.style.color =
                    "#00d9ff";


                signupForm.reset();


            } catch (error) {

                console.error(error);

                signupMessage.textContent =
                    error.message;

                signupMessage.style.color =
                    "#ff6b6b";


            } finally {

                signupBtn.disabled = false;

                signupBtnText.textContent =
                    "Create Account";

            }

        }
    );

}

