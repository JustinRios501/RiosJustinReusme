// Function when clicking "Yes"
function showLove() {
    document.getElementById("love-message").classList.remove("hidden");

    // Play the MP3 file
    let music = document.getElementById("love-song");
    music.volume = 1.0; // Ensure volume is full
    music.play().catch(error => console.log("Autoplay blocked:", error));
}


// Function to move "No" button
function moveNo() {
    let btn = document.getElementById("no-btn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    btn.style.position = "absolute";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
