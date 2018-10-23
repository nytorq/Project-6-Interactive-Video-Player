// Javascript text highlighter



const text = document.querySelectorAll('p');
const videos = document.querySelectorAll('video');
const playButton = document.querySelectorAll('button');
let video = videos[0];
let currentTime = video.currentTime;
const videoDuration = video.duration;

playButton[0].addEventListener('click', () => {
  let currentTime = video.currentTime;
  const videoDuration = video.duration;
  console.log(currentTime+ ' ' + videoDuration);
});

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
