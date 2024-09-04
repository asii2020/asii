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

// Function to check if enough time has passed and enable the green button
function checkGreenButtonStatus() {
    const redirectTime = localStorage.getItem("redirectTime");
    const greenButton = document.getElementById("greenButton");
    const videoLink = document.getElementById("videoLink");

    if (redirectTime) {
        const elapsedTime = new Date().getTime() - parseInt(redirectTime, 10);

        if (elapsedTime >= requiredTime) {
            // If 23 seconds have passed, enable the green button
            greenButton.disabled = false;
        } else {
            // If not, set a timeout to enable the green button after the remaining time
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
}

// Add event listener to the green button to redirect to the hidden link
document.getElementById("greenButton").addEventListener("click", () => {
    window.location.href = document.getElementById("videoLink").href;
});

// Ensure the button status is checked when the page loads
window.onload = checkGreenButtonStatus;
