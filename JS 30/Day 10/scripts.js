/* Get our Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



/* functions */

function toggleVideo() {

	// const medthod = video.paused ? 'play' : 'pause';
	//video[method]();
	console.log(toggle);
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function updateButton() {
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;

}

function skip() {
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);	

}

/* Event Listeners */
toggle.addEventListener('click', toggleVideo);
video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));


