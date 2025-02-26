document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-circle");

    document.addEventListener("mousemove", (event) => {
        if (cursor) {
            cursor.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
        }
    });

    // Fetch a joke from the Joke API
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            let jokeContainer = document.getElementById("joke");
            if (data.type === "twopart") {
                jokeContainer.innerHTML = `<p>${data.setup} - ${data.delivery}</p>`;
            } else {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            }
        })
        .catch(error => console.error("Error fetching joke:", error));
});
