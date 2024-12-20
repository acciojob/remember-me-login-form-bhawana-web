//your JS code here. If required.
// Get elements
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

// Check if user details are saved in localStorage
window.onload = function() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block"; // Show "Login as existing user" button
    }
};

// Handle login form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = checkbox.checked;

    // If "remember me" is checked, save username and password to localStorage
    if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove username and password from localStorage if "remember me" is unchecked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Alert the user
    alert(`Logged in as ${username}`);

    // Hide the login form after submitting
    form.reset();
    checkbox.checked = false;
    existingButton.style.display = "block"; // Show "Login as existing user" button
});

// Handle login as existing user
existingButton.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
