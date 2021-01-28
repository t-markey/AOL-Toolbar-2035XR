// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'back.js'
  }); 
}

document.getElementById('start_button').addEventListener('click', hello);
