document.addEventListener("mousemove", (e) => {
    const body = document.querySelector("body");
    
    // Calculate position relative to center (for the grid)
    const x = (window.innerWidth - e.pageX) / 20; 
    const y = (window.innerHeight - e.pageY) / 20;

    // Update CSS variables
    body.style.setProperty("--x", `${x}px`);
    body.style.setProperty("--y", `${y}px`);

    // Optional: Tilt the glass card slightly
    const card = document.querySelector(".glass-card");
    if(card) {
        const rotateX = (window.innerHeight / 2 - e.pageY) / 30;
        const rotateY = (window.innerWidth / 2 - e.pageX) / 30;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});