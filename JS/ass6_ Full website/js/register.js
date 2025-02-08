

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;

    let name = document.getElementById("name");
    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isValid = false;
    } else {
        name.classList.remove("is-invalid");
    }

    let username = document.getElementById("username");
    if (username.value.trim() === "") {
        username.classList.add("is-invalid");
        isValid = false;
    } else {
        username.classList.remove("is-invalid");
    }

    let email = document.getElementById("email");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    let password = document.getElementById("password");
    if (password.value.length < 6) {
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        password.classList.remove("is-invalid");
    }

    let terms = document.getElementById("terms");
    if (!terms.checked) {
        terms.classList.add("is-invalid");
        isValid = false;
    } else {
        terms.classList.remove("is-invalid");
    }

    if (isValid) {
        localStorage.setItem("userName", name.value);  // Changed to userName
        alert("Registration Successful! Welcome, " + name.value);
        window.location.href = "index.html";
    }
});