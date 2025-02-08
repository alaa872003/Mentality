//main.js //
function goToDetails(button) {
    let card = button.closest(".course-card");

    let course = {
        title: card.querySelector(".badge-overlay").textContent,
        instructor: card.querySelector("h6").textContent,
        duration: card.querySelector("span:nth-child(2)").textContent,
        price: card.querySelector(".fw-bold.fs-5").textContent,
        image: card.querySelector(".card-img-top").src
    };

    localStorage.setItem("selectedCourse", JSON.stringify(course));

    window.location.href = "course-details.html";
}


document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    const userName = localStorage.getItem("userName");
    
    if (userName) {
        welcomeMessage.innerHTML = `Welcome, <b>${userName}</b>`;  
        registerBtn.classList.add("d-none");      
        logoutBtn.classList.remove("d-none");     
    }

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem("userName");
        window.location.reload();  
    });
});

