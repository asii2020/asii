// Your traffic source URL
const trafficSourceUrl = "https://www.facebook.com";

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in localStorage
    localStorage.setItem("redirectTime", new Date().getTime());

    // Redirect to the traffic source
    window.location.href = trafficSourceUrl;
}

// Function to enable the green button after 25 seconds
function enableGreenButtonAfterTimer() {
    const redirectTime = localStorage.getItem("redirectTime");

    if (redirectTime) {
        const elapsedTime = new Date().getTime() - redirectTime;

        if (elapsedTime >= 25000) {
            // If 25 seconds have already passed, enable the green button immediately
            document.getElementById("greenButton").disabled = false;
        } else {
            // If not, calculate the remaining time and enable the green button after that delay
            setTimeout(function() {
                document.getElementById("greenButton").disabled = false;
            }, 25000 - elapsedTime);
        }
    }
}

// Call this function when the page loads
enableGreenButtonAfterTimer();
