const canvas = document.getElementById('canvas');
const video = document.getElementById('vid');
const img = document.getElementById('pic');
const stop = document.getElementById('stop');
let playing = true,
	stream;
if (!'mediaDevices' in navigator ||!navigator.mediaDevices.getUserMedia) throw "navigator.mediaDevices.getUserMedia is not supported"
navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
	video.srcObject = stream;
	video.play();
}).catch(e => {
	console.error(e);
	document.body.append('You didnt allow the webpage to access your camera!')
});

function takepic(){
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext('2d').drawImage(video, 0, 0);
	img.src = canvas.toDataURL('image/webp');
}
function pause(){
	playing ? video.pause() : video.play();
	playing = !playing;
}