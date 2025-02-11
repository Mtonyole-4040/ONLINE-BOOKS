document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Full Name Validation
        const fullName = document.getElementById("fullName").value.trim();
        if (fullName.length < 5) {
            document.getElementById("nameError").textContent = "Full name must be at least 5 characters.";
            valid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Registration Number Validation (Format: BCS-00-0000-0000)
        const regNumber = document.getElementById("regNumber").value.trim();
        const regPattern = /^BCS-\d{2}-\d{4}-\d{4}$/;
        if (!regPattern.test(regNumber)) {
            document.getElementById("regError").textContent = "Invalid format. Use BCS-00-0000-0000.";
            valid = false;
        } else {
            document.getElementById("regError").textContent = "";
        }

        // Email Validation
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email address.";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Password Validation
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (password.length < 6 || !/[!@#$%^&*]/.test(password)) {
            document.getElementById("passError").textContent = "Password must be at least 6 characters and include a special character.";
            valid = false;
        } else {
            document.getElementById("passError").textContent = "";
        }

        // Confirm Password Validation
        if (password !== confirmPassword) {
            document.getElementById("confirmPassError").textContent = "Passwords do not match.";
            valid = false;
        } else {
            document.getElementById("confirmPassError").textContent = "";
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});