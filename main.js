const canvas = document.getElementById('canvas');
const video = document.getElementById('vid');
const img = document.getElementById('pic');
navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
	video.srcObject = stream;
	video.play();
}).catch(console.error)
function takepic(){
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext('2d').drawImage(video, 0, 0);
	img.src = canvas.toDataURL('image/webp');
}