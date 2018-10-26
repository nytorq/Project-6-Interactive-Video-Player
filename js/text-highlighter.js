// Javascript text highlighter
/*jshint esversion: 6 */

// CONST VARIABLES
const text = document.querySelectorAll('span');
const captions = document.getElementsByClassName('captions');

// lET VARIABLES
let video = document.getElementsByClassName('video');
let videoTime;

// EVENT LISTENERS

video[1].addEventListener('timeupdate', () => {
  videoTime = video[1].currentTime;
  currentTime();
});
// This puts a listener on the video element tied to time update.
// When video time updates it updates the videoTime variable and runs
// the currentTime function.

// FUNCTIONS
// const currentTime = () => {
//   let demo = document.getElementById('demo');
//   demo.innerHTML = videoTime;
// }

const currentTime = () => {
  for (let i=0; i<=captions.length; i++) {
    if (videoTime > captions[i].dataset.start && videoTime < captions[i].dataset.end) {
      captions[i].classList.add("highlighted");
    } else {
      captions[i].classList.remove("highlighted");
    }
  }
};

for (let i=0; i<=captions.length; i++) {
  captions[i].addEventListener('click', () => {
    let startTime = captions[i].dataset.start;
    video[1].currentTime = startTime;
  });
}

// This function simply takes the videoTime value and changes the span
// element below the video with whatever their current time is
//on the video.


/// v2
//
//
// video.on('timeupdate', currentTime);
//
// function currentTime() {
//   let demo = document.getElementById('demo');
//   demo.innerHTML = videoTime;
// }
//
// for (i=0; i<video.length; i++) {
//   if (video[i].currentTime > 0) {
//     const videoTarget = video[i];
//     return videoTarget
//   }
// }
// const text = document.querySelectorAll('p');
// const videos = document.querySelectorAll('video');
// const playButton = document.querySelectorAll('button');
// let video = videos[0];
// let currentTime = video.currentTime;
// const videoDuration = video.duration;
//
// playButton[0].addEventListener('click', () => {
//   let currentTime = video.currentTime;
//   const videoDuration = video.duration;
//   console.log(currentTime+ ' ' + videoDuration);
// });

// while (currentTime != videoDuration) {
//   currentTime = video.currentTime;
// }

<!--
// - Load all <p>s into 'text'
// - Load <video> into 'video'
// - Gotta figure out how to continously load new times into currentTime
// - S
// 2. Start a timer?
// 3. Read the .vtt file to see at what time a particular piece of text should be highlighted
// 4. When this happens, this file should take the string of text tied to the .vtt and look for a match in index.html
// 5. When a match is found within index.html, that particular string should be wrapped within a <span> with the "highlighted" class tied to it.
// 6. Repeat steps 3-5
// 7. When last the last caption's time runs out, the last matching string should have the "highlighted" span tag removed.
-->


////////////////////////////////////////////////////////////////////////////////


// PREVIOUS SCRATCHWORK --------------------------------------------------------
//
// const textBank = "Now that we've looked at the architecture of the internet, let's see how you might";
// const matching = '';
//
// // const textChanger = (text) => {
// //   const allParagraphs = document.querySelectorAll('p');
// //   console.log()
// // };
//
// const allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);


// Steps - v1
// 1. Initiate upon pressing play on Video
// 2. Start a timer?
// 3. Read the .vtt file to see at what time a particular piece of text should be highlighted
// 4. When this happens, this file should take the string of text tied to the .vtt and look for a match in index.html
// 5. When a match is found within index.html, that particular string should be wrapped within a <span> with the "highlighted" class tied to it.
// 6. Repeat steps 3-5
// 7. When last the last caption's time runs out, the last matching string should have the "highlighted" span tag removed.
