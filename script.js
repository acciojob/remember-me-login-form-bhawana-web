// Function to check if there are saved login details in localStorage
function checkExistingUser() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // If there are saved credentials, display the existing user login button
    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'block';
    }
}

// Handle form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        // Save username and password to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove username and password from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Show login success message
    alert(`Logged in as ${username}`);
    checkExistingUser(); // Check if the login details are stored
});

// Handle "Login as existing user" button click
document.getElementById('existing').addEventListener('click', function () {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Show alert with the saved username
    alert(`Logged in as ${savedUsername}`);
});

// Initial check for existing user credentials
checkExistingUser();
