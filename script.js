


            const audio = document.getElementById("myLady");
            const playPauseBtn = document.getElementById("play-pause-btn");
            const volumeSlider = document.getElementById("volumeSlider");
            const audioProgress = document.getElementById("audioProgress");
            const click = document.getElementById("clicksound");
            const navbuttons = document.querySelectorAll("#homebtn, #aboutbtn, #worksbtn");                     
    

    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener("play", () => {
        playPauseBtn.textContent = "||"
    });

    audio.addEventListener("pause", () => {
    playPauseBtn.textContent = "▶";
});

     volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
    });

    audio.addEventListener("loadedmetadata", () => {
        audioProgress.max = audio.duration;
    });

    audio.addEventListener("timeupdate", () => {
        audioProgress.value = audio.currentTime;
    });

    audioProgress.addEventListener("input", () => {
        audio.currentTime = audioProgress.value;
    });

     navbuttons.forEach(navbutton => {
                navbutton.addEventListener("click",() => {
                    click.currentTime = 0;
                    click.play();
            });
        });
                     
    function showPopup(id) {

    const popups = document.querySelectorAll(".popup");

    popups.forEach(popup => {
        popup.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}


function closePopup(id) {

    document.getElementById(id).style.display = "none";
}

function showPage(page) {

    const pages = document.querySelectorAll(".content");

    pages.forEach(content => {
        content.style.display = "none";
    });

    document.getElementById(page).style.display = "block";
}



