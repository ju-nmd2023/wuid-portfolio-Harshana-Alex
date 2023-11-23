const sendButton = document.getElementById("sendButton");

// contact screen js

let userName = document.getElementById("txtName");
let mobile = document.getElementById("txtMobile");
let email = document.getElementById("txtEmail");
let contactMessage = document.getElementById("txtMessage");

sendButton.addEventListener("click", validateForm);

function validateForm() {
  if (userName.value == "") {
    alert("Enter your name!");
    userName.focus();
  } else if (mobile.value == "") {
    alert("Enter your mobile number!");
    mobile.focus();
  } else if (email.value == "") {
    alert("Enter your email address!");
    email.focus();
  } else if (contactMessage.value == "") {
    alert("Enter your message!");
    contactMessage.focus();
  } else {
    alert("Your message sent successfully!");
  }
}

// single project screen

const playButton = document.getElementById("play-store-button");

let message = "Are you sure you need to download this app?";

playButton.addEventListener("click", showMessage);

function showMessage() {
  alert(message);
}
