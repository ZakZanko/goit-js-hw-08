import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const play = new Player(iframe);
play.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}
setCurrentTime();
function setCurrentTime() {
  if (!localStorage.getItem(CURRENT_TIME)) {
    return;
  }
  play.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}
