// Detect current language and set the dropdown value
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("desktop-language-selector");

    // Check the current URL and set the appropriate language
    if (window.location.pathname.includes("serbia.html")) {
        languageSelector.value = "rs"; // Set to Serbian
    } else {
        languageSelector.value = "en"; // Default to English
    }
});

// Handle language change
function changeLanguage(selector) {
    const selectedLanguage = selector.value;

    // Redirect to the appropriate page
    if (selectedLanguage === "en") {
        window.location.href = "index.html"; // English version
    } else if (selectedLanguage === "rs") {
        window.location.href = "serbia.html"; // Serbian version
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".hamburger-menu");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuButton && mobileNav) {
        menuButton.addEventListener("click", () => {
            mobileNav.classList.toggle("d-none"); // Add/remove the 'd-none' class
        });
    } else {
        console.error("Hamburger menu or mobile navigation not found.");
    }
});