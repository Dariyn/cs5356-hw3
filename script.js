document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-circle");

    document.addEventListener("mousemove", (event) => {
        if (cursor) {
            cursor.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
        }
    });

    // Function to fetch and display dog images
    const fetchDogImage = (elementId) => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                console.log(`Fetched dog image for ${elementId}:`, data.message); // Debugging
                document.getElementById(elementId).src = data.message;
            })
            .catch(error => console.error("Error fetching dog image:", error));
    };

    // Fetch 3 random dog images
    ["dog1", "dog2", "dog3"].forEach(fetchDogImage);


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
