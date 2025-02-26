document.addEventListener("mousemove", (event) => {
    let cursor = document.querySelector(".cursor-circle");

    // Get mouse position
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // Move the cursor smoothly
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
