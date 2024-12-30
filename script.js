//your JS code here. If required.
// Get elements
// Function to handle form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Get form values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("checkbox").checked;

  // If "Remember me" checkbox is checked, save username and password in local storage
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // If unchecked, remove username and password from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Show the logged in message in an alert
  alert("Logged in as " + username);

  // Check if the user has saved credentials and display the "Login as existing user" button
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    document.getElementById("existing").style.display = "block"; // Show the "existing user" button
  }

  // Hide the login form after submission
  document.getElementById("loginForm").reset(); // Reset form fields
}

// Function to log in as an existing user using saved credentials
function loginAsExistingUser() {
  const savedUsername = localStorage.getItem("username");
  alert("Logged in as " + savedUsername);
}

// Check if there are saved credentials in localStorage when the page loads
window.onload = function() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    document.getElementById("existing").style.display = "block"; // Show "Login as existing user" button
  }
};
