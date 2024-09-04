// Your traffic source URL
const trafficSourceUrl = "https://www.cpmrevenuegate.com/wqwsm6vbp6?key=2f1830b01b03351e6358375eb547156a";
const requiredTime = 23000; // 23 seconds in milliseconds

// Clear sessionStorage to remove old values
function clearSessionStorage() {
    sessionStorage.removeItem('redirectTime');
    sessionStorage.removeItem('redButtonClicked');
}

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in sessionStorage
    sessionStorage.setItem("redirectTime", new Date().getTime());
    sessionStorage.setItem("redButtonClicked", true);

    // Open the traffic source URL in a new tab
    window.open(trafficSourceUrl, '_blank');
}

// Function to check if enough time has passed and enable the green button
function checkGreenButtonStatus() {
    clearSessionStorage(); // Clear old values

    const redirectTime = sessionStorage.getItem("redirectTime");
    const redButtonClicked = sessionStorage.getItem("redButtonClicked");
    const greenButton = document.getElementById("greenButton");

    // If redButtonClicked is not set, disable the green button
    if (!redButtonClicked) {
        greenButton.disabled = true;
        console.log('Red button not clicked yet');
        return;
    }

    if (redirectTime) {
        // Calculate the elapsed time
        const elapsedTime = new Date().getTime() - parseInt(redirectTime, 10);
        console.log('Elapsed Time:', elapsedTime);

        if (elapsedTime >= requiredTime) {
            // If 23 seconds have passed, enable the green button
            greenButton.disabled = false;
            console.log('Green Button Enabled');
        } else {
            // Poll every second to check if the required time has passed
            const intervalId = setInterval(() => {
                const elapsedTime = new Date().getTime() - parseInt(redirectTime, 10);
                console.log('Polling - Elapsed Time:', elapsedTime);

                if (elapsedTime >= requiredTime) {
                    greenButton.disabled = false;
                    clearInterval(intervalId);
                    console.log('Green Button Enabled after Polling');
                }
            }, 1000);
        }
    } else {
        // If redirectTime is not set, keep the green button disabled
        greenButton.disabled = true;
        console.log('Redirect Time Not Set');
    }
}

// Add event listener to the green button to redirect to the hidden link
document.getElementById("greenButton").addEventListener("click", () => {
    console.log('Green Button Clicked');
    window.location.href = document.getElementById("videoLink").href;
});

// Ensure the button status is checked when the page loads
window.onload = checkGreenButtonStatus;
