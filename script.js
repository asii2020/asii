function showGreenButton() {
    setTimeout(function() {
        document.getElementById('greenButton').style.display = 'inline-block';
    }, 25000); // 25 seconds delay
}

function showVideo() {
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('greenButton').style.display = 'none';
}
