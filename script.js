// Automatically update footer year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Smooth navigation

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});