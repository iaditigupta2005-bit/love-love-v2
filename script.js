const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const record = document.getElementById("record");
const tonearm = document.getElementById("tonearm");

const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

function formatTime(sec){
    const min = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${min}:${seconds < 10 ? "0" : ""}${seconds}`;
}

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

});

audio.addEventListener("play",()=>{

    playBtn.innerHTML="❚❚";

    record.classList.add("playing");

    tonearm.classList.add("playing");

});

audio.addEventListener("pause",()=>{

    playBtn.innerHTML="▶";

    record.classList.remove("playing");

    tonearm.classList.remove("playing");

});

audio.addEventListener("loadedmetadata",()=>{

    duration.textContent=formatTime(audio.duration);

});
audio.addEventListener("canplay", () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate",()=>{

    current.textContent=formatTime(audio.currentTime);

    const percent=(audio.currentTime/audio.duration)*100;

    progress.style.width=percent+"%";

});

audio.addEventListener("ended",()=>{

    playBtn.innerHTML="▶";

    record.classList.remove("playing");

    tonearm.classList.remove("playing");

    progress.style.width="0%";

    current.textContent="0:00";

});

document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector(".hero").animate(

        [

            {opacity:0,transform:"translateY(-20px)"},

            {opacity:1,transform:"translateY(0px)"}

        ],

        {

            duration:1200,

            fill:"forwards",

            easing:"ease-out"

        }

    );

});
