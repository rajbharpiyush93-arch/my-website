/* =========================================
   SUPABASE CONFIGURATION
========================================= */

const SUPABASE_URL =
    "https://rdekemmbiqayqbpazioh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_n_W-Vj6g-KipsoJDoap4vQ_MPk8r49n";


const { createClient } = window.supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);



/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}



/* =========================================
   DARK / LIGHT THEME
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (
            document.body.classList.contains("light-mode")
        ) {

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });


    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }

}



/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");


if (typingText) {

    const words = [
        "Computer Science Student",
        "Python Learner",
        "Web Security Learner",
        "Ethical Hacking Learner"
    ];


    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (
                charIndex ===
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

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 60 : 100
        );

    }


    typeEffect();

}



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}



/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopBtn =
    document.getElementById(
        "scrollTop"
    );


if (scrollTopBtn) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 400
            ) {

                scrollTopBtn.classList.add(
                    "show"
                );

            } else {

                scrollTopBtn.classList.remove(
                    "show"
                );

            }

        }
    );


    scrollTopBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}



/* =========================================
   SECURITY TOPICS
========================================= */

const securityButtons =
    document.querySelectorAll(
        "[data-security]"
    );


securityButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const topic =
                    button.dataset.security;

                alert(
                    "Security topic: " +
                    topic
                );

            }
        );

    }
);



/* =========================================
   SAFE XSS AWARENESS LAB
========================================= */

const xssInput =
    document.getElementById(
        "xssInput"
    );

const xssOutput =
    document.getElementById(
        "xssOutput"
    );

const xssButton =
    document.getElementById(
        "xssButton"
    );


if (
    xssInput &&
    xssOutput &&
    xssButton
) {

    xssButton.addEventListener(
        "click",
        () => {

            const value =
                xssInput.value;


            /*
             * textContent is intentionally used
             * instead of innerHTML.
             */

            xssOutput.textContent =
                value;

        }
    );

}



/* =========================================
   PASSWORD STRENGTH LAB
========================================= */

const passwordLab =
    document.getElementById(
        "passwordLab"
    );

const passwordStrength =
    document.getElementById(
        "passwordStrength"
    );


if (
    passwordLab &&
    passwordStrength
) {

    passwordLab.addEventListener(
        "input",
        () => {

            const password =
                passwordLab.value;


            let score = 0;


            if (
                password.length >= 8
            ) {

                score++;

            }


            if (
                /[A-Z]/.test(password)
            ) {

                score++;

            }


            if (
                /[a-z]/.test(password)
            ) {

                score++;

            }


            if (
                /[0-9]/.test(password)
            ) {

                score++;

            }


            if (
                /[^A-Za-z0-9]/.test(password)
            ) {

                score++;

            }


            const levels = [
                "Very Weak",
                "Weak",
                "Fair",
                "Good",
                "Strong",
                "Very Strong"
            ];


            passwordStrength.textContent =
                password
                    ? levels[score]
                    : "";

        }
    );

}



/* =========================================
   SQL INJECTION AWARENESS
========================================= */

const sqlButton =
    document.getElementById(
        "sqlProtection"
    );


if (sqlButton) {

    sqlButton.addEventListener(
        "click",
        () => {

            alert(
                "Use parameterized queries / prepared statements. Never build SQL queries by directly concatenating user input."
            );

        }
    );

}



/* =========================================
   CONTACT FORM DEMO
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            alert(
                "Message form submitted successfully!"
            );


            contactForm.reset();

        }
    );

}



/* =========================================
   REAL SIGNUP
========================================= */

const signupForm =
    document.getElementById(
        "signupForm"
    );


if (signupForm) {

    const emailInput =
        document.getElementById(
            "signupEmail"
        );

    const passwordInput =
        document.getElementById(
            "signupPassword"
        );

    const confirmPasswordInput =
        document.getElementById(
            "confirmPassword"
        );

    const showPassword =
        document.getElementById(
            "showSignupPassword"
        );

    const signupMessage =
        document.getElementById(
            "signupMessage"
        );

    const signupBtn =
        document.getElementById(
            "signupBtn"
        );

    const signupBtnText =
        document.getElementById(
            "signupBtnText"
        );


    /* SHOW / HIDE PASSWORD */

    if (showPassword) {

        showPassword.addEventListener(
            "click",
            () => {

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

    }


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


            /* PASSWORD MATCH */

            if (
                password !==
                confirmPassword
            ) {

                signupMessage.textContent =
                    "Passwords do not match.";

                signupMessage.style.color =
                    "#ff6b6b";

                return;

            }


            /* PASSWORD LENGTH */

            if (
                password.length < 6
            ) {

                signupMessage.textContent =
                    "Password must be at least 6 characters.";

                signupMessage.style.color =
                    "#ff6b6b";

                return;

            }


            signupBtn.disabled = true;

            signupBtnText.textContent =
                "Creating Account...";

            signupMessage.textContent =
                "";


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth
                        .signUp({

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
                    "Account created! Check your email for verification.";

                signupMessage.style.color =
                    "#00d9ff";


                signupForm.reset();


            } catch (error) {

                console.error(error);


                signupMessage.textContent =
                    error.message ||
                    "Signup failed.";

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



/* =========================================
   REAL LOGIN
========================================= */

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    const emailInput =
        document.getElementById(
            "loginEmail"
        );

    const passwordInput =
        document.getElementById(
            "loginPassword"
        );

    const showPassword =
        document.getElementById(
            "showPassword"
        );

    const loginMessage =
        document.getElementById(
            "loginMessage"
        );

    const loginBtn =
        document.getElementById(
            "loginBtn"
        );

    const loginBtnText =
        document.getElementById(
            "loginBtnText"
        );


    /* SHOW / HIDE PASSWORD */

    if (showPassword) {

        showPassword.addEventListener(
            "click",
            () => {

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

    }


    /* LOGIN */

    loginForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value;


            if (
                !email ||
                !password
            ) {

                loginMessage.textContent =
                    "Please enter email and password.";

                loginMessage.style.color =
                    "#ff6b6b";

                return;

            }


            loginBtn.disabled = true;

            loginBtnText.textContent =
                "Signing In...";

            loginMessage.textContent =
                "";


            try {

                const {
                    data,
                    error
                } =
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


                setTimeout(
                    () => {

                        window.location.href =
                            "dashboard.html";

                    },
                    1000
                );


            } catch (error) {

                console.error(error);


                loginMessage.textContent =
                    "Login failed: " +
                    (
                        error.message ||
                        "Invalid email or password."
                    );

                loginMessage.style.color =
                    "#ff6b6b";


            } finally {

                loginBtn.disabled = false;

                loginBtnText.textContent =
                    "Sign In";

            }

        }
    );


    /* =====================================
       FORGOT PASSWORD
    ===================================== */

    const forgotPassword =
        document.getElementById(
            "forgotPassword"
        );


    if (forgotPassword) {

        forgotPassword.addEventListener(
            "click",
            async (event) => {

                event.preventDefault();


                const email =
                    emailInput.value.trim();


                if (!email) {

                    loginMessage.textContent =
                        "Enter your email first.";

                    loginMessage.style.color =
                        "#ff6b6b";

                    return;

                }


                try {

                    const {
                        error
                    } =
                        await supabaseClient.auth
                            .resetPasswordForEmail(
                                email,
                                {
                                    redirectTo:
                                        window.location.origin +
                                        "/my-website/login.html"
                                }
                            );


                    if (error) {

                        throw error;

                    }


                    loginMessage.textContent =
                        "Password reset email sent. Check your inbox.";

                    loginMessage.style.color =
                        "#00d9ff";


                } catch (error) {

                    loginMessage.textContent =
                        error.message ||
                        "Unable to send reset email.";

                    loginMessage.style.color =
                        "#ff6b6b";

                }

            }
        );

    }

}



/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
