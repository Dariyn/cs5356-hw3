document.querySelector(".interactive-area").addEventListener("mousemove", (event) => {
    let x = event.offsetX;  // Mouse X position inside the div
    let y = event.offsetY;  // Mouse Y position inside the div

    // Dynamically change the background color
    event.target.style.backgroundColor = `rgb(${x}, ${y}, 200)`;
});

document.addEventListener("mousemove", (event) => {
    let cursor = document.querySelector(".cursor-circle");
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});
