let btnClicks = 0;

function say(text) {
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.rate = 1;
	speechSynthesis.speak(utterance);
	const btn = document.getElementById('btn');
	utterance.addEventListener('end', () => {
		btn.disabled = false;
	});
	btn.disabled = true;
}

const btn_append = document.createElement('div');
document.body.appendChild(btn_append);
btn_append.innerHTML = '<button id="btn" class="btnn">Feel Happy</button>';
say('Hello there! Today, I am going to be calming down your stress and/or anything inside that you feel uncomfortable about yourself (aka anxiety). Click on the button to start');

//Opens WebCam, Privacy friendly
function webcamOpen() {
	navigator.getUserMedia(
		{video: {} },
		stream => video.srcObject = stream,
		err => console.error(err)
	)
}

btn.addEventListener('click', () => {
	btnClicks++;
	if(btnClicks === 1) {
		say("Let's start off with compliments");
		say('if people think that your voice sounds horrible, let them listen to my voice. I mean, I am just a robot, this is the best I can sound.');
		say('If you or other people think that your ugly look at this');
		let vid = document.createElement('div');
		vid.innerHTML = '<video id="video" width="720" height="560" autoplay muted></video>';
		document.body.appendChild(vid);
		webcamOpen();
		say('I bet you look amazing!');
		say('Please accept the permission for the WebCam. We promise we respect privacy.');
		say("Wow! Look at you! You look amazing! Let's just keep that there so you can admire your beauty.");
		say('Now time for stress relief excercises');

		say('Take slow deep breaths for 2-5 minutes, I will play some music. When you are done, click the Stop button');
		const audio = document.createElement('div');
		audio.innerHTML = `<audio id="audio"><source src="music.mp3" type="audio/mpeg"></audio>`;
		setTimeout(function() {
			document.body.appendChild(audio);
			document.getElementById('audio').play();
		}, 30000);
		const otherbtn = document.createElement('div');
		otherbtn.innerHTML = '<button class="btnn">Stop</button>';
		setTimeout(function() {
			document.body.appendChild(otherbtn);
		}, 35000);
		otherbtn.addEventListener('click', () => {
			document.getElementById('audio').pause();
			document.body.removeChild(otherbtn);
			say('I hope you have enjoyed this stress relief program. I am no expert, but always put this up when you are stressed. Thank you for listening! Bye!');
		});
	} else return;
});