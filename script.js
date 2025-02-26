document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-circle");

    document.addEventListener("mousemove", (event) => {
        if (cursor) {
            cursor.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
        }
    });

    // Fetch a random dog image from Dog CEO API
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            let dogImage = document.getElementById("dog-image");
            dogImage.src = data.message; // API returns the image URL
        })
        .catch(error => console.error("Error fetching dog image:", error));

    // Scroll Transition Effect
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger the effect on page load
});
