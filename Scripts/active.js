

var myVideo=document.getElementById("video");
 function playPause() {
 if (myVideo.paused)
 myVideo.play();
 else
 myVideo.pause();
 }
 function makeBig() {
 myVideo.width=750;
 }
 function makeNormal() {
 myVideo.width=460;
 }
