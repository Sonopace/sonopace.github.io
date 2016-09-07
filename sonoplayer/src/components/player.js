
import Howl from "https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.0/howler.js"

console.log('start now.....');
var sound = new Howl({
  src: ['/home/zotherstupidguy/Music/test/02.mp3', 'https://drive.google.com/uc?export=download&id=0B0B_DwYt_wqRTi1DMngyTHlEelU'],
  autoplay: false,
  html5: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});
console.log(sound.play);
