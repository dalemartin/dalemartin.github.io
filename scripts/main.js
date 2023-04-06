const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/messy-coffee-bar.jpg") {
    myImage.setAttribute("src", "images/drip-brew.jpg");
  } else {
    myImage.setAttribute("src", "images/messy-coffee-bar.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Coffee is good, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Coffee is good, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
