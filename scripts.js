// Duration for the green button to be enabled (23 seconds)
const requiredTime = 23000; // 23 seconds in milliseconds

// Function to handle the red button click
function redirectAndStartTimer() {
    // Store the current timestamp in sessionStorage
    sessionStorage.setItem("redirectTime", new Date().getTime());
    sessionStorage.setItem("redButtonClicked", true);

    // Open the URL in a new tab
    window.open('https://www.cpmrevenuegate.com/wqwsm6vbp6?key=2f1830b01b03351e6358375eb547156a', '_blank');
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

// Event listeners
document.getElementById("redButton").addEventListener("click", redirectAndStartTimer);
document.getElementById("greenButton").addEventListener("click", () => {
    const redButtonClicked = sessionStorage.getItem("redButtonClicked");
    if (!redButtonClicked) {
        window.location.href = 'error.html';
    } else {
        window.location.href = 'https://slfunzoneyt.blogspot.com/2024/09/aluthma-wela-video.html';
    }
});

// Check green button status on page load
window.onload = checkGreenButtonStatus;
