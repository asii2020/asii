// URL of the video site
const videoSiteUrl = "https://slfunzoneyt.blogspot.com/2024/09/aluthma-wela-video.html";

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in localStorage
    localStorage.setItem("redirectTime", new Date().getTime());

    // Redirect to the traffic source
    window.location.href = videoSiteUrl;
}

// Function to enable the green button after 25 seconds
function enableGreenButtonAfterTimer() {
    const redirectTime = localStorage.getItem("redirectTime");
    const greenButton = document.getElementById("greenButton");

    if (redirectTime) {
        const elapsedTime = new Date().getTime() - redirectTime;

        if (elapsedTime >= 25000) {
            // If 25 seconds have already passed, enable the green button immediately
            greenButton.disabled = false;
        } else {
            // If not, calculate the remaining time and enable the green button after that delay
            setTimeout(() => {
                greenButton.disabled = false;
            }, 25000 - elapsedTime);
        }
    } else {
        // If redirectTime is not set, enable the green button after 25 seconds
        setTimeout(() => {
            greenButton.disabled = false;
        }, 25000);
    }
}

// Add event listener for the green button click to redirect to the video site
document.getElementById("greenButton").addEventListener("click", () => {
    window.location.href = videoSiteUrl;
});

// Call this function when the page loads
window.onload = enableGreenButtonAfterTimer;
