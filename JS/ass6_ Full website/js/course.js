
//course.js //

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let cardName = document.getElementById("cardName").value.trim();
    let cardNumber = document.getElementById("cardNumber").value.trim();
    let expiryDate = document.getElementById("expiryDate").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (!cardName || !cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all payment details.");
        return;
    }

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Invalid card number. It should be 16 digits.");
        return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Invalid CVC. It should be 3 digits.");
        return;
    }

    alert("Payment Successful! 🎉");
});

document.addEventListener("DOMContentLoaded", function () {
    let course = JSON.parse(localStorage.getItem("selectedCourse"));

    if (course) {
        document.querySelector(".course-info h2").textContent = course.title;
        document.querySelector(".course-info p:nth-of-type(1)").innerHTML = `<strong>Instructor:</strong> ${course.instructor}`;
        document.querySelector(".course-info p:nth-of-type(2)").innerHTML = `<strong>Duration:</strong> ${course.duration}`;
        document.querySelector(".course-info p:nth-of-type(3)").innerHTML = `<strong>Price:</strong> ${course.price}`;
    }
});