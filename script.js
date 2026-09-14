


            const audio = document.getElementById("myLady");
            const playPauseBtn = document.getElementById("play-pause-btn");
            const volumeSlider = document.getElementById("volumeSlider");
            const audioProgress = document.getElementById("audioProgress");
            const click = document.getElementById("clicksound");
            const navbuttons = document.querySelectorAll("#homebtn, #aboutbtn, #worksbtn");   

    function byePop() {
        document.querySelector(".popupMes").style.display = "none";
}
    
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
                     
   

function showPage(page) {

    const pages = document.querySelectorAll(".content");

    pages.forEach(content => {
        content.style.display = "none";
    });

    document.getElementById(page).style.display = "block";
}



