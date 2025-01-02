//your JS code here. If required.
// Check if there are saved credentials in localStorage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');

// Function to show or hide the "Login as existing user" button
const toggleExistingUserButton = () => {
  const existingBtn = document.getElementById("existing");
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block"; // Show the button if credentials are saved
  } else {
    existingBtn.style.display = "none"; // Hide the button if no saved credentials
  }
};

// Event listener for "Login as existing user" button
document.getElementById("existing").addEventListener("click", () => {
  alert(`Logged in as ${savedUsername}`);
});

// Form submission handling
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  // If "Remember me" is checked, store username and password in localStorage
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // If not checked, remove saved username and password from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Display the login success alert
  alert(`Logged in as ${username}`);

  // Toggle visibility of the "Login as existing user" button
  toggleExistingUserButton();

  // Reset the form for a fresh start
  document.getElementById("loginForm").reset();
});

// Load existing credentials from localStorage on page load
window.onload = () => {
  toggleExistingUserButton();
};
