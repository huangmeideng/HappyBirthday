document.body.onkeypress = function(){document.body.classList.toggle('liked')}

setInterval(function(){
    //document.body.onkeypress = function(){document.body.classList.toggle('liked')}
    document.body.classList.toggle('liked');
},1000);

function playMusic() {
    var audioButton = document.getElementById("loveAudio");
    if(audioButton.paused) {
        audioButton.play();
    } else{
        audioButton.pause();
    }
}