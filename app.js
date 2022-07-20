
import timer from "./timer.js";

const tempoDisplay=document.querySelector('.tempo');
const tempoText=document.querySelector('.tempo-text');
const decreaseTempoBtn=document.querySelector('.decrease-tempo');
const increaseTempoBtn=document.querySelector('.increase-tempo');
const tempoSlider=document.querySelector('.slider');
const startStopBtn=document.querySelector('.start-stop');
const subtractBeats=document.querySelector('.subtract-beats');
const addBeats=document.querySelector('.add-beats');
const measureCount=document.querySelector('.measure-count');

const click1=new Audio('audios/click1.mp3');
const click2=new Audio('audios/click2.mp3');

// click2.play();


let bpm=80;
let beatsPerBar=4;
let count= 0;
let tempoTextName='Medium';

decreaseTempoBtn.addEventListener('click',()=>{
    if(bpm<=20){ return};
    bpm--;
    updateMetronome();
});

increaseTempoBtn.addEventListener('click',()=>{
    if(bpm>=280){ return};
    bpm++;
    updateMetronome();
});

tempoSlider.addEventListener('input',()=>{
    bpm=tempoSlider.value;
    updateMetronome();
});

subtractBeats.addEventListener('click',()=>{
    if(beatsPerBar<=1){
        return;
    }
    beatsPerBar--;
    measureCount.textContent=beatsPerBar;
})
addBeats.addEventListener('click',()=>{
    if(beatsPerBar>=16){
        return;
    }
    beatsPerBar++;
    measureCount.textContent=beatsPerBar;
})

function updateMetronome(){
    tempoDisplay.textContent=bpm;
    tempoSlider.value=bpm;
    if (bpm <= 24) { tempoTextName = "Larghissimo" };
    if (bpm > 24 && bpm < 40) { tempoTextName = "Grave" };
    if (bpm > 40 && bpm < 60) { tempoTextName = "Lento" };
    if (bpm > 61 && bpm < 76) { tempoTextName = "Adagio" };
    if (bpm > 76 && bpm < 108) { tempoTextName = "Andante" };
    if (bpm > 108 && bpm < 120) { tempoTextName = "Moderato" };
    if (bpm > 120 && bpm < 168) { tempoTextName = "Allegro" };
    if (bpm > 168 && bpm <= 200) { tempoTextName = "Presto" };
    if (bpm > 200) { tempoTextName = "Prestissimo" };
    tempoText.textContent=tempoTextName;
}

function playClick(){
    if (count===beatsPerBar){
        count=0;
    }
    
    if(count===0){
        click2.play();
    }
    else{
        click2.play();
    }
    count++;
}

const metronome = timer(playClick, 60000/bpm, {immediate: true});

metronome.start();