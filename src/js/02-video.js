import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const player = new Player(iframe);
const LOCALSTOR_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(LOCALSTOR_KEY) || 0);

function onPlay(data) {
    localStorage.setItem(LOCALSTOR_KEY, data.seconds);
}
