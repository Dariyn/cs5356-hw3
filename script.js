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
});