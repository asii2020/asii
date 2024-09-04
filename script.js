// Traffic source URL (replace this with your actual traffic source link)
const trafficSourceUrl = "https://your-traffic-source-link.com";

// Function to redirect to the traffic source and start the 25-second timer
function redirectAndStartTimer() {
    // Save the current timestamp in localStorage
    localStorage.setItem("redirectTime", new Date().getTime());

    // Redirect to the traffic source
    window.location.href = trafficSourceUrl;
}

// Function to check if 25 seconds have passed and enable the green button
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

function showVideo() {
    document.getElementById("videoPlayer").style.display = "block";
    document.getElementById("greenButton").style.display = "none"; // Hide the green button once the video is playing
}
