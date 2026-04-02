// Toggle Password Visibility
function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-lock");
        icon.classList.add("fa-eye");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-lock");
    }
}

// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        localStorage.setItem("user", JSON.stringify({ username, password }));

        alert("Registered Successfully!");
        window.location.href = "index.html";
    });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No user found. Please register first.");
            return;
        }

        if (
            username === storedUser.username &&
            password === storedUser.password
        ) {
            alert("Login Successful!");
        } else {
            alert("Invalid credentials!");
        }
    });
}