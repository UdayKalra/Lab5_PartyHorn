
var volumeImage = document.getElementById("volume-image");
var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var hornSound = document.getElementById("horn-sound");
var honkBtn = document.getElementById("honk-btn");
var partyHornForm = document.getElementById("party-horn-form");
var radioAirHorn = document.getElementById("radio-air-horn");
var radioPartyHorn = document.getElementById("radio-party-horn");
var radioCarHorn = document.getElementById("radio-car-horn");
var soundImage = document.getElementById("sound-image");

function updateVolume(e) {
    var newVolume = e.target.value;
    if(newVolume >= 67){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg"
    }
    else if(newVolume >= 34){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg"
    }
    else if(newVolume >= 1){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg"
    }
    else{
        volumeImage.src = "./assets/media/icons/volume-level-0.svg"
    }
    volumeSlider.value = newVolume;
    volumeNumber.value = newVolume;
    hornSound.volume = (newVolume*1.0)/100;

    if(newVolume == 0){
        honkBtn.disabled = true;
    } else{
        honkBtn.disabled = false;
    }
}

function playSound() {
    hornSound.play();
}


function updateSound() {
    if(radioAirHorn.checked){
        hornSound.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg";
    }
    if(radioCarHorn.checked){
        hornSound.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg";
    }
    if(radioPartyHorn.checked){
        hornSound.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg";
    }
}

partyHornForm.onsubmit = function(){return false;};
volumeNumber.addEventListener("input", updateVolume);
volumeSlider.addEventListener("change", updateVolume);
honkBtn.addEventListener("click", playSound);
radioAirHorn.addEventListener("click", updateSound);
radioCarHorn.addEventListener("click", updateSound);
radioPartyHorn.addEventListener("click", updateSound);