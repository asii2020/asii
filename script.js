// URL for the traffic source
const trafficSourceUrl = "https://www.cpmrevenuegate.com/wqwsm6vbp6?key=2f1830b01b03351e6358375eb547156a";

// Function to redirect to traffic source and start the 25-second timer
function redirectAndStartTimer() {
    // Store the current timestamp in localStorage
    localStorage.setItem("redirectTime", new Date().getTime());

    // Redirect to the traffic source URL
    window.location.href = trafficSourceUrl;
}

// Function to show the green button after 25 seconds
function showGreenButtonAfterTimer() {
    const redirectTime = localStorage.getItem("redirectTime");
    
    if (redirectTime) {
        const elapsedTime = new Date().getTime() - redirectTime;

        // If 25 seconds have already passed, show the green button immediately
        if (elapsedTime >= 25000) {
            document.getElementById("greenButton").style.display = "block";
        } else {
            // Otherwise, calculate the remaining time and set a timeout
            setTimeout(function() {
                document.getElementById("greenButton").style.display = "block";
            }, 25000 - elapsedTime);
        }
    }
}

// Call the function to check if the green button should be displayed
showGreenButtonAfterTimer();

function showVideo() {
    document.getElementById("videoPlayer").style.display = "block";
    document.getElementById("greenButton").style.display = "none";  // Hide the green button once the video is playing
}
