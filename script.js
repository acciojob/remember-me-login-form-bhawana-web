//your JS code here. If required.
// Ensure DOM is fully loaded before running the logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const existingButton = document.getElementById("existing");

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("checkbox").checked;

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert(Logged in as ${username});
  });

  // Show "Login as existing user" button if user data exists
  if (localStorage.getItem("username")) {
    existingButton.style.display = "block";
    existingButton.addEventListener("click", function () {
      alert(Logged in as ${localStorage.getItem("username")});
    });
  }
});