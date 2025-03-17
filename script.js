document.addEventListener("DOMContentLoaded", function () {
    let ringtone = new Audio("ringtone.mp3");
    let jumpscareAudio = new Audio("pigeon.mp3");
    let pigeonVideo = document.getElementById("pigeon-video");

    let callScreen = document.getElementById("call-screen");
    let videoScreen = document.getElementById("video-screen");
    let jumpscareScreen = document.getElementById("jumpscare-screen");

    let answerBtn = document.getElementById("answer");
    let declineBtn = document.getElementById("decline");

    // Play ringtone when the page loads
    ringtone.loop = true;
    ringtone.play();

    // Answer Call: Stop ringtone and show video (like you're in a call)
    answerBtn.addEventListener("click", function () {
        ringtone.pause();
        callScreen.classList.add("hidden");
        videoScreen.classList.remove("hidden");
        pigeonVideo.play();
    });

    // Decline Call: Stop ringtone and trigger jumpscare
    declineBtn.addEventListener("click", function () {
        ringtone.pause();
        callScreen.classList.add("hidden");
        jumpscareScreen.classList.remove("hidden");
        jumpscareAudio.play();
    });

    // When the video ends, return to the call screen
    pigeonVideo.addEventListener("ended", function () {
        videoScreen.classList.add("hidden");
        callScreen.classList.remove("hidden");
        ringtone.play();
    });
});
