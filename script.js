document.addEventListener("mousemove", (event) => {
    let cursor = document.querySelector(".cursor-circle");
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});
