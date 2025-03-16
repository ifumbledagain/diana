// Function to show surprise message when she clicks "Yes"
function showSurprise() {
    document.getElementById("surpriseMessage").style.display = "block";
}

// Function to prevent clicking "No" (Funny Effect)
function forceYes() {
    let noButton = document.getElementById("noButton");
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
    alert("stfu u cant choose this omg");
}

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s - 5s
    heart.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity (0.5 - 1)
    document.querySelector(".hearts-container").appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts at a controlled rate
setInterval(createHeart, 400);
