/* Get our Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



/* functions */

function toggleVideo() {

	// const medthod = video.paused ? 'play' : 'pause';
	//video[method]();
	//console.log(toggle);
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
	/*console.log(this.dataset);
	console.log(this.dataset.skip);*/
	video.currentTime += parseFloat(this.dataset.skip);	

}

function handleRangeChange() {
	//console.log('it was changed');
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	console.log(e);

}

/* Event Listeners */
let mousedown = false;

toggle.addEventListener('click', toggleVideo);
video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeChange));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeChange));
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false)


