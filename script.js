function sayhello() {
    alert("Hello Piyush! Welcome to my website");
}
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Than you! Your message has been submitted.");
});