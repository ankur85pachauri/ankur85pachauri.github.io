

let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src')
	if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox-icon2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myHeading2 = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    // myHeading.innerHTML = 'Mozilla is cool, ' + myName;
	myHeading.innerHTML = myHeading.innerHTML +', ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = myHeading.innerHTML +', ' + storedName;
}

myButton.onclick = function() {
  myHeading.innerHTML = myHeading2.innerHTML
  setUserName();
}