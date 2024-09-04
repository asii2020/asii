// Your traffic source URL
const trafficSourceUrl = "https://www.cpmrevenuegate.com/wqwsm6vbp6?key=2f1830b01b03351e6358375eb547156a";
const requiredTime = 23000; // 23 seconds in milliseconds

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in localStorage
    localStorage.setItem("redirectTime", new Date().getTime());

    // Redirect to the traffic source
    window.location.href = trafficSourceUrl;
}

// Function to enable the green button after 23 seconds
function enableGreenButtonAfterTimer() {
    const redirectTime = localStorage.getItem("redirectTime");
    const greenButton = document.getElementById("greenButton");
    const videoLink = document.getElementById("videoLink");

    if (redirectTime) {
        const elapsedTime = new Date().getTime() - redirectTime;

        if (elapsedTime >= requiredTime) {
            // If 23 seconds have already passed, enable the green button immediately
            greenButton.disabled = false;
        } else {
            // If not, calculate the remaining time and enable the green button after that delay
            setTimeout(() => {
                greenButton.disabled = false;
            }, requiredTime - elapsedTime);
        }
    } else {
        // If redirectTime is not set, enable the green button after 23 seconds
        setTimeout(() => {
            greenButton.disabled = false;
        }, requiredTime);
    }

    // Set up the green button to redirect to the hidden link
    greenButton.addEventListener("click", () => {
        window.location.href = videoLink.href;
    });
}

// Call this function when the page loads
window.onload = enableGreenButtonAfterTimer;
