var  sound = new Audio(chrome.runtime.getURL("media/chime.wav"))


chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled...');
  // create alarm after extension is installed / upgraded
  // CHANGE TO ON CLICK LATER
  chrome.alarms.create('refresh', { periodInMinutes: 15 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm.name); // refresh
  helloWorld();
  sound.play();
});

function helloWorld() {
  console.log("Hello, world!");
}
