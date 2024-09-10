// Duration for the green button to be enabled (23 seconds)
const requiredTime = 23000; // 23 seconds in milliseconds

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in sessionStorage
    sessionStorage.setItem("redirectTime", new Date().getTime());
    sessionStorage.setItem("redButtonClicked", true);

    // Redirect to the traffic source URL in the same tab
    window.location.href = 'https://www.cpmrevenuegate.com/dzann9de?key=32458337c9d92176e5d67b172013fe82';
}

// Function to check if enough time has passed and enable the green button
function checkGreenButtonStatus() {
    const redirectTime = sessionStorage.getItem("redirectTime");
    const redButtonClicked = sessionStorage.getItem("redButtonClicked");
    const greenButton = document.getElementById("greenButton");

    if (!redButtonClicked) {
        greenButton.disabled = true;
        return;
    }

    if (redirectTime) {
        const elapsedTime = new Date().getTime() - parseInt(redirectTime, 10);

        if (elapsedTime >= requiredTime) {
            greenButton.disabled = false;
        } else {
            setTimeout(() => {
                greenButton.disabled = false;
            }, requiredTime - elapsedTime);
        }
    } else {
        setTimeout(() => {
            greenButton.disabled = false;
        }, requiredTime);
    }
}

// Event listener for the red button
document.getElementById("redButton").addEventListener("click", redirectAndStartTimer);

// Event listener for the green button
document.getElementById("greenButton").addEventListener("click", () => {
    const redButtonClicked = sessionStorage.getItem("redButtonClicked");
    if (!redButtonClicked) {
        window.location.href = 'error.html';
    } else {
        window.location.href = 'https://hotslfun.blogspot.com/2024/09/blog-post_33.html';
    }
});

// Check green button status on page load
window.onload = checkGreenButtonStatus;

// Refresh the page every 15 seconds
setInterval(function() {
    window.location.reload();
}, 15000); // 15000 milliseconds = 15 seconds
