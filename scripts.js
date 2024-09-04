// Duration for the green button to be enabled (23 seconds)
const requiredTime = 23000; // 23 seconds in milliseconds

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in sessionStorage
    sessionStorage.setItem("redirectTime", new Date().getTime());
    sessionStorage.setItem("redButtonClicked", true);

    // Optionally, you can provide feedback here that the timer has started
    console.log("Red button clicked, timer started.");
}

// Function to check if enough time has passed and enable the green button
function checkGreenButtonStatus() {
    const redirectTime = sessionStorage.getItem("redirectTime");
    const redButtonClicked = sessionStorage.getItem("redButtonClicked");
    const greenButton = document.getElementById("greenButton");

    if (!redButtonClicked) {
        greenButton.disabled = true;
        console.log('Red button not clicked yet');
        return;
    }

    if (redirectTime) {
        const elapsedTime = new Date().getTime() - parseInt(redirectTime, 10);

        if (elapsedTime >= requiredTime) {
            // If 23 seconds have passed, enable the green button
            greenButton.disabled = false;
            console.log('Green Button Enabled');
        } else {
            // If not, set a timeout to enable the green button after the remaining time
            setTimeout(() => {
                greenButton.disabled = false;
                console.log('Green Button Enabled after Timeout');
            }, requiredTime - elapsedTime);
        }
    } else {
        // If redirectTime is not set, keep the green button disabled
        greenButton.disabled = true;
        console.log('Redirect Time Not Set');
    }
}

// Add event listener to the green button to redirect to the hidden link
document.getElementById("greenButton").addEventListener("click", () => {
    window.location.href = document.getElementById("videoLink").href;
});

// Ensure the button status is checked when the page loads
window.onload = checkGreenButtonStatus;
